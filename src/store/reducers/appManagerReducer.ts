import { 
  AppLoadStatus
} from '@prototypes/AppManagerTypes';

import { 
  UPDATE_APP_LOAD_STATUS
} from '@actions/appManagerActions';

type State = {
  appLoadStatus: AppLoadStatus;
};

const initialState: State = {
  appLoadStatus: {
    isAppLoaded: false,
    navStack: 'preLogin'
  }
};

const updateAppLoadStatus = (prevState: State, newAppLoadStatus: AppLoadStatus) : State => {
  let newState = { ...prevState };
  newState.appLoadStatus = { ...newState.appLoadStatus, ...newAppLoadStatus };
  return newState;
};

export default function appManagerReducer(prevState: State = initialState, action: { type: string; payload: any; }) {
  switch (action.type) {
    case UPDATE_APP_LOAD_STATUS:
      return updateAppLoadStatus(prevState, action.payload);
    default:
      return prevState;
  };
};