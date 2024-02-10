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
import profile from "../../../../assets/profile.png";
import economy from "../../../../assets/economy.jpg";
import biology from "../../../../assets/quiz2.jpg";
import english from "../../../../assets/quiz1.jpeg";
import start from "../../../../assets/startquiz.jpg";

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gray-100 w-screen">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Quiz: English 101</CardTitle>
              <CardDescription>
                Learn the basics of English language
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={english} height={100} width={200} alt="Img" />
              {/* <div className="text-sm">Lesson 8 out of 12</div> */}
              {/* <Progress className="w-full" value={67} /> */}
            </CardContent>
            <CardFooter>
              <Badge variant="secondary">87% completion rate</Badge>
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Quiz: World Economy</CardTitle>
              <CardDescription>Explore the leading markets and</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={economy} height={100} width={200} alt="Img" />
            </CardContent>
            <CardFooter>
              {/* <Badge variant="default">Sign up pending...</Badge> */}
            </CardFooter>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Quiz: Human Biology</CardTitle>
              <CardDescription>
                Explore the functioning of the human
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={biology} height={100} width={200} alt="Img" />
              {/* <div className="text-sm">Lesson 4 out of 12</div> */}
              {/* <Progress className="w-full" value={33} /> */}
            </CardContent>
            <CardFooter>
              <Badge variant="secondary">33% completion rate</Badge>
            </CardFooter>
          </Card>
          {/* <Card className="col-span-3 w-full">
            <CardHeader>
              <CardTitle>Paper Review</CardTitle>
              <CardDescription>Review with Instructor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm mb-2">
                Next Session: Friday 19/5, 9 AM
              </div>
              <div className="text-sm">Individual Meeting Online</div>
            </CardContent>
            <CardFooter>
              <Badge variant="default">Signed up</Badge>
            </CardFooter>
          </Card> */}
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Ongoing Quiz</h2>
          <Card className="w-full">
            <CardContent>
              <Image src={start} height={150} width={200} alt="Img" />
              <h3 className="text-lg font-semibold">Quiz Title</h3>
              <div className="text-sm mb-2">(Ends in 45 min.)</div>
              <Button className="bg-[#a1d777]">Start</Button>
              <div className="text-sm mt-2">Your Score: In Progress</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
