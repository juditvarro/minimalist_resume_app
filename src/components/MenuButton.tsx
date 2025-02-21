import { forwardRef } from 'react';

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

const MenuButton = forwardRef<HTMLButtonElement | null, MenuButtonProps>(
  ({ open, onClick }, ref) => {
    return (
      <button
        ref={ref}
        className='relative h-10 w-10 bg-white text-gray-500 focus:outline-none'
        onClick={onClick}
      >
        <div className='absolute top-1/2 left-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform'>
          <span
            aria-hidden='true'
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>
    );
  },
);

export default MenuButton;
