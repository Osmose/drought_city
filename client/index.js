import React from 'react';
import {render} from 'react-dom';

import configureStore from './store';
import Root from './root';

const store = configureStore();
const rootElement = document.getElementById('root');

render(<Root store={store}/>, rootElement);
