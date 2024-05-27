import './Home.css'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import ChainAnimation from '../../components/ChainAnimation'

import LinkedInLogo from "../../images/longButtonIcons/linkedin1.png"
import GitHubLogo from "../../images/longButtonIcons/github1.png"
import EmailIcon from "../../images/longButtonIcons/mail.svg"
import ProjectsIcon from "../../images/longButtonIcons/projects.svg"
import YouTubeLogo from "../../images/longButtonIcons/youtube1.png"
import SourceCodeIcon from "../../images/longButtonIcons/code2.svg"
import LinksIcon from "../../images/longButtonIcons/link.svg"
import { useEffect } from 'react'

function HomeContent () {
    return (
        <Body>
            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    Hello!
                </h2>
                <p>
                    I'm Evan Li, a first-year university student from Scarborough, Ontario, Canada.
                </p>
                <p>
                    This website is for sharing more about my personal life and the stuff I do outside of school and work. For a more formal portfolio, check out my Linkedin and my GitHub profiles. Feel free to email me as well!
                    <br/><br/>
                </p>
                <LongButton img={LinkedInLogo} color="#300090" href="https://www.linkedin.com/in/evan-zc-li/" text={"LinkedIn"} />
                <LongButton img={GitHubLogo} color="#300080" href="https://github.com/HappyRedMapleLeaf" text={"GitHub"} />
                <LongButton img={EmailIcon} color="#300070" href="mailto:evan.li@live.ca" text={"Email"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    A Quick Introduction
                </h2>
                <p>
                    Having graduated from Dr. Norman Bethune CI in 2023, I'm now at the University of Waterloo's computer engineering program. I love embedded software and anything low level, especially in the context of robotics. I occasionally enjoy doing mechanical work too.
                </p>
                <p>
                    I also love the outdoors (engineering student touching grass? impossible) and I enjoy camping, fishing, snowboarding, and going on nice little walks or bike rides.
                </p>
                <p>
                    Check out my projects page for a timeline of the stuff I've been working on outside of work and school. A lot of is just for fun and certainly not related to any career goals, but I'm proud of it all the same.
                    <br/><br/>
                </p>
                <LongButton img={ProjectsIcon} color="#300060" href={`/projects`} text={"Projects"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    What's Up With the Username?
                </h2>
                <p>
                    It's a long story that I don't completely remember, but my fourth grade self needed a new name for my YouTube channel… that had about 2 videos on it at the time. I guess I felt particularly Canadian that day, and I held on to the “Happy Red Maple Leaf” username ever since.
                </p>
                <p>
                    Now, I occasionally use the YouTube channel to dump gaming videos or quick showcases on any project, big or small, that I end up finishing.
                    <br/><br/>
                </p>
                <LongButton img={YouTubeLogo} color="#300050" href={`https://www.youtube.com/channel/UCigegT9rDhBZYN9KvSeCE1Q`} text={"YouTube"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    Credits, Source Code, and More
                </h2>
                <p>
                    All the source code for this website is on my GitHub, as well as some credits and links I found helpful while building the site.
                    <br/><br/>
                </p>
                <LongButton img={SourceCodeIcon} color="#300040" href="https://github.com/HappyRedMapleLeaf/happyredmapleleaf.github.io" text={"Source Code"} />
                <LongButton img={LinksIcon} color="#300030" href="https://github.com/HappyRedMapleLeaf/happyredmapleleaf.github.io/blob/main/README.md" text={"Other Links"} />
            </ChainAnimation>
        </Body>
    )
}

export default function Home() {
    useEffect(() => {
        document.title = "Home | Evan Li"
    })

    return (
    <>
        <Header text="Welcome!" rotationAxis="z" object="./resources/hand.obj" debug={false} fov={Math.PI / 3.5} yTranslate={-0.5} zTranslate={1} />
        <HomeContent />
    </>
    )
}