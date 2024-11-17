import { useState } from "react";

const CreateTask = () => {

  const [taskTitle , setTaskTitle] =useState('')
  const [taskDate , setTaskDate] = useState('')
  const [assignTo , setAssignTo] =useState('')
  const [category , setCategory] =useState('')
  const [taskDescription, setTaskDescription] = useState('')

  // const [newTask , setNewTask] =useState ({})

  function submitForm (e) {
    e.preventDefault();

    // console.log("form submitted");
    console.log(taskTitle,taskDate,assignTo,category,taskDescription)
    // setNewTask({taskTitle,taskDate,category,taskDescription,active:false , completed:false , newTask :true ,failed : false})
    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      completed: false,
      newTask: true,
      failed: false,
    };
    const data=JSON.parse(localStorage.getItem('employeesData'));
    // console.log(data);
    // data.forEach( function(ele) {
 
    //   if (assignTo==ele.name) {
    //     ele.tasks.push(newTask);
    //   }

    // } )
      // Update the specific employee's task list if the name matches
      const updatedData = data.map((employee) => {
        if (employee.name === assignTo) {
          return { ...employee, tasks: [...employee.tasks, newTask] };
        }
        return employee;
      });
  

    // localStorage.setItem('employeesData' , JSON.stringify(data));
    // Update employeesData in localStorage with the modified task list
    localStorage.setItem('employeesData', JSON.stringify(updatedData));

    setTaskDate('')
    setTaskTitle('')
    setTaskDescription('')
    setAssignTo('')
    setCategory('')

    console.log(updatedData);

  }


  return (
    <form onSubmit={(e) => {
      submitForm(e)
    }
      } className="flex h-[290px] justify-evenly flex-wrap  bg-[#1c1c1c] ">
      <div className=" mt-0 ">
        <h3 className="text-lg">Task Title</h3>
        <input
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value)
        }}
          className=" mb-2 text-black"
          type="text"
          placeholder="Enter the task name"
        />

        <h3 className="text-lg">Task Date</h3>
        <input
        value={taskDate}
        onChange={(e) => {
          setTaskDate(e.target.value)
        }}
          className=" mb-2 text-black"
          type="Date"
          placeholder="Enter the taskDate"
          
        />

        <h3 className="text-lg">Assisgn To</h3>
        <input
        value={assignTo}
        onChange={(e) => {
          setAssignTo(e.target.value)
        }}
          className=" mb-2  text-black"
          type="text"
          placeholder="enter Employe name"
        />

        <h3 className="text-lg">Category</h3>
        <input
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
        }}
         className=" mb-2  text-black" type="text" placeholder="des/dev/etc" />
      </div>

      <div className="flex flex-col gap-1 ">
        <h3 className="text-xl"> Description</h3>
        <textarea
        value={taskDescription}
        onChange={(e) => {
          setTaskDescription(e.target.value)
        }}
          className="text-lg  text-black"
          name=""
          id=""
          rows={7}
          cols={60}
          placeholder="Describe the task"
        ></textarea>

        <button  className="font-bold text-xl bg-green-200 text-black rounded-xl p-1">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
