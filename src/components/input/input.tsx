/**
 * Created by jason on 2022/5/4.
 */

import React, {ChangeEvent, forwardRef, InputHTMLAttributes, ReactElement} from 'react';
import Icon from '../icon/icon';
import classNames from 'classnames';
import {IconProp} from '@fortawesome/fontawesome-svg-core';


type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** 是否禁用 Input */
  disabled?: boolean;
  /** 设置 Input 大小，支持 lg 或者 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀，用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀，用于配置一些固定组合*/
  append?: string | ReactElement;
  /**
   * Input 数据变化回调
   * @param e 回调参数
   */
  onChange?: (e: ChangeEvent<HTMLElement>) => void;
}

/**
 * Input 输入框 通过鼠标或者键盘输入内容，是最基础的表单包装
 *
 * ~~~js
 * //这样引用
 * import {Input} from 'jasonship'
 * ~~~
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {disabled, icon, append, prepend, size, style, ...restProps} = props;
  const classes = classNames('jason-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-gruop-prepend': !!prepend
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div className={'jason-input-group-prepend'}>{prepend}</div>}
      {icon && <div className={'icon-wrapper'}><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input
        ref={ref}
        className={'jason-input-inner'}
        disabled={disabled}
        {...restProps}
      />
      {append && <div className={'jason-input-group-append'}>{append}</div>}
    </div>
  );
});

export default Input;
