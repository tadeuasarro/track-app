import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Home from '../Home';

describe('Rendering component', () => {
  it('creates a Home component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Please wait...');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
