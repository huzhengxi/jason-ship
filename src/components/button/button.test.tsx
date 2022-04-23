/**
 * Created by jason on 2022/4/24.
 */

import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './button';

test('out first react test case', () => {
  render(<Button disabled>Nice</Button>);
  const element = screen.queryByText('Nice');
  expect(element).toBeDisabled();
});
