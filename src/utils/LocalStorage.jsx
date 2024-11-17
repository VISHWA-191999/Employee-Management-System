const employees = [
    {
        "id" : "1",
        'name':"vishwa",
        "email" : "vishwa@gmail.com",
        "pass" : "1234",
        "tasks" : [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Database Migration",
                "taskDescription": "Migrate user data to the new database structure",
                "taskDate": "2024-10-17",
                "category": "database"
              },
       

        
        ],
        "tasksCount" : {
            "active" : "2",
            "newTask" : '1',
            "completed" : '3',
            "failed" : '0'
        }

    },
    {
        "id" : "2",
        "name" : "Abhijeet",
        "email" : "abhijeet@gmail.com",
        "pass" : "1234",
        "tasks" : [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Backend API Development",
                "taskDescription": "Develop REST APIs for user authentication",
                "taskDate": "2024-10-20",
                "category": "development"
              },
              {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Test User Login",
                "taskDescription": "Perform unit testing for user login functionality",
                "taskDate": "2024-10-15",
                "category": "testing"
              },
        ],
        "tasksCount" : {
            "active" : "1",
            "newTask" : '2',
            "completed" : '1',
            "failed" : '0'
        }


    },

    {
        "id" : "3",
        "name":'sattya',
        "email" : "Sattyajeet@gmail.com",
        "pass" : "1234",
        "tasks" : [
            {
                "active" : true,
                "newTask" : false,
                "completed": false,
                "failed" : false,
                "taskTitle" : "Client Feedback",
                "taskDescription": "Gather feedback from clients",
                "taskDate" : "2024-10-12",
                "category" : "support"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage for the new website",
                "taskDate": "2024-10-18",
                "category": "design"
              },
        ],
        "tasksCount" : {
            "active" : "1",
            "newTask" : '0',
            "completed" : '3',
            "failed" : '1'
        }

    },

    {
        "id" : "4",
        "name":'Akanksha',
        "email" : "Akanksha@gmail.com",
        "pass" : "1234",
        "tasks" : [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create a presentation for the upcoming client meeting",
                "taskDate": "2024-10-19",
                "category": "support"
              },
              {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Onboarding",
                "taskDescription": "Assist in onboarding new clients to the platform",
                "taskDate": "2024-10-22",
                "category": "support"
              },
              {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize Database Queries",
                "taskDescription": "Improve performance of slow database queries",
                "taskDate": "2024-10-25",
                "category": "database"
              },
        ],
        "tasksCount" : {
            "active" : "2",
            "newTask" : '1',
            "completed" : '3',
            "failed" : '0'
        }

    },

    {
        "id" :"5",
        "name":"roshan",
        "email":"roshan@gmail.com",
        "pass" : "1234",
        "tasks" : [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Mobile App Layout",
                "taskDescription": "Create a mobile-friendly layout for the app",
                "taskDate": "2024-10-24",
                "category": "design"
              },
              {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the latest version of the application to production",
                "taskDate": "2024-10-16",
                "category": "development"
              },
        ],
        "tasksCount" : {
            "active" : "3",
            "newTask" : '1',
            "completed" : '5',
            "failed" : '2'
        }

    }
]

const admin = [
    {
        "id": 1,
        "email":"Deepmala@gmail.com",
        "name": 'Deepmala',
        "pass" : "1234"
    }
]

// export const setLocalStorage = () => {
//     localStorage.setItem('employeesData' , JSON.stringify(employees) );
//     localStorage.setItem('adminData', JSON.stringify(admin));
// }
export const setLocalStorage = () => {
    if (!localStorage.getItem('employeesData')) {
        localStorage.setItem('employeesData', JSON.stringify(employees));
    }
    if (!localStorage.getItem('adminData')) {
        localStorage.setItem('adminData', JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employeesData=JSON.parse(localStorage.getItem("employeesData"));
    const adminData=JSON.parse(localStorage.getItem("adminData"));
    // console.log(employeeData );
    // console.log(admin);

    return{employeesData,adminData};
}
