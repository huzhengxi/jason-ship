/**
 * Created by jason on 2022/4/24.
 */

import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Button, {ButtonProps} from './button';

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}

const disableProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}


describe('test Button component', () => {
  it('should render the correct default button', function () {
    render(<Button {...defaultProps}>Nice</Button>)
    const element = screen.queryByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toBe('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element as HTMLButtonElement)
    expect(defaultProps.onClick).toHaveBeenCalled()
  });

  it('should render the correct component based on different props', function () {
    render(<Button {...testProps}>Nice</Button>)
    const element = screen.queryByText('Nice');
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  });

  it('should render a link when btnType equals link and href is provided', function () {
    render(<Button btnType={'link} href={'http://fake'}>Link</Button>)
    const element = screen.queryByText('Link')
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toBe('A')
    expect(element).toHaveClass('btn btn-link')
  });

  it('should render disabled button when disabled set to true', function () {
    render(<Button {...disableProps}>Nice</Button>)
    const element = screen.queryByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  });
})
