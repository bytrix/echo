import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { StatefulPopover } from 'baseui/popover';
import { StatefulTooltip } from 'baseui/tooltip'
import { StatefulMenu } from 'baseui/menu'
import React from 'react';
import { AiFillMessage, AiOutlineMore, AiOutlinePlus } from 'react-icons/ai';
import Container from '../../components/css-in-js/Container';
import WaterfallCard from '../../components/WaterfallCard';
import PostModal from '../Post/PostModal';
import BannerUserInfo from './BannerUserInfo';

const Banner = styled('div', {
    padding: '22px',
    flex: 1,
    marginBottom: '50px',
    boxShadow: '0 20px 40px -20px rgba(0,0,0,0.08)'
})

const User = () => {
    return (
        <>
            <PostModal />
            <Banner>
                <BannerUserInfo />
                <div style={{ textAlign: 'right', marginTop: -35, float: 'right' }}>
                    <Button size='compact' $style={{ width: '108px' }}>
                        <AiOutlinePlus style={{ marginRight: '6px' }} />
                        关注
                    </Button>
                    <StatefulTooltip
                        placement='top'
                        content='发消息'
                        children={(
                            <Button size='compact' kind='tertiary' $style={{ marginLeft: '12px' }}>
                                <AiFillMessage />
                            </Button>
                        )}
                    />
                    <StatefulPopover
                        placement='bottom'
                        triggerType='hover'
                        content={() => (
                            <StatefulMenu
                                items={[
                                    { label: '拉黑' },
                                    { label: '举报' },
                                ]}
                            />
                        )}
                    >
                        <Button size='compact' kind='tertiary' $style={{ marginLeft: '12px' }}>
                            <AiOutlineMore />
                        </Button>
                    </StatefulPopover>
                </div>
            </Banner>
            <Container>
                {Array(10).fill(0).map(_ => (
                    <WaterfallCard
                        key={_}
                        title='aaa'
                        src='https://ci.xiaohongshu.com/43c5d41d-199e-3e67-88b3-795babfc6ecc?imageView2/2/w/540/format/jpg'
                    />
                ))}
            </Container>
        </>
    )
}

export default User