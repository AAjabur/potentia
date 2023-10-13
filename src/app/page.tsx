import Logo from "./components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <main>
        <div>
          <div>
            <div>
              <h2>Potencialize sua capacidade além dos limites!</h2>
              <p>Saiba como a Potent IA pode impulsionar seu negócio, 
                automatize as resposta e lide com clientes insatisfeitos 
                de forma automática!</p>
              <div><p>Entre no Beta</p></div>
            </div>
            <div>
              <Image alt="image" src={""}></Image>
            </div>
          </div>
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
