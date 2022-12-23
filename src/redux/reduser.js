const initialState = {
    url: "",
    loading: false,
    error: false
  };
  
  function addReducer(state = initialState, action) {
    switch (action.type) {
      case "DOGYES":
        return {
          url: "",
          loading: true,
          error: false
        };
      case "DOG":
        return {
          url: action.url,
          loading: false,
          error: false
        };
      case "DOGFAIL":
        return {
          url: "",
          loading: false,
          error: true
        };
      default:
        return state;
    }
  }
  
  export default addReducer;