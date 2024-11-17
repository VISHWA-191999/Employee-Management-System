import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("email is ", email, "password is ", password);



    setEmail("");
    setPassword("");

    handleLogin(email,password);
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="px-20 py-20 rounded-2xl border-2 border-red-600 ">
        <h1 className="font-bold text-3xl mb-5 text-center ">Login</h1>
        <form
          onSubmit={(e) => {
            formSubmit(e);
          }}
          className="flex flex-col h-[100%] items-center justify-center "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none border-2 border-red-400 mb-6 py-2 px-5 text-center placeholder:text-gray-500 rounded-xl bg-emerald-400"
            type="email"
            placeholder="Enter ur email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none border-2 border-red-400 mb-10 py-2 px-5 text-center placeholder:text-gray-500 rounded-xl bg-emerald-400 "
            type="password"
            placeholder="Enter password"
          />
          <button className=" text-white bg-red-600 font-bold text-xl px-8 py-2 rounded-xl ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className='border-2 border-red-600 p-4 rounded-lg'>
//         <form className='flex flex-col gap-4'>
//           <input
//             className="border p-2"
//             type="email"
//             placeholder="Enter your email"
//           />
//           <input
//             className="border p-2"
//             type="password"
//             placeholder="Enter password"
//           />
//           <button className="bg-red-800 text-yellow-500 p-2 rounded">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
