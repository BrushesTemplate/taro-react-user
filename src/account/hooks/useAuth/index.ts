import {useEffect, useState} from "react";
import {queryProappEnvPage} from 'qj-b2c-api';

export const useAuth = () => {
  const [bg, setBg] = useState('');
  const [logo, setLogo] = useState('');
  const [agree, setAgree] = useState(true);

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    try {
      const res = await queryProappEnvPage();
      const result = res.list[0];
      setBg(`https://www.${result.proappEnvDomain}${result.proappEnvIndexc}`);
      setLogo(`https://www.${result.proappEnvDomain}${result.proappEnvLogo}`);
    }catch (err) {
      console.log(err)
    }
  }

  const agreeFunc = (e) => {
    if(e.detail.value.length) {
      setAgree(true);
    }else {
      setAgree(false);
    }
  }

  return {
    bg,
    logo,
    agreeFunc,
    setAgree,
    agree
  }
}
