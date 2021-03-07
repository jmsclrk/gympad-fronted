import React from 'react';

interface Props {
    children: any;
    max?: number | string;
    min?: number | string;
}

export default function WidthControlDiv({ children, max='100%', min=0 }: Props) {
    const styles = { 
        minWidth: min,
        maxWidth: max,
        width: '100%',
        alignSelf: 'center',
        display: 'inline-block',
    };

    return (
        <div data-testid="width-control" style={styles}>
            {children}
        </div>
    );
}