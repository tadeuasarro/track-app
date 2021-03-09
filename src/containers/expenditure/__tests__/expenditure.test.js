import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import Expenditure from '../Expenditure';

const expenditure = {
  value: 200,
  description: 'This is some description',
  date: '2020/03/01',
  expense_id: 1,
  user_id: 1,
  id: 1,
};

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Expenditure expenditure={expenditure} />
        </Provider>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Description:');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <Expenditure expenditure={expenditure} />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
