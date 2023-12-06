import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(0);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                        <p>From a young age, I enjoyed patiently working with puzzles. When most kids were at their breaking point, I found myself further interested in completing the task, as I knew the final uncovering would be worth the reward. As I continued developing my skills and gained a rapid interest in software development, I paired it with my passion for turning complex problems into beautiful solutions.
                        I enjoy learning and working on intellectually challenging tasks and factoring new technologies into my daily work.Besides coding,I like spending time outdoors with my family and friends. I love to cook new dishes. In my free time I will listen to music and try to practice drawings.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}