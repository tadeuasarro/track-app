import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Progress from '../Progress';

describe('Rendering component', () => {
  it('creates a Progress component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Progress />
          </Provider>
        </BrowserRouter>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Please wait...');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Progress />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
