import Logo from "./Logo";
import VerticalBar from "./VerticalBar";
import Button from "./Button";
import Image from "next/image";

export default function Header(){
    const headerStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0"
    }

    const navContainerStyle: React.CSSProperties = {
        justifyContent: "end",
        flexGrow: "1",
        fontWeight: "300"
      }
    
      const navContactContainer: React.CSSProperties = {
        justifyContent: "space-between",
        width: "340px",
        paddingRight: "80px",
        paddingLeft: "20px"
      }
    
      const navVerticalBarStyle: React.CSSProperties = {
        background: "rgba(217, 217, 217, 0.24)"
      }

      const navSacContainer: React.CSSProperties = {
        paddingRight: "4%",
      }

    return (
      <header style={headerStyle}>
        <div className="logo-container">
          <Logo/>
        </div>
        <div className="horizontal-container" style={navContainerStyle}>
          <div style={navSacContainer}>
            <a> SAC </a>
          </div>
          <div className="horizontal-container" style={navContactContainer}>
            <a> Entre em Contato </a>
            <VerticalBar height={40} style={navVerticalBarStyle}/>
            <Button width={120} height={40} text="Participe"/>
          </div>
        </div>
      </header>
    )
}