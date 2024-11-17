const Header = ({headerData}) => {

    // var name;
    // if(headerData) {
    //    if(headerData.data.name) {
    //      name= headerData.data.name;
    //     console.log(name);
    //    }
    //    else {
    //      name=headerData.name
    //    }
        

    // }
    let name = headerData.name;
   

   

    const handleLogOut = () => {
        localStorage.setItem('loggedInUser','');
        window.location.reload();
    }

   

    return (


        <div className="flex justify-between p-10">
            
            <h1 className="font-bold text-xl">Hello <br /> <span className="font-bold text-2xl">{name} 🙋‍♂️</span></h1>
            <button onClick={handleLogOut} className="font-semibold bg-emerald-300  px-2 h-9 rounded-xl ">Log Out</button>
        </div>
    )


}

export default Header;