import { createBrowserRouter } from 'react-router-dom';

import Timeline from './pages/Timeline/Timeline';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Timeline />
  },

  {
    path: '/tweet',
    element: <h1>Tweet</h1>
  }
])
