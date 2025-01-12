import './Portfolio.css'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import ChainAnimation from '../../components/ChainAnimation'
import Project from '../../components/Project/Project'

import HomeIcon from "../../images/longButtonIcons/home.svg"
import devlogo from "../../images/longButtonIcons/devlogo.png"
import ResumeIcon from "../../images/longButtonIcons/doc.svg"
import link from "../../images/longButtonIcons/link.svg"

import devcard from "../../images/projects/devcard.jpg"
import dev1 from "../../images/projects/dev1.png"
import dev2 from "../../images/projects/dev2.jpg"

import milkcard from "../../images/projects/milkcard.jpg"
import milk1 from "../../images/projects/milk1.png"
import milk2 from "../../images/projects/milk2.jpg"

import armcard from "../../images/projects/arm.png"
import fecard from "../../images/projects/fe.png"

import sitecard from "../../images/projects/sitecard.png"
// import progresscard from "../../images/projects/progresscard.png"

import site1 from "../../images/projects/site1.png"
import site2 from "../../images/projects/site2.png"
import { useEffect } from 'react'


function PortfolioContent() {
    return (
        <Body>
            <ChainAnimation>
                <p>
                    <br />
                    These are some highlights of my experiences outside of school and work, from design teams to side projects. For a more formal summary, including co-ops, check out my resume!
                    <br /><br />
                </p>
                <LongButton img={ResumeIcon} color="#301590" file={window.location.origin + "/resources/EvanLi_Resume_Generic.pdf"} text={"Resume"} />
                <br />
                <LongButton img={HomeIcon} color="#301580" href={`/`} text={"Back to Home"} />
            </ChainAnimation>
            <br />
            <br />
            <Project image={armcard} title="6DoF Robot Arm" month="Current" year="">
                <h2>6DoF Robot Arm</h2>
                <br />
                <p>There is no end goal with this project other than to learn as much as possible about robotics and whatever other fields I stumble into.</p>
                <br />
                <p>I designed and built this arm from scratch, and so far I have programmed it to be controlled with a keyboard and an IMU with inverse kinematics. It runs on an STM32 microcontroller and plugs into my laptop which does the keyboard handling and the more difficult math. I use ROS2 to help out and RViz to visualize the IMU heading (soon I will try to simulate the whole arm on Rviz!).</p>
                <br />
                <p>I also plan on learning PCB design while I try to find a solution to the mess of about 30 wires that I currently have to deal with. Who knows what else this project will teach me?</p>
                <br />
            </Project>
            <Project image={fecard} title="UWFE" month="Current" year="">
                <h2>UW Formula Electric</h2>
                <br />
                <p>I'm currently a member of the firmware and powertrain subteams on the University of Waterloo's Formula Electric design team, where we build an electric formula-style car every year for various competitions.</p>
                <br />
                <p>So far, I've been in charge of maintaining and adding new features to our LCD dashboard. I'm also starting work on our Telematics Control Unit (TCU), which logs all messages and sensor readings within the car for debugging and tuning purposes. Specifically, I'm writing a driver for the IMU on the TCU board, and I've helped a bit with writing data to the SD card. I've also helped with minor bugs, safety, and rule compliance issues.</p>
                <br />
                <p>Being a computer engineering student, I've been admittely a bit unproductive on the powertrain team which is heavy on mechanical design and related skills, but I'm slowly getting the hang of things and hoping to contribute more soon!</p>
                <br />
            </Project>
            <Project image={milkcard} title="FreshGuard" month="Nov" year="2023">
                <h2>Spoiled Milk Alarm</h2>
                <br />
                <p>My friend Rongbin and I designed and prototyped a milk bag holder that tells users if milk is spoiled. This device uses the STM32 Nucleo microcontroller and involves 5 inputs (2 buttons, a temperature sensor, a light sensor, and a force sensor) and 5 outputs (four LEDs and a buzzer).</p>
                <br />
                <p>Through this project I became familiar with C and microcontroller programming and learned the basics of circuit design. I also had the chance to use ADCs, PWM signal generation, and Git (repo linked below).</p>
                <br />
                <p>Below left: CAD model of the device. Below right: The circuitry monstrosity behind it all</p>
                <br />
                <img width="48%" style={{marginRight: "4%"}} src={milk1} alt="CAD model of the device" />
                <img width="48%" src={milk2} alt="The circuitry monstrosity behind it all" />
                <br />
                <br />
                <LongButton img={link} color="#301570" href={`https://github.com/HappyRedMapleLeaf/FreshGuard`} text={"Source Code"} />
                <br />
            </Project>
            <Project image={sitecard} title="This Website!" month="Aug" year="2023">
                <h2>This Website!</h2>
                <br />
                <p>This was a “three birds with one stone” project where I learned about React.js, TypeScript, and web development; made a portfolio for myself with links to my other profiles; and got to show off a bit to my friends.</p>
                <br />
                <p>I've built simple websites before, but for this one I put emphasis on: compatibility, having tested my website on 7 different browsers; user experience, ensuring accessibility and ease of navigation on all devices; performance, optimizing my “DIY” 3D wireframe render; and good code practise, adding some comments and making sure the code is reusable and repairable.</p>
                <br />
                <p>Below left: the 3D model rendered on the top of this page. Below right: an old testing version of this website</p>
                <br />
                <img width="48%" style={{marginRight: "4%"}} src={site1} alt="Robot model at the top of the page" />
                <img width="48%" src={site2} alt="Old version of the website" />
                <br />
                <br />
            </Project>
            <Project image={devcard} title="Devolotics" month="Apr" year="2023">
                <h2>FIRST Tech Challenge</h2>
                <br />
                <p>I was the captain of FIRST Tech Challenge team 19498 Devolotics for two years since its formation, leading the mechanical design and programming of our approximately 0.5x0.5x0.5m large robots over two seasons.</p>
                <br />
                <p>In my second year, after over 10,000 combined hours from our team, we became one of two Ontario teams to qualify to the World Championships in Houston, Texas. I'd say that this is by far my proudest achievement to date. Devolotics forever! Some pictures are below.</p>
                <br />
                <LongButton img={devlogo} color="#301560" href={`https://devolotics.github.io/`} text={"Our Website"} />
                <br/>
                <img width="48%" style={{marginRight: "4%"}} src={dev1} alt="Our Robot" />
                <img width="48%" src={dev2} alt="When we discovered that we qualified!" />
                <br />
                <br />
            </Project>
        </Body>
    )
}

export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio | Evan Li"
    })

    return (
        <>
            <Header text="Portfolio" rotationAxis="y" object="./resources/untitled.obj" debug={false} fov={Math.PI / 4} xTranslate={0} yTranslate={-20} zTranslate={120}/>
            <PortfolioContent />
        </>
    )
}