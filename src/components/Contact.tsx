import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import WaveDivider from './WaveDivider';


export default function Contact() {

  return (
   <section
  id="contact"
className="bg-amber-100 pt-32 pb-0 relative"
>

  
<WaveDivider className="text-amber-100 -translate-y-32" />

{/* CONTACT DETAILS */}
      <div className="absolute top-60 left-20 space-y-4 text-gray-700 font-medium">

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Get in touch
        </h3>

        <a
          href="mailto:samiksha.navale@gmail.com"
          className="flex items-center gap-3 hover:text-pink-500 transition-colors"
        >
          <Mail className="text-pink-400" size={20} />
          <span className="text-sm">samikshanavale43@gmail.com</span>
        </a>

        <div className="flex items-center gap-3">
          <MapPin className="text-pink-400" size={20} />
          <span className="text-sm">Mumbai, India</span>
        </div>

        <a
          href="https://www.linkedin.com/in/samiksha-navale-004b14254/"
          target="_blank"
          className="flex items-center gap-3 hover:text-pink-500 transition-colors"
        >
          <Linkedin className="text-pink-400" size={20} />
          <span className="text-sm">LinkedIn</span>
        </a>

      </div>


<div className="max-w-6xl mx-auto w-full">
    <img
  src="img/contact.png"
  alt="contact me"
  className="w-full h-auto block"
 />

  </div>
</section>

  );
}
