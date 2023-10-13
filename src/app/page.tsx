import Logo from "./components/Logo";
import Image from "next/image";
import Button from "./components/Button";
import VerticalBar from "./components/VerticalBar";
import { Concert_One, Hammersmith_One } from 'next/font/google'

const concert_one = Concert_One({
    subsets: ['latin'],
    weight: ['400']
})

const hammersmith_one = Hammersmith_One({
  subsets: ['latin'],
  weight: ['400']
})

function FirstContentBlock() {
  const contentContainerStyle: React.CSSProperties = {
    justifyContent: "space-between",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.79%, #000 104.24%)",
    minHeight: "calc(100vh - 80px)"
  }

  const textContainerStyle: React.CSSProperties = {
    paddingLeft: "80px",
    width: "40%"
  }

  const primaryTextStyle: React.CSSProperties = {
    paddingBottom: "30px"
  }

  const secundaryTextStyle: React.CSSProperties = {
    color: "#FFFFFFC2",
    width: "70%"
  }

  const buttonContainerStyle: React.CSSProperties = {
    paddingTop: "50px"
  }

  const buttonStyle: React.CSSProperties = {
    fontSize: "44px",
    padding: "0px 4px",
    borderRadius: "12px"
  }

  return (
    <div className="horizontal-container" style={contentContainerStyle}>
      <div style={textContainerStyle}>
        <h1 className={concert_one.className} style={primaryTextStyle}>Potencialize sua capacidade além dos limites!</h1>
        <p className={hammersmith_one.className} style={secundaryTextStyle}>Saiba como a Potent IA pode impulsionar seu negócio, 
          automatize as resposta e lide com clientes insatisfeitos 
          de forma automática!</p>

        <div style={buttonContainerStyle}>
          <Button width={264} height={60} style={buttonStyle} text="Entre no Beta"/>
        </div>
      </div>
      <div>
        <Image alt="image" src={"/vaporwave_statue.png"} width={600} height={600}></Image>
      </div>
    </div>
  )
}

function SecondContentBlock() {
  const contentContainerStyle: React.CSSProperties = {
    justifyContent: "center",
    alignItems: "center",
    height: "50vw",
    width: "100%",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0.79%, #000 104.24%)"
  };

  const textBlockStyle: React.CSSProperties = {
    width: "400px",
    alignItems: "center",
    textAlign: "center"
  };

  const primaryTextStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #AD00FF 31.63%, #00A3FF 71.19%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "28px",
    paddingBottom: "24px"
  };

  const secondaryTextStyle: React.CSSProperties = {
    padding: "0 62px",
    fontSize: "24px",
    fontWeight: "500"
  };

  const verticalBarStyle: React.CSSProperties = {
    background: "#0b4c5a",
  };

  return (
    <div className="horizontal-container" style={contentContainerStyle}>
      <div style={textBlockStyle}>
        <h2 style={primaryTextStyle}>Missão</h2>
        <p style={secondaryTextStyle}> Capacitar indivíduos para que compreendam e aproveitem o poder da IA, transformando-a em uma ferramenta para viver melhor. </p>
      </div>
      <VerticalBar height={280} style={verticalBarStyle}/>
      <div style={textBlockStyle}>
        <h2 style={primaryTextStyle}>Visão</h2>
        <p style={secondaryTextStyle}> Ser reconhecida globalmente como a principal plataforma focada em IA, ajudando milhões de pessoas a melhorar suas vidas através da tecnologia. </p>
      </div>
      <VerticalBar height={280} style={verticalBarStyle}/>
      <div style={textBlockStyle}>
        <h2 style={primaryTextStyle}>Valor</h2>
        <p style={secondaryTextStyle}> Compromisso genuíno com cada consumidor, inovação constante, integridade e foco na melhoria contínua da qualidade de vida através da IA. </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <main>
        <div>
          <FirstContentBlock/>
          <SecondContentBlock/>
        </div>
      </main>
      <footer>
        <div>
          <div>
          <Logo/>
            <h2>POTENT IA</h2>
          </div>
          <div>
            <p>Termos de Serviço</p>
            <p>WhatsApp</p>
            <p>Instagram</p>
          </div>
          <div></div>
        </div>
      </footer>
      
    </main>
  )
}
