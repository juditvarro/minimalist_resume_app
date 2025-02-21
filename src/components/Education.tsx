import useIntersectionObserver from '../hooks/useIntersectionObserver';
import educationData from '../assets/education.json';
import { forwardRef } from 'react';

const Education = forwardRef<
  HTMLDivElement | null,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const isVisible = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={`flex w-full flex-col items-start bg-white py-28 md:py-34 ${isVisible ? 'opacity-100' : 'opacity-0'} relative transition-opacity duration-1000`}
      {...props}
    >
      <h1 className='text-2xl md:text-3xl xl:text-4xl text-gray-500'>Education</h1>

      <div className='w-full'>
        {educationData.map((education) => (
          <div key={education.school} className='relative my-8 flex flex-row'>
            <div className='flex flex-1 flex-col'>
              <div className='text-md md:text-lg lg:text-2xl text-gray-700'>{education.school}</div>
              <div className='text-sm md:text-md lg:text-xl text-gray-500'>{education.city}</div>
              <div className='text-sm md:text-md lg:text-xl text-gray-500'>{education.period}</div>
            </div>

            <div className='flex-1 text-md md:text-lg lg:text-2xl text-gray-700'>
              {education.subject}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;
