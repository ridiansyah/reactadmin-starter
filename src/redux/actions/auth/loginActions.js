import axios from "axios";
import { history } from "../../../history";
import { urlAPI, setUserSession } from "../../../utility/Common";

export const handleActionLogin = (user) => {
  return (dispatch) => {
    axios
      .post(urlAPI + "/admin/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        var loggedInUser;
        if (response.data.code === 200) {
          setUserSession(
            response.data.result?.token,
            response.data.result?.data
          );
          loggedInUser = response.data.result.data?.username;
          dispatch({
            type: "HANDLE_LOGIN",
            payload: { loggedInUser, loggedInWith: "localStorage" },
          });
          dispatch({
            type: "FILL_USER_DATA",
            userRole: response.data.result.data.user_type_name,
            firstName: response.data.result.data?.first_name,
            lastName: response.data.result.data?.last_name,
            userName: response.data.result.data?.username,
          });
          history.push("/");
        } else {
          console.log("ENGGAK 200");
        }
      })
      .catch((err) => {
        dispatch({
          type: "FILL_GAGAL",
          gagal: true,
          pesan: err?.message,
        });
      });
  };
};
