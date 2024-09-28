import NxWelcome from './nx-welcome';
import { Lib1 } from '@nx-playwright-demo/lib1';

import { Route, Routes, Link } from 'react-router-dom';

import { Lib2 } from '@nx-playwright-demo/lib2';

export function App() {
  return (
    <div>
      <NxWelcome title="app2" />
      <br />
      <hr />
      <br />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lib1">Lib1</Link>
          </li>
          <li>
            <Link to="/lib2">Lib2-new</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/lib2" element={<Lib2 />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
