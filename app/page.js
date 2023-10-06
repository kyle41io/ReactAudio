import Image from "next/image";
import Rectangle6 from "@/app/assets/icons/Rectangle 6.png";
import Rectangle8 from "@/app/assets/icons/Rectangle 8.png";
import MusicPlayer from "./components/MusicPlayer";
import { playList } from "./data/playList";

export default function Home() {
  return (
    <main className="flex h-[1117px] flex-col items-center justify-between relative">
      <Image
        priority
        src={Rectangle6}
        className="absolute inset-y-0 z-0"
        alt=""
      />
      <MusicPlayer playList={playList} />
      <Image
        src={Rectangle8}
        className="absolute inset-y-full -translate-y-full z-0"
        alt=""
      />
    </main>
  );
}
