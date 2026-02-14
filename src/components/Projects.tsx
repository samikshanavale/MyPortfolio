import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    
    {
      title: 'Swachh Merch Design',
      description: 'Designed tote bags and official merchandise, developing impactful visuals that enhanced the committee’s branding.',
      image: 'src/img/projs/merch.png',
      tags: ['Canva', 'Branding', 'Merchandise Design'],
      github: '',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
    {
      title: 'Virtual Classroom',
      description: 'Built a 3D replica of our classroom in Unity, recreating the environment with accurate layout, objects, and basic scene interaction.',
      image: 'src/img/projs/classroom.jpg',
      tags: ['Unity', 'Blender', 'Virtual Reality', 'Interactive Design'],
      github: '',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
    {
      title: 'popARt',
      description: 'Developed an AR experience where scanning a specific image triggers a corresponding 3D model to appear, demonstrating image tracking and real-time object placement.',
      image: 'src/img/projs/popart.jpg',
      tags: ['Unity', 'Blender', 'Augmented Reality'],
      github: '',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
    {
      title: 'Baymax - Big Hero 6',
      description: 'Created a 3D Baymax character model in Blender, using modeling and sculpting techniques to achieve a smooth and detailed design.',
      image: 'src/img/projs/baymax2.png',
      tags: ['Blender', '3D Modeling', 'Sculpting'],
      github: '',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
    {
      title: 'VJTI-OLX',
      description: 'Built a full-stack marketplace with responsive UI and user authentication, along with backend APIs for product listings and user profiles.',
      image: 'src/img/projs/vjtiolx.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/samikshanavale/vjti-olx',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
    {
      title: 'Recipe Website',
      description: 'Recipe website using Django, allowing users to view and manage recipes through a clean and user-friendly interface.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Django', 'Mysql', 'Python'],
      github: '',
      demo: 'https://hot-playroom-950.notion.site/UNDER-PROCESS-Projects-bca720f0f979829896cc81dceb77caec?pvs=143',
    },
  ];

  return (
    <>
      <section id="projects" className="bg-purple-200 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Projects</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <WaveDivider className="text-purple-200 -mt-0" /> */}
    </>
  );
}
