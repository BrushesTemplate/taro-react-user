import {useEffect, useState} from 'react';
import Taro from '@tarojs/taro';
const SaasAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.06.2206090 MicroMessenger/8.0.5 Language/zh_CN webview/'

export function usePageConfig() {
  const [node, setNode] = useState([])
  useEffect(() => {
    Taro.request({
      url: `${HOST}/web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json`,
      data: {
        menuOpcode: 'index_one'
      },
      method: 'POST',
      header: {
        "content-type":"application/x-www-form-urlencoded",
        "Saas-Agent": SaasAgent + ' qj-wemini',
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
  console.log('node', node);
  return node
}
