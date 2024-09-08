import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/App-layout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import Joblisting from './pages/Job-listing'
import JobPage from './pages/Job'
import PostJob from './pages/post-job'
import SavedJob from './pages/Saved-job'
import MyJobs from './pages/My-jobs'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>,
      },
      {
        path:"/onboarding",
       
        element:(
          <ProtectedRoute >
            <Onboarding/>
            </ProtectedRoute>
        )
      },
      {
        path:"/jobs",
        element:(
          <ProtectedRoute >
            <Joblisting/>
            </ProtectedRoute>
        )
      },

      {
        path:"/job/:id",
        element:(
          <ProtectedRoute >
            <JobPage/>
            </ProtectedRoute>
        )
      },

      {
        path:"/post-job",
        element:(
          <ProtectedRoute >
            <PostJob/>
            </ProtectedRoute>
        )
      },

      {
        path:"/saved-job",
        element:(
          <ProtectedRoute >
            <SavedJob/>
            </ProtectedRoute>
        )
      },
      
      {
        path:"/my-job",
        element:(
          <ProtectedRoute >
            <MyJobs/>
            </ProtectedRoute>
        )
      
      },
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <RouterProvider router={router}/>
    </ThemeProvider>
   
  );
  
}

export default App
