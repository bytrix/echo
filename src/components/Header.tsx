import { Button, KIND, SHAPE } from 'baseui/button'
import {
    ALIGN,
    HeaderNavigation,
    StyledNavigationItem,
    StyledNavigationList
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import React from 'react'
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NavigationButton = (props: { children: React.ReactNode }) => (
    <Button
        shape={SHAPE.circle}
        kind={KIND.minimal}
    >{props.children}</Button>
)

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
                    <StyledLink href="/">社区</StyledLink>
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <StyledLink href="/">视频</StyledLink>
                </StyledNavigationItem>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem>
                    <NavigationButton>
                        <AiOutlineBell />
                    </NavigationButton>
                    <NavigationButton>
                        <AiOutlineUser />
                    </NavigationButton>
                </StyledNavigationItem>
            </StyledNavigationList>
        </HeaderNavigation>
    )
}

export default Header