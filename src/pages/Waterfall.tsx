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
    const [loading, setLoading] = useState(true);
    const { store } = props;
    const { PostStore } = store;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const _posts = await PostStore.getPosts();
            setPosts(_posts);
            setLoading(false);
        })();
        
        // axios.get('/posts')
        //     .then(res => {
        //         console.log('res', res)
        //     })
    }, [])
    if(posts.length === 0) {
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
                        // src='http://ci.xiaohongshu.com/1165d45c-26c7-5c9f-fa45-daf5026722a1?imageView2/2/w/1080/format/jpg'
                        src={post.mainImg}
                        // title='厦门探店·颠倒博物馆'
                        title={post.title}
                        loading={loading}
                        // onLoad={(e: any) => {
                        //     console.log('首页图片加载结束', e)
                        //     setLoading(false)
                        // }}
                    />
                ))}</>
            </Wrapper>
        )
    }
}

export default inject('store')(observer(Waterfall))