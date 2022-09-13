import Image from "next/image";
import TypeAnimation from "react-type-animation";
const Welcome = () => {
  const h1 = "Hi, I'm mohammad";
  return (
    <div className='welcome welcome-container  relative h-screen'>
      <Image
        src='/back.svg'
        alt='mouse scroll'
        layout='fill'
        objectFit='cover'
        quality={100}
      />
      <div className='z-10'>
        <div className='text-white  w-fit flex justify-center'>
          <h1 className='text-xl font-mono sm:text-[2.7rem] mb-4 font-medium'>
            {h1}
          </h1>
        </div>
        <div className='flex flex-row text-white text-md sm:text-2xl font-mono'>
          <p className='mr-1'>I'm a </p>
          <div className='w-fit text-yellow-500  font-semibold'>
            <TypeAnimation
              cursor={true}
              sequence={[
                " FrontEnd",
                2000,
                " React",
                2000,
                " Next js",
                2000,
                " javascript",
                2000,
              ]}
              wrapper='h2'
              repeat={Infinity}
            />
          </div>
          <p>developer </p>
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  );
};

export default Welcome;
