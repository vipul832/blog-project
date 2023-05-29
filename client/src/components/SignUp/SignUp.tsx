import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../validation/signUpSchema";
import { useState } from "react";

const SignUp = () => {
  const [image, setImage] = useState<string>();
  const formik = useFormik({
    initialValues: {
      photo: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function handleImageChange(file: null | File, inputTag: HTMLInputElement) {
    const reader = new FileReader();
    let imageUrl: string | ArrayBuffer | null;
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        imageUrl = reader.result;
        if (
          /^data:image\/(png|jpg)/.test(imageUrl as string) &&
          file.size < 200000
        ) {
          setImage(imageUrl as string);
          formik.setFieldValue("photo", imageUrl);
        } else {
          setImage("");
          file?.size > 200000
            ? formik.setFieldError("photo", "Accept only File less then 200KB")
            : formik.setFieldError("photo", "Accept only PNG,JPG");
        }
      };
    }
    inputTag.value = "";
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[28rem] shadow flex justify-center rounded-lg">
        <Card color="transparent" shadow={false} className="p-3">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={formik.handleSubmit}
          >
            {image && (
              <div className="flex justify-center my-2">
                <img src={image} alt="" width="100px" height="100px" />
              </div>
            )}
            <div className="text-center mb-3">
              <label htmlFor="photo">Profile Photo +</label>
              <input
                type="file"
                id="photo"
                className="absolute left-[-999px] hidden"
                onChange={(event) => {
                  handleImageChange(
                    event.target.files ? event.target.files[0] : null,
                    event.target
                  );
                }}
                onBlur={formik.handleBlur}
              />
              {formik.errors.photo ? (
                <div className="flex justify-center text-red-500">
                  {formik.errors.photo}
                </div>
              ) : null}
            </div>

            <div className="mb-4 flex flex-col gap-6">
              <Input
                id="name"
                size="lg"
                label="Name"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name && formik.touched.name ? true : false}
              />
              {formik.errors.name && formik.touched.name ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.name}
                </span>
              ) : null}
              <Input
                id="email"
                size="lg"
                label="Email"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              ) : null}

              {/* have to add password encryption  */}
              <Input
                id="password"
                type="password"
                size="lg"
                label="Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.password}
                </span>
              ) : null}
              <Input
                id="confirmPassword"
                type="password"
                size="lg"
                label="Confirm Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? true
                    : false
                }
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </span>
              ) : null}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href=""
                    className="font-medium transition-colors hover:text-purple-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="checkbox"
              containerProps={{ className: "-ml-2.5" }}
              color="deep-purple"
            />

            {formik.errors.checkbox && formik.touched.checkbox ? (
              <span className="text-red-500 text-sm block">
                {formik.errors.checkbox}
              </span>
            ) : null}

            <Button
              className="mt-6"
              color="deep-purple"
              fullWidth
              type="submit"
            >
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-purple-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
