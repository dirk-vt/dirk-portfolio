import React from 'react'

import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/typescript.svg',
      label: 'TypeScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) =>
                      (
                        <SkillCard   // Add the reveal-up class to the SkillCard component to make it appear as it scrolls into view.  You can use the provided SkillCard component as a reference.  If you want to add more features to the SkillCard component, you can customize it further.  For example, you can add hover effects, animations, or even a tooltip with additional information.  You can also use the provided CSS classes and animations to achieve the desired
                            key={key}
                            imgSrc={imgSrc} 
                            label={label}
                            desc={desc}
                            className="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
