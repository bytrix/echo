import React from "react"
import { styled } from "styletron-react"
import WaterfallCard from "../components/WaterfallCard"

const Wrapper = styled('div', {
    width: '1200px',
    margin: '20px auto',
})

const Waterfall = () => {
    return (
        <Wrapper>
            {Array(10).fill(0).map(_ => (
                <WaterfallCard key={_} />
            ))}
        </Wrapper>
    )
}

export default Waterfall