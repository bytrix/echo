import { inject, observer } from "mobx-react"
import React, { useEffect, useState } from "react"
import { styled } from "styletron-react"
import WaterfallCard from "../components/WaterfallCard"
import WaterfallCardSkeleton from "../components/WaterfallCard/WaterfallCardSkeleton"
import PostModal from "./Post/PostModal"

const Wrapper = styled('div', {
    width: '960px',
    margin: '20px auto',
    columnCount: 4
})

const Waterfall = (props: any) => {
    const { store } = props;
    const { PostStore } = store;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const _posts = await PostStore.getPosts();
            setPosts(_posts);
        })();
    }, [])
    if(posts?.length === 0) {
        return (
            <Wrapper>
                <>
                {Array(10).fill(0).map((item, i) => (
                    <WaterfallCardSkeleton key={i} />
                ))}
                </>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <PostModal />
                <>{posts.map((post: any) => (
                    <WaterfallCard
                        key={post.id}
                        post={post}
                    />
                ))}</>
            </Wrapper>
        )
    }
}

export default inject('store')(observer(Waterfall))