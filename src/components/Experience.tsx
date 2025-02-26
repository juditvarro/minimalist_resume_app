import useIntersectionObserver from '../hooks/useIntersectionObserver';
import experienceData from '../assets/experience.json';
import MobileExperience from './MobileExperience';
import DesktopExperience from './DesktopExperience';
import React, { forwardRef } from 'react';

export interface ExperienceData {
  company: string;
  city: string;
  period: string;
  description: string;
  skills: string[];
}

const Experience = forwardRef<
  HTMLDivElement | null,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const isVisible = useIntersectionObserver(ref);

  return (
    <div
      ref={ref}
      className={`min-h-screen flex w-full flex-col items-start bg-white py-28 md:py-34 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      {...props}
    >
      <h1 className='text-2xl md:text-3xl xl:text-4xl text-primary'>Experience</h1>

      <MobileExperience experience={experienceData} />
      <DesktopExperience experience={experienceData} />
    </div>
  );
});

export default Experience;
