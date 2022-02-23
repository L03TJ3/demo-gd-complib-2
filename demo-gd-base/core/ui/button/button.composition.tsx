import React from 'react';
import { Button }  from './button';

export const BasicButton = () => (
    <Button buttonText="hello world!"></Button>
)

export const StyledButton = () => {
  return (
    <Button style='styled' buttonText='styled see?'></Button>
  )
}
