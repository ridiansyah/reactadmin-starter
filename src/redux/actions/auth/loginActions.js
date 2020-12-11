import axios from "axios";
import { history } from "../../../history";
import { urlAPI } from "../../../utility/Common";

export const loginWithJWT = (user) => {
  return (dispatch) => {
    axios
      .post(urlAPI + "/admin/login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        var loggedInUser;
        if (response.data.code === 200) {
          loggedInUser = response.data.result.data?.username;
          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" },
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

// export const changeRole = (role) => {
//   console.log("ROLE", role);
//   return (dispatch) => dispatch({ type: "CHANGE_ROLE", userRole: role });
// };
