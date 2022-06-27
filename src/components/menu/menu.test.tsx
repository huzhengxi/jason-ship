/**
 * Created by jason on 2022/4/28.
 */

import React from 'react';
import {MenuProps} from './menu';
import Menu from './index';
import MenuItem from './menuItem';
import {fireEvent, render, RenderResult, screen, waitFor} from '@testing-library/react';
import SubMenu from "./subMenu";

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
};

const verticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubmenus: ['4']
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

  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible();
    const dropdownElement = screen.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await waitFor(() => {
      expect(screen.getByText('drop1')).toBeVisible()
    })

    fireEvent.click(screen.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')

    fireEvent.mouseLeave(dropdownElement)
    await waitFor(() => {
      expect(screen.getByText('drop1')).not.toBeVisible()
    })
  });

});


let wrapperVerticalMenu: RenderResult
describe('test Menu and SubMenu component in vertical mode', () => {
  beforeEach(() => {
    wrapperVerticalMenu = render(generateMenu(verticalProps))
    wrapperVerticalMenu.container.append(createStyleFile())
  })
  it('should render vertical mode when is set to vertical', () => {
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  });

  it('should show dropdown item when click subMenu for vertical mode', function () {
    const dropdownItem = wrapperVerticalMenu.getByText('drop1')
    expect(dropdownItem).not.toBeVisible()
    fireEvent.click(wrapper.getByText('dropdown'))
    expect(dropdownItem).toBeVisible()
  });
  it('should show subMenu when defaultOpenSubMenus contains SubMenu index', function () {
    expect(wrapperVerticalMenu.getByText('opened1')).toBeVisible()
  });
})
