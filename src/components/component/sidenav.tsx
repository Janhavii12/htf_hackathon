import { Button } from "../ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import profile from "../../../assets/profile.png";

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
          <span className="font-bold text-sm">
            Welcome to
            <br />
            Join the Learning
          </span>
        </div>
        <nav className="flex flex-col space-y-1">
          <Button className="bg-[#a1d777] text-left text-sm">Dashboard</Button>
          <Button className="bg-[#a1d777] text-left text-sm">Quizzes</Button>
          <Button className="bg-[#a1d777] text-left text-sm">
            Performance
          </Button>
          <Button className="bg-[#a1d777] text-left text-sm">
            Study Materials
          </Button>
          <Button className="bg-[#a1d777] text-left text-sm">Resources</Button>
        </nav>
        <div className="flex mb-[10px] gap-[10px]">
          <Button className="bg-[#a1d777] text-left text-sm">Settings</Button>
          <Button className="bg-[#a1d777] text-left text-sm">Logout</Button>
        </div>
      </div>
    </>
  );
}
