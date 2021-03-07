import React from 'react'
import { render, screen } from '@testing-library/react';

import { ColumnOptions } from '../../../models/layout';
import MultiColumn from '.';

const testColumns: Array<ColumnOptions> = [
    {
        minWidth: 900,
        options: {
            2: {
                component: <div><h3>Left 2 Col</h3></div>,
                flex: 1,
            },
            3: {
                component: <div><h3>Left 3 Col</h3></div>,
                flex: 2,
            }
        }
    },
    {
        minWidth: 0,
        options: {
            1: {
                component: <div><h3 data-testid="main-col-text">Main 1 Col</h3></div>,
                flex: 1,
            },
            2: {
                component: <div><h3 data-testid="main-col-text">Main 2 Col</h3></div>,
                flex: 2,
            },
            3: {
                component: <div><h3>Main 3 Col</h3></div>,
                flex: 4,
            }
        }
    },
    {
        minWidth: 1100,
        options: {
            3: {
                component: <div><h3>Right 3 Col</h3></div>,
                flex: 1,
            }
        }
    }
];

test('Renders three columns when all minWidths less than window width', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 1200});
    render(<MultiColumn columns={testColumns} />);
    expect(screen.getByTestId('multi-col-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('multi-col').length).toBe(3)
});

test('Renders two columns when only two minWidths less than window width', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 1000});
    render(<MultiColumn columns={testColumns} />);
    expect(screen.getByTestId('multi-col-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('multi-col').length).toBe(2)
});

test('Renders one column when one minWidths less than window width', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 500});
    render(<MultiColumn columns={testColumns} />);
    expect(screen.getByTestId('multi-col-container')).toBeInTheDocument();
    expect(screen.getAllByTestId('multi-col').length).toBe(1)
});

test('When two colums displayed, choose main col option 2', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 1000});
    render(<MultiColumn columns={testColumns} />);
    expect(screen.getByTestId('multi-col-container')).toBeInTheDocument();
    expect(screen.getByTestId('main-col-text')).toHaveTextContent('Main 2 Col')
});

test('When one colum displayed, choose main col option 1', () => {
    Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 500});
    render(<MultiColumn columns={testColumns} />);
    expect(screen.getByTestId('multi-col-container')).toBeInTheDocument();
    expect(screen.getByTestId('main-col-text')).toHaveTextContent('Main 1 Col')
});