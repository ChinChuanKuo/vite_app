import { configureStore } from '@reduxjs/toolkit'

import accountReducer from './reducer/account'
import deviceReducer from './reducer/device'
import loadupReducer from './reducer/loadup'

const configure = configureStore({
  reducer: {
    account: accountReducer,
    device: deviceReducer,
    loadup: loadupReducer,
  },
})

export default configure
