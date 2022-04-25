/**
 * Created by jason on 2022/4/26.
 */
import React, {PropsWithChildren} from 'react';

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<PropsWithChildren<MenuProps>> = (props) => {
  const {defaultIndex, className, mode, style, onSelect, children} = props;
  return <>{children}</>;
};


export default Menu;
