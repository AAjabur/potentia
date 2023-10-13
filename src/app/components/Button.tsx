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
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${Math.round(height / 1.8)}px`,
        borderRadius: `${Math.round(width / 10)}px`,
        color: "#FFF",
        fontWeight: "500",
        padding: `4px ${Math.round(width / 8)}px`,
        ...style
    }


    return (
        <a>
            <div>
                <button className={akshar.className} style={buttonStyle}>
                    <p> Participe </p>
                </button>
            </div>
        </a>
    )
}