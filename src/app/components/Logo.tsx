import Image from "next/image";

export default function Logo(){
  return (
      <div className="horizontal-container">
        <Image alt="image" src="/potentia_logo.png" width={60} height={60}></Image>
        <h2>
          POTENT IA
        </h2>
      </div>
  )
}