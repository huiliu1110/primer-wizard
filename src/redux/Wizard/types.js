import { createTypes } from 'reduxsauce';

export default createTypes(
  `
  STORE_DATA
  SAVE_DATA
  SAVE_DATA_SUCCESS
  SAVE_DATA_FAILURE
`,
  {
    prefix: 'wizard/',
  }
);
