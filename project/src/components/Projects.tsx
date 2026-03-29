import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sprout, Dumbbell, Heart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Organic Farming Solutions',
    description: 'A comprehensive platform providing organic farming solutions, care advice, and marketing strategies for sustainable agriculture.',
    icon: Sprout,
    gradient: 'from-green-400 to-emerald-600',
  },
  {
    id: 2,
    title: 'Workout Plan Manager',
    description: 'Smart fitness application that creates personalized workout plans, tracks progress, and helps users achieve their fitness goals.',
    icon: Dumbbell,
    gradient: 'from-orange-400 to-red-600',
  },
  {
    id: 3,
    title: 'Relationship Advisor',
    description: 'AI-powered relationship guidance software providing personalized advice and insights for healthier connections.',
    icon: Heart,
    gradient: 'from-pink-400 to-purple-600',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Innovative solutions built with passion</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500"></div>

                  <div className="relative flex items-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
