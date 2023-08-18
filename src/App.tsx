import "./App.css"
import downArrow from "./downArrow.svg"
import buttonImage1 from "./hrmlnew.png"
import interrobang from "./exclamation_question.svg"
import FooterDefault from "./footer1.png"
import FooterHover from "./footer2.png"
import React, { useEffect, useState } from 'react'
import Canvas from './Canvas'
import { useInView, useSpring, animated, useTrail } from '@react-spring/web'
import { Routes, Route, NavLink } from 'react-router-dom';
import handString from "./Hand"
import robotString from "./Robot"

//https://www.react-spring.dev/docs/utilities/use-in-view#reference
//https://blog.openreplay.com/creating-animations-with-react-sprint/
//https://codesandbox.io/s/react-spring-page-transition-forked-67q9pz?file=/src/components/Page.js:68-136

const App = () => {

    return (
        <>
            {/* <ScrollToTop /> */}
            <Routes>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
            <Footer />
            <ScrollButton />
        </>
    )
}

const Home = () => {
    return (
    <>
        <div className="Head">
            <Canvas rotationAxis="z" object={handString} debug={false} fov={Math.PI / 3.5} yTranslate={-0.5} zTranslate={1}/>
            <HomeHead />
        </div>
        <Body />
    </>
    )
}

const Projects = () => {
    return (
        <>
            <div className="Head">
                <Canvas rotationAxis="y" object={robotString} debug={true} fov={Math.PI / 4} yTranslate={-0.45} zTranslate={2}/>
                <HomeHead />
            </div>
            <div className="Body">
                <ProjectsContent />
            </div>
        </>
    )
}

const HomeHead = () => {
    const [ref, isInView] = useInView({once: true})

    const styles = useSpring({
        opacity: isInView ? 1 : 0,
        config: {
            mass: 50,
            clamp: true,
        },
    })
  
    return (
        <animated.div className="HeadContainer" ref={ref} style={styles}>
            <div className="TitleContainer">
                <h1>
                    Hey There!</h1>
            </div>
            <img src={downArrow} alt="Scroll Down" />
            <p>
                scroll down
            </p>
        </animated.div>
    )
}

const Body = () => {
    return (
        <div className="Body">
            <HomeContent />
        </div>
    )
}

const ProjectsContent = () => {
    return (
        <div className="OuterContent">
            <div className="InnerContent">
                {/* // this div is necessary for useInView to work */}
                <div style={{height: '1px'}}></div>
                <FadeParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.
                </FadeParagraph>
                <ButtonAnimation>
                    <HomeButton img={buttonImage1} color="#300040" href={`/`} text={"home"} alt="button4" />
                </ButtonAnimation>
                {/* credits (3d model, paper texture) and source code and other links */}
            </div>
        </div>
    )
}

type ChildProp = {
    children: React.ReactNode
}

const FadeParagraph = ({children}: ChildProp) => {
    const [ref, springs] = useInView(() => ({
        from: {
            y: 50,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
        },
        config: {
            mass: 2,
            friction: 40,
            clamp: true,
        },
    }))
  
    return (
        <animated.p ref={ref} style={springs}>{children}</animated.p>
    )
}
  

