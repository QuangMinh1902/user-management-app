// ------------------origin---------------

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// reportWebVitals();

// ----------------------mocks service ------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { MSWProvider } from '@mswjs/react';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/server')
  await worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    {/* <MSWProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </MSWProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

