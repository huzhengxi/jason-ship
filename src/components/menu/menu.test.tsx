/**
 * Created by jason on 2022/4/28.
 */

import React from 'react';
import {MenuProps} from './menu';
import Menu from './index';
import MenuItem from './menuItem';
import {cleanup, fireEvent, render, RenderResult, screen} from '@testing-library/react';
import SubMenu from "./subMenu";

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
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>
  );
};


const createStyleFile = () => {
  const cssFile: string = `
    .jason-submenu {
      display: none;
    }
    .jason-submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.innerHTML = cssFile
  return style
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
const setup = () => {
  wrapper = render(generateMenu(testProps));
  wrapper.container.append(createStyleFile())
  menuElement = screen.getByTestId('test-menu');
  activeElement = screen.getByText('active');
  disabledElement = screen.getByText('disabled');
};
describe('test Menu and MenuItem component', () => {
  //每个case开始之前都会跑的一段代码
  beforeEach(setup);
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('jason-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toBe(5)
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('click item should change active and call the right callback', () => {
    const thirdItem = screen.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });

  it('should show dropdown items when hover on subMenu',  ()=> {
    console.log(wrapper.container)
    expect(wrapper.queryByText('drop1')).toBeVisible()

  });

  it('should render vertical mode when is set to vertical', () => {
    cleanup();
    render(generateMenu(verticalProps));
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });
});
