import React from 'react';

export const theme = {
    colors: {
        primary: '#ff69b4',    // Hot Pink
        softPink: '#ffb6c1',  // Soft Pink
        white: '#ffffff',
        nude: '#faf0e6',
        dark: '#333333',
    },
    animations: {
        base: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
        },
        hover: {
            scale: 1.02,
            transition: { type: 'spring', stiffness: 300 },
        },
        tap: {
            scale: 0.98,
        },
    },
};
