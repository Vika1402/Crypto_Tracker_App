import { useState } from "react";
import "./App.css";
import CoinTable from "./Componenets/CoinTable/CoinTable";
import Navbar from "./Componenets/Navbar/Navbar";
import Banner from "./Componenets/Banner/Banner";
import Home from "./pages/Home";
import Routing from "./Componenets/Routing/Routing";

function App() {
  return (
    <>
     
      <Routing />
    </>
  );
}

export default App;

// const [data, setData] = useState([]);
// const fetchApi = async () => {
//   try {
//     const fetchapi = await fetch(
//       "https://api.escuelajs.co/api/v1/categories"
//     );
//     const result = await fetchapi.json();
//     setData(result);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// useEffect(() => {
//   fetchApi();
// }, []);

// function xmlRes() {
//   const xhr = XMLHttpRequest;
//   xhr.open("get", "https://jsonplaceholder.typicode.com/todos/2");
//   xhr.send();
// }

// xmlRes();
{
  /* <div className="text-[30px]">helo</div>
      <button className="">ok</button>
      <div className="flex flex-wrap ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="p-8 shadow-2xl card bg-base-100 w-96 rounded-xl "
            >
              <figure>
                <img
                  className="w-[300px] h-[300px] object-fill object-center"
                  src={item.image}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.name}
                  <div className="badge badge-secondary">{item.creationAt}</div>
                </h2>
              </div>
            </div>
          );
        })}
      </div> */
}
