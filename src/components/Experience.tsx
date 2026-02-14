import { Briefcase, Code2, Rocket } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Experience() {
  const experiences = [
    {
      title: 'Python Django Developer Intern',
      company: 'ECS Technologies',
      period: 'June 2023 - August 2023',
      description: 'Designed and developed application features with focus on clean architecture, efficient data handling, and maintainable code. Implemented core functionalities, optimized performance, and enhanced user experience through responsive interfaces.',
      achievements: [
        'Implemented core features using Django and REST framework',
        'Collaborated with cross-functional teams to deliver project milestones',
      ],
      icon: Code2,
    },
    {
      title: 'ITSA President',
      company: 'Government Polytechnic Kolhapur',
      period: '2023 - 2024',
      description: 'Led cross-functional teams, student initiatives, and large-scale technical and cultural events, driving leadership, coordination, and campus engagement.',
      achievements: [
  'Organized 5+ technical events handling planning and coordination.',
  'Conducted 3+ non-technical events with smooth execution.',
  'Led a team of 20+ members and managed task delegation.',
  'Served as liaison between students and college administration.',
],

      icon: Rocket,
    },

    {
      title: 'Freelance Creative & Software Developer',
      company: 'Wellness and Fitness Startup',
      period: '2024-2025',
      description: 'Worked as a freelance developer and graphic designer, creating a health-report desktop application and designing promotional creatives for wellness initiatives, combining technical development with visual communication.',
      achievements: [
         'Built a Python desktop app to process device data and auto-generate customized PDF reports.',
  'Designed structured report layouts for better readability and presentation.',
  'Created posters and digital creatives for wellness and community fitness programs.',
 ],
      icon: Code2,
    },
    {
      title: 'Chief Design Officer',
      company: 'Rangawardhan - VJTI',
      period: '2025 - 2026',
      description: 'Owned end-to-end design strategy, branding, visual identity, and creative execution for events and campaigns.',
      achievements: [
        'Created 50+ design assets for events and campaigns',
        'Collaborated with design team',
        'Lead design team for 3+ major events, ensuring cohesive visual identity',
      ],
      icon: Briefcase,
    },

    {
      title: 'Head of Design',
      company: 'Swachh VJTI - VJTI',
      period: '2025 - 2026',
      description: 'Contributed to the design and branding initiatives for Swachh VJTI by creating visual campaigns, merchandise, and social media creatives to promote cleanliness awareness and student engagement.',
      achievements: [
  'Designed tote bags and official merchandise for the campaign.',
  'Created eye-catching posters and digital creatives for social media outreach.',
  'Collaborated with the team to produce visual content for multiple initiatives.',
  'Helped increase campaign visibility and engagement across campus.',
],

      icon: Rocket,
    },
  ];

  return (
    <>
      <section id="experience" className="bg-amber-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Experience</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-400"></div>

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <item.icon size={28} className="text-pink-500" />
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-pink-600 font-semibold mb-2">{item.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                      <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

                      <div className="space-y-2">
                        <p className="font-semibold text-gray-800 text-sm">Key Achievements:</p>
                        <ul className={`space-y-1 ${index % 2 === 0 ? '' : 'md:list-inside'}`}>
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-pink-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full border-4 border-purple-200 shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider className="text-amber-100 -mt-1" />
    </>
  );
}
