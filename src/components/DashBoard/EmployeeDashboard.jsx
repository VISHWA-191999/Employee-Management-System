import Header from "../other/Header";
import TaskListTrack from "../other/TaskListTrack";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = ({data}) => {
    console.log(data)
 
    return (

        <div className="bg-[#1c1c1c] h-screen">
            <Header headerData = {data} />
            <TaskListTrack taskTrackerData = {data} />
            <Tasklist taskListData={data}/>

        </div>

    )
}

export default EmployeeDashboard;