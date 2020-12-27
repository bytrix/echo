import { motion } from "framer-motion";
import React from "react";

const CardActionButton = (props: any) => {
    const { defaultIcon, activeIcon, value, onClick, active, color = 'black' } = props;
    const icon = active ? activeIcon : defaultIcon;
    return (
        <motion.button
            style={{
                cursor: 'pointer',
                color: active ? color : 'rgba(0,0,0,0.3)',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent'
            }}
            onClick={onClick}
            whileTap={{
                scale: 0.95
            }}
        >
            {React.cloneElement(icon, {
                size: 18
            })}
            <span
                style={{
                    color: active ? color : 'rgba(0,0,0,0.3)',
                    lineHeight: '24px',
                    marginLeft: 2,
                    verticalAlign: '0.24em',
                    fontSize: '0.9rem'
                }}
            >{value}</span>
        </motion.button>
    )
}

export default CardActionButton;