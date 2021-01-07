
const INITIAL_STATE = {};

const gitHUbUser = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_GITHUB_USER_INFORS': {
      const {user} = action.payload;

      return user;
    }
    default: {
      return state;
    }
  }
}

export default gitHUbUser;
