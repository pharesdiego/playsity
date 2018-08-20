import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

global.mount = mount;
global.shallow = shallow;
global.render = render;
global.toJSON = toJSON;