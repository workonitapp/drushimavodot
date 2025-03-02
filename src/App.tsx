import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import router from './routes';

const App = () => {
  // useEffect(() => {

  //   api.jobs.getJobs()
  // }, [])
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
