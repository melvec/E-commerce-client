import { toast } from "react-toastify";
import { getUser } from "../../axios/usersAxios";
import { setUser } from "./userSlice";

// GET USER ACTION
export const getUserAction = () => async (dispatch) => {
  const result = await getUser();
  console.log("get user action");
  console.log(result.data);
  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setUser(result.data));
};
