import HomeTabs from "../Tabs/HomeTabs/HomeTabs";
import IntroEmail from "../Intro/IntroEmail";
import { Button } from "@material-tailwind/react";

async function getData() {
  const getPost = await fetch("http://localhost:5000/api/posts/");
  const posts = await getPost.json();
  console.log(posts);
}

const HomePage = () => {
  return (
    <>
      <IntroEmail />
      <HomeTabs />
    </>
  );
};

export default HomePage;
