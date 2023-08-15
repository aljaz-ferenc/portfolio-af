import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "stack",
        element: <Stack />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="app__background"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
