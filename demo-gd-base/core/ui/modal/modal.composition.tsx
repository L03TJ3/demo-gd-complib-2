import React from 'react';
import { render } from 'react-native-web'
import ModalPage, { StyledModal } from './modal';

export const BaseStyleModal = () => (
  // <StyledModal text="hello from Modal" />
  render(<StyledModal text="hello from Modal" />, document.getElementById('root'))
)

// could this be used to load the native & web versions seperately?
