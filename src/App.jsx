import React from 'react';
import Button from './components/elements/Button';
// class Button extends React.Component {
//   render() {
//     return ( <button className="h-10 px-6 font-semibold rounded-md bg-yellow-500 text-white hover:bg-gray-700"
//             type="submit">
//               Click Me
//             </button>
//       )
//   }
// }

// function ButtonBlack() {
//   return ( 
//         <button className="h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-gray-700"
//             type="submit">
//               Click Me
//           </button>
//       )
// }


function App() {
  return (
    <>
        <div className="flex justify-center items-center h-screen bg-blue-100">
          <div className='flex gap-x-4'>
            <Button></Button>
            <Button variant="bg-red-500">Register</Button>
            <Button variant="bg-slate-500">Sign Up</Button>
          </div>
        </div>
    </>
  )
}

export default App
