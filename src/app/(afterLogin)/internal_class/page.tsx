// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export default function Home() {
//   return (
//     <div className="bg-black h-[100vh] w-[200vh]">
//       <h2>Home</h2>

//       <div className="flex">
//         <Card>
//           <CardHeader>
//             <CardTitle>Card Title</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p>Card Content</p>
//           </CardContent>
//           <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// }
// button ke pehle link karna hai pdf vale page ko

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BFEDL291PPE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import meet from "../../../../assests_janhavi/meet.png";
import upload from "../../../../assests_janhavi/upload.png";
import resources from "../../../../assests_janhavi/resources.png";
import { Upload } from "lucide-react";
import Link from "next/link";

let name: string = "Class id";

export default function homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-4xl font-semibold mb-6 ml-6 ">{name}</h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center ml-6 ">
        <div className="justify-between">
          <div>
            <div className="flex-1 p-6 bg-white mr-3 rounded-lg ">
              <div className="ml-24 mb-6">
                <Image src={meet} height={50} width={90} alt="Img" />
              </div>
              <h1 className="text-4xl font-semibold mb-6 ml-12 mr-16 ">
                <span>Join meet</span>
              </h1>
            </div>

            <div className="mt-10 mr-12 ml-12 bg-gray-100">
              <Card className="w-100% ">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="ml-9 mr-10 mt-6 ">
                      <Link href="https://meetapphtf1.onrender.com/">
                        <Button className="bg-[#a1d777]">upload</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-1 p-6 bg-white mr-3  rounded-lg  ">
            <div className="ml-24 mb-6">
              <Image src={upload} height={50} width={90} alt="Img" />
            </div>
            <h1 className="text-4xl font-semibold mb-6 ml-20 mr-20 ">
              <span>
                {" "}
                <span> Upload</span>
              </span>
            </h1>
          </div>
          <div className="mt-10 mr-16 ml-16 bg-gray-100">
            <Card className="w-100%">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="ml-12 mr-10 mt-6 ">
                    <Link href="/upload_file">
                      <Button className="bg-[#a1d777]">upload</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mr-52">
          <div className="flex-1 p-6 bg-white  rounded-lg ">
            <div className="ml-32 mb-6 ">
              <Image src={resources} height={50} width={90} alt="Img" />
            </div>
            <h1 className="text-4xl font-semibold mb-6 ml-16 mr-16 ">
              Resources
            </h1>
          </div>
          <div className="mt-10 mr-12 ml-12 bg-gray-100">
            <Card className="w-100%">
              <CardContent>
                <div className="flex items-center justify-between ">
                  <div className="ml-9 mr-10 mt-6 ">
                    <Link href="/resources">
                      <Button className="bg-[#a1d777]">Resources</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
