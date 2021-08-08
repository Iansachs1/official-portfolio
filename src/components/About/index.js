import React from "react";
import "./index.css";



function About() {


    return (
        <section id="About" class="background container-fluid aboutSection">
            <div class="row mx-5">
                <div class="col-md-5 pb-5">
                    <img src="/assets/Headshot.png" class="headshot"></img>
                    <div class="text-center name-cap display-4">Ian Thomas Sachs</div>
                    <div class="text-center">Full-Stack Web Development Bootcamp Grad </div>
                    <div class="text-center">UC San Diego</div>
                    <div class="text-center">
                            <img src="/assets/github-sign.png" class="media-icon justify-content-center"></img>
                            <img src="/assets/linkedin.png" class="media-icon justify-content-center"></img>
                            <img src="/assets/instagram.png" class="media-icon justify-content-center"></img>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="display-3 bio-head">Biography</div>
                    <p>
                        I'm a San Diego native and an aspiring full-stack web developer. I love the problem solving aspects of coding as well as the creative nature of web design. 
                    </p>
                    <p>
                        When I'm not coding, I enjoy working with my dog, Rweck, <span class="font-weight-light font-italic">-As in wrecking ball. It fits. Trust me.-</span> backpacking, rock climbing, or relaxing and geeking out on some video games. 
                    </p>
                    <p>
                        My previous job, training dogs and managing a dog training facility and kennel, granted me lots of experience with managing small teams, being flexible and comfortable with jumping in to help on projects where needed, and maintinaing a positive work environement.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;