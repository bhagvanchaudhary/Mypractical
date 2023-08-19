import { REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    EDIT_REGISTER_MODEL,
    GET_USER_DETAILS,
    LOGOUT,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_REQUEST,
    UPDATE_USER_DETAILS,
    REMOVE_USER
   } from './actionTypes';

   const initialState = {
    user: [],
    loading: false,
    error: null,
    logindata: null,
    isAuthenticated: false,
    isShowModel: false,
    signupUsers: null,
    userDetails:{
      email: '',
      password: '',
      images:[],
      firstname:'',
      lastname:'',
      fathername:'',
      address:'',
      phone:'',
      gender:'',
      dob:''
    }
  };
  
  const authReducer = (state = initialState, action) => {
    console.log('===state11111', state, action);
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          isAuthenticated: false
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          signupUsers: action.payload,
          isAuthenticated: false,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          isAuthenticated: false,
        };
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          isAuthenticated: false
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          user: [
            ...state.user,
            {
              ...action.payload
            }
          ],
          isAuthenticated: false,
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          isAuthenticated: false,
        };
        case LOGIN_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
              isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                logindata: action.payload,
                isAuthenticated: true,
            };          
            case LOGIN_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
                  isAuthenticated: false,
                };
              case LOGOUT:
                return {
                  ...state,
                  logindata: null,
                  isAuthenticated: false,
                };
              case EDIT_REGISTER_MODEL:
                return {
                  ...state,
                  isShowModel: action.payload,
                  userDetails:{
                        email: '',
                        password: '',
                        images:[],
                        firstname:'',
                        lastname:'',
                        fathername:'',
                        address:'',
                        phone:'',
                        gender:'',
                        dob:''
                      }
                };
                case GET_USER_DETAILS:
                  return {
                    ...state,
                    userDetails: action.payload,
                  };
                  case REMOVE_USER:
                  return {
                    ...state,
                    user: state.user.filter(record => record.id !== action.payload.userId),
                  };
                  case UPDATE_USER_DETAILS:
                    const { userId, updatedData } = action.payload;
                    const updatedUsers = state.user.map(item => {
                      if (item.id === userId) {
                        return { ...item, ...updatedData };
                      }
                      return item;
                    });
                    return {
                      ...state,
                      user: updatedUsers,
                      isShowModel: false,
                      userDetails:{
                        email: '',
                        password: '',
                        images:[],
                        firstname:'',
                        lastname:'',
                        fathername:'',
                        address:'',
                        phone:'',
                        gender:'',
                        dob:''
                      }
                    };
      default:
        return state;
    }
  };
  
export default authReducer;
