import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'enitities/Counter';
import { userReducer } from 'enitities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { useDispatch } from 'react-redux';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState? :StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>();
