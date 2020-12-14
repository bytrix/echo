import React from "react"
import { styled } from "styletron-react"
import WaterfallCard from "../components/WaterfallCard"
import PostModal from "./Post/PostModal"

const Wrapper = styled('div', {
    width: '960px',
    margin: '20px auto',
})

const Waterfall = () => {
    return (
        <Wrapper>
            <PostModal />
            <>{Array(10).fill(0).map(_ => (
                <WaterfallCard key={_} />
            ))}</>
        </Wrapper>
    )
}

export default Waterfall