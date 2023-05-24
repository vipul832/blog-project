import "./App.css";
import BlogCard from "./components/BlogCard/BlogCard";
import Header from "./components/Header/Header";
import IntroEmail from "./components/Intro/IntroEmail";
import HomeTabs from "./components/Tabs/HomeTabs";

function App() {
  return (
    <>
      <Header />
      <IntroEmail />
      <HomeTabs />
      <BlogCard />
    </>
  );
}

export default App;
