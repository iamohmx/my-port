import './App.css'
import { 
  FaJava, 
  FaReact, 
  FaGithub, 
  FaCoffee,
  FaCode,
  FaRocket,
  FaStar,
  FaJs
} from 'react-icons/fa'
import { 
  SiFlutter, 
  SiSpringboot, 
  SiTypescript, 
  SiDart,
  SiMysql,
  SiPostgresql
} from 'react-icons/si'

function App() {
  const techStack = [
    { icon: <FaJava className="text-red-500" />, name: "Java", bg: "from-red-500/20 to-orange-500/20", border: "border-red-500/30" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", bg: "from-yellow-500/20 to-amber-500/20", border: "border-yellow-400/30" },
    { icon: <SiDart className="text-cyan-400" />, name: "Dart", bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/30" },
    { icon: <SiFlutter className="text-sky-400" />, name: "Flutter", bg: "from-sky-500/20 to-blue-500/20", border: "border-sky-400/30" },
    { icon: <SiSpringboot className="text-green-500" />, name: "SpringBoot", bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
    { icon: <FaReact className="text-blue-400" />, name: "ReactJS", bg: "from-blue-500/20 to-cyan-500/20", border: "border-blue-400/30" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", bg: "from-blue-600/20 to-indigo-600/20", border: "border-blue-600/30" },
    { icon: <SiMysql className="text-orange-500" />, name: "SQL", bg: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/30" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-spin" style={{animationDuration: '20s'}}>
              <div className="w-40 h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                <FaCode className="text-6xl text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-8 text-white leading-tight drop-shadow-2xl">
            👋 Hi, I'm iamohmx!
          </h1>
          <div className="flex items-center justify-center mb-6">
            <FaRocket className="text-blue-400 mr-4 text-3xl animate-bounce drop-shadow-lg" />
            <p className="text-3xl font-bold text-white drop-shadow-lg">Full Stack Developer</p>
            <FaRocket className="text-purple-400 ml-4 text-3xl animate-bounce drop-shadow-lg" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">✨ Passionate about creating amazing web applications & mobile experiences ✨</p>
          
          {/* Tech Stack Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-4xl font-black mb-12 text-white drop-shadow-2xl">💻 Tech Stack 💻</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className={`group relative flex flex-col items-center p-8 bg-gradient-to-br ${tech.bg} backdrop-blur-xl rounded-3xl border-2 ${tech.border} hover:border-white/70 transition-all duration-500 hover:scale-125 hover:rotate-6 shadow-2xl hover:shadow-3xl transform-gpu`}
                     style={{animationDelay: `${index * 100}ms`}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                  <div className="relative text-6xl mb-4 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl">{tech.icon}</div>
                  <span className="relative text-base font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">{tech.name}</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="flex items-center justify-center mb-16">
            <FaStar className="text-yellow-400 mr-4 text-4xl animate-spin drop-shadow-lg" />
            <h2 className="text-5xl font-black text-white drop-shadow-2xl">🏆 Highlight Project 🏆</h2>
            <FaStar className="text-blue-400 ml-4 text-4xl animate-spin drop-shadow-lg" style={{animationDirection: 'reverse'}} />
          </div>
          
          <div className="relative bg-gradient-to-br from-gray-800/80 via-slate-800/80 to-gray-900/80 backdrop-blur-2xl rounded-3xl p-12 border-4 border-gray-600/50 hover:border-blue-500/70 shadow-2xl hover:shadow-blue-500/30 transition-all duration-700 hover:scale-105 transform-gpu group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
            <div className="relative text-center">
              <a href="https://github.com/iamohmx/runner_background" target="_blank" rel="noopener noreferrer" className="inline-block mb-8 hover:scale-125 transition-transform duration-500 group-hover:animate-bounce">
                <img
                  src="https://img.shields.io/badge/runner_background-library-blueviolet?style=for-the-badge"
                  alt="runner_background"
                  className="rounded-2xl shadow-2xl border-4 border-purple-400/50"
                />
              </a>
              <h3 className="text-4xl font-black mb-6 text-white drop-shadow-lg">Runner Background</h3>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-semibold drop-shadow-lg">A lightweight library for seamless background task management in modern applications. 🚀</p>
              <div className="flex items-center justify-center space-x-4 text-xl">
                <FaGithub className="text-4xl text-white drop-shadow-lg" />
                <span className="font-bold text-gray-300 drop-shadow-lg">Open Source Library</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-24">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/70 via-slate-800/70 to-gray-900/70 backdrop-blur-2xl rounded-3xl p-16 border-4 border-gray-600/50 hover:border-purple-500/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <blockquote className="relative text-4xl font-bold text-white mb-8 leading-relaxed drop-shadow-lg">
              "Always keep things running smoothly. 🏃‍♂️"
            </blockquote>
            <div className="relative w-32 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <h3 className="text-4xl font-black mb-12 text-white drop-shadow-2xl">☕ Support My Work ☕</h3>
          <a 
            href="https://buymeacoffee.com/iamohmx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white font-black py-6 px-12 rounded-full shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-125 transform text-2xl group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <FaCoffee className="relative mr-5 text-3xl animate-bounce z-10 drop-shadow-lg" />
            <span className="relative z-10 drop-shadow-lg">Buy me coffee ☕</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
