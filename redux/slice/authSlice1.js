import { createSlice } from "@reduxjs/toolkit";

 

 const authSlice1 = createSlice({

    name : "cart",
    initialState :{
        cart:[],
        quantity:0,
    },
    
    reducers:{
      
            //    state.cart.push(action.payload)
        //   state.cart.find((item)=>item.id===action.payload.id)
            // if(itemPresent){
            //     itemPresent.quantity=1;
                
            // }else{
               
                //  state.cart.push({...action.payload,})
            // }
            singleProduct:(state,action)=>{
         const singleItem= state.cart.filter((item)=>item.id=== action.payload);
         state.cart =singleItem
         
            },
       
        addToCart:(state,action)=>{
        //    state.cart.push(action.payload)
        const itemPresent = state.cart.find((item)=>item.id===action.payload.id)
        if(itemPresent){
            itemPresent.quantity++;
        }else{
            state.cart.push({...action.payload,quantity:1})
        }
        },
        removeFromCart:(state,action)=>{
            const removeItem=state.cart.filter((item)=>item.id!==action.payload.id);
            state.cart = removeItem
        },
        clear:(state, action)=>{
            const clear =state.cart.filter((item)=>item===action.payload)
            state.cart =clear
        },
        incrementQuantity:(state,action)=>{
            const itemPresent = state.cart.find((item)=>item.id===action.payload.id);
            itemPresent.quantity++;        
                },
                decrementQuantity:(state,action)=>{
                    const itemPresent = state.cart.find((item)=>item.id===action.payload.id);
                    if(itemPresent.quantity===1){
                     
                    }else{
                            itemPresent.quantity--;
                        } 
                },
                

    },
 });
 export const {addToCart, removeFromCart, singleProduct,clear,incrementQuantity,decrementQuantity } = authSlice1.actions
 export default authSlice1.reducer