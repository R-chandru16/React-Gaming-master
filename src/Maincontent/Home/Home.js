import React from "react";
import Navbar from "../../components/Navbar";

import './Home.css'


function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="Home">


                <div >

                    <section class="showcase-area" id="showcase">
                        <div class="showcase-container">
                            <h1 class="main-title" id="home">Gaming site</h1>
                            <p>By playing games you can artificially speed up your learning curve to develop the right kind of thought processes..</p>

                        </div>
                    </section>
                    <section id="about">
                        <div class="about-wrapper container">
                            <div class="about-text">
                                <p class="small">About </p>
                                <h2>This site contains gaming and respective images</h2>
                                <p>
                                    Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is.
                                    <br></br> -Bob Feller

                                </p>
                            </div>

                        </div>
                    </section>
                </div>



            </div>
        </>
    );
}

export default Home;
