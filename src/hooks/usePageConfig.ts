import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';

export function usePageConfig() {
  const [node, setNode] = useState([]);
  useEffect(() => {
    Taro.request({
      url: `${HOST}/web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json`,
      data: {
        menuOpcode: 'index_one'
      },
      method: 'POST',
      header: {
        "content-type":"application/x-www-form-urlencoded",
        "Saas-Agent": 'qj-wemini',
      }
    })
      .then(res => res.data)
      .then(json => {
        try{
          const list = JSON.parse(json.modelTagvalueJson);
          setNode(list.nodeGraph);
        } catch (err) {
          console.log(err)
        }
      }).catch(err=> {
      console.log(err)
    })
  }, []);

  return node
}
