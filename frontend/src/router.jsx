import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Insights from "./pages/Insights";
import ScanUpload from "./pages/ScanUpload";
import Result from "./pages/Result";
import Suggestions from "./pages/Suggestions";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/suggestions",
        element: <Suggestions />,
      },
      {
        path: "/upload",
        element: <ScanUpload />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
