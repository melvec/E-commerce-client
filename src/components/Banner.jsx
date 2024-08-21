import React from "react";
import { Container, Image, Row, Stack } from "react-bootstrap";
import bannerBackground from "../assets/images/bannerBackground.png";

const Banner = () => {
  return (
    <div>
      <Container className="d-flex">
        <Stack direction="vertical">
          <Stack className="pt-5">
            <span>Sell your beautiful painting</span>
          </Stack>
          <Stack className="ms-auto pe-3">
            <span>Buy your dreamed painting</span>
          </Stack>
        </Stack>
        <Image
          src={bannerBackground}
          style={{ height: "250px", objectFit: "cover" }}
          fluid
          className="ms-auto"
        ></Image>
      </Container>
    </div>
  );
};

export default Banner;
