import b1 from "../../assets/sponsor/Link → b1.jpg.png"
import b2 from "../../assets/sponsor/Link → b2.jpg.png"
import b3 from "../../assets/sponsor/Link → b3.jpg.png"
import b4 from "../../assets/sponsor/Link → b4.jpg.png"
import b5 from "../../assets/sponsor/Link → b5.jpg.png"
import b6 from "../../assets/sponsor/Link → b6.jpg.png"

const Sponsor = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <p className="text-center text-lg font-semibold text-secondary mb-6">
        Trusted by the world&apos;s best
      </p>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {[b1, b2, b3, b4, b5, b6].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Sponsor ${i + 1}`}
            className="h-12 mx-auto opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  )
}

export default Sponsor
