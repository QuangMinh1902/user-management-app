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
import { MSWProvider } from '@mswjs/react';
import { server } from './mocks/server';
import App from './App';

// Start the MSW server
server.listen();

ReactDOM.render(
  <React.StrictMode>
    <MSWProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MSWProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Clean up the MSW server when the app is unmounted
if (process.env.NODE_ENV === 'development') {
  // This ensures that the server is closed when the app is unmounted
  // in development mode
  server.close();
}
