import React, { forwardRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Home = forwardRef<HTMLDivElement | null, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    const isVisible = useIntersectionObserver(ref);

    return (
      <div
        ref={ref}
        {...props}
        className={`flex h-screen w-full flex-col items-start justify-center bg-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      >
        <div className='flex flex-col'>
          <h1 className='text-4xl text-gray-700 md:text-5xl'>Anna Takacs</h1>
          <div className='animated-line-from-left my-2 h-[1px] bg-gray-500'></div>
          <h2 className='text-md md:text-xl text-gray-900'>DevOps & SRE engineer</h2>
        </div>
      </div>
    );
  },
);

export default Home;
