import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
isLoggedIn: false,
email:null,
useName: null,
userID: null,


};


const authSlice = createSlice({
  name: "auth",
  initialState,
  
  reducers: {
 
  
    SET_ACTIVE_USER(state, action){
console.log(action.payload);
const {email, useName, userID} = action.payload
 state.isLoggedIn = true;
 state.email =email;
 state.useName =useName;
 state.userID=userID;
    },
    REMOVE_ACTIVE_USERS(state, action){
        state.isLoggedIn = false;
        state.email = null;
        state.useName = null;
        state.userID = null;
       
    }
  }
});


  //   addToCart:(state,action)=>{
  //     const itemPresent = state.cart.find((item)=>item.id===action.payload.id)
  // if(itemPresent){
  //     itemPresent.quantity++;
  // }else{
  //     state.cart.push({...action.payload,quantity:1})
  // }
  // },
  // removeFromCart:(state,action)=>{
  //     const removeItem=state.cart.filter((item)=>item.id!==action.payload.id);
  //     state.cart = removeItem
  // },
  
   
  

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USERS} = authSlice.actions
export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn;
export const selectEmail = (state)=> state.auth.email;
export const selectUserName = (state)=> state.auth.useName;
export const selectUserID = (state)=> state.auth.userId;

export default authSlice.reducer