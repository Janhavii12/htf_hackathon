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

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BFEDL291PPE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import english from "../../../../assets/englishclass.jpg";
import maths from "../../../../assets/mathsclass.jpg";
import science from "../../../../assets/scienceclass.jpg";
import computerscience from "../../../../assets/csclass.jpg";

export default function Classroom() {
  return (
    <div className="min-h-screen bg-gray-100 w-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">My Classroom</h1>
        <div className="grid grid-cols-4 gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>English Class</CardTitle>
              <CardDescription>
                Learn the basics of English language!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={english} height={100} width={200} alt="Img" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Science Class</CardTitle>
              <CardDescription>Explore the scientific rules!</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={science} height={200} width={200} alt="Img" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Maths Class</CardTitle>
              <CardDescription>Explore the functions of Maths!</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={maths} height={100} width={200} alt="Img" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Computer Science Class</CardTitle>
              <CardDescription>
                Review your codes with ultimate coders!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={computerscience} height={200} width={200} alt="Img" />
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
