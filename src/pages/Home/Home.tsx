import './Home.css'
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import ChainAnimation from '../../components/ChainAnimation'

import LinkedInLogo from "../../images/longButtonIcons/linkedin2.png"
import GitHubLogo from "../../images/longButtonIcons/github2.png"
import ProjectsIcon from "../../images/longButtonIcons/projects.svg"
import PortfolioIcon from "../../images/longButtonIcons/portfolio.svg"
import YouTubeLogo from "../../images/longButtonIcons/youtube2.png"
import SourceCodeIcon from "../../images/longButtonIcons/code3.svg"
import LinksIcon from "../../images/longButtonIcons/source.svg"
import ResumeIcon from "../../images/longButtonIcons/doc.svg"
import { useEffect } from 'react'

function HomeContent () {
    return (
        <Body>
            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    Welcome!
                </h2>
                <p>
                    I'm Evan Li, a first-year university student from Scarborough, Ontario, Canada.
                </p>
                <p>
                    This website is mainly for sharing more about my personal life. For a more formal profile, check out my resume, Linkedin and/or my GitHub.
                    <br/><br/>
                    Feel free to email me as well:&nbsp;&nbsp;<code style={{fontSize:'20px'}}>evan.li@live.ca</code>
                    <br/><br/>
                </p>
                <LongButton img={ResumeIcon} color="#301580" href="https://github.com/HappyRedMapleLeaf/happyredmapleleaf.github.io/blob/main/public/logo192.png" text={"Resume (PLACEHOLDER)"} />
                <br/>
                <LongButton img={LinkedInLogo} color="#301570" href="https://www.linkedin.com/in/evan-zc-li/" text={"LinkedIn"} />
                <br/>
                <LongButton img={GitHubLogo} color="#301560" href="https://github.com/HappyRedMapleLeaf" text={"GitHub"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    A Quick Introduction
                </h2>
                <p>
                    Having graduated from Dr. Norman Bethune CI in 2023, I'm now at the University of Waterloo's computer engineering program. I love embedded software and anything low level, especially in the context of robotics.
                </p>
                <p>
                    My hobbies include making music and gaming, and I really enjoy cooking. I also love the outdoors — camping, fishing, snowboarding, and going on walks or bike rides.
                </p>
                <p>
                    Check out my portfolio for a timeline of the stuff I've been working on. I've included some in-progress projects as well!
                    <br/><br/>
                </p>
                <LongButton img={PortfolioIcon} color="#301550" href={`/portfolio`} text={"Portfolio"} />
                <p>
                    I have a bunch of other projects and experiences that are either really old or unrelated to my primary interests. These ones were just for fun and certainly not related to any career goals, but I'm proud of them all the same:
                    <br/><br/>
                </p>
                <LongButton img={ProjectsIcon} color="#301540" href={`/projects`} text={"Other Projects"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    What's Up With the Username?
                </h2>
                <p>
                    It's a long story that I don't completely remember, but my fourth grade self needed a new name for my YouTube channel... that had about 2 videos at the time. I guess I felt particularly Canadian that day, so I chose "Happy Red Maple Leaf".
                </p>
                <p>
                    I hardly touch the YouTube channel anymore, but the username stuck, and now I use it everywhere to add a bit of life and character to my profile instead of being so strictly professional.
                    <br/><br/>
                </p>
                <LongButton img={YouTubeLogo} color="#301530" href={`https://www.youtube.com/channel/UCigegT9rDhBZYN9KvSeCE1Q`} text={"YouTube (if you really want...)"} />
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
                <LongButton img={SourceCodeIcon} color="#301520" href="https://github.com/HappyRedMapleLeaf/happyredmapleleaf.github.io" text={"Source Code"} />
                <br/>
                <LongButton img={LinksIcon} color="#301510" href="https://github.com/HappyRedMapleLeaf/happyredmapleleaf.github.io/blob/main/README.md" text={"Other Links"} />
                <br/>
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
        <Header text="Hey there!" rotationAxis="z" object="./resources/hand.obj" debug={false} fov={Math.PI / 3.5} xTranslate={0} yTranslate={-0.5} zTranslate={1} />
        <HomeContent />
    </>
    )
}