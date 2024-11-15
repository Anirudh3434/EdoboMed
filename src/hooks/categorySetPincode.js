import axios from "axios";
import { useState, useRef, useCallback } from "react";

const useFetchCategoryProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef({}); // Cache to store results of previous requests
  const debounceTimeout = useRef(null); // Ref for debounce timeout

  const fetchData = useCallback((pinCode) => {
    return new Promise((resolve, reject) => {
      // Return cached data if available
      if (cache.current[pinCode]) {
        resolve(cache.current[pinCode]);
        return;
      }

      // Clear any existing timeout to debounce the API call
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      // Set a timeout to delay the API call
      debounceTimeout.current = setTimeout(async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            process.env.REACT_APP_PHP_URL +
              `/v2/category-list?pincode=${pinCode}&device=1`
          );
          if (response) {
            const data = response.data;
            cache.current[pinCode] = data; // Store the result in cache
            setLoading(false);
            resolve(data);
          } else {
            throw new Error("Failed to fetch");
          }
        } catch (error) {
          setError(error.message);
          setLoading(false);
          reject(error);
        }
      }, 300); // 300ms delay for debounce
    });
  }, []);

  return { loading, error, fetchData };
};

export default useFetchCategoryProducts;
