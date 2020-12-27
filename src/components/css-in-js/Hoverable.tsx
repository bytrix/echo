import { styled } from "styletron-react"

const Hoverable = styled('div', (props: any) => {
    const { src, size = 220 } = props
    return {
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer',
        backgroundImage: `url(${src})`,
        borderRadius: '6px',
        backgroundSize: `${size}px`,
        backgroundRepeat: 'no-repeat',
        "::after": {
            content: '""',
            width: `${size}px`,
            height: `${size}px`,
            position: 'absolute',
            backgroundColor: '#000000',
            opacity: 0,
            transition: '0.2s',
        },
        ":hover": {
            "::after": {
                opacity: 0.1
            }
        }
    }
})

export default Hoverable