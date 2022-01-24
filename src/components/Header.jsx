
export const Header = () => {
    
    return (

        <header class="header h-auto bg-blue-400">
            <nav class="nav-section flex justify-center md:justify-end pt-20 pr-10">
                <a class="nav-link" href="#">About me</a>
                <a class="nav-link" href="#">My skills</a>
                <a class="nav-link" href="#">My work</a>
                <a class="nav-link" href="#">Contact</a>
            </nav>

            <section class="title mt-10">
                <h1>I'm Callum.</h1>
                <h2>a Developer.</h2>
            </section>

            {/* <!-- <img class="h-32 w-32" src="images/ladderAnimation.png" alt="still animated person climbing ladder"> --> */}
            <img class="h-64 w-64 ml-20" src="images/templeJapan.png" alt="Japanese Temple"/>
            
        </header>
    )
}