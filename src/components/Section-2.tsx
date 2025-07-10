function Section2() {
    return (
        <div>
            <div className="relative flex flex-col w-full lg:p-12 border-1 select-none p-5">
                <img src="analytics-large-dark.avif" alt="chart-image-is-missing-lol" className="mt-30 w-full"/>
                <div className="absolute top-5">
                    <h1 className='text-white/50 text-sm md:text-xl font-semibold'>Observability</h1>
                    <h1 className='md:text-2xl md:mt-5 font-semibold'>Route-aware observability.</h1>
                    <p className="md:text-2xl lg:text-3xl text-white/50">Monitor and analyze the performance<br /> and traffic of your projects.</p>
                </div>
            </div>

            <div className="md:flex ">
                <div className="flex flex-col md:w-1/2 gap-5 md:gap-10 lg:gap-12 p-5 md:p-10 lg:p-12 border-1">
                    <div>
                        <h2 className="text-sm text-white/50">Vercel AI Gateway</h2>
                        <p className="lg:text-2xl text-white/50 font-semibold mt-3 md:mt-5">
                            <strong className="text-white">Deploy AI in seconds. </strong>Access all major models through a single, unified interface and shared AI credit wallet.</p>
                    </div>
                    <div className="w-full h-full mt-15">
                        <img src="ai-gateway-full-dark.svg" className="w-full" />
                    </div>
                </div>

                <div className="flex-col md:w-1/2 gap-5 md:gap-10 lg:gap-12 p-5 md:p-10 lg:p-12 border-1">
                    <div>
                        <h2 className="text-sm text-white/50">Instant Rollbacks</h2>
                        <p className="lg:text-2xl text-white/50 font-semibold my-3 md:mt-5 md:mb-10">
                            <strong className="text-white">Go ahead, deploy on Friday.</strong> Safely manage releases with automated deployments and instant rollbacks.</p>
                    </div>
                    <div className="flex flex-col gap-40">
                        <div className="flex items-center gap-3 lg:gap-6 w-fit border-1 rounded-xl p-3 select-none">
                            <div>
                                <div className="flex justify-between items-center w-full text-white/50">
                                    <p className='hidden lg:flex text-xs'>vercel-site/<strong className="text-sm text-white">jvjb4ynna</strong>
                                    </p>
                                    <span className="text-xs">1d ago</span>
                                </div>
                                <div className="flex font-medium items-center justify-between gap-1 lg:gap-2 text-xs lg:text-sm w-full pt-1">
                                    <span className="text-white/50">-o-</span>
                                    <span className='text-xs text-white/50'>ba5f55f</span>
                                    <span>Update bentobox design</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center h-8 w-8 border-4 border-green-500 rounded-full">
                                <span className="text-xs">98</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-auto gap-3 lg:gap-6 w-fit border-white/20 border-dashed border-1 rounded-xl p-3 select-none">
                            <div>
                                <div className="flex justify-between items-center w-full text-white/50">
                                    <p className='hidden lg:flex text-xs'>vercel-site/<strong className="text-sm text-white">gigj178pv</strong>
                                    </p>
                                    <span className="text-xs">10m ago</span>
                                </div>
                                <div className="flex font-medium items-center justify-between gap-1 lg:gap-2 text-xs lg:text-sm w-full pt-1">
                                    <span className="text-white/50">-o-</span>
                                    <span className='text-xs text-white/50'>bx012mm</span>
                                    <span>Fix ESLint error on query</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center h-8 w-8 border-4 border-red-500 rounded-full">
                                <span className="text-xs">28</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2