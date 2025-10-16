import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withdrawAction, creditCardPaymentAction } from '../redux/actions.js'
 
const AccountManagement = () => {
    const  { amount : checkingAccountAmount } = useSelector(state => state.checkingAccount)
    const  { amount : creditCardStateAmount } = useSelector(state => state.creditCardState)
    const dispatch  = useDispatch()
  return (
    <div>
      <div>Checking Amount { checkingAccountAmount }</div>
      <div>credit card amount {creditCardStateAmount} </div>
      <button onClick={() => dispatch(withdrawAction(12))}>Withdraw Money </button>
      <button onClick={() => dispatch(creditCardPaymentAction(32))}>Pay With Credit Card </button>
    </div>
  )
}

export default AccountManagement
