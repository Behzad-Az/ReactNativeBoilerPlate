import { AppLoadStatus } from '@prototypes/AppManagerTypes';

export const UPDATE_APP_LOAD_STATUS = 'UPDATE_APP_LOAD_STATUS';

export const updateAppLoadStatus = (newAppLoadStatus: AppLoadStatus) : any => (dispatch: any) : Promise<void> => {
  dispatch({
    type: UPDATE_APP_LOAD_STATUS,
    payload: newAppLoadStatus
  });
  return Promise.resolve();
};