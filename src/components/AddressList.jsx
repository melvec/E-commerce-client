import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAddresses } from "../axios/addressAxios";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const AddressList = () => {
  const { user } = useSelector((state) => state.user);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!user?._id) {
        return toast.error("User ID is missing!");
      }

      try {
        const result = await getAddresses(user._id);
        if (result?.status === "error") {
          return toast.error(result.message || "Cannot fetch addresses!");
        }
        setAddresses(result.data);
      } catch (error) {
        toast.error("Failed to fetch addresses");
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  return (
    <div>
      <h2>Send to</h2>

      <ListGroup as="ol">
        {addresses.length ? (
          addresses.map((address) => (
            <div key={address._id}>
              <p>
                <ListGroup.Item as="li">
                  <Badge bg="success">{address.primary && "Primary"}</Badge>
                  <Badge bg="primary">{address.primary && "Selected"}</Badge>
                  {address.firstName} {address.lastName}, {address.address1},{" "}
                  {address.city}, {address.state}, {address.zip},{" "}
                  {address.country}, {address.phone}
                </ListGroup.Item>
              </p>
            </div>
          ))
        ) : (
          <p>Please add the address!</p>
        )}
      </ListGroup>
    </div>
  );
};

export default AddressList;
