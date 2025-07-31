"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Database, Brain, Globe, Code } from "lucide-react"

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Hospital Management Backend",
      description: "A comprehensive backend system for managing hospital operations, patient records, and staff scheduling with RESTful APIs and secure authentication.",
      icon: Database,
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      features: [
        "Patient registration and management",
        "Doctor scheduling system",
        "RESTful API endpoints",
        "Secure authentication"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/ganeshnelavalli/Hospital-Management-Backend",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Amazon Clone",
      description: "Full-featured e-commerce platform inspired by Amazon with product catalog, user authentication, and shopping cart functionality.",
      icon: Globe,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      features: [
        "Product catalog and search",
        "User authentication",
        "Shopping cart system",
        "Order management"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/ganeshnelavalli/Amazon",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Amazon Clone API",
      description: "Backend API for the Amazon clone project with RESTful endpoints for product management, user authentication, and order processing.",
      icon: Code,
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      features: [
        "Product management APIs",
        "User authentication",
        "Order processing",
        "Database integration"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/ganeshnelavalli/Amazon-Clone-API",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Online Doctor Booking App",
      description: "Web application for booking doctor appointments online with real-time availability checking and appointment management.",
      icon: Database,
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Doctor appointment booking",
        "Real-time availability",
        "User dashboard",
        "Appointment history"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/ganeshnelavalli/Online-Doctor-Booking-App",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Technology Projects",
      description: "Collection of web development projects showcasing various technologies and frameworks for modern web applications.",
      icon: Code,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      features: [
        "Responsive web design",
        "Interactive UI components",
        "Form validation",
        "Dynamic content"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/ganeshnelavalli/Web-technology",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-40 h-40 bg-purple-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-500/6 rounded-full blur-2xl"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work in full-stack development, AI, and innovative web solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn hover:scale-105 transition-all"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn hover:scale-105 transition-all"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}