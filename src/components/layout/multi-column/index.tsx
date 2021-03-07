import React, { useEffect, useState } from 'react';
import { ColumnOptions } from '../../../models/layout';

interface Props {
    columns: Array<ColumnOptions>;
}

export default function MultiColumn({ columns }: Props) {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const renderColumns = columns.filter(c => c.minWidth <= screenWidth).map((c, i, a) => {
        return (
            <div key={i.toString()} data-testid="multi-col" style={{ flex: c.options[a.length].flex }}>
                {c.options[a.length].component}
            </div>
        )
    })

    return (
        <div data-testid="multi-col-container" style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            {renderColumns}
        </div>
    );
}