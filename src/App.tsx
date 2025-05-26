// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Education from './components/Education';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import ThemeProvider from './context/ThemeContext';
// import ScrollToTop from './components/ScrollToTop';

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//         <Navbar />
//         <main>
//           <Hero />
//           <About />

//           {/* Skills section with background image */}
//           <div
//             className="relative bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/bg-tech-pattern.png')", // Ensure this file exists in public/
//             }}
//           >
//             {/* Optional overlay */}
//             <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
//             <div className="relative z-10">
//               <Skills />
//             </div>
//           </div>

//           <Projects />
//           <Experience />
//           <Education />
//           <Testimonials />
//           <Contact />
//         </main>
//         <Footer />
//         <ScrollToTop />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />

          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-tech-pattern.png')" }}
          >
            <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />
            <div className="relative z-10">
              <Skills />
            </div>
          </div>

          <Projects />
          <Experience />
          <Education />
          {/* Testimonials removed */}
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;


