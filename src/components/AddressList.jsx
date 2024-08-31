import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAddresses } from "../axios/addressAxios";

const AddressList = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(async () => {
    const result = await getAddresses(user._id);
    if (result?.status === "error") {
      return toast.error(result.message || "Cannot fetch addresses!");
    }
  });
  return (
    <div>
      AddressList
      <span>
        country: "", firstName: "", lastName: "", phone: "", address1: "",
        address2: "", city: "", suburb: "", state: "", zip: "", instructions:
        "", primary: false,
      </span>
    </div>
  );
};

export default AddressList;
