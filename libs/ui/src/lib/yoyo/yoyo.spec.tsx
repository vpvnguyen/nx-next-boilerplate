import { render } from '@testing-library/react';

import Yoyo from './yoyo';

describe('Yoyo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Yoyo />);
    expect(baseElement).toBeTruthy();
  });
});
