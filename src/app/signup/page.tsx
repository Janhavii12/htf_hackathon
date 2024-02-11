/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mWWkyOblGRA
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

export default function Component() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
      <div className="flex flex-col justify-center px-36">
        <h1 className="text-5xl font-bold mb-2">Sign up</h1>
        <p className="text-lg mb-8">Enter your details to start quizzing</p>
        <form>
          <div className="flex flex-col space-y-6">
            <Input placeholder="Your full name" type="text" />
            <Input placeholder="Enter your email address" type="email" />
            <Input placeholder="Create a username" type="text" />
            <Input placeholder="Create a password" type="password" />
            <Input placeholder="Confirm password" type="password" />
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Enter your role" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                className="text-sm font-medium leading-none"
                htmlFor="terms"
              >
                I agree with the Terms and Privacy Policy.
              </label>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">Sign up</Button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?
          <Link className="text-green-500 hover:underline" href="#">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
