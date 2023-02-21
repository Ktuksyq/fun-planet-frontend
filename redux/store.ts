import { configureStore,ThunkAction,Action,Store } from "@reduxjs/toolkit";
import { createWrapper} from "next-redux-wrapper";
import { userReducer, UserState } from './slices/user';

export function makeStore(){
    return configureStore({
        reducer:{
           user: userReducer,
        },
    })
}

export const store = makeStore();

/**Wrapper version */
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppState,unknown,Action<string>>
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);


/**OLD */
// export type AppState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,AppState,unknown,Action<string>>

