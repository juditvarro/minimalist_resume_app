import { forwardRef, useEffect, useState } from 'react';

interface MobileMenuItemProps {
  text: string;
  onClick: () => void;
  index: number;
}

const MobileMenuItem = forwardRef<HTMLDivElement | null, MobileMenuItemProps>(
  ({ text, onClick, index }, ref) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const delay = index * 300;
      const timer = setTimeout(() => {
        setShow(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [index]);

    const handleScroll = () => {
      if (ref && 'current' in ref) {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <button
        className={`transform text-xl text-gray-500 transition-opacity duration-1000 ease-out ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => {
          handleScroll();
          onClick();
        }}
      >
        {text}
      </button>
    );
  },
);

export default MobileMenuItem;
