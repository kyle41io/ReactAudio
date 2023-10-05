import Image from "next/image";
import Rectangle6 from "@/app/assets/icons/Rectangle 6.png";
import Rectangle8 from "@/app/assets/icons/Rectangle 8.png";
import MusicPlayer from "./components/MusicPlayer";
import Example from "./components/Example";

export default function Home() {
  return (
    <main className="flex h-[1117px] flex-col items-center justify-between relative">
      <Image src={Rectangle6} className="absolute inset-y-0 z-0" />
      <MusicPlayer />
      {/* <Example /> */}

      <Image
        src={Rectangle8}
        className="absolute inset-y-full -translate-y-full z-0"
      />
    </main>
  );
}
