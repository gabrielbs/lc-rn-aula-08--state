import {configureStore, createSlice} from "@reduxjs/toolkit";
import {userSlice} from "./userStore";
import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {reactotronRedux} from "reactotron-redux";

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative()
  .use(reactotronRedux()) // add all built-in react native plugins
  .connect(); // let's connect!

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
