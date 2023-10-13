import Logo from "./components/Logo";
import Image from "next/image";
import Button from "./components/Button";
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
    justifyContent: "space-between"
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

export default function Home() {
  return (
    <main>
      <main>
        <div>
          <FirstContentBlock/>
          <div>
            <div>
              <h2>Missão</h2>
              <p></p>
            </div>
            <div></div>
            <div>
              <h2>Visão</h2>
              <p></p>
            </div>
            <div></div>
            <div>
              <h2>Valor</h2>
              <p></p>
            </div>
          </div>
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
