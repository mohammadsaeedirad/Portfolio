import Image from "next/image"
import TypeAnimation from 'react-type-animation';
const Welcome = () => {
  const h1="Hi, I'm mohammad"
  return (
    
    <div className="welcome welcome-container relative">
      <div className="absolute bottom-8 animate-bounce cursor-pointer"> <a href="#about"><Image src="/mouse-cursor.png" width={80} height={80} /></a></div>
      <div>
          <div className="text-white font-mono w-fit flex justify center"  >    
          <h1 className="text-md sm:text-3xl " >{h1}</h1></div>

           <div className="flex flex-row text-white text-sm sm:text-xl" >
           <p className="mr-1" >I'm a </p>
           <div className="w-fit text-[#4087b3]">
           <TypeAnimation
            cursor={true}
            sequence={[
              ' FrontEnd',
              2000,
              ' React',
              2000,
              ' Next js',
              2000,
              ' javascript',
              2000,  
            ]}
            wrapper="h2"
            repeat={Infinity}
           />
           </div>
 
           <p>developer </p>
            </div>

      </div>
    </div>
  )
}

export default Welcome;