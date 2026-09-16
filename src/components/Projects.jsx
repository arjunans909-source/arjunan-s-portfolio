import projects from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <p>A few things I've built while learning and practicing.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project-row" key={project.title}>
              <div className="meta">{project.meta}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo</a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">Source code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
