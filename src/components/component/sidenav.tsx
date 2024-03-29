import { Button } from "../ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import profile from "../../../assets/profile.png";
import Link from "next/link";

export default function SideNav() {
  return (
    <>
      <div className="w-64 bg-white p-4 space-y-6">
        <div className="flex items-center space-x-3">
          {/* <Avatar>
            <AvatarImage alt="User avatar" src={} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <div className="h-[20] w-[25] rounded-full">
            <Image
              src={profile}
              height={20}
              width={25}
              alt="Img"
              className="rounded-full"
            />
          </div>
          <span className="font-bold text-md">
            Welcome to
            <br />
            LEARN ASSIST
          </span>
        </div>
        <nav className="flex flex-col space-y-1">
          <Link href="/classroom">
            <Button className="bg-[#a1d777] text-left text-md w-40">
              Classroom
            </Button>
          </Link>
          <Link href="/quizzes">
            <Button className="bg-[#a1d777] text-left text-md w-40">
              Quizzes
            </Button>
          </Link>

          <Link href="../../../charts">
            <Button className="bg-[#a1d777] text-left text-md w-40">
              Performance
            </Button>
          </Link>

          {/* <Button className="bg-[#a1d777] text-left text-sm"></Button> */}
          <div className="mb-200">
            <Button className="bg-[#a1d777] text-left text-md w-40">
              Resources
            </Button>
          </div>
        </nav>
        <div className="flex flex-col space-y-4">
          <div className="mb-10">
            <Button className="bg-[#a1d777] text-left text-md">Settings</Button>
          </div>
          npx shadcn-ui@latest add select
          /,          <div className="mb-10">
            <Button className="bg-[#a1d777] text-left text-md">Logout</Button>
          </div>
        </div>
      </div>
    </>
  );
}