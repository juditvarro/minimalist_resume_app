interface ContactButtonProps {
  text: string;
  url: string;
}

const ContactButton = (props: ContactButtonProps) => {
  const handleClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(props.url, '_blank');
    }
  };

  return (
    <div className='group relative'>
      <button
        className='text-xl md:text-2xl xl:text-3xl text-primary'
        onClick={() => handleClick(props.url)}
      >
        {props.text}
      </button>
      <div className='absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full'></div>
    </div>
  );
};

export default ContactButton;
