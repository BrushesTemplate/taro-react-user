import {getNotice} from 'qj-b2c-api';
import {useEffect, useState} from "react";

const useNoticeDetail = (noticeId) => {
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      const result = await getNotice({noticeId});
      setInfo(result);
      console.log(13, result);
    }catch (err) {
      console.log(err);
    }
  }

  return {
    info,
    setInfo
  }
}

export default useNoticeDetail
