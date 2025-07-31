"use client"

import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { CertificationsSection } from "@/components/sections/certifications"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="experience">
        <ExperienceSection />
      </section>
      
      <section id="certifications">
        <CertificationsSection />
      </section>
      
      <section id="achievements">
        <AchievementsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  )
}