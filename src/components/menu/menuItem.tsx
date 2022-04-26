/**
 * Created by Tiger on 26/04/2022.
 */
import React, {PropsWithChildren} from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = (props) => {
  const {index, disabled, className, style, children} = props
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem
