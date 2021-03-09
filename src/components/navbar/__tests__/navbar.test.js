import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Navbar />
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Personal Expenses');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Navbar />
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
