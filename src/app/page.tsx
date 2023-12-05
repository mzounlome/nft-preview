import Image from "next/image";
import NftCard from "./components/NftCard";
export default function Home() {
  return (
    <div className="h-screen  w-full flex items-center justify-center">
      <NftCard />
    </div>
  );
}
