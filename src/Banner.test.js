import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Banner from './Banner';

it('renders welcome message', () => {
  const testTitle = 'Home and Away';

  Enzyme.configure({ adapter: new Adapter() });

  const banner = shallow(<Banner title={testTitle} />);
  const bannerTitle = <h1>{`${testTitle}`}</h1>;
  expect(banner.contains(bannerTitle)).toEqual(true);
});
