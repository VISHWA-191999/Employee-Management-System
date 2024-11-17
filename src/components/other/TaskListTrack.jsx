const TaskListTrack = ({taskTrackerData}) => {
  console.log(taskTrackerData.name)
  return (
    <div className=" flex gap-4 mt-4 mx-3 screen">
      <div className=" flex  p-[30px] rounded-xl  bg-red-400 w-[45%] flex-col items-center justify-center ">
        <h2 className="font-bold text-2xl">{taskTrackerData.tasksCount.newTask}</h2>
        <h3 className="font-semibold text-xl">New Task</h3>
      </div>

      <div className=" flex  p-[30px] rounded-xl  bg-green-400 w-[45%] flex-col items-center justify-center ">
        <h2 className="font-bold text-2xl">{taskTrackerData.tasksCount.active}</h2> 
        <h3 className="font-semibold text-xl">Assigned Task</h3>
      </div>

      <div className=" flex  p-[30px] rounded-xl  bg-yellow-400 w-[45%] flex-col items-center justify-center ">
        <h2 className="font-bold text-2xl">{taskTrackerData.tasksCount.completed}</h2>
        <h3 className="font-semibold text-xl">Completed Task</h3>
      </div>

      <div className=" flex  p-[30px] rounded-xl  bg-blue-400 w-[45%] flex-col items-center justify-center ">
        <h2 className="font-bold text-2xl">{taskTrackerData.tasksCount.failed}</h2>
        <h3 className="font-semibold text-xl">Failed Task</h3>
      </div>
    </div>
  );
};
export default TaskListTrack;
