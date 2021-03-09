import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Measures from '../Measures';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Measures />
          </Provider>
        </BrowserRouter>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Create expense');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Measures />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
