import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './features/cartslices';
import productReducer from './features/productSlice';
import checkoutReducer from './features/checkoutslice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        checkout: checkoutReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;