import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const data=useContext(AuthContext)
    console.log(data.employeesData);
    return (
        <div className=" p-5 bg-[#1c1c1c] mt-2 rounded-md">
            <div className="bg-yellow-600 rounded p-2 mb-4 flex justify-between">
                <h2 className="w-1/5 font-bold text-xl">Emp Name</h2>
                <h4 className="w-1/5 font-bold text-xl">New Task</h4>
                <h4 className="w-1/5 font-bold text-xl">Active</h4>
                <h4 className="w-1/5 font-bold text-xl">Completed</h4>
                <h4 className="w-1/5 font-bold text-xl">Failed</h4>
                
            </div>

            <div className="overflow-y-auto  h-52">
                {
                    data.employeesData.map( function (elem,idx) {

                     return    <div key={idx} className="bg-emerald-600  rounded p-2 mb-4 flex justify-between ">
                     <h3 className="w-1/5 font-bold text-xl">{elem.name}</h3>
                     <h3 className="w-1/5 font-bold text-xl text-[blue]">{elem.tasksCount.newTask}</h3>
                     <h3 className="w-1/5 font-bold text-xl text-yellow-300">{elem.tasksCount.active}</h3>
                     <h3 className="w-1/5 font-bold text-xl text-pink-600">{elem.tasksCount.completed}</h3>
                     <h3 className="w-1/5 font-bold text-xl text-[red]">{elem.tasksCount.failed}</h3>
                 </div>
                           
                           
                        
                        


                    })
                }
            </div>



          
        </div>
    )
}

export default AllTask;