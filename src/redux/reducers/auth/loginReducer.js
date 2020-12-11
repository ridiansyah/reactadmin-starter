export const login = (
  state = { userRole: "", firstName: "", lastName: "", userName: "" },
  action
) => {
  switch (action.type) {
    case "LOGIN_WITH_EMAIL": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_FB": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_TWITTER": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_GOOGLE": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_GITHUB": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_JWT": {
      return { ...state, values: action.payload };
    }
    case "LOGOUT_WITH_JWT": {
      return { ...state, values: action.payload };
    }
    case "LOGOUT_WITH_FIREBASE": {
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
