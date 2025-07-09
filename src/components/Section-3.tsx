import { Button } from "@/components/ui/button"

function Section3() {
    return (
        <div>
            <div className="flex flex-col border-1">
                <div className="p-12 ">
                    <div className="flex justify-center gap-3 items-center text-2xl font-medium h-10 w-full">
                        <div className="flex justify-center items-center">
                            <h1 className="">Scale your</h1>
                            <a href="/" className="py-3 px-5 ml-3 text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Enterprise</a>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="">without compromising</h1>
                            <a href="/" className="py-3 px-5 ml-3 text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Security</a>
                        </div>
                    </div>

                </div>
                <hr className='mb-5'></hr>
                <div className="flex border-1">
                    <div className=" p-15 w-1/3 h-60">
                        <div className="relative w-200">
                            < div className="text-2xl font-semibold text-white/50 mb-10" >
                                <h2><b className="text-white">Ready to deploy?</b> Start building with a free account. <br />Speak to an expert for your <b className='text-blue-500'>Pro</b> or <strong className="text-purple-500">Enterprise</strong>  needs.</h2>
                            </div >
                            <div className="flex gap-5">
                                <a href="/" className="py-3 px-5 text-sm font-medium border-1 bg-white text-black hover:bg-white/80 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Start Deploying</a>
                                <a href="/" className="py-3 px-5 text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Talk to an Expert</a>
                            </div>
                        </div>
                    </div>
                    <div className=" py-15 border-x-1 border-white/20 border-dashed w-1/3 h-60"></div>
                    <div className=" p-15 w-1/3 h-60">
                        <p className="">Explore Vercel Enterprise with an interactive product tour, trial, or a personalized demo.</p>
                        <div className="mt-10">
                            <a href="/" className="py-3 px-5 text-sm font-medium border-1 hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Explore Enterprise</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section3
/*
    < div className = "text-2xl text-white/50" >
        <h2><b className="text-white">Ready to deploy?</b> Start building with a free account. Speak to an expert for your <b className='text-blue-500'>Pro</b> or <strong className="text-purple-500">Enterprise</strong>  needs.</h2>
</div >
    <div className="flex gap-5">
        <Button variant={"default"} className="text-md rounded-2xl">Start Deploying</Button>
        <Button variant={"outline"} className=" text-md rounded-2xl">Talk to an Expert</Button>

    </div> */