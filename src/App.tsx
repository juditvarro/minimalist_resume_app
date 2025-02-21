import { useRef } from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Education from './components/Education';

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sections = [
    { title: 'Home', ref: homeRef },
    { title: 'Experience', ref: experienceRef },
    { title: 'Education', ref: educationRef },
    { title: 'Contact', ref: contactRef },
  ];

  return (
    <div className='px-10 sm:px-14 md:px-20 lg:px-28'>
      <Navbar sections={sections} />
      <Home ref={homeRef} />
      <Experience ref={experienceRef} />
      <Education ref={educationRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
