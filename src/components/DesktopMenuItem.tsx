interface DesktopMenuItemProps {
  text: string;
}

const DesktopMenuItem = ({ text }: DesktopMenuItemProps) => {
  return (
    <div className="button-wrapper">
      <a href={`#${text.toLowerCase()}`} className="text-gray-500 md:text-2xl">
        {text}
      </a>
      <div className="line"></div>
    </div>
  );
};

export default DesktopMenuItem;
