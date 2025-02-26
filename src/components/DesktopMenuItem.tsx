import { forwardRef } from 'react';

interface DesktopMenuItemProps {
  text: string;
}

const DesktopMenuItem = forwardRef<HTMLDivElement | null, DesktopMenuItemProps>(
  ({ text }, ref) => {
    const handleScroll = () => {
      if (ref && 'current' in ref) {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className='group relative'>
        <button
          className='text-primary md:text-lg lg:text-xl xl:text-2xl'
          onClick={() => handleScroll()}
        >
          {text}
        </button>
        <div className='absolute bottom-0 left-0 h-[1px] w-0 bg-gray-500 transition-all duration-300 ease-out group-hover:w-full'></div>
      </div>
    );
  },
);

export default DesktopMenuItem;
