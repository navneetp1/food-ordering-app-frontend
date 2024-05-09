import hero from "../assets/hero.jpg"
// import realhero from "../assets/real-hero.png"

export default function Hero() {
  return (
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

