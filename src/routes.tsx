import { createBrowserRouter } from 'react-router-dom';

import Timeline from './pages/Timeline/Timeline';
import Status from './pages/Status/Status';
import Default from './layouts/Defaut';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },

      {
        path: '/tweet',
        element: <Status />
      }
    ]
  }
])
