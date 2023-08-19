export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const EDIT_REGISTER_MODEL = 'EDIT_REGISTER_MODEL';
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const REMOVE_USER = "REMOVE_USER";

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (logindata) => ({
    type: LOGIN_SUCCESS,
    payload: logindata,
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });
  

  export const logoutUser = (data) => ({
    type: LOGOUT,
    payload:data
  });

  export const signupRequest = () => ({
    type: SIGNUP_REQUEST,
  });
  
  export const signupSuccess = (signupUsers) => ({
    type: SIGNUP_SUCCESS,
    payload: signupUsers,
  });
  
  export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
  });

  export const registerRequest = () => ({
    type: REGISTER_REQUEST,
  });
  
  export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });

  export const editRegisterModel = (isShowModel) =>({
    type: EDIT_REGISTER_MODEL,
    payload:isShowModel,
  })

  export const updateUserDetails = (userId, updatedData) =>({
    type: UPDATE_USER_DETAILS,
    payload: { userId, updatedData },
  })

  export const removeUserRecord = (userId) =>({
    type: REMOVE_USER,
    payload: { userId },
  })
  export const getUserDetails = (record) =>({
    type: GET_USER_DETAILS,
    payload:record,
  })

  export const handleModel = (isModel, record) => {
    
    if(isModel === true){
    return (dispatch) => {
      dispatch(editRegisterModel(isModel));
      dispatch(getUserDetails(record))
    }
  }else{
    return (dispatch) => {
      dispatch(editRegisterModel(isModel));
    }
    }
  }
  
  export const registerUser = (userData, onSuccess) => {
    return (dispatch) => {
      dispatch(registerRequest());
  
      setTimeout(() => {
        if (userData.email ) {
          const newUser = { ...userData, id: Date.now() };
          dispatch(registerSuccess(newUser));
          onSuccess();
        } else {
          dispatch(registerFailure('Please add proper details!'));
        }
      }, 1000);
    };
  };

  export const signOutUser = () => {
    return (dispatch) => {
      dispatch(logoutUser(null));
    }}

  export const signupUser = (userData, onSuccess) => {
    return (dispatch) => {
      dispatch(signupRequest());
  
      setTimeout(() => {
        if (userData.email && userData.password) {
          const newUser = { ...userData, id: Date.now() };
          dispatch(signupSuccess(newUser));
          onSuccess();
        } else {
          dispatch(signupFailure('Registration failed'));
        }
      }, 1000);
    };
  };

  export const loginUser = (credentials, signupUsers, onSuccess) => {
    return (dispatch) => {
      dispatch(loginRequest());
      setTimeout(() => {
        if (signupUsers && (credentials.email === signupUsers.email && credentials.password === signupUsers.password)) {
          const user = { id: 1, email: credentials.email };
          dispatch(loginSuccess(user));
          onSuccess();
        } else {
          dispatch(loginFailure('Invalid credentials'));
        }
      }, 1000);
    };
  };