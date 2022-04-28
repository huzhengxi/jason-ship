/**
 * Created by Tiger on 28/04/2022.
 */
import React, {PropsWithChildren, useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "./menu";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<PropsWithChildren<SubMenuProps>> = (props) => {
  const {index, title, children, className} = props
  const menuContext = useContext(MenuContext)
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<SubMenuProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {index: `${index}-${i}`})
      } else {
        console.error('Warning: Menu has a child which is not MenuItem component')
      }
    })
  }
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': index === menuContext.index
  })
  return <li key={index} className={classes}>
    <div className={'submenu-title'}>
      {title}
    </div>
    {renderChildren()}
  </li>
}

SubMenu.displayName = 'SubMenu'
export default SubMenu

