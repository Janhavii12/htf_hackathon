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
import profile from "../../../assets/profile.png";


let name: string = "Class name";

export default function homepage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-4xl font-semibold mb-6 ml-6 ">{name}</h1>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center ml-3 " >
        <div className="justify-between">
          <div className="flex-1 p-6 bg-white mr-3 ">
          <div className="flex items-center justify-between">
                 
            <h1 className="text-4xl font-semibold mb-6 ml-12 "> <span>Join a Meet</span></h1>
          </div>

          <div className="mt-12 mr-12 ml-12 bg-gray-100">
            <Card className="w-100%">
              <CardContent>
               <div className="flex items-center justify-between">
                  
                  <h3 className="text-lg font-semibold mt-6">{name}</h3>
                  <div className="ml-12 mt-6" >
                    <Button className="bg-[#a1d777]" >
                      open meet
                    </Button>
                  </div>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        </div>


        <div >
          <div className="flex-1 p-6 bg-white mr-3 ">
            <h1 className="text-4xl font-semibold mb-6 ml-12 "><span>Upload
            </span></h1>
          </div>
          <div className="mt-12 mr-12 ml-12 bg-gray-100">
            <Card className="w-100%">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold mt-6">{name}</h3>
                  <div className="ml-12 mt-6 " >
                    <Button className="bg-[#a1d777]" >
                      open meet
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mr-32">
          <div className="flex-1 p-6 bg-white">
            <h1 className="text-4xl font-semibold mb-6 ml-12 "><span>Resources</span></h1>
          </div>
          <div className="mt-12 mr-12 ml-12 bg-gray-100">
            <Card className="w-100%">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold mt-6">{name}</h3>
                  <div className="ml-12 mt-6" >
                    <Button className="bg-[#a1d777]" >
                      open meet
                    </Button>
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
