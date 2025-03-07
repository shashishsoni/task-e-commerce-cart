import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckoutForm {
    fullName: string;
    email: string;
    address: string;
}

interface CheckoutState {
    formData: CheckoutForm;
    formError: string;
    isCheckingOut: boolean;
    orderStatus: 'idle' | 'processing' | 'success' | 'error';
}

const initialState: CheckoutState = {
    formData: {
        fullName: '',
        email: '',
        address: ''
    },
    formError: '',
    isCheckingOut: false,
    orderStatus: 'idle'
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Partial<CheckoutForm>>) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        setFormError: (state, action: PayloadAction<string>) => {
            state.formError = action.payload;
        },
        setIsCheckingOut: (state, action: PayloadAction<boolean>) => {
            state.isCheckingOut = action.payload;
        },
        setOrderStatus: (state, action: PayloadAction<CheckoutState['orderStatus']>) => {
            state.orderStatus = action.payload;
        },
        resetCheckout: () => initialState
    }
});

export const {
    setFormData,
    setFormError,
    setIsCheckingOut,
    setOrderStatus,
    resetCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
