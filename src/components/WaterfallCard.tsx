import { styled } from "baseui"
import { Button } from "baseui/button"
import { inject, observer } from "mobx-react"
import React from "react"
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai"
import { Link } from "react-router-dom"

const CardWrapper = styled('div', {
    width: '220px',
    display: 'inline-block',
    margin: '10px'
})

const CardImage = styled('img', {
    width: '100%',
    cursor: 'pointer'
})

const CardTitle = styled('a', {
    textAlign: 'left',
    padding: '8px',
    display: 'block',
    fontSize: '1.1rem',
    textDecoration: 'none',
    cursor: 'pointer'
})

const CardAction = styled('div', {
    padding: '4px 6px',
    display: 'flex'
})

const User = styled(Link, {
    display: 'inline-block',
    flex: 1,
    textAlign: 'left'
})
const UserAvatar = styled('img', () => {
    return {
        width: '24px',
        borderRadius: '100%',
        verticalAlign: 'bottom',
        marginRight: '6px'
    }
})
const Username = styled('div', {
    height: '24px',
    lineHeight: '24px',
    display: 'inline-block',
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.5)',
    ":hover": {
        color: 'rgba(0,0,0,0.7)',
    }
})

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

const WaterfallCard = (props: any) => {
    const { PostModalStore } = props.store
    return (
        <CardWrapper>
                <CardImage
                    src='http://ci.xiaohongshu.com/1165d45c-26c7-5c9f-fa45-daf5026722a1?imageView2/2/w/1080/format/jpg'
                    onClick={() => {
                        PostModalStore.open()
                        console.log('#postmodal', document.querySelector('#postmodal'))
                    }}
                />
            <CardTitle
                onClick={() => {
                    PostModalStore.open()
                }}
            >厦门探店·颠倒博物馆</CardTitle>
            <CardAction>
                <User to="/user">
                    <UserAvatar src="https://img.xiaohongshu.com/avatar/5f75d88ca8204500012c1379.jpg@240w_240h_90q_1e_1c_1x.jpg" />
                        <Username>甜菜</Username>
                </User>
                <CardActionButton>
                    <AiOutlineHeart size={16} />
                </CardActionButton>
                <CardActionButtonStat>12</CardActionButtonStat>
                <CardActionButton>
                    <AiOutlineMessage size={16} />
                </CardActionButton>
                <CardActionButtonStat>76</CardActionButtonStat>
            </CardAction>
        </CardWrapper>
    )
}

export default inject('store')(observer(WaterfallCard))