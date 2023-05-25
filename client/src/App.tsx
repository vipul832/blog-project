import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import LoginPage from "./components/LogIn/LoginPage";
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
