import { memo } from "react";
const About = () => {
  return (
    <>  
      <div id='about' className="sm:container about my-20 mx-auto p-4 md:p-0 rounded relative"> 
      <div  className=" p-2 flex flex-wrap w-full lg:w-4/5 mx-auto"> 
        <div className="bg-cover  opacity-90 bg-bottom w-full md:w-1/3 h-96 md:h-90 overflow-hidden bg-[#3b6aa038] rounded  relative" style={{backgroundImage:"url('mohammadsaeedirad.png')",backgroundPosition:"center center"}}>
        </div>
        <div className="about-card-wrapper h-full w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
          <div className="hidden  md:block absolute z-50 w-28 h-28 lg:w-28 lg:h-28 bg-[#febe3596] rounded md:bottom-2 md:right-12 lg:-top-12 lg:-left-12" ></div> 
            <div className="about-card lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded">
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                <h3>Mohammad Saeedi rad</h3>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">Tehran - Iran</p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">age: 23</p>

                <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
              </div>
              
              <div className="w-full h-52 lg:w-3/5 lg:px-3 text-left">
                <p className="text-md mt-4 lg:mt-0  md:text-left text-sm">
                Hi, <span className='text-[#febf35]' >welcome</span>  to my portfolio.
                as you know my name is mohammad and I'm graduated at <a href='https://iau.ir/fa' className='text-[#febf35]' >islamic azad university</a>  with bachelor degree of computer engineering.
                </p>
                <p className="text-md lg:mt-0 md:text-left text-sm">
                I am a mature, positive and hardworking individual, who always strives to achieve the highest standard possible, at any given task.</p>
                <div className="text-md  mt-4  md:text-left text-sm">
                call me:<a href="tel:+989203185480" className='text-[#febf35]' > +989203185480</a></div>
              </div>
              
              <div className="w-full lg:w-1/5 mt-28 sm:mt-12 lg:mt-0 lg:px-4 text-center md:text-left">
                <a  href="https://www.linkedin.com/in/mohammad-saeedi-rad-54b2341b7/" className="px-4 rounded hover:text-[#febf35] hover:bg-[#031019]  text-[#031019] bg-[#febf35]  w-1/3 lg:w-full py-3">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default memo(About);