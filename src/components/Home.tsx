
import Section1 from "./Section-1"
import Section2 from "./Section-2"
import Section3 from "./Section-3"


function Home() {
    return (
        <main className="max-w-screen mt-18 px-5 md:px-10 lg:px-35">
            <Section1 />
            <Section2 />
            <Section3 />
        </main>
    )
}

export default Home