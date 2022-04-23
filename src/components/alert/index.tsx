/**
 * Created by jason on 2022/4/23.
 */
import React, {useState} from 'react';
import classNames from 'classnames';
import {Simulate} from 'react-dom/test-utils';
import timeUpdate = Simulate.timeUpdate;

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType,
  onClose?: () => void;
  closeable?: boolean
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);
  const {
    title,
    description,
    type,
    onClose,
    closeable
  } = props;
  const classes = classNames('json-alert', {
    [`json-alert-${type}`]: type
  });

  const titleClass = classNames('json-alert-title', {
    'bold-title': description
  });
  const handleClose = (e: React.MouseEvent) => {
    onClose?.();
    setHide(true);
  };

  return <p>

  </p>;
};
