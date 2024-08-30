import {
  Card,
  Image,
} from "react-bootstrap";
import "./invitation.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
// ..
AOS.init();
function Invitation({ user, data }) {
  return (
    <>
      <div
        className="cardslide1"
        style={{
          backgroundImage: `url(${data.user.thems_image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100v",
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
            <Image
              style={{
                borderRadius: "10%",
                boxShadow: "100px",
                borderColor: "purple",
                width: "50%",
                height: "25%",
              }}
              src={user.cover_image}
            />
            <div style={{ width: "85%" }}>
              <p
                className="text-center lh-1"
                style={{ fontSize: 15, marginTop: "20%" }}
              >
                Merupakan Suatu Kebahagiaan dan Kehormatan bagi Kami, Apabila
                Bapak/Ibu/Saudara/i, Berkenan Hadir di Acara kami
              </p>
            </div>
            <div style={{ width: "85%" }}>
              <p
                className="text-center description lh-1"
                style={{ fontSize: 40, marginTop: "50%" }}
              >
                ~~Terima Kasih~~
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Invitation;
