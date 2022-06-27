/**
 * Created by Tiger on 11/05/2022.
 */
import React, {useEffect} from "react";
import {useState} from "react";

export default function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(handler)
  }, [value, delay])
}
