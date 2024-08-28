import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import './invitation.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import weddingone from '../../assets/wedding1.png';
import background1 from '../../assets/backgound1.png';
import cip from '../../assets/cip.jpg';
import penutup1 from '../../assets/penutup1.jpeg';


function Invitation () {

  const [formValues, setFormValues] = useState()


  const handleSubmit = () => {

  }
    return (
        <>
        
          
                <div className="cardslide1"
                    style={{
                        backgroundImage: `url(${background1})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        width: "100%", 
                        height: "100v"
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
                      <Card className="card-two">
                        <Image style={{borderRadius: '10%', boxShadow: '100px', borderColor: 'purple', width: '50%', height: '25%'}} src={penutup1} />
                        <div style={{width: '85%'}}>
                              <p className="text-center lh-1" style={{fontSize: 15, marginTop: '20%'}}>Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami</p>
                          </div>
                          <div style={{width: '85%'}}>
                              <p className="text-center description lh-1" style={{fontSize: 40, marginTop: '50%'}}>~~Terima Kasih~~</p>
                          </div>
                          
                          
                      </Card>
                  </div>
                </div>
        </>
    )
}

export default Invitation;