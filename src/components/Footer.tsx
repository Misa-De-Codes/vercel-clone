

function Footer() {

    const li = function (text: string, link: string = '/') {
        return (
            <li className="text-sm py-2 opacity-75 hover:opacity-100 transition-all delay-100 duration-100 ease-in-out">
                <a href={`${link}`}>{text}</a>
            </li>
        )
    }

    return (
        <footer className='mt-15 md:mt-25 px-10 pb-28'>
            <div className="flex flex-col max-w-fit mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10 mx-auto">
                    <ul>
                        <li className="font-semibold mb-2">Products</li>
                        {li('AI')}
                        {li('Enterprise')}
                        {li('Fluid Compute')}
                        {li('Next.js')}
                        {li('Observability')}
                        {li('Previews')}
                        {li('Rendering')}
                        {li('Security')}
                        {li('Turbo')}
                        {li('V0')}
                    </ul>
                    <ul>
                        <li className="font-semibold mb-2">Recources</li>
                        {li('Community')}
                        {li('Docs')}
                        {li('Guides')}
                        {li('Help')}
                        {li('Integrations')}
                        {li('Pricing')}
                        {li('Resources')}
                        {li('Solution Partners')}
                        {li('StartUps')}
                        {li('Tamplets')}

                    </ul>

                    <ul>
                        <li className="font-semibold mb-2">Company</li>
                        {li('About')}
                        {li('Blog')}
                        {li('Careers')}
                        {li('Changelog')}
                        {li('Events')}
                        {li('Contact Us')}
                        {li('Customers')}
                        {li('Partners')}
                        {li('Privacy Policy')}
                        {li('Legal')}
                    </ul>
                    <ul>
                        <li className="font-semibold mb-2">Socials</li>
                        {li('Github')}
                        {li('LinkedIn')}
                        {li('Twitter')}
                        {li('YouTube')}
                    </ul>
                </div>
                <div className="flex items-center justify-between mt-10">
                    <div>
                        <a href="/" className="text-sm text-blue-600 p-2 rounded-md hover:bg-white/10 transition-all delay-100 duration-100 ease-in-out">All systems normal</a>
                    </div>
                    <div className="flex border-1 rounded-xl">
                        <div className="flex items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:border-2 w-7 h-7">x</div>
                        <div className="flex items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:border-2 w-7 h-7">y</div>
                        <div className="flex items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:border-2 w-7 h-7">z</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer