import React from "react";
import { Container, Image, Row, Stack } from "react-bootstrap";
import bannerBackground from "../assets/images/bannerBackground.png";
import bird from "../assets/images/bird.png";
import birds from "../assets/images/birds.png";

const Banner = () => {
  return (
    <div className="d-none d-md-block">
      <Container className="d-flex ubuntu-regular ">
        <span
          style={{
            fontSize: "30px",
            position: "absolute",
            top: "200px", // Adjust this to position the overlay image vertically
            left: "350px",
            width: "500px", // Set the size of the overlay image
            height: "10px",
            zIndex: 10,
          }}
        >
          Get your dream painting
        </span>

        <Image
          src={bannerBackground}
          style={{
            height: "200px",
            objectFit: "cover",
            boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)",
            width: "100%",
          }}
          fluid
          className="ms-auto"
        ></Image>
        <Image
          src={bird}
          style={{
            transform: "scaleX(-1)",
            position: "absolute",
            top: "20px", // Adjust this to position the overlay image vertically
            left: "20px", // Adjust this to position the overlay image horizontally
            width: "100px", // Set the size of the overlay image
            height: "100px",
            zIndex: 10, // Ensure the overlay image is on top
          }}
          fluid
        />
        <Image
          src={birds}
          style={{
            position: "absolute",
            top: "60px", // Adjust this to position the overlay image vertically
            right: "200px", // Adjust this to position the overlay image horizontally
            width: "500px", // Set the size of the overlay image
            height: "150px",
            zIndex: 10,
          }}
        ></Image>
      </Container>
    </div>
  );
};

export default Banner;
