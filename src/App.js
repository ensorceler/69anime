import HomePage from "./pages/home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import IndexPage from "./pages";
import ErrorPage from "./pages/404";
import GlobalStyle from "./styles/globalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
