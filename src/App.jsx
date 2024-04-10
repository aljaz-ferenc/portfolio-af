import "./App.scss";
import RootLayout from "./layouts/RootLayout";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Navigate to='/about'/>,
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
    <div className="app" style={{height:'100%'}}>
      <div className="app__background"></div>
      {/* 
      <RouterProvider router={router} /> */}
      <div style={{display:'flex', flexDirection:'column', gap:'1rem', alignItems:'center',  position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
      <h1>I have moved!</h1>
      <p>The new version of my page is available here:</p>
      <a style={{color: 'white', textDecoration:'none', backgroundColor:'steelblue', padding:'0.3rem 1rem', borderRadius:'10px'}} href="https://portfolio-v3-nine-lac.vercel.app/">Portfolio v3.0</a>
      </div>
    </div>
  );
}

export default App;
