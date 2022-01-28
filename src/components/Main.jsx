import "./main.css";

export const Main = () => {

    return (
        <main class="main-styling pt-36">

            <div class="title work-title pt-36 pb-10">
                <h2>About me.</h2>
            </div>
            <section class="about-me-content flex flex-row justify-center items-center min-h-full p-20">
                <div class="my-image justify-center">
                    <img class="rounded-full w-80" src="images/DSC_0678(1).JPG" alt="A picture of me" />
                </div>
                <div class="description max-w-2xl ml-20 leading-8">
                    <p>So, here's me; an outgoing, eager - and at times, quietly observant guy. Since around the age of 14
                        I have worked and held different jobs. It was around this age I gained my interest in computing and
                        programming. I then went on to compete in some hackathons and national GCHQ challeneges. My main skills
                        are in web development but I am also keen to continue and extend my knowledge on python. </p>
                </div>

            </section>

            <div class="title work-title pt-36 pb-10">
                <h2>My work.</h2>
            </div>

            <section class="section my-work flex flex-wrap justify-center p-10">


                <container class="top-row flex flex-row mb-28 ">

                    <div class="my-work-content flex flex-col min-h-full my-border pt-4 mr-10">
                        <div class="cards-layout flex justify-center">
                            <img class="h-60 w-68 mb-10" src="images/cardsLayoutProject.PNG" alt="Shows image of cards layout website project" />
                        </div>

                        <div class="flex flex-col justify-center max-w-xl ml-20">
                            <p>Project that shows knowledge of structuring HTML and designing with CSS.</p>
                            <p>Access the project on Github:</p>
                            <img class="h-32 w-32" src="images/iconGitHub.png" alt="Icon of GitHub which acts as link to project" />
                        </div>
                    </div>

                    <div class="my-work-content flex flex-col min-h-full my-border pt-4">
                        <div class="Tailwind-dashboard-layout flex justify-center">
                            <img class="h-60 w-68 mb-10" src="images/TailwindDashboardProject.PNG" alt="Shows image of Tailwind website project" />
                        </div>

                        <div class="flex flex-col justify-center max-w-xl ml-20">
                            <p>Project that shows knowledge of using CSS library Tailwind along with CSS flexbox design.
                                his project focuses on mobile first design view.</p>
                            <p>Access the project on Github:</p>
                            <img class="h-32 w-32" src="images/iconGitHub.png" alt="Icon of GitHub which acts as link to project" />
                        </div>
                    </div>

                </container>


                <container class="middle-container">
                    <div class="my-work-content flex flex-col min-h-full my-border pt-4">
                        <div class="JS-validation-layout flex justify-center">
                            <img class="h-60 w-68 mb-10" src="images/JsValidation.PNG" alt="Shows image of Tailwind website project" />
                        </div>

                        <div class="flex flex-col justify-center max-w-2xl ml-20">
                            <p>Project that shows knowledge of JS form inputs and the appropriate validation required.
                                Also uses event handlers to enable live validation as well as validation on form being submit.</p>
                            <p>Access the project on Github:</p>
                            <img class="h-32 w-32" src="images/iconGitHub.png" alt="Icon of GitHub which acts as link to project" />
                        </div>
                    </div>


                </container>



            </section>




        </main>
    )
}