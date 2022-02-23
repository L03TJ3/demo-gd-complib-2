import React from 'react'
import { render } from '@testing-library/react'
import { BasicButton, StyledButton } from './button.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})

it('should render with styling and the text', () => {
  const { getByText } = render(<StyledButton />)
  const rendered = getByText('styled see?')
  expect(rendered).toBeTruthy()
})
