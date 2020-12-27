import { styled } from "styletron-react"
import Hoverable from "../../components/css-in-js/Hoverable"

const UserInfo = styled('div', {
    marginLeft: '50px'
})

const BtnWithCount = (props: any) => {
    const { children, count } = props;
    return (
        <div style={{
            // cursor: 'pointer',
            textAlign: 'center',
            display: 'inline-block',
            padding: '6px 18px',
        }}>
            <div style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.5)' }}>{children}</div>
            <div style={{ marginTop: 4, fontWeight: 'bold' }}>{count}</div>
        </div>
    )
}

const Username = styled('span', {
    fontSize: '1.8rem',
    fontWeight: 'bold'
})

const Description = styled('div', {
    color: 'rgba(0,0,0,0.5)',
    marginTop: '4px',
    marginBottom: '29px',
    // fontWeight: 'bold'
})

const Wrapper = styled('div', {
    display: 'flex',
    width: '395px',
    margin: '0 auto'
})

let BannerUserInfo = () => {
    return (
        <Wrapper>
            <Hoverable
                src='https://img.xiaohongshu.com/avatar/5f75d88ca8204500012c1379.jpg@240w_240h_90q_1e_1c_1x.jpg'
                size={150}
            />
            <UserInfo>
                <Username>甜菜</Username>
                <Description>自我介绍</Description>
                <BtnWithCount count={12}>关注</BtnWithCount>
                <BtnWithCount count={12}>粉丝</BtnWithCount>
                <BtnWithCount count={12}>点赞</BtnWithCount>
            </UserInfo>
        </Wrapper>
    )
}

export default BannerUserInfo