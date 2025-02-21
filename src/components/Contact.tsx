import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ContactButton from './ContactButton';
import contacts from '../assets/contact.json';
import { forwardRef } from 'react';

const Contact = forwardRef<
  HTMLDivElement | null,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const isVisible = useIntersectionObserver(ref, 0.5);

  return (
    <div
      ref={ref}
      className={`flex h-screen w-full items-center bg-white py-20 ${isVisible ? 'opacity-100' : 'opacity-0'} justify-evenly transition-opacity duration-1000`}
      {...props}
    >
      {contacts.map((contact) => (
        <ContactButton
          key={contact.text}
          text={contact.text}
          url={contact.url}
        />
      ))}
    </div>
  );
});

export default Contact;
