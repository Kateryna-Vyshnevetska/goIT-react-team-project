import { createReducer } from "@reduxjs/toolkit";
import { addPaymentCard, updatePaymentData } from "./addPaymentCardAction";


const paymentCardState = []



export const paymentCard = createReducer(paymentCardState, {
    [addPaymentCard]: (state, { payload }) => [...state, payload],
    [updatePaymentData]: (state, { payload }) => [ ...payload],
});

