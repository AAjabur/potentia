import Image from "next/image";

export default function Logo(){
  const textStyle: React.CSSProperties = {
    fontSize: "24px"
  }

  const iaStyle: React.CSSProperties = {
    background: "linear-gradient(-45deg, #8E4CF0 50%, #6374EB 83.96%)",
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