import { ExperienceData } from './Experience';

interface DesktopExperienceProps {
  experience: ExperienceData[];
}

const DesktopExperience = (props: DesktopExperienceProps) => {
  return (
    <div className='hidden md:block'>
      {props.experience.map((experience) => (
        <div key={experience.company} className='my-8'>
          <h2 className='text-xl text-gray-500 xl:text-2xl'>
            {experience.company}
          </h2>

          <div className='grid grid-cols-12 gap-x-16'>
            <div className='col-span-10'>
              <div className='my-2 flex justify-between'>
                <h3 className='text-lg text-gray-500 md:text-xl xl:text-2xl'>
                  {experience.city}
                </h3>
                <h3 className='text-lg text-gray-500 md:text-xl xl:text-2xl'>
                  {experience.period}
                </h3>
              </div>
              <p className='text-justify md:text-xl xl:text-2xl leading-normal'>
                {experience.description}
              </p>
            </div>

            <div className='col-span-2'>
              {experience.skills.map((skill) => (
                <div key={skill} className='md:text-xl xl:text-2xl'>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopExperience;
