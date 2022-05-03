/**
 * Created by Tiger on 28/04/2022.
 */
import React, {PropsWithChildren, ReactNode, useContext, useState} from "react";
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
  const openSubMenus = menuContext.defaultOpenSubmenus as Array<string>
  const isOpened = (index && menuContext.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = useState(isOpened);

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': index === menuContext.index,
    'is-opened': menuOpen,
    'is-vertical': menuContext.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    console.log('handle click')
    e.preventDefault()
    setMenuOpen(oldMenuOpen => !oldMenuOpen)
  }
  let timer: NodeJS.Timeout;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents = menuContext.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = menuContext.mode === 'vertical' ? {} : {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  }

  const renderChildren = () => {
    const subMenuClasses = classNames('jason-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<SubMenuProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {index: `${index}-${i}`})
      } else {
        console.error('Warning: Menu has a child which is not MenuItem component')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }


  return <li key={index} className={classes} {...hoverEvents}>
    <div className={'submenu-title'} {...clickEvents}>
      {title}
    </div>
    {renderChildren()}
  </li>
}

SubMenu.displayName = 'SubMenu'
export default SubMenu

