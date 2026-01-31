import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask,completeTask ,inCompletetask, myEdit} from './Pages/todoSlice';
import { useState } from 'react';

function App() {
  const mytask = useSelector(state => state.mytask.task);
  const dispatch = useDispatch();
  const [task, settask] = useState("");
  const [mybtn,setmybtn]=useState(true);
  
  const [myid,setmyid]=useState("");
  let sno = 0;

      const myEdit=(task,id)=>{
        settask(task);
        setmybtn(false);
        setmyid(id);
        
      }

      const saveEdit=(myid,task)=>{
        dispatch(myEdit({id:myid,task:task}));
        settask("");
        setmybtn(false)
      }

    


  let ans = mytask.map((key) => {
    return (<>
      <tr>
        <td>{sno += 1}</td>


        <td>
          {key.complete ? (<>
            <span style={{color:"red",textDecoration:"line-through"}}>{key.task}</span>
          </>) : (<>
            {key.task}
          </>)}
        </td>




        <td>
          <button onClick={() => { dispatch(removeTask({ id: key.id })) }}>Remove</button>
        </td>

        <td>
          <button onClick={()=>{dispatch(completeTask({id:key.id}))}}>Complete</button>
        </td>

        <td>
          <button onClick={()=>{dispatch(inCompletetask({id:key.id}))}}>Incomplete</button>
        </td>

        <td>
          <button onClick={()=>{myEdit(key.task,key.id)}}>Edit</button>
        </td>
      </tr>
    </>)

  })
  return (<>
    <h1>wellcome in Todo......</h1>
    Enter Task: <input type="text"
      value={task}
      onChange={(e) => { settask(e.target.value) }} />

      {mybtn?(<>
      
<button onClick={() => dispatch(addTask({ id: Date.now(),
 task: task, complete: false }))}
  >Add Task</button>
      </>):(

        <>
          <button onClick={saveEdit}>Update</button>
        </>
      )}
    <br /><br />
    <table>
      <tr>
        <th>Sno</th>
        <th>Task</th>
      </tr>

      {ans}
    </table>

  </>
  )
}

export default App