import React from "react"
import { styled } from "styletron-react"

const Container = styled('div', {
    display: 'flex',
    width: '970px',
    margin: '0 auto',
    marginTop: '20px'
})

const Post = styled('div', {
    flex: 1
})

const CommentBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

const SendBox = styled('textarea', {
    border: 'none',
    padding: '22px',
    fontSize: '1rem',
    flex: 1,
    outline: "none",
    "::placeholder": {
        color: 'rgba(0,0,0,0.25)',
    },
    resize: 'none'
})

const CommentListContainer = styled('div', {
    height: '438px',
    overflowY: 'scroll',
    "::-webkit-scrollbar": {
        width: '2px',
        backgroundColor: 'transparent',
    },
    "::-webkit-scrollbar-track": {
        backgroundColor: 'transparent',
    },
    "::-webkit-scrollbar-thumb": {
        backgroundColor: 'rgba(0,0,0,0.15)'
    },
})

const CommentList = styled('div', {
    width: '420px',
    padding: '18px',
    flex: 1
})

const Comment = styled('div', {
    display: 'flex'
})

const UserAvatar = styled('img', {
    width: '32px',
    height: '32px',
    marginRight: '12px'
})

const Username = styled('div', {
    fontWeight: 'bold'
})

const CommentBody = styled('div', {
    marginBottom: '22px',
    width: '100%',
})

const CommentText = styled('div', {
    // "::before": {
    //     content: '"2小时前"',
    //     fontSize: '0.8rem',
    //     color: '#ccc',
    //     display: 'block',
    //     margin: '6px 0px'
    // },
    padding: '10px'
})

const CommentReply = styled('div', {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.03)',
    marginTop: '12px',
})

const PostView = () => {
    return (
        <Container>
            <Post>
                <img alt='' style={{ width: '100%', height: 580, objectFit: 'cover', verticalAlign: 'bottom' }} src='http://ci.xiaohongshu.com/1165d45c-26c7-5c9f-fa45-daf5026722a1?imageView2/2/w/1080/format/jpg' />
            </Post>
            <CommentBox>
                <CommentListContainer>
                    <CommentList>
                        <Comment>
                            <UserAvatar src='https://img.xiaohongshu.com/avatar/5f75d88ca8204500012c1379.jpg@240w_240h_90q_1e_1c_1x.jpg' />
                            <CommentBody>
                                <Username>甜菜</Username>
                                <CommentText>今天去了颠倒博物馆，在美团上买的票，去了要换他们的袜子，不是一次性的建议里面穿一层自己的袜子哦。进去了就要把自己搞得特别夸张才拍的自然，我是蹦蹦跳跳了好久，好累呀，分享完毕。</CommentText>
                            </CommentBody>
                        </Comment>
                        <Comment>
                            <UserAvatar src='https://img.xiaohongshu.com/avatar/5dc5814a83964a00011710d0.jpg@80w_80h_90q_1e_1c_1x.jpg' />
                            <CommentBody>
                                <Username>牛奶又饿了</Username>
                                <CommentText>我第一反应是你倒立在车上，我还想说这姐妹上肢力量真强啊</CommentText>
                                <CommentReply>
                                    <CommentText>甜菜(作者) : 哎呀~我有超能力</CommentText>
                                </CommentReply>
                            </CommentBody>
                        </Comment>
                        <Comment>
                            <UserAvatar src='https://img.xiaohongshu.com/avatar/5fb7785300d54500018f2869.jpg@80w_80h_90q_1e_1c_1x.jpg' />
                            <CommentBody>
                                <Username>丁丁当当</Username>
                                <CommentText>力拔山兮气盖世</CommentText>
                                <CommentReply>
                                    <CommentText>广西老表 : 时不利兮骓不逝</CommentText>
                                    <CommentText>我还是范范 : 学霸楼层</CommentText>
                                    <CommentText>Katherine : 骓不逝兮可奈何</CommentText>
                                </CommentReply>
                            </CommentBody>
                        </Comment>
                    </CommentList>
                </CommentListContainer>
                <SendBox placeholder='第一神评就是你～' />
            </CommentBox>
        </Container>
    )
}

export default PostView