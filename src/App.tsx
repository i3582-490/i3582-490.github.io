import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Terminal, 
  User, 
  MapPin, 
  Heart, 
  Music, 
  Play,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Download
} from 'lucide-react';

function App() {
  const [terminalText, setTerminalText] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const cppCode = `#include <iostream>
#include <string>

using namespace std;

int main() {
    struct Person {
        string name;    
        string birthPlace; 
        string hobby;     
        string favorites;  
    };

    Person myInfo;
    myInfo.name = "3582-490";
    myInfo.birthPlace = "Moscow";
    myInfo.hobby = "Collecting stamps";
    myInfo.favorites = "Fairuz and Beethoven";

    cout << "Name: " << myInfo.name << endl;
    cout << "Birth Place: " << myInfo.birthPlace << endl;
    cout << "Hobby: " << myInfo.hobby << endl;
    cout << "Favorites: " << myInfo.favorites << endl;

    return 0;
}`;

  const compileAndRun = () => {
    setIsCompiling(true);
    setTerminalText('');
    setShowOutput(false);
    
    const steps = [
      'Compiling main.cpp...',
      'g++ -o main main.cpp',
      'Compilation successful!',
      './main',
      '',
      'Name: 3582-490',
      'Birth Place: Moscow', 
      'Hobby: Collecting stamps',
      'Favorites: Fairuz and Beethoven'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setTerminalText(prev => prev + (currentStep > 0 ? '\n' : '') + 
          (currentStep === 4 ? '' : '$ ') + steps[currentStep]);
        
        if (currentStep >= 5) {
          setShowOutput(true);
        }
        
        currentStep++;
      } else {
        setIsCompiling(false);
        clearInterval(interval);
      }
    }, 800);
  };

  const webTechnologies = [
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'CSS', level: 90, color: '#1572B6' },
    { name: 'HTML', level: 95, color: '#E34F26' }
  ];

  const backendTechnologies = [
    { name: 'C++', level: 88, color: '#00599C' },
    { name: 'C#', level: 85, color: '#512BD4' },
    { name: 'VB.NET', level: 80, color: '#512BD4' },
    { name: 'Python', level: 87, color: '#3776AB' },
    { name: 'Go', level: 82, color: '#00ADD8' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'code'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3582-490
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Code'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-400 transition-colors duration-300 ${
                    currentSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm mb-6">
              <Code2 size={60} className="text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
            3582-490
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
            Full Stack Developer & Software Engineer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Crafting elegant solutions with code, from Moscow to the digital world. 
            Passionate about technology, collecting stamps, and the timeless melodies of Fairuz and Beethoven.
          </p>
          
          <div className="flex justify-center space-x-6 mt-12 animate-fade-in-up animation-delay-800">
            <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <Download size={20} />
                <span>Download CV</span>
              </div>
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 border border-gray-600 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <span>Learn More</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold">Identity</h3>
                </div>
                <p className="text-gray-300">
                  Known in the digital realm as <span className="text-blue-400 font-mono">3582-490</span>, 
                  I'm a passionate developer who believes in the power of clean, efficient code.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-purple-400" size={24} />
                  <h3 className="text-xl font-semibold">Origin</h3>
                </div>
                <p className="text-gray-300">
                  Born in the historic city of <span className="text-purple-400 font-semibold">Moscow</span>, 
                  where architecture meets innovation, shaping my appreciation for structured beauty.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="text-green-400" size={24} />
                  <h3 className="text-xl font-semibold">Passion</h3>
                </div>
                <p className="text-gray-300">
                  When I'm not coding, you'll find me <span className="text-green-400 font-semibold">collecting stamps</span> - 
                  each one a small piece of history and art from around the world.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Music className="text-yellow-400" size={24} />
                  <h3 className="text-xl font-semibold">Inspiration</h3>
                </div>
                <p className="text-gray-300">
                  My coding sessions are accompanied by the soulful voice of <span className="text-yellow-400 font-semibold">Fairuz</span> 
                  and the mathematical precision of <span className="text-yellow-400 font-semibold">Beethoven</span>.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30">
                <div className="text-6xl mb-6 text-center">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Philosophy</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  "Code is poetry in motion. Like a stamp collection, each function has its place, 
                  each algorithm tells a story, and every program is a symphony waiting to be performed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Technologies */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-3xl font-bold mb-8 text-blue-400">Frontend & Web</h3>
              <div className="space-y-6">
                {webTechnologies.map((tech, index) => (
                  <div key={tech.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">{tech.name}</span>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          backgroundColor: tech.color,
                          width: `${tech.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Technologies */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-3xl font-bold mb-8 text-purple-400">Backend & Systems</h3>
              <div className="space-y-6">
                {backendTechnologies.map((tech, index) => (
                  <div key={tech.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-lg">{tech.name}</span>
                      <span className="text-sm text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ 
                          backgroundColor: tech.color,
                          width: `${tech.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section id="code" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Code in Action
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Code Editor */}
            <div className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400">main.cpp</span>
                <Code2 size={16} className="text-gray-400" />
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{cppCode}</code>
                </pre>
              </div>
            </div>
            
            {/* Terminal */}
            <div className="rounded-2xl overflow-hidden bg-black border border-gray-700">
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <Terminal size={16} className="text-green-400" />
                  <span className="text-sm text-gray-400">Terminal</span>
                </div>
                <button
                  onClick={compileAndRun}
                  disabled={isCompiling}
                  className="flex items-center space-x-2 px-3 py-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded text-sm transition-colors duration-200"
                >
                  <Play size={14} />
                  <span>{isCompiling ? 'Running...' : 'Compile & Run'}</span>
                </button>
              </div>
              <div className="p-6 font-mono text-sm min-h-[300px]">
                {terminalText ? (
                  <pre className={`whitespace-pre-wrap ${showOutput ? 'text-green-400' : 'text-gray-300'}`}>
                    {terminalText}
                  </pre>
                ) : (
                  <p className="text-gray-500">Click "Compile & Run" to execute the code</p>
                )}
                {isCompiling && (
                  <div className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400">
              © 2025 3582-490. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;