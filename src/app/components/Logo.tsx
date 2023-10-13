import Image from "next/image";
import { text } from "stream/consumers";

export default function Logo(){
  const textStyle: React.CSSProperties = {
    fontSize: "20px"
  }

  const iaStyle: React.CSSProperties = {
    background: "linear-gradient(270deg, #DB00FF 50%, #00F0FF 83.96%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }

  return (
      <div className="horizontal-container">
        <Image alt="image" src="/potentia_logo.png" width={60} height={60}></Image>
        <p style={textStyle}> POTENT <span style={iaStyle}> IA </span></p>
      </div>
  )
}