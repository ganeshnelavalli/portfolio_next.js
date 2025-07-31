"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code, Users, Award, Target, Star } from "lucide-react"

export function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Code,
      title: "300+ LeetCode Problems",
      description: "Solved over 300 algorithmic problems demonstrating strong problem-solving skills",
      metric: "300+",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Lead - Web & IT Design",
      description: "Leading the Web & IT Design team for Mahotsav 2025, managing technical initiatives",
      metric: "2025",
      color: "text-blue-500",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Hackathon Participant",
      description: "Active participant in multiple hackathons at Vignan's University",
      metric: "Multiple",
      color: "text-purple-500",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Merit Scholarship Holder",
      description: "Recipient of merit-based scholarship for academic excellence",
      metric: "Scholar",
      color: "text-orange-500",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Project Success Rate",
      description: "Maintained 100% project completion rate with high-quality deliverables",
      metric: "100%",
      color: "text-indigo-500",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Star,
      title: "Technical Excellence",
      description: "Recognized for outstanding technical contributions and innovation",
      metric: "Excellence",
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

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
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Milestones and recognitions that showcase my dedication to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${achievement.gradient}`}></div>
                
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.gradient} text-white group-hover:scale-110 transition-transform`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <span className={`text-2xl font-bold ${achievement.color}`}>
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${achievement.gradient}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.7 }}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Continuously striving for excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}