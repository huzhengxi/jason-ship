/**
 * Created by jason on 2022/5/3.
 */
import {FontAwesomeIconProps, FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {PropsWithChildren} from 'react';
import classNames from 'classnames';

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<PropsWithChildren<IconProps>> = (props) => {
  const {className, theme, ...restProps} = props;
  const classes = classNames('jason-icon', className, {
    [`icon-${theme}`]: theme
  });
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  );
};

export default Icon;
