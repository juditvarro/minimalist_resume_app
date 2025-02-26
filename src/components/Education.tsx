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
      <h1 className='text-primary text-2xl md:text-3xl xl:text-4xl'>
        Education
      </h1>

      <div className='w-full'>
        {educationData.map((education) => (
          <div key={education.school} className='relative my-8 flex flex-row'>
            <div className='flex flex-1 flex-col'>
              <div className='text-md text-primary md:text-lg lg:text-2xl'>
                {education.school}
              </div>
              <div className='md:text-md text-secondary text-sm lg:text-xl'>
                {education.city}
              </div>
              <div className='md:text-md text-secondary text-sm lg:text-xl'>
                {education.period}
              </div>
            </div>

            <div className='text-md text-primary flex-1 md:text-lg lg:text-2xl'>
              {education.subject}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;
