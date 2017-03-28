import Types from './types';

const storeData = payload => ({ type: Types.STORE_DATA, payload });
const saveData = () => ({ type: Types.SAVE_DATA });
const saveDataSuccess = payload => ({ type: Types.SAVE_DATA_SUCCESS, payload });
const saveDataFailure = error => ({ type: Types.SAVE_DATA_FAILURE, error });

export default {
  storeData,
  saveData,
  saveDataSuccess,
  saveDataFailure,
};
