import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {routes} from './routes';
import { configureStore } from './store/configureStore';

injectTapEventPlugin();

const store = configureStore.configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <Router history={history} routes={routes} />
            </div>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
