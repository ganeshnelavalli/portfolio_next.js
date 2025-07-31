"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react"

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experience = {
    title: "Full Stack Developer Intern",
    organization: "Vignan's Foundation for Science, Technology and Research",
    duration: "Aug 2025 – July 2026",
    location: "Guntur, Andhra Pradesh",
    description: "Contributing to innovative web development projects and gaining hands-on experience in full-stack development, database optimization, and cloud deployment.",
    responsibilities: [
      "Built and maintained responsive web applications using MERN stack",
      "Optimized database queries and improved application performance by 40%",
      "Collaborated with cross-functional teams on multiple projects",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and followed agile development practices",
      "Deployed applications on cloud platforms with CI/CD pipelines"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Git", "Docker"]
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience and contributions in software development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Building className="w-5 h-5" />
                    <span className="font-semibold">{experience.organization}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                {experience.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Key Responsibilities & Achievements
                </h4>
                <div className="grid gap-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <Badge 
                        variant="secondary"
                        className="hover:scale-105 transition-transform cursor-default"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}