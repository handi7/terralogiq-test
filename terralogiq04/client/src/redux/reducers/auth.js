const init_state = {
  id: null,
  email: "",
  role: "",
  errMsg: "",
  isLoading: false,
  storageIsChecked: false,
};

const authReducers = (state = init_state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        storageIsChecked: true,
      };

    case "LOADING":
      return { ...state, errMsg: "", isLoading: true };

    case "ERROR":
      return { ...state, errMsg: action.payload, isLoading: false };

    case "CHECK_STORAGE":
      return { ...state, storageIsChecked: true };

    case "LOGOUT":
      return {
        id: null,
        email: "",
        role: "",
        errMsg: "",
        isLoading: false,
        storageIsChecked: true,
      };

    default:
      return state;
  }
};

export default authReducers;
