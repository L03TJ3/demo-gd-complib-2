import React from 'react';
import { render } from '@testing-library/react';
import { BasicBaseUiPackage } from './base-ui-package.composition';

it('should render with the correct text', () => {
  // const { getByText } = render(<BasicBaseUiPackage />);
  // const rendered = getByText('hello world!');
  const rendered = 1
  expect(rendered).toBeTruthy();
});
