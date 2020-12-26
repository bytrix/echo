import { styled } from "baseui"
import { inject, observer } from "mobx-react"
import React, { BaseSyntheticEvent } from "react"
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai"
import WaterfallCardSkeleton from "./WaterfallCardSkeleton"
import { CardAction, User } from './styles'
import CardActionButton, { CardActionButtonStat } from "./CardActionButton"
import { Link } from "react-router-dom"

const CardWrapper = styled('div', {
    width: '220px',
    padding: '10px',
    breakInside: 'avoid'
})

export const WaterfallContainer = styled('div', {
    width: '960px',
    margin: '20px auto',
    columnCount: 4
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

const UserAvatar = styled('img', () => {
    return {
        width: '24px',
        borderRadius: '100%',
        verticalAlign: 'bottom',
        marginRight: '6px'
    }
})
const Username = styled(Link, {
    height: '24px',
    lineHeight: '24px',
    display: 'inline-block',
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.5)',
    ":hover": {
        color: 'rgba(0,0,0,0.7)',
    }
})

type WaterfallCardProps = {
    src: string,
    title: string,
    store?: any,
    loading?: boolean,
    onLoad?: Function,
}

const WaterfallCard = (props: WaterfallCardProps) => {
    const { src, title, store, loading, onLoad } = props
    const { PostModalStore } = store
    if(loading) {
        return (
            <CardWrapper>
                <WaterfallCardSkeleton />
            </CardWrapper>
        )
    } else {
        return (
            <CardWrapper>
                <CardImage
                    src={src}
                    onClick={() => {
                        PostModalStore.open()
                    }}
                    onLoad={(e: BaseSyntheticEvent) => {
                        onLoad?.(e)
                    }}
                />
                <CardTitle
                    onClick={() => {
                        PostModalStore.open()
                    }}
                >{title}</CardTitle>
                <CardAction>
                    <User>
                        <Link to='/user'>
                            <UserAvatar
                                src="https://img.xiaohongshu.com/avatar/5f75d88ca8204500012c1379.jpg@240w_240h_90q_1e_1c_1x.jpg"
                                />
                        </Link>
                        <Username to='/user'>甜菜</Username>
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
}

export default inject('store')(observer(WaterfallCard))