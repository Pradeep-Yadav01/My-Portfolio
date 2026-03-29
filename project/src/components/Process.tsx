import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Pencil, Wand2, Play } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'Concept',
    description: 'Brainstorming and ideation to define the vision and goals of the project.',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Creating beautiful, intuitive interfaces with attention to every detail.',
    icon: Pencil,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    title: 'Animate',
    description: 'Bringing designs to life with smooth, engaging animations and interactions.',
    icon: Wand2,
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    title: 'Render',
    description: 'Delivering polished, production-ready solutions that exceed expectations.',
    icon: Play,
    color: 'from-green-400 to-emerald-500',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Process
          </h2>
          <p className="text-gray-400 text-lg">From idea to reality</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl relative z-10`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      </motion.div>

                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-900 rounded-full border-4 border-gray-700 hidden md:flex items-center justify-center z-20">
                        <span className="text-sm font-bold text-gray-400">{step.id}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 mt-4">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
