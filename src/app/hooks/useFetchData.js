// "use client";

import axios from "axios";
import { useEffect, useState } from "react";

// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         setData(response.data);
//       } catch (error) {
//         setError(true);
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// };

export const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(true);
        console.log(error, `something went wrong`);
      } finally {
        setLoading(false);
        setError(false);
      }
    })();
  }, [url]);
  return [data, error, loading];
};
