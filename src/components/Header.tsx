
function Header() {
    return (
        <header className='fixed top-0 left-0 hidden md:flex items-center justify-between py-4 md:px-10 lg:px-25 w-full mx-auto z-50 border-b-1 bg-black '>
            <nav className="flex justify-center items-center gap-2 ">
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Products</button>
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Solutions</button>
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Resources</button>
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Enterprise</button>
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Docs</button>
                <button className="py-1 px-3 text-xs lg:text-sm font-medium hover:bg-white/15 rounded-3xl transition-all delay-75 duration-100 ease-in-out select-none">Pricing</button>
            </nav>
            <div className="flex justify-center items-center gap-3">
                <button className="px-3 py-2 text-xs lg:text-sm font-medium border-1 hover:bg-white/15 rounded-md transition-all delay-75 duration-100 ease-in-out select-none">Log In</button>
                <button className="px-3 py-2 text-xs lg:text-sm font-medium border-1 hover:bg-white/15 rounded-md transition-all delay-75 duration-100 ease-in-out select-none">Contact</button>
                <button className="px-3 py-2 text-xs lg:text-sm font-medium border-1 text-black bg-white hover:bg-white/80 rounded-md transition-all delay-75 duration-100 ease-in-out select-none">Sign Up</button>
            </div>
        </header>
    )
}

export default Header