import React from 'react';

import './styles.scss'

interface Props {
    name: string;
    onClick: Function;
}

export default function Button({ name, onClick }: Props) {
    return (
        <div onClick={() => onClick()} data-testid="button" className="button-border">
            <span unselectable="off" className="button-name">{name}</span>
        </div>
    );
}