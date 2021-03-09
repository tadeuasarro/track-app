import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loading from '../Loading';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Loading />,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Please wait...');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Loading />,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
