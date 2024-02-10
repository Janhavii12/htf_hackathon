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
  import english from "../../../assets/englishclass.jpg";
  import maths from "../../../assets/mathsclass.jpg";
  import science from "../../../assets/scienceclass.jpg";
  import computerscience from "../../../assets/csclass.jpg";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
  
  
  let name: string = "Class id";
  let user_id: string="user id";
  
  
  export default function classroom() {
    return (
      
      <div className="min-h-screen bg-gray-100 w-screen">
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Upload a File</h1>
            </div>
        
          <div className="flex-col">
            
            
            <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">files</h4>
        
        <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="w-50%">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                  Learn the basics of English language!
                </CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
      </div>
    </ScrollArea>
  
            </div>
                <div className="fixed bottom-0 left-50 transform translateX(-50%) text-white px-4 py-2 rounded-md">
                <Button className="bg-[#a1d777]" >
                      open meet
                    </Button>
                </div>
            
          </div>
      
     
    );
  }
  