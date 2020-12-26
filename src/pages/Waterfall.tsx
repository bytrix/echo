import React, { useEffect, useState } from "react"
import { styled } from "styletron-react"
import WaterfallCard from "../components/WaterfallCard"
import PostModal from "./Post/PostModal"
import axios from 'axios'

const Wrapper = styled('div', {
    width: '960px',
    margin: '20px auto',
    columnCount: 4
})

const Waterfall = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        console.log('axios')
        axios.get('http://47.114.170.3:10001/posts')
            .then(res => {
                console.log('res', res)
            })
    }, [])
    return (
        <Wrapper>
            <PostModal />
            <>{Array(10).fill(0).map(_ => (
                <WaterfallCard
                    key={_}
                    src='http://ci.xiaohongshu.com/1165d45c-26c7-5c9f-fa45-daf5026722a1?imageView2/2/w/1080/format/jpg'
                    title='厦门探店·颠倒博物馆'
                    loading={loading}
                    // onLoad={(e: any) => {
                    //     console.log('首页图片加载结束', e)
                    // }}
                />
            ))}</>
        </Wrapper>
    )
}

export default Waterfall