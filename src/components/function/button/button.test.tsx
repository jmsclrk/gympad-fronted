import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

import * as module from './button.test'

export function testFunc(): boolean {
    return true
}

test('Function passed as prop is called on button click', () => {
    const spy = jest.spyOn(module, 'testFunc')
    render(<Button name="Test" onClick={module.testFunc} />)
    screen.getByTestId('button').click()
    expect(spy).toHaveBeenCalledTimes(1)
})