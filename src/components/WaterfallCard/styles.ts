// import { Link } from "react-router-dom"
import { styled } from "styletron-react"

const CardAction = styled('div', {
    padding: '4px 6px',
    display: 'flex',
})

const User = styled('div', {
    display: 'inline-block',
    flex: 1,
    textAlign: 'left',
    marginTop: '2px'
})

export {
    CardAction,
    User
}