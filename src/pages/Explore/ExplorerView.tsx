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
            <>{Array(10).fill(0).map(_ => (
                <WaterfallCard
                    key={_}
                    src='https://ci.xiaohongshu.com/43c5d41d-199e-3e67-88b3-795babfc6ecc?imageView2/2/w/540/format/jpg'
                    title='隔壁布丁兄弟太硬核了，恕我告辞！'
                    loading={loading}
                />
            ))}</>
        </Wrapper>
    )
}

export default ExploreView