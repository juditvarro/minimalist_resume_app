import React, { useState, useEffect, useRef } from 'react';
import MenuButton from './MenuButton';
import DesktopMenuItem from './DesktopMenuItem';
import MobileMenuItem from './MobileMenuItem';
import { useOutsideClick } from '../hooks/useOutsideClick';

interface Section {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

interface NavbarProps {
  sections: Section[];
}

const Navbar = ({ sections }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useOutsideClick(
    mobileMenuRef,
    () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    menuButtonRef,
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full'>
      <nav
        className={`fixed top-0 left-0 z-10 w-full bg-white transition-shadow duration-1000 ease-in-out ${scrolling && 'shadow-sm'}`}
      >
        <div className='flex justify-end'>
          <div
            className={`${isMobileMenuOpen ? 'pt-3' : 'py-3'} pr-7 md:hidden`}
          >
            <MenuButton
              ref={menuButtonRef}
              open={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>

          <div className='hidden space-x-7 md:flex md:p-7'>
            {sections.map((section) => (
              <DesktopMenuItem
                key={section.title}
                text={section.title}
                ref={section.ref}
              />
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className='animate-menuOpen bg-white pr-10 opacity-100 md:hidden'
          >
            <div className='flex flex-col items-end space-y-2 pb-4'>
              {sections.map((section, index) => (
                <MobileMenuItem
                  key={section.title}
                  text={section.title}
                  ref={section.ref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
