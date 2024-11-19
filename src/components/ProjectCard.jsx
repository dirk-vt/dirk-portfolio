import React from 'react'

import PropTypes from 'prop-types'

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-300/20 hover:bg-zinc-300/50 active:bg-zinc-300/60 ring-1 ring-inset ring-zinc-250/50 transition-colors" + classes}>
      
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
             src={imgSrc}
             alt={title}
             loading='lazy'
             className='img-cover'
            />
        </figure>

        <div className="flex items-center justify-between">

            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span
                          key={key}
                          className="h-8 text-sm text-zinc-900 bg-zinc-500/10 grid items-center px-3 rounded-lg"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center bg-violet-700 text-zinc-50 shrink-0">
                <span 
                  className="material-symbols-rounded"
                  aria-hidden="true"
                >
                    arrow_outward
                </span>
            </div>

        </div>

        <a 
          href={projectLink}
          target="_blank"
          className="absolute inset-0"
        ></a>

    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
  
}

export default ProjectCard
