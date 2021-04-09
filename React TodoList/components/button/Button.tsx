import React from 'react';

import { IButtonProps } from './types'
import './style.css'

export class Button extends React.Component<IButtonProps> {
  render() {
    const {
      className = '',
      color = 'primary',
      children,
      ...restProps
    } = this.props;
    const buttonClassName = `ui-button ui-button-color-${color} ${className}`;
    return (
      <button
        className={buttonClassName} {...restProps}
      >
        {children}
      </button>
    )
  }
}