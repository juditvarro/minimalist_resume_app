import { ExperienceData } from './Experience';

interface MobileExperienceProps {
  experience: ExperienceData[];
}

const MobileExperience = (props: MobileExperienceProps) => {
  return (
    <div className='block md:hidden'>
      {props.experience.map((experience) => (
        <div key={experience.company} className='my-10'>
          <h2 className='text-xl text-primary'>{experience.company}</h2>
          <div className='my-4 flex flex-col justify-between sm:flex-row'>
            <h3 className='text-primary'>{experience.city}</h3>
            <h3 className='text-primary'>{experience.period}</h3>
          </div>
          <p className='text-justify text-md leading-normal'>
            {experience.description}
          </p>
          <div className='my-4 border-t border-gray-400'></div>
          <div className='flex flex-row flex-wrap justify-center space-x-4'>
            {experience.skills.map((skill) => (
              <div key={skill} className='text-md'>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileExperience;
