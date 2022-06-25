import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
    <div className='container mx-auto my-2'>
    <div className="flex flex-col sm:flex-row sm:justify-around">
	 <div className="skillset w-100 sm:w-96 mx-4">
        <div className='flex' >
          <Image src="/skill.svg" alt='skills' width={20} height={20} />
          <p className='text-zinc-300 pl-1 mb-1'>Skills</p>
        </div>
				<div className="skill-lockup">
					<span className="skill-name mb">javascript</span><span className="skill-status">50%</span>
					<span className="skill-bar">
						<span className="skill-level javascript"></span>
					</span>
				</div>
				<div className="skill-lockup mr">
					<span className="skill-name mb">React js</span><span className="skill-status">60%</span>
					<span className="skill-bar">
						<span className="skill-level react"></span>
					</span>
				</div>
				<div className="skill-lockup">
					<span className="skill-name mb">Next js</span><span className="skill-status">60%</span>
					<span className="skill-bar">
						<span className="skill-level next"></span>
					</span>
				</div>
				<div className="skill-lockup mr">
					<span className="skill-name mb">CSS & SASS</span><span className="skill-status">70%</span>
					<span className="skill-bar">
						<span className="skill-level css"></span>
					</span>
				</div>
				<div className="skill-lockup">
					<span className="skill-name mb">Responsive Design</span><span className="skill-status">85%</span>
					<span className="skill-bar">
						<span className="skill-level responsive"></span>
					</span>
				</div>
				<div className="skill-lockup mr">
					<span className="skill-name mb">Tailwind & Bootstrap</span><span className="skill-status">70%</span>
					<span className="skill-bar">
						<span className="skill-level tailwind"></span>
					</span>
				</div>
			</div>


      <div className="skillset w-100 sm:w-96 mx-4">
      <div className='flex' >
          <Image src="/knowladge.svg" alt='knowladge' width={20} height={20} />
          <p className='text-zinc-300 pl-1 mb-1'>knowladges</p>
        </div>
				<div className="skill-lockup">
					<span className="skill-name mb">Git</span><span className="skill-status">60%</span>
					<span className="skill-bar">
						<span className="skill-level git"></span>
					</span>
				</div>
        <div className="skill-lockup mr">
					<span className="skill-name mb">SEO basics</span><span className="skill-status">70%</span>
					<span className="skill-bar">
						<span className="skill-level seo"></span>
					</span>
				</div>
        <div className="skill-lockup">
					<span className="skill-name mb">Docker</span><span className="skill-status">35%</span>
					<span className="skill-bar">
						<span className="skill-level docker"></span>
					</span>
				</div>
				<div className="skill-lockup mr">
					<span className="skill-name mb">RESTful Services/APIs</span><span className="skill-status">65%</span>
					<span className="skill-bar">
						<span className="skill-level api"></span>
					</span>
				</div>
				<div className="skill-lockup">
					<span className="skill-name mb">OOP</span><span className="skill-status">60%</span>
					<span className="skill-bar">
						<span className="skill-level oop"></span>
					</span>
				</div>
				<div className="skill-lockup mr">
					<span className="skill-name mb">English</span><span className="skill-status">70%</span>
					<span className="skill-bar">
						<span className="skill-level english"></span>
					</span>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Skills