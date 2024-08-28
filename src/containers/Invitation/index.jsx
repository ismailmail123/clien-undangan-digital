import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./invitation.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
import weddingone from "../../assets/wedding1.png";
import weddingtwo from "../../assets/wedding2.png";
import Clock from "../../containers/Clock/Clock";
import wedding3 from "../../assets/wedding.jpeg";
import { TbMapSearch } from "react-icons/tb";
import { ImHome3 } from "react-icons/im";
import { FaUserFriends, FaRegImages, FaMusic } from "react-icons/fa";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";
import Slide5 from "./slide5";
import Slide6 from "./slide6";
import backgroundMusic from "../../assets/audio-backsound.mp3"; // Ganti dengan path musik Anda

function Invitation() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  
  const audioRef = useRef(null);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("2024-09-15T00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    
    // Auto play music when component mounts
    if (audioRef.current) {
      audioRef.current.play();
    }

    return () => {
      clearInterval(interval); // Cleanup interval saat komponen di-unmount
    };
  }, []);

  return (
    <>
      <Container
        className="fixed-bottom bg-success p-2 text-dark bg-opacity-75"
        style={{
          backgroundColor: '#1f85ad',
          width: '456px',
          height: '5%',
          borderRadius: '100px',
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Row className="w-100 d-flex justify-content-between align-items-center">
          <Col className="p-0 d-flex justify-content-center align-items-center">
            <a href="#home">
              <ImHome3 className="fs-3 text-light" />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-center align-items-center">
            <a href="#user">
              <FaUserFriends className="fs-3 text-light" />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-center align-items-center">
            <a href="#galeri">
              <FaRegImages className="fs-3 text-light" />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-center align-items-center">
            <a href="#maps">
              <TbMapSearch className="fs-3 text-light" />
            </a>
          </Col>
          <Col className="p-0 d-flex justify-content-center align-items-center">
            <Button onMouseEnter={() => audioRef.current.play()} variant="link" className="text-light">
              <FaMusic className="fs-3 text-primary" />
            </Button>
          </Col>
        </Row>
      </Container>
      <div
        className="cardslide"
        style={{
          backgroundImage: `url(${weddingtwo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
        id="home"
      >
        <Card className="card-one">
          <Image
            style={{ borderRadius: "50%", width: "80%", height: "40%" }}
            src={wedding3}
          />
          <p className="description mt-3">Deta & Riska</p>
          <p className="description mb-3">Sabtu, 09 Desember 2023</p>
          <Clock
            days={timerDays}
            hours={timerHours}
            minutes={timerMinutes}
            seconds={timerSeconds}
          />
        </Card>
      </div>

      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />

      {/* Audio element for background music */}
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />
    </>
  );
}

export default Invitation;
