import {jsdom} from 'jsdom';
const doc = jsdom('<!doctype html><html><body></body></html>');
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

declare const global: any;

injectTapEventPlugin();

global.document = doc;
global.window = doc.defaultView;
global.navigator = {
  userAgent: 'node.js',
  plugins: []
};
