import { Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white w-full max-w-screen-xl mx-auto p-2 border shadow-md fixed top-0 z-20">
      <div className="w-full flex justify-between items-center ">
        <ul className="flex items-center w-full">
          <li className="font-medium border-r-gray-400 border border-white  p-2 px-4 hover:underline">
            <Link href="#">Home</Link>
          </li>
          <li className="font-medium border-r-gray-400 border border-white p-2 px-4  hover:underline">
            <Link href="#">Brands</Link>
          </li>
          <li className="font-medium  border-r-gray-400 border border-white p-2 px-4  hover:underline">
            <Link href="#">Categories</Link>
          </li>
        </ul>
        <div className="px-4">
          <Search
            size={24}
            className="hover:border-gray-700 border-b-2 border-white"
          />
        </div>
      </div>
    </nav>
  );
}
