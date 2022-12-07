const init_state = {
  id: null,
  email: "",
  role: "",
};

const authReducers = (state = init_state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };

    case "LOGOUT":
      return {
        id: null,
        email: "",
        role: "",
      };

    default:
      return state;
  }
};

export default authReducers;
