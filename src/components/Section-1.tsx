function Section1() {
    return (
        <div>
            <div className="md:flex">
                <div className="flex flex-col md:w-1/2 gap-5 md:gap-12 p-5 lg:p-12 border-1">
                    <div>
                        <h2 className="text-sm text-white/50">Git-connected Deploys</h2>
                        <p className="lg:text-2xl font-semibold mt-3 md:mt-5">From localhost to https, in seconds. Deploy from Git or your CLI.</p>
                    </div>
                    <div>
                        <div className="md:w-80 rounded-md border-2 mr-5 md:mr-auto select-none">
                            <div className="flex gap-1 p-2">
                                <div className="rounded-full bg-white/15 p-1"></div>
                                <div className="rounded-full bg-white/15 p-1"></div>
                                <div className="rounded-full bg-white/15 p-1"></div>
                            </div>
                            <div className="flex font-mono flex-col gap-1 text-xs text-nowrap px-3 pb-3 bg-gradient-to-r from-white/75 via-white/50 to-white/5 bg-clip-text text-transparent">
                                <p>1 &nbsp; console.log("Hello Susie...");</p>
                                <p>{`2 \u00A0 if(true){`}</p>
                                <p>3 &nbsp; console.log("Happy Birth Day!!!");</p>
                                <p>{`4 \u00A0 };`}</p>
                                <p>5 &nbsp; Redirect to Rickroll</p>
                                <p>6 &nbsp; window.location.href = "https://www.youtube.com/watch?v=dQ</p>
                                <p className="bg-gradient-to-r from-white/10 via-white/5 to-transparent">{`7 \u00A0 })();|`}</p>
                            </div>
                        </div>
                        <div className="relative -top-6 left-5 lg:left-24 md:w-80 h-45 max-w-65 md:max-w-none rounded-md border-2 backdrop-brightness-0 overflow-y-hidden">
                            <div className="relative flex justify-center items-center p-1 select-none">
                                <div className="absolute left-2 flex gap-1">
                                    <div className="rounded-full bg-red-500 p-1"></div>
                                    <div className="rounded-full bg-blue-500 p-1"></div>
                                    <div className="rounded-full bg-green-500 p-1"></div>
                                </div>
                                <p className="flex items-center font-semibold text-xs text-white/75 ">vercel.com</p>
                            </div>
                            <div className="flex flex-col bg-white/5 text-white/50 items-center justify-center border-1 mx-2 my-1 select-none">
                                <p className="text-2xl w-fit mt-5 ">Welcome to Shopify</p>
                                <p className="text-xs w-fit text-center mt-2"> we sell not because we love you but because we love money</p>
                                <div className="absolute top-25 rounded-full animate-bounce p-5 bg-yellow-500/20 -z-1"></div>
                                <div className="relative top-5 p-10 bg-white/10 rotate-45"></div>
                                <div className="relative -top-12 left-10 p-10 bg-white/10 rotate-45"></div>
                                <div className="relative -top-31 right-10 p-10 bg-white/10 rotate-45"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:w-1/2 gap-5 md:gap-12 p-5 md:p-12 border-1">
                    <div>
                        <h2 className="text-sm text-white/50">Collaborative Pre-production</h2>
                        <p className="lg:text-2xl font-semibold mt-3 md:mt-5">Every deploy is remarkable. Chat with your team on real, production-grade UI, not just designs.</p>
                    </div>
                    <div className="flex flex-col gap-5 select-none">
                        <div>
                            <p className='w-fit border-1 rounded-t-xl rounded-r-xl p-3'>hellow susie</p>
                        </div>
                        <div className="flex justify-end min-w-full">
                            <p className='w-fit border-1 rounded-l-xl rounded-t-xl bg-blue-700 p-3'>Oh hay Musa!</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="w-fit border-1 rounded-t-xl rounded-r-xl p-3">Well umm.. I...</p>
                        </div>
                        <div>
                            <p className='border-1 rounded-t-xl rounded-r-xl p-3 w-fit'>Would you like to <br></br>watch a movie together?</p>
                        </div>
                        <div className="flex justify-end min-w-full">
                            <p className='w-fit border-1 rounded-t-xl rounded-l-xl bg-blue-700 p-3'>Okey, which one?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1