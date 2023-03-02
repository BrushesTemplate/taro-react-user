import {useEffect, useState} from "react";
import {queryExpressInfo}from '@brushes/api';

export const useExpressInfo = (code) => {
  const [info, setInfo] = useState('');
  useEffect(() => {
    console.log(6, code)
    setInfo(code)
  }, [])
  return {
    info
  }
}
