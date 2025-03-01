import '../../styles/output-stars.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="
          flex
          flex-col-reverse
          xl:h-full
          xl:flex-row
          xl:items-center
          xl:justify-center
    ">
      <div className="
            sun 
            hidden
            md:block
            md:left-[40rem]
            md:top-[-24rem]
            lg:left-[58rem]
            lg:top-[-26rem]
            xl:left-[50rem]
            xl:top-[-22rem]
      "/>

      <div className="
            p-4
            flex
            w-full
            flex-col
            lg:justify-center
      ">

        <div className='
              py-8
              px-4
              z-10
              w-[95%]
              mx-auto
              flex
              flex-col
              md:my-10
              md:w-[90%]
              lg:py-16
              xl:px-0
              xl:w-[80%]
              blur__card
        '>
          {/* Title */}
          <div className="flex 
                          flex-col
                          items-center
                          pb-4">

            <h2 className="text-white 
                             font-bold
                             text-3xl
                             4k:text-[3rem]">
              CORN
            </h2>
            <img
              src="assets/line2.svg"
              className="4k:w-[35%] 4k:pt-2 animate-pulse"
              alt='Pulsing Line'/>
            <h1 className="
                          text-7xl
                        text-white 
                          font-extrabold
                          lg:text-7xl
                          4k:text-[8rem]
                          blink__word">
              MARTIAN
            </h1>
          </div>
          {/* Description */}


          <p className="
              text-xl
              text-center
              font-medium
            text-slate-500 
              self-center
              lg:pb-6
              xl:w-4/5
              4k:text-2xl
            ">
            Welcome to Corn Martian, an interactive simulation exploring the challenges and solutions of growing crops on Mars. Using real-world data and scientific principles, our platform lets you experiment with different conditions, technologies, and strategies to sustain agriculture on the Red Planet. Can you overcome Mars’ harsh environment and cultivate a thriving farm? Start your journey today!
          </p>
        </div>
      </div>
      <div className="z-1 flex justify-center items-center w-full max-h-[80vh]">
        <img src="/assets/mars/M2.webp" alt='Mars'/>
      </div>

    </div>
  )
}

export default Home