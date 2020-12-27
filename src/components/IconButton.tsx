import React from 'react';
import { motion } from 'framer-motion';

const IconButton = (props: any) => {
    const { icon, style } = props;
    return (
        <motion.button
            style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                fontSize: 24,
                cursor: 'pointer',
                margin: '2px 4px',
                ...style
            }}
            whileTap={{
                scale: 0.9
            }}
            transition={{
                duration: 0.05
            }}
        >
            {icon}
        </motion.button>
    );
}

export default IconButton;