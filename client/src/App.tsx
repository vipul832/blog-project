import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./components/Layout/Layout";
import BlogAdmin from "./components/BlogAdmin/BlogAdmin";
import { Provider } from "react-redux";
import { store } from "./App/store/store";
import BlogContentPage from "./components/BlogContentPage/BlogContentPage";
import BlogEditorPage from "./components/BlogEditorPage/BlogEditorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="blogpanel" element={<BlogAdmin />} />
        <Route path="blog" element={<BlogContentPage />} />
        <Route path="blogeditor" element={<BlogEditorPage />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
