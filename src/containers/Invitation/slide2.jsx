import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./invitation.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import weddingone from "../../assets/wedding1.png";
import background1 from "../../assets/backgound1.png";
import Clock from "../../containers/Clock/Clock";

function Invitation() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const intervalRef = useRef();

  const startTimer = () => {
    const countDownDate = new Date("2024-09-15T00:00:00").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(intervalRef.current);
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
    return () => {
      clearInterval(intervalRef.current); // Cleanup interval saat komponen di-unmount
    };
  }, []); // Kosongkan dependency array agar hanya berjalan sekali saat komponen mount

  console.log("timer days", timerDays);
  console.log("timer days", timerHours);
  console.log("timer days", timerMinutes);
  console.log("timer days", timerSeconds);
  return (
    <>
      <div
        className="cardslide1"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="25"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Card className="card-two" id="maps">
            <div style={{ width: "75%" }}>
              <h3
                className="text-center description lh-1"
                style={{ fontSize: 50 }}
              >
                Save The Date
              </h3>

              <p className="text-center fw-bold lh-1" style={{ fontSize: 25 }}>
                Sabtu, 09 Desember 2023
              </p>
            </div>
            <a href="https://maps.app.goo.gl/NhAz6MHHmB6ZNNUi6">
              <Button className="btn-success mb-5">Buka Lokasi</Button>
            </a>

            <Clock
              days={timerDays}
              hours={timerHours}
              minutes={timerMinutes}
              seconds={timerSeconds}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Invitation;
