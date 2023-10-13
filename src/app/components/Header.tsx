import Logo from "./Logo";
import VerticalBar from "./VerticalBar";
import Button from "./Button";
import Image from "next/image";

export default function Header(){
    const navContainerStyle: React.CSSProperties = {
        width: "40%",
        justifyContent: "space-evenly"
      }
    
      const navContactContainer: React.CSSProperties = {
        justifyContent: "space-between",
        width: "300px"
      }
    
      const navVerticalBarStyle: React.CSSProperties = {
        background: "rgba(217, 217, 217, 0.24)"
      }

    return (
      <header>
        <div className="logo-container">
          <Logo/>
        </div>
        <div className="horizontal-container" style={navContainerStyle}>
          <a> SAC </a>
          <div className="horizontal-container" style={navContactContainer}>
            <a> Entre em Contato </a>
            <VerticalBar height={40} style={navVerticalBarStyle}/>
            <Button width={50} height={50}/>
          </div>
        </div>
      </header>
    )
}