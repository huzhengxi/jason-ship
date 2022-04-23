/**
 * Created by jason on 2022/4/24.
 */

import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;
  const classes = classNames('btn', className,
    {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      'disabled': (btnType === ButtonType.Link) && disabled
    });
  if (btnType === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
};


export default Button;