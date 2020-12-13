import { history } from "../../../history";
import { removeUserSession } from "../../../utility/Common";

export const handleActionLogout = (user) => {
  return (dispatch) => {
    removeUserSession();
    dispatch({
      type: "HANDLE_LOGOUT",
      payload: { loggedInUser: "", loggedInWith: "" },
    });
    dispatch({
      type: "FILL_USER_DATA",
      userRole: "",
      firstName: "",
      lastName: "",
      userName: "",
    });
    history.push("/login");
  };
};
