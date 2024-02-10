/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ixTj6H5RgtQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function signup() {
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover"
        style={{
          backgroundImage: "../../assets/images/signup.jpg",
        }}
      />
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-4">Sign up</h1>
        <p className="mb-12">Enter your details to start quizzing</p>
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="full-name"
            >
              Full name
            </label>
            <Input id="full-name" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <Input id="username" placeholder="Create a username" />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Create a password
            </label>
            <Input id="password" placeholder="********" type="password" />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="confirm-password"
            >
              Confirm password
            </label>
            <Input
              id="confirm-password"
              placeholder="********"
              type="password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="role">
              Role to join
            </label>
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center">
            <Checkbox id="terms" />
            <label className="ml-2 text-sm" htmlFor="terms">
              I agree with the Terms and Privacy Policy.
            </label>
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600">
            Sign up
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?
          <Link className="text-green-600 hover:underline" href="#">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
