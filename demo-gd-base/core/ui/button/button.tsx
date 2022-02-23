import React from 'react';
import styles from './button.module.scss'

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  buttonText?: string,
  style?: 'styled'
};

export function Button({buttonText, style} : ButtonProps) {
  return ( <button className={styles.button} data-variation={style}>{buttonText}</button> )
}


