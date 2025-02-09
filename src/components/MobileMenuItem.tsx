interface MobileMenuItemProps {
  text: string;
}

const MobileMenuItem = ({ text }: MobileMenuItemProps) => {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      className="text-gray-500 text-3xl animate-slideIn delay-200"
    >
      {text}
    </a>
  );
};

export default MobileMenuItem;
