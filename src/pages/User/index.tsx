import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { StatefulPopover } from 'baseui/popover';
import { StatefulTooltip } from 'baseui/tooltip'
import { StatefulMenu } from 'baseui/menu'
import React from 'react';
import { AiFillMessage, AiOutlineMore, AiOutlinePlus } from 'react-icons/ai';
import WaterfallCard, { WaterfallContainer } from '../../components/WaterfallCard';
import PostModal from '../Post/PostModal';
import BannerUserInfo from './BannerUserInfo';
import { motion } from 'framer-motion';

const Banner = styled('div', {
    padding: '22px',
    flex: 1,
    marginBottom: '50px',
    boxShadow: '0 20px 40px -20px rgba(0,0,0,0.08)'
})

// const EchoButton = styled(motion.button, {
//     backgroundColor: '#FFBB00',
//     border: 'none',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     // color: 'white',
//     outline: 'none',
// })

const EchoButton = (props: any) => {
    const { children } = props;
    return (
        <motion.button
            style={{
                // backgroundColor: '#FFBB00',
                backgroundColor: 'transparent',
                // backgroundColor: '#0091ff',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                // color: 'white',
                color: '#000',
                borderRadius: '2px',
                outline: 'none',
                lineHeight: '16px'
            }}
            whileTap={{
                scale: 0.96
            }}
            transition={{
                duration: 0.05
            }}
        >
            <span
                style={{
                    fontSize: '1rem'
                }}
            >
                {children}
            </span>
        </motion.button>
    )
}

const User = () => {
    return (
        <>
            <PostModal />
            <Banner>
                <BannerUserInfo />
                <div style={{ textAlign: 'right', marginTop: -35, float: 'right' }}>
                    <EchoButton>
                        <AiOutlinePlus style={{ marginRight: '6px', verticalAlign: '-0.15em' }} />
                        关注
                    </EchoButton>
                    {/* <Button size='compact' $style={{ width: '108px' }}>
                        <AiOutlinePlus style={{ marginRight: '6px' }} />
                        关注
                    </Button> */}
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
            <WaterfallContainer>
                <>
                {Array(10).fill(0).map(_ => (
                    <WaterfallCard
                        key={_}
                    />
                ))}
                </>
            </WaterfallContainer>
        </>
    )
}

export default User