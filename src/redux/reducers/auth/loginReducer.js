import { getToken, getUser } from "../../../utility/Common";

const token = getToken();
const userData = getUser();

export const login = (
  state = {
    userRole: token && userData ? userData?.user_type_name : "",
    firstName: token && userData ? userData?.first_name : "",
    lastName: token && userData ? userData?.last_name : "",
    userName: token && userData ? userData?.username : "",
  },
  action
) => {
  switch (action.type) {
    case "HANDLE_LOGIN": {
      return { ...state, values: action.payload };
    }
    case "HANDLE_LOGOUT": {
      return { ...state, values: action.payload };
    }
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole };
    }
    case "FILL_USER_DATA": {
      return {
        ...state,
        userRole: action?.userRole,
        firstName: action?.firstName,
        lastName: action?.lastName,
        userName: action?.userName,
      };
    }
    default: {
      return state;
    }
  }
};
