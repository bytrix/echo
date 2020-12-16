import { Button } from "baseui/button"
import React from "react"
import { styled } from "styletron-react"

const CardActionButton = (props: { children: React.ReactNode }) => (
    <Button
        shape="circle"
        kind="minimal"
        size="mini"
    >{props.children}</Button>
)

const CardActionButtonStat = styled('span', {
    height: '28px',
    lineHeight: '28px',
    marginRight: '6px'
})


export default CardActionButton
export {
    CardActionButtonStat
}