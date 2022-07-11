import { bgWrap } from "../styles/bgWrap.module.css";
import Image from "next/image";
import myImage from "../public/world_news.jpg";

const Background = () => {
  return (
    <div className={bgWrap}>
      <Image
        alt="travel"
        src={myImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Background;
