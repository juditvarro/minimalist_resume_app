import { useState } from "react";
import MenuButton from "./MenuButton";
import DesktopMenuItem from "./DesktopMenuItem";
import MobileMenuItem from "./MobileMenuItem";

interface HeaderProps {
  sections: string[];
}

const Header = ({ sections }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 right-0 p-6 w-full flex justify-between">
      <div className="md:hidden absolute top-6 right-6">
        <MenuButton open={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </div>

      <div className="hidden md:flex space-x-8 ml-auto">
        {sections.map((section) => (
          <DesktopMenuItem key={section} text={section} />
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white w-full p-6 shadow-lg opacity-100 animate-menuOpen">
          <div className="flex flex-col items-end space-y-4">
            {sections.map((section) => (
              <MobileMenuItem key={section} text={section} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
