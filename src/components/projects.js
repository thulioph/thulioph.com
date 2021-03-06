import React from 'react'

import withGrid from './withGrid'
import Loading from './loading'
import { useProjects } from '../hooks/use-projects'
import { getTechIcon } from './getTechIcon'

const Projects = () => {
  const { projects } = useProjects()

  return (
    <React.Fragment>
      <Loading when={!projects || !projects.length}>
        {projects &&
          projects.map(
            ({ id, title, description, link, mainImage, techStack }) => (
              <aside className="project-item" key={id}>
                <h5 className="project-title">{title}</h5>
                <a
                  href={link}
                  title={title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  view site
                </a>

                <div className="project-image">
                  <figure>
                    <img src={mainImage} alt={title} />
                  </figure>
                </div>

                <div className="stack-list">
                  <ul>
                    {techStack.map((tech, idx) => (
                      <li key={idx}>
                        <img src={getTechIcon(tech)} alt={tech} title={tech} />
                      </li>
                    ))}
                  </ul>

                  <p>{description}</p>
                </div>
              </aside>
            )
          )}
      </Loading>
    </React.Fragment>
  )
}

export default withGrid(Projects, {
  id: 'projects',
  title: 'Projects',
  seeAll: 'https://github.com/thulioph'
})