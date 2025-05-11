// "use client";

// import React, { useEffect, useState } from "react";
// import { useFetchData } from "../hooks/useFetchData";

// const ApiHandling = () => {
//   const [query, setQuery] = useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState("");

//   const [ data, error, loading ] = useFetchData(
//     `http://localhost:4000/products?search=${debouncedQuery}`
//   );

//   // Debounce query
//   useEffect(() => {
//     let timerId;
//     timerId = setTimeout(() => {
//       setDebouncedQuery(query);
//     }, 2000);

//     return () => clearTimeout(timerId);
//   }, [query]);

//   if (error) {
//     return <div>somethig went wrong</div>;
//   }

//   if (loading) {
//     return "loading...";
//   }

//   return (
//     <div>
//       <h1 className="text-2xl text-center">
//         Number of products {data?.length}
//       </h1>
//       <label htmlFor="">Search products : </label>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="border border-orange-500"
//       />

//       {data?.length >= 1 && (
//         <div>
//           <h1 className="text-2xl text-center"> Products Data</h1>
//           {data.map((el) => {
//             return <div key={el.id}>{el.name}</div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApiHandling;

"use client";

import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

const ApiHandling = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const [data, error, loading] = useFetchData(
    `http://localhost:4000/products?search=${debouncedQuery}`
  );

  useEffect(() => {
    let timerId;
    setTimeout(() => {
      setDebouncedQuery(query);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [query]);

  if (loading) {
    return <h1 className="text-3xl text-blue-400">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-3xl text-blue-400"> something went wrong...</h1>;
  }
  return (
    <div>
      <h1 className="text-2xl text-center">Api Handling</h1>
      <input
        className="text-center border border-orange-300"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {data?.length >= 1 && (
        <div>
          <h1>This is the products list</h1>
          {data.map((el) => {
            return (
              <div key={el.id}>
                <h1>{el.name}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ApiHandling;
