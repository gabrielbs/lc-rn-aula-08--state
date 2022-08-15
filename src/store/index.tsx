import React from "react";

const initialUser = {
  username: "",
  password: "",
  name: "",
};

const initialGlobalState = {
  user: initialUser,
};

type GlobalStateType = {
  state: typeof initialGlobalState;
  dispatch: (arg: {type: any; payload: any}) => void;
};
export const GlobalStateContext = React.createContext<GlobalStateType>({
  state: initialGlobalState,
  dispatch: () => {},
});

export const ADD_USER = "ADD_USER";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

type AddUserType = {
  type: typeof ADD_USER;
  payload: typeof initialUser;
};

type UpdateUserNameType = {
  type: typeof UPDATE_USER_NAME;
  payload: typeof initialUser;
};

type ActionTypes = AddUserType | UpdateUserNameType;

const reducer = (state = initialGlobalState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case UPDATE_USER_NAME: {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
        },
      };
    }
    default:
      return state;
  }
};

type GlobalContextProps = {
  children: JSX.Element;
};
export const GlobalContext = ({children}: GlobalContextProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialGlobalState);

  return (
    <GlobalStateContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalStateContext.Provider>
  );
};
