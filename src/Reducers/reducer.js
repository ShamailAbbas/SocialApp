const initialState = {
  couserdata: "",
  showmodel: false,
};
const reducer = (state = initialState, action) => {
  if (action.type === "COUSERPROFILE") {
    return {
      ...state,
      couserdata: action.payload,
    };
  }
  if (action.type === "SHOWMODEL") {
    return {
      ...state,
      showmodel: !state.showmodel,
    };
  }

  return state;
};

export default reducer;
