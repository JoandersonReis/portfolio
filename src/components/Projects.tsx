'use client'

import { projects } from '@/lib/projects'
import { slideResponsiveSettings } from '@/lib/slideResponsiveSettings'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import ProjectCard from './ProjectCard'
import Section from './Section'
import SlideArrow from './SlideArrow'

const Projects = () => {
  return (
    <Section title="PROJETOS" subtitle="Principais Projetos" id="projects">
      <Slide
        cssClass="slide"
        responsive={slideResponsiveSettings}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        prevArrow={
          <SlideArrow>
            <ChevronLeft size={18} color="#fff" />
          </SlideArrow>
        }
        nextArrow={
          <SlideArrow>
            <ChevronRight size={18} color="#fff" />
          </SlideArrow>
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Slide>
    </Section>
  )
}

export default Projects
