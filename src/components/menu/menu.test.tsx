/**
 * Created by jason on 2022/4/28.
 */

import React from 'react';
import {MenuProps} from './menu';
import Menu from './index';
import MenuItem from './menuItem';
import {cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import menuItem from './menuItem';
import {exec} from 'child_process';
import {clear} from '@testing-library/user-event/dist/clear';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
};

const verticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
    </Menu>
  );
};

let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
const setup = () => {
  render(generateMenu(testProps));
  menuElement = screen.getByTestId('test-menu');
  activeElement = screen.getByText('active');
  disabledElement = screen.getByText('disabled');
};
describe('test Menu and MenuItem component', () => {
  //每个case开始之前都会跑的一段代码
  beforeEach(() => {
    setup();
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('jason-menu test');
    // eslint-disable-next-line testing-library/no-node-access
    expect(menuElement.getElementsByTagName<'li'>('li').length).toBe(3);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('click item should change active and call the right callback', () => {
    const thirdItem = screen.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });

  it('should render vertical mode when is set to vertical', () => {
    cleanup();
    render(generateMenu(verticalProps));
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });
});
