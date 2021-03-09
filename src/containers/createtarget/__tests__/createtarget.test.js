import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import CreateTarget from '../CreateTarget';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <CreateTarget />
        </Provider>
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Set a new target');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <CreateTarget />
      </Provider>
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
