import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import WritePage from './pages/write/WritePage';
import MainPage from './pages/main/MainPage';
import RootLayer from './pages/components/RootLayer';
import BreakingNews from './pages/breakingnews/BreakingNews';
import BreakingNewsDetail from './pages/breakingnewsDetail/BreakingNewsDetail';
import AllCategories from './pages/guidelines/components/AllCategories';
import D1 from './pages/guidelinesDetail/components/D1';
import D2 from './pages/guidelinesDetail/components/D2';
import D3 from './pages/guidelinesDetail/components/D3';
import D4 from './pages/guidelinesDetail/components/D4';
import D5 from './pages/guidelinesDetail/components/D5';
import D6 from './pages/guidelinesDetail/components/D6';
import E1 from './pages/guidelinesDetail/components/E1';
import E2 from './pages/guidelinesDetail/components/E2';
import N1 from './pages/guidelinesDetail/components/N1';
import N2 from './pages/guidelinesDetail/components/N2';
import N3 from './pages/guidelinesDetail/components/N3';
import N4 from './pages/guidelinesDetail/components/N4';
import N5 from './pages/guidelinesDetail/components/N5';
import N6 from './pages/guidelinesDetail/components/N6';
import RootGuideLine from './pages/components/RootGuideLine';
import SearchForm from './pages/map/components/SearchForm';
import Login from './pages/login/Login'
import CreateUser from './pages/login/CreateUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayer />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/breakingnews',
        element: <BreakingNews />
      },
      {
        path: '/breakingnews/:BreakingNewsDetailId',
        element: <BreakingNewsDetail />
      },
      {
        path: '/writebreakingnews',
        element: <WritePage />
      },
      {
        path: '/map',
        element: <SearchForm />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/create',
        element: <CreateUser />
      },
      {
        path: 'guidelines',
        element: <RootGuideLine />,
        children: [
          {
            index: true, element: <AllCategories />
          },
          {
            path: 'D1', element: <D1 />
          },
          {
            path: 'D2', element: <D2 />
          },
          {
            path: 'D3', element: <D3 />
          },
          {
            path: 'D4', element: <D4 />
          },
          {
            path: 'D5', element: <D5 />
          },
          {
            path: 'D6', element: <D6 />
          },
          {
            path: 'E1', element: <E1 />
          },
          {
            path: 'E2', element: <E2 />
          },
          {
            path: 'N1', element: <N1 />
          },
          {
            path: 'N2', element: <N2 />
          },
          {
            path: 'N3', element: <N3 />
          },
          {
            path: 'N4', element: <N4 />
          },
          {
            path: 'N5', element: <N5 />
          },
          {
            path: 'N6', element: <N6 />
          },
        ]
      },

    ]


  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
