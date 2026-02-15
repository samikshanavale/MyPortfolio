import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'about', label: 'About', icon: `${import.meta.env.BASE_URL}icons/aboutme.png` },
  { id: 'education', label: 'Education', icon: `${import.meta.env.BASE_URL}icons/education.png` },
  { id: 'experience', label: 'Experience', icon: `${import.meta.env.BASE_URL}icons/experience.png` },
  { id: 'projects', label: 'Projects', icon: `${import.meta.env.BASE_URL}icons/projects.png` },
  { id: 'contact', label: 'Contact', icon: `${import.meta.env.BASE_URL}icons/contact.png` },
];


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0  z-50 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16 font-allerta">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-4"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-20">
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className="flex items-center gap-2 hover:text-purple-400 transition group"
    >
      <img
        src={item.icon}
        alt={item.label}
        className="w-17 h-14 object-contain group-hover:scale-110 transition"
      />
      {item.label}
    </button>
  ))}
</div>

        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
  {navItems.map((item) => (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className="flex items-center gap-3 w-full text-left py-2 hover:text-purple-400 transition"
    >
      <img
        src={item.icon}
        alt={item.label}
        className="w-17 h-14 object-contain"
      />
      {item.label}
    </button>
  ))}
</div>

        )}
      </div>
    </nav>
  );
}
