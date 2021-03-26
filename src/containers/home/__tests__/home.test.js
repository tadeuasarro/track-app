import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Home from '../Home';

describe('Rendering component', () => {
  it('creates a Home component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
          ,
        </BrowserRouter>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Target');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
        ,
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
