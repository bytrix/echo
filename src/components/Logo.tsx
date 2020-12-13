import React from "react"

const Logo = (props: { style: React.CSSProperties | undefined }) => {
    return (
        <svg width="98px" height="27px" viewBox="0 0 98 27" version="1.1" style={props.style}>
            <title>小纸团</title>
            <g id="页面-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="DFWaWaSC-W5, Wawati SC" fontSize="35" fontWeight="normal">
                <text id="小纸团" fill="#000000" fillRule="nonzero">
                    <tspan x="-4" y="24">小纸团</tspan>
                </text>
            </g>
        </svg>
    )
}

export default Logo
