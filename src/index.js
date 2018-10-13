import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './workshop/App';
// import App from './v1/App';
// import App from './v2/App';
// import App from './v3/App';
// import App from './v4/App';
// import App from './final/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
