import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Error from '../Error';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Error error={['this is some error']} />
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('This is some error');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Error error={['this is some error']} />
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
