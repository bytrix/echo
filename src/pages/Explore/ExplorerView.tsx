import React, { useEffect, useState } from "react"
import { styled } from "styletron-react"
import WaterfallCard from "../../components/WaterfallCard"
import PostModal from "../Post/PostModal"

const Wrapper = styled('div', {
    width: '960px',
    margin: '20px auto',
    columnCount: 4
})

const ExploreView = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <Wrapper>
            <PostModal />
            <>{Array(10).fill(0).map((_, i) => (
                <WaterfallCard
                    key={i}
                    post={{
                        title: '隔壁布丁兄弟太硬核了，恕我告辞！',
                        image: 'https://ci.xiaohongshu.com/43c5d41d-199e-3e67-88b3-795babfc6ecc?imageView2/2/w/540/format/jpg',
                        count: {
                            likes: 0
                        },
                        user: {
                            username: 'vico',
                            avatar: 'https://img.xiaohongshu.com/avatar/5de73ebfb831d700015b2aa7.jpg@240w_240h_90q_1e_1c_1x.jpg'
                        }
                    }}
                    loading={loading}
                />
            ))}</>
        </Wrapper>
    )
}

export default ExploreView