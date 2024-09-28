import { useState } from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

import { Outlet } from "react-router-dom";

import {
  BsBoxSeam,
  BsPerson,
  BsPersonCheck,
  BsCart,
  BsTag,
  BsTags,
} from "react-icons/bs";
import SidebarItem from "./SideBarItem";

const AdminLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleLogout = () => {};

  return (
    <Container fluid>
      <Row>
        <Col xs={3} className="vh-100  shadow p-2 position-fixed top-0 left-0">
          <Stack className="h-100">
            <Card className="text-center fw-bold">
              <Card.Header>
                <BsPersonCheck size={100} />
              </Card.Header>

              <Card.Body></Card.Body>
            </Card>

            <Stack className="my-4">
              <SidebarItem
                icon={<BsBoxSeam />}
                label="Dashboard"
                path="/admin/"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsTag />}
                label="Category"
                path="/admin/categories"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsTags />}
                label="Product"
                path="/admin/products"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsCart />}
                label="Order"
                path="/admin/orders"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsPerson />}
                label="User"
                path="/admin/users"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </Stack>

            <div className="mt-auto">
              <Button
                variant="outline-danger"
                className="w-100"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Stack>
        </Col>
        <Col style={{ marginLeft: "25%" }}>
          <div className="vh-100 vw-90 pt-4">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
