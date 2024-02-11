import Link from "next/link";
import Image from "next/image";
import homepageImage from "../../assets/homepage.jpg";

export default function Homepage() {
  return (
    <Link href="/signup">
      {/* <div className="bg-[url('/homepage.jpg')]"> */}
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Image src={homepageImage} fill alt="Homepage Image" />
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          This is Homepage
        </button> */}
      </div>
    </Link>
  );
}
