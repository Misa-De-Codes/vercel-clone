import Hero from "./Hero"
import Section1 from "./Section-1"
import Section2 from "./Section-2"
import Section3 from "./Section-3"


function Home() {
    return (
        <main className="flex flex-col px-10 mx-auto mt-15">
             <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
        </main>
    )
}

export default Home