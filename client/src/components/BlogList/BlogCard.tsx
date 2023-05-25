import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  IconButton,
} from "@material-tailwind/react";

export default function BlogCard() {
  return (
    <Card className="w-[24rem] shadow-none mt-5">
      <CardHeader className="p-0" floated={false} shadow={false}>
        <img src="assets/6.jpg" alt="" />
      </CardHeader>
      <CardBody className="pt-3">
        <Typography className="text-primaryPurple font-bold text-sm">
          Design
        </Typography>
        <div className="flex justify-between">
          <Typography variant="h5" className="text-black font-bold">
            Ux review presentations
          </Typography>
          <div>
            <IconButton variant="text">A</IconButton>
          </div>
        </div>
        <Typography variant="paragraph" className="mt-2 text-sm">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </Typography>
      </CardBody>
      <CardFooter className="py-0">
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
      </CardFooter>
    </Card>
  );
}
