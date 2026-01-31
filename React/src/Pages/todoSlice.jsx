import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
   name:"mytask",
   initialState:{
      task:[]
   },
   reducers:{
      addTask:(state,actions)=>{
         state.task.push(actions.payload);                    
      },


      removeTask:(state,actions)=>{         
         state.task=state.task.filter((key)=>{
            if(key.id!=actions.payload.id){
               return true
            }
         })
      },

      completeTask:(state,actions)=>{
         for(var i=0;i<state.task.length;i++){
            if(state.task[i].id==actions.payload.id){
               state.task[i].complete=true;
            }
         }
      },

      inCompletetask:(state,actions)=>{
         for(var i=0;i<state.task.length;i++){
            if(state.task[i].id==actions.payload.id){
               state.task[i].complete=false;
            }
         }
      },

      myEdit:(state,actions)=>{
         for(var i=0;i<state.task.length;i++){
         if(state.task[i].id==actions.payload.id){
            state.task[i].task=actions.payload.task;
         }
         }
         console.log(actions.payload);
         
      }



   }

}
)

export const {addTask,removeTask,completeTask,inCompletetask,myEdit} =todoSlice.actions;
export default todoSlice.reducer;

