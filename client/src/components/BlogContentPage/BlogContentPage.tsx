import { Typography, Avatar } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { PostsGetData } from "../../utils/types";

export default function BlogContentPage() {
  const { state } = useLocation();
  const blogInfo = state as PostsGetData;
  return (
    <div className="min-h-screen lg:mx-20 mx-6">
      <div className="mt-10">
        <div className="flex justify-center mt-6 flex-col">
          <Typography variant={"h2"}>{blogInfo.title}</Typography>
          <img
            src={blogInfo.thumbnail}
            alt=""
            className="lg:w-[70%] w-full rounded-2xl mt-6 bg-cover h-[400px] object-cover"
          />
          <div className="md:flex justify-between block mt-3 mb-6 text-justify leading-8">
            <div
              className="lg:w-[70%] w-full content-area"
              dangerouslySetInnerHTML={{ __html: blogInfo.content }}
            >
              {/* Thinking about building a career as a user experience (UX)
              designer? Great idea! UX design as an industry is growing faster
              than ever with an increasing demand for user-friendly products and
              services. If you're just getting started in UX design or a senior
              designer looking for a change, you're probably wondering about the
              average total compensation for UX designers across the globe.
              <br />
              <br /> Look no further — here’s your complete, up-to-date UX
              designer salary guide. As expected, calculating the income of a UX
              designer depends on multiple factors, such as UX and UI design
              skills, as well as prior experience in the field. In this guide,
              we’ll cover UX design, product design, and UI designers’ average
              salaries for 2022 and the general characteristics of each job
              position that greatly affect the average salary. But first, how
              much do UX designers earn?
              <br />
              <br />
              <Typography variant={"h3"} className="my-2">
                UX designer average salary
              </Typography>
              In 2022, the UX designer role reached the 24th spot on Glassdoor’s
              list of 50 Best jobs in America, making it one of the most popular
              jobs in the digital design industry. According to LinkedIn, UX
              design is one of the top five in-demand skills. UI/UX and user
              research skills are incredibly useful tools that are applicable
              across many disciplines, not just UX design!
              <br />
              <br /> We can take Glassdoor’s statistics as an example to
              determine the standard income for UX designers based in the United
              States — approximately $98,327 (including bonuses, tips, shared
              profits, etc.). */}
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-start">
                <Avatar
                  size="md"
                  variant="circular"
                  alt="natali craig"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="border-2 border-white hover:z-10"
                />
                <div className="ms-3">
                  <Typography className="text-sm font-bold text-black">
                    Olivia Rhye
                  </Typography>
                  <Typography className="text-sm">20 Jan 2024</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
