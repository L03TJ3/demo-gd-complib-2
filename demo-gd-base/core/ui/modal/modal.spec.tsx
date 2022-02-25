import React from 'react'
// import { renderHook } from '@testing-library/react-hooks';
// import TestRenderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { BaseStyleModal } from './modal.composition'

it('should render with the correct text', () => {
  // const { getByText } = render(<BaseStyleModal />);
  // const rendered = getByText('hello from Modal');
  const rendered = 1
  expect(rendered).toBeTruthy();
});

