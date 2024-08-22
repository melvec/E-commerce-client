import React from "react";
import { Container, Image, Row, Stack } from "react-bootstrap";
import bannerBackground from "../assets/images/bannerBackground.png";
import bird from "../assets/images/bird.png";
import birds from "../assets/images/birds.png";

const Banner = () => {
  return (
    <div>
      <Container className="d-flex ubuntu-regular">
        <Stack direction="vertical">
          <Stack className=" justify-content-end flex-grow-1">
            <span style={{ fontSize: "2rem" }}>Get your dreamed painting</span>
          </Stack>
        </Stack>

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
            top: "30px", // Adjust this to position the overlay image vertically
            right: "200px", // Adjust this to position the overlay image horizontally
            width: "500px", // Set the size of the overlay image
            height: "500px",
            zIndex: 10,
          }}
        ></Image>
      </Container>
    </div>
  );
};

export default Banner;
