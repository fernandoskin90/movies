import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResults(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    })();
  }, [options, url]);

  return {
    results,
    error,
    loading
  };
};
