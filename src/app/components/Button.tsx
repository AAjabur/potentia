import { Akshar } from 'next/font/google'

const akshar = Akshar({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600']
})

interface ButtonProps {
    width: number;
    height: number;
    style?: React.CSSProperties;
  }

export default function Button({ width, height, style }: ButtonProps ) : JSX.Element{
    const buttonStyle: React.CSSProperties = {
        background: "linear-gradient(90deg, #AD00FF 26.84%, rgba(0, 163, 255, 0.65) 138.99%)",
        color: "#FFF",
        fontSize: "24px",
        fontWeight: "500",
        padding: "4px 25px",
        borderRadius: "23px",
    }


    return (
        <a>
            <div>
                <button className={akshar.className} style={buttonStyle}> Participe </button>
            </div>
        </a>
    )
}