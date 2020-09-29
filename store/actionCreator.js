export const changeNameAsync = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: "CHANGE_NAME",
          name: "async"
        });
      }, 2000);
    });
  };
};
