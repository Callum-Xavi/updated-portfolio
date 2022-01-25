import "./header.css";

export const Header = () => {
    
    return (

        <header className="header h-auto bg-blue-400">
            <nav className="nav-section flex justify-center md:justify-end pt-20 pr-10">
                <a className="nav-link" href="#">About me</a>
                <a className="nav-link" href="#">My skills</a>
                <a className="nav-link" href="#">My work</a>
                <a className="nav-link" href="#">Contact</a>
            </nav>

            <section className="title mt-10">
                <h1>I'm Callum.</h1>
                <h2>a Developer.</h2>
            </section>

            {/* <!-- <img class="h-32 w-32" src="images/ladderAnimation.png" alt="still animated person climbing ladder"> --> */}
            <img className="h-64 w-64 ml-20" src="images/templeJapan.png" alt="Japanese Temple"/>
            
        </header>
    )
}