export const initialState = {
  token: localStorage.getItem('token') || null,
  currentUser: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      action.payload !== undefined &&
        localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };

    case 'logout':
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('profile-image');

      return {
        ...state,
        token: null,
        currentUserId: '',
      };
    case 'setCurrentUser':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
