import React from 'react'

function hero() {
  return (
    <div>
      <div className="flex ">
        <div className="flex flex-col w-full border-1">
          <div className="py-10 border-b-1">
            <div className="">
              <h1 className='text-4xl text-center font-bold'>Build and deploy on the AI Cloud.</h1>
              <p className="text-md text-center mt-5">Vercel provides the developer tools and cloud infrastructure <br /> to build, scale, and secure a faster, more personalized web.</p>
            </div>
            <div className="flex justify-center items-center gap-8 mt-10">
              <a href="/" className="py-3 px-5 text-sm font-medium border-1 bg-white text-black hover:bg-white/80  rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Start Deploying</a>
              <a href="/" className="py-3 px-10 text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Get a Demo</a>
            </div>

          </div>
          <div className="py-24">
            <h1 className='text-3xl text-center font-bold'>Develop with your favorite tools <br />
            Launch globally, instantly  Keep pushing </h1>
          </div>
          <hr className='mb-5'></hr>
        </div>
      </div>
    </div>
  )
}

export default hero