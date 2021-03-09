import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
