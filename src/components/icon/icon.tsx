/**
 * Created by Tiger on 04/05/2022.
 */
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import React, {PropsWithChildren} from "react";
import classNames from "classnames";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<PropsWithChildren<IconProps>> = (props) => {
  const {theme, className, ...restProps} = props
  const classes = classNames('jason-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restProps}/>
  )
}

export default Icon
