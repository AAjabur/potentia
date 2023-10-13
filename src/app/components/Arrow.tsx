interface ArrowProps {
    width: number;
    height: number;
  }

export default function Arrow({width, height}: ArrowProps){
    return (
        <svg width={width} height={height} viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Arrow 1" d="M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807611 25.9792 0.807611 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5L36 13.5V10.5L0 10.5L0 13.5Z" fill="white"/>
        </svg>
    )
}
