import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from '../app/page'

test('Page', async () => {
  render(<Page />)
  const saveChangesListItem = screen.getByTestId('save-changes')

  // Check the following text content is present:
  // Save and see your changes instantly.
  expect(saveChangesListItem.textContent).toBe('Save and see your changes instantly.')
})