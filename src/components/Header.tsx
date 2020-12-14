import { Button } from 'baseui/button'
import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
    StyledNavigationList
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { StatefulPopover } from 'baseui/popover'
import { StatefulTooltip } from 'baseui/tooltip'
import React from 'react'
import { AiOutlineBell, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom'
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
                    <StatefulTooltip
                        content='社区'
                    >
                        <StyledLink href="/">
                            <AiOutlineHome size={24} />
                        </StyledLink>
                    </StatefulTooltip>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StatefulTooltip
                        content='发现'
                    >
                        <StyledLink href="/explore">
                            <BiSun size={24} />
                        </StyledLink>
                    </StatefulTooltip>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <StatefulPopover
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
                    >
                        <Button kind='tertiary'>
                            <AiOutlineBell />
                        </Button>
                    </StatefulPopover>
                    <Button kind='tertiary'>
                        <AiOutlineUser />
                    </Button>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Header