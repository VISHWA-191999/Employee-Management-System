import AcceptTask from "./AccepTask";
import CompleteTak from "./CompleteTak";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const Tasklist = ({taskListData}) => {
  console.log(taskListData);
  
  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-5 flex-nowrap shrink-0 h-[55%] w-full mt-5 p-4 overflow-x-auto"
    >
      {
        taskListData.tasks.map((elem,index) => {

          if(elem.completed) {
           
            return <CompleteTak key={index} data={elem}/>
           }

          if(elem.active) {
            
            // console.log(elem.active);
            return <AcceptTask key={index} data={elem}/>
          }

            if (elem.failed) {
            // console.log(elem.active);
            return <FailedTask key={index} data={elem}/>
          }

        
          if(elem.newTask) {
          return <NewTask key={index} data={elem}/>
         }

         return null;

        })

      }

      {/* <AcceptTask />

      <NewTask/>

     <FailedTask/>
     <CompleteTak/> */}

    
    </div>
  );
};

export default Tasklist;
