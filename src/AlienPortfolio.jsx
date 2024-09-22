import React, { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Code,
  Rocket,
  Mail,
  Github,
  ExternalLink,
  Zap,
  Radio,
} from "lucide-react"

const AlienSymbol = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const UFO = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-24 h-24 animate-bounce"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3-4c.83 0 1.5-.67 1.5-1.5S10.83 4 10 4s-1.5.67-1.5 1.5S9.17 7 10 7zm4 0c.83 0 1.5-.67 1.5-1.5S14.83 4 14 4s-1.5.67-1.5 1.5S13.17 7 14 7zm3 4c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5S16.17 11 17 11z" />
  </svg>
)

const AlienPortfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [alienPulse, setAlienPulse] = useState(0)
  const [stars, setStars] = useState([])
  const [isScrolled, setIsScrolled] = useState(false) // New state for scroll tracking

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setAlienPulse((prev) => (prev < 100 ? prev + 1 : 0))
    }, 50)

    // Generate random stars
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }))
    setStars(newStars)

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(pulseInterval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-green-400"
    : "bg-green-100 text-green-900"

  const navbarClasses = isScrolled
    ? `fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        isDarkMode ? "bg-gray-900 bg-opacity-70" : "bg-green-200 bg-opacity-70"
      } transition-colors duration-150`
    : "fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-150"

  const sectionClasses = isDarkMode ? "bg-gray-800" : "bg-green-200"
  const cardClasses = isDarkMode ? "bg-gray-700" : "bg-green-50"
  const inputClasses = isDarkMode ? "bg-gray-600" : "bg-green-50"

  return (
    <div
      className={`w-full ${themeClasses} transition-colors duration-150 overflow-hidden font-alien`}
    >
      {/* Alien Pulse Animation */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${
            isDarkMode ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.1)"
          } ${alienPulse}%, transparent ${alienPulse + 20}%)`,
          transition: "all 0.3s ease-out",
        }}
      ></div>

      {/* Navigation */}
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-3xl font-bold flex items-center">
              <AlienSymbol />
              <span className="ml-2">Dhruv</span>
            </span>
            <div className="flex items-center space-x-6">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-500 transition-colors duration-150 text-lg"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-green-300 hover:bg-green-400"
                } transition-colors duration-150`}
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Star background */}
        <div className="absolute inset-0">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          ))}
        </div>

        {/* UFO */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <UFO />
        </div>

        {/* Alien text effect */}
        <div className="text-center z-10">
          <h1 className="text-7xl font-bold mb-6 animate-float">
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              G
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              r
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              e
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              e
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              t
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              i
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              n
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              g
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              s
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              ,
            </span>
            <br />
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              E
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              a
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              r
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              t
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              h
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              l
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              i
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              n
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              g
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              s
            </span>
            <span className="inline-block transform hover:scale-110 transition-transform duration-200">
              !
            </span>
          </h1>
          <p className="text-3xl mb-10 animate-pulse">
            I'm Dhruv, your interstellar code navigator.
          </p>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 text-xl transform hover:scale-110 hover:rotate-3"
          >
            Initiate Contact
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section
        id="about"
        className={`h-screen ${sectionClasses} transition-colors duration-150 relative flex items-center`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-10">Alien Origins</h2>
          <p className="text-xl mb-10">
            Crash-landed on Earth in 2005. Discovered the cosmic art of coding
            in 2020. Now on a mission to create websites that transcend earthly
            boundaries!
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Code, text: "Alien Algorithms" },
              { icon: Rocket, text: "Cosmic UI/UX" },
              { icon: Zap, text: "Quantum Computing" },
              { icon: Radio, text: "Intergalactic Networking" },
            ].map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className={`flex items-center p-6 ${cardClasses} rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50 transform hover:scale-105 hover:rotate-1`}
              >
                <Icon className="mr-4 text-green-400" size={36} />
                <span className="text-xl">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`h-screen transition-colors duration-150 relative flex items-center`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-10">Cosmic Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Intergalactic Communicator",
                description:
                  "A universal translator for alien-human conversations.",
                link: "#",
              },
              {
                title: "Quantum Portfolio",
                description: "This very website you're exploring right now!",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`${cardClasses} p-8 rounded-lg hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1`}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-6 text-lg">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-400 hover:text-green-300 inline-flex items-center transition-colors duration-150 text-lg"
                >
                  Explore Project <ExternalLink size={20} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`h-screen ${sectionClasses} relative flex items-center`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-10">Transmit a Cosmic Signal</h2>
          <form className="space-y-6">
            {["Your Earth Identity", "Your Subspace Frequency"].map(
              (placeholder, index) => (
                <input
                  key={index}
                  type={index === 1 ? "email" : "text"}
                  placeholder={placeholder}
                  className={`w-full p-4 ${inputClasses} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-150 text-lg`}
                />
              )
            )}
            <textarea
              placeholder="Your Intergalactic Message"
              rows="5"
              className={`w-full p-4 ${inputClasses} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-150 text-lg`}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 text-xl transform hover:scale-105 hover:rotate-1"
            >
              Launch Transmission
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-10 ${sectionClasses} transition-colors duration-150`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-lg">
            &copy; 2024 Alien Coder. All universal rights reserved.
          </p>
          <div className="flex space-x-6">
            {[Github, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-green-400 hover:text-green-300 transition-colors duration-150"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AlienPortfolio