const HomeContent = () => {
    return (
        <div className="OuterContent">
            <div className="InnerContent">
                {/* // this div is necessary for useInView to work */}
                <div style={{height: '1px'}}></div>
                <FadeParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis odio pulvinar, venenatis orci in, suscipit elit. Phasellus quis finibus ante. Duis nunc lectus, pulvinar quis facilisis vel, maximus eget nibh. Mauris vulputate dolor sit amet nulla blandit, quis pulvinar nunc eleifend. Suspendisse vel bibendum lectus, a fringilla dolor. Suspendisse quam eros, convallis quis pharetra a, commodo non leo. Etiam viverra justo sit amet felis facilisis semper. Proin hendrerit cursus rutrum. Nulla molestie commodo odio in interdum. Vestibulum eu erat eu nibh ullamcorper sagittis. Vivamus pretium leo ac ante vehicula, in hendrerit lorem efficitur. Vivamus pulvinar aliquam tellus, posuere ullamcorper lacus pretium nec. Vestibulum rutrum in felis ac dictum. Mauris ut metus commodo mi vehicula lacinia eu ac odio.
                </FadeParagraph>
                <FadeParagraph>
                    Nunc pulvinar fringilla maximus. Morbi sollicitudin ante a nulla pretium malesuada. Morbi pellentesque cursus enim, quis consectetur dolor porttitor sed. Morbi ipsum elit, mollis in diam eu, molestie ullamcorper nulla. Nulla facilisi. Phasellus finibus orci eget magna tempor pretium. Aliquam lacinia risus eu orci facilisis lobortis. Integer purus elit, rhoncus a lacus rutrum, sagittis interdum est. Sed quis dolor molestie, dapibus felis at, suscipit diam. Suspendisse tincidunt lobortis est, sed porttitor magna scelerisque vel.
                </FadeParagraph>
                <FadeParagraph>
                    Ut tincidunt, felis id auctor hendrerit, magna sem facilisis nisi, quis vestibulum lorem elit fringilla lacus. Cras orci quam, dictum vitae tortor mollis, consequat consectetur tortor. Sed et libero at lacus ullamcorper condimentum. In quis convallis sapien. Duis neque ligula, cursus vel viverra vel, auctor quis nisi. Vestibulum ultrices at neque id rutrum. Aliquam quis ex quis metus laoreet consequat. Praesent ullamcorper nisi eu lacus vulputate tincidunt. Integer elementum vestibulum velit malesuada commodo. Donec in porta mi. Nulla eu varius ex.
                </FadeParagraph>
                <FadeParagraph>
                    Ut bibendum nisi nec odio blandit, id volutpat sapien tempus. Integer ac sodales justo. Integer egestas et sem sed bibendum. Nullam fermentum arcu nec ipsum molestie, pharetra tristique massa porta. Nam eu nisl orci. Proin a ipsum ut eros finibus ultrices. Suspendisse potenti.
                    <br></br><br></br>
                </FadeParagraph>
                <ButtonAnimation>
                    <HomeButton img={buttonImage1} color="#300070" href="https://www.google.com/" text={"github placeholder"} alt="button1" />
                    <HomeButton img={buttonImage1} color="#300060" href="https://www.youtube.com/@Devolotics/videos" text={"linkedin placceholder"} alt="button2" />
                    <HomeButton img={buttonImage1} color="#300050" href={`/projects`} text={"projects page placehulder"} alt="button3" />
                    <HomeButton img={buttonImage1} color="#300040" href="https://devolotics.github.io/" text={"credits and source code"} alt="button4" />
                </ButtonAnimation>
                {/* credits (3d model, paper texture) and source code and other links */}
            </div>
        </div>
    )
}

const Footer = () => {
    const [hovering, setHovering] = useState(false);

    function handleMouseEnter(): void {
        setHovering(true);
    };

    function handleMouseLeave(): void {
        setHovering(false);
    };

    const [ref, isInView] = useInView({
        rootMargin: "10%",
    })

    const styles1 = useSpring({
        y: isInView ? "0%" : "300%",
        config: {
            friction: 18,
            mass: 1.6,
        },
    })
    
    const styles2 = useSpring({
        y: isInView ? "0%" : "100%",
        config: {
            tension: 90,
            clamp: true,
        },
    })

    return (
        <div className="Footer">
            <animated.img className="FooterImage1" src={interrobang} alt="Hey!" style={styles1} ref={ref} />
            <animated.div className="FooterImageContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles2} ref={ref} >
                <img className="FooterImage2" src={FooterDefault} alt="Hey!" style={{display: hovering ? "none" : "block"}} />
                <img className="FooterImage2" src={FooterHover} alt="Hey!" style={{display: hovering ? "block" : "none"}} />
            </animated.div>
        </div>
    )
}

const ButtonAnimation = ({children}: ChildProp) => {
    const items = React.Children.toArray(children)

    const [ref, isInView] = useInView({
        rootMargin: "200px"
    })

    const trail = useTrail(items.length, {
        config: { mass: 2, friction: 40, clamp: true },
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
            clamp: true,
    })

    return (
        <div>
        {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={style} ref={ref}>
            <animated.div>{items[index]}</animated.div>
            </animated.div>
        ))}
        </div>
    )
}

type HomeButtonProps = {
    img: string,
    color: string,
    href: string,
    text: string,
    alt: string
}

const HomeButton = ({img, color, href, text, alt}: HomeButtonProps) => {
    function scroll() {
        window.scrollTo(0, 0)
    }

    return (
        <NavLink to={href} className="ButtonLink" onClick={scroll}>
            <div className="HomeButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                <img className="HomeButtonImage" src={img} alt={alt} height="50px"/>
                <div className="HomeButtonText">
                    {text}
                </div>
            </div>
        </NavLink>
    );
}

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    function onClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const [springs, api] = useSpring(() => ({
        from: { opacity: 0 },
        config: { mass: 2 }
    }))

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > window.innerHeight * 3 / 4) {
                if (!visible) {
                    setVisible(true)
                    api.start({
                        from: {
                            opacity: 0,
                        },
                        to: {
                            opacity: 1,
                        },
                    })
                }
            } else {
                if (visible) {
                    setVisible(false)
                    api.start({
                        from: {
                            opacity: 1,
                        },
                        to: {
                            opacity: 0,
                        },
                    })
                }
            }
            console.log(visible, window.scrollY > window.innerHeight * 3 / 4)
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [visible, api])

    return (
        <animated.button className="ScrollButton" onClick={visible ? onClick : () => {}} style={{...springs}}>
            <img src={downArrow} width={"40px"} height={"40px"} alt="Scroll to top" />
        </animated.button>
    )
}

export default App