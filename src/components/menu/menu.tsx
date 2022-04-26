/**
 * Created by jason on 2022/4/26.
 */
import React, {createContext, PropsWithChildren} from 'react';
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<PropsWithChildren<MenuProps>> = (props) => {
  const {defaultIndex, className, mode, style, onSelect, children} = props;
  const classes = classNames('json-menu', className, {
    'menu-vertical': mode === 'vertical',
  })
  return <ul className={classes} style={style}>
    {children}
  </ul>;
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}


export default Menu;
