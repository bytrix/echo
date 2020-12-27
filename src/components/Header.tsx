import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
    StyledNavigationList
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import React from 'react'
import { AiOutlineBell, AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import IconButton from './IconButton'
import Logo from './Logo'

const Header = () => {
    return (
        <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem>
                    <Link to='/'>
                        <Logo style={{ cursor: 'pointer', marginLeft: 60 }} />
                    </Link>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center}>
                <StyledNavigationItem>
                    <StyledLink href="/">
                        <AiOutlineHome size={24} />
                        {/* <AiFillHome size={24} /> */}
                    </StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="/explore">
                        <BiSun size={24} />
                    </StyledLink>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <IconButton
                        icon={<AiOutlinePlus />}
                    />
                    {/* <StatefulPopover
                        placement='bottomRight'
                        content={() => (
                            <StatefulPopover>
                                <div style={{
                                    backgroundColor: '#fff',
                                    padding: 12,
                                    width: 200
                                }}>消息</div>
                            </StatefulPopover>
                        )}
                    > */}
                        <IconButton
                            style={{
                                marginRight: 6
                            }}
                            icon={<AiOutlineBell />}
                        />
                    {/* </StatefulPopover> */}
                    <IconButton
                        style={{
                            border: '1px solid',
                            borderRadius: '100%',
                            padding: 0,
                            width: 28,
                            height: 28,
                            marginRight: 12,
                            verticalAlign: '0.13em'
                        }}
                        icon={<AiOutlineUser style={{ verticalAlign: '-0.11em' }} />}
                    />
                    {/* <Button kind='tertiary'>
                        <AiOutlineUser />
                    </Button> */}
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Header