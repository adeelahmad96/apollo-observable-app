import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionSlice from '../state/mission';
import addUserSlice from '../state/user';
import pingSlice from '../state/pingPong';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { pingEpic } from '../state/pingEpic';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(
  pingEpic
);

export default configureStore({
  reducer:{
    missions: missionSlice,
    addUser: addUserSlice,
    ping: pingSlice
  },
  devTools: true,
  middleware: [...getDefaultMiddleware(), logger, epicMiddleware]
});

epicMiddleware.run(rootEpic);
