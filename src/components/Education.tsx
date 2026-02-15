import { GraduationCap, BookOpen, Award } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Education() {
  const education = [
    {
      degree: 'Honour in AR/VR Technology - 10 CGPA',
      institution: 'Veermata Jijabai Technological Institute, Mumbai',
      period: '2024-2027',
      description: 'Specializing in Augmented and Virtual Reality, developing immersive experiences using Unity, 3D modeling, and interactive environment design.',
      icon: Award,
    },
    {
      degree: 'Bachelor of Technology in Information Technology - 8.3 CGPA',
      institution: 'Veermata Jijabai Technological Institute, Mumbai',
      period: '2024 - 2027',
      description: 'Focused on software development, data structures & algorithms, and building real-world web and mobile applications through hands-on projects.',
      icon: BookOpen,
    },
    {
      degree: 'Diploma in Information Technology - 96.06%',
      institution: 'Government Polytechnic Kolhapur',
      period: '2021 - 2024',
      description: 'Focused on software engineering, algorithms, and web development.',
      icon: GraduationCap,
    },
  ];

  return (
    <>
      <WaveDivider className="text-amber-100 -mt-1" />
      <section id="education" className="bg-purple-200 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Education</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <item.icon size={28} className="text-purple-500" />
                        <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                      </div>
                      <p className="text-purple-600 font-semibold mb-2">{item.institution}</p>
                      <p className="text-sm text-gray-500 mb-3">{item.period}</p>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-4 border-amber-100 shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider className="text-purple-200 -mt-1" flip />
    </>
  );
}
