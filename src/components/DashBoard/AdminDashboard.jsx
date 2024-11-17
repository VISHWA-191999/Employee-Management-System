import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = ({adminData}) => {
    console.log(adminData);

    return (
        <div >
            <Header headerData={adminData}/>
            <CreateTask/>
            <AllTask/>
          
        </div>
    )
}
export default AdminDashboard;