/**
 * Created by Tiger on 26/04/2022.
 */
import React, {PropsWithChildren, useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = (props) => {
  const {index, disabled, className, style, children} = props;
  const menuContext = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === menuContext.index
  });
  const handleClick = () => {
    if (!disabled) {
      menuContext.onSelect?.(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
