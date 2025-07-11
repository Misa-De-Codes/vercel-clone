function Section3() {
    return (
        <div>
            <div className="md:flex flex-col border-1">
                <div className="py-12 px-5">
                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-5 items-center lg:text-2xl font-medium h-10 w-full">
                        <div className="flex justify-center items-center">
                            <h1 className="">Scale your</h1>
                            <a href="/" className="py-3 px-5 ml-3 text-xs lg:text-sm font-medium border-1 bg-white/5 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Enterprise</a>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="">without compromising</h1>
                            <a href="/" className="py-3 px-5 ml-3 text-xs lg:text-sm font-medium border-1 bg-white/5 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Security</a>
                        </div>
                    </div>
                </div>
                <hr className='mb-5'></hr>
                <div className="relatuve flex flex-col md:flex-row border-1">
                    <div className="md:absolute w-fit md:max-w-3/5 p-8">
                        <div className="md:text-xl lg:text-3xl text-center md:text-start font-semibold text-white/50 mb-5 lg:mb-8" >
                            <h2><b className="text-white">Ready to deploy?</b> Start building with a free account. Speak to an expert for your <b className='text-blue-500'>Pro</b> or <strong className="text-purple-500">Enterprise</strong>  needs.</h2>
                        </div >
                        <div className="flex justify-center md:justify-start gap-5">
                            <a href="/" className="p-3 md:px-5 text-xs lg:text-sm font-medium border-1 bg-white text-black hover:bg-white/80 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Start Deploying</a>
                            <a href="/" className="px-2 py-3 text-xs lg:text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Talk to an Expert</a>
                        </div>
                    </div>
                    <div className="hidden md:flex p-5 md:p-8 lg:p-15 w-full md:w-1/3 md:h-60">
                    </div>
                    <div className="hidden md:flex md:py-15 border-x-1 md:border-white/20 border-dashed md:w-1/3 h-45 md:h-60"></div>
                    <div className="grid justify-items-center border-t-1 border-dashed p-8 lg:p-10 w-full md:w-1/3 md:h-60">
                        <p className="h-fit text-center md:text-xl">Explore Vercel Enterprise <span className="text-white/50">with an interactive product tour, trial, or a personalized demo</span></p>
                        <div className="mt-5 md:mt-7">
                            <a href="/" className="py-3 px-5 text-xs lg:text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Explore Enterprise</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3