"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"

export function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "MERN Stack Development",
      issuer: "ByteXL",
      date: "2024",
      description: "Comprehensive full-stack development certification covering MongoDB, Express.js, React, and Node.js",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "REST APIs"],
      credentialUrl: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Python Programming",
      issuer: "HackerRank & CodeChef",
      date: "2024",
      description: "Advanced Python programming certification with focus on algorithms and data structures",
      skills: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
      credentialUrl: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "RoboCopuler",
      date: "2024",
      description: "Comprehensive machine learning course covering supervised and unsupervised learning techniques",
      skills: ["Machine Learning", "TensorFlow", "Scikit-learn", "Data Analysis"],
      credentialUrl: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Safety and Ethics",
      issuer: "NPTEL",
      date: "2024",
      description: "Understanding ethical implications and safety considerations in AI development",
      skills: ["AI Ethics", "Safety Protocols", "Responsible AI", "Governance"],
      credentialUrl: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Cambridge English PET",
      issuer: "Cambridge Assessment English",
      date: "2023",
      description: "Preliminary English Test certification demonstrating intermediate English proficiency",
      skills: ["English Proficiency", "Communication", "Writing", "Speaking"],
      credentialUrl: "#",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.gradient} text-white group-hover:scale-110 transition-transform`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors mb-2">
                    {cert.title}
                  </CardTitle>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="text-xs hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(cert.credentialUrl, '_blank')}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}