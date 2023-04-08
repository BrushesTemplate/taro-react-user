import {useEffect, useState} from 'react';
import {isEmpty, get} from 'lodash-es';
import Taro from '@tarojs/taro';
import {getPfsModelTagValueByTginfo} from 'qj-b2c-api';
import {useMenuGraph, menuGraph} from '@/utils/menuData';
import {loadMenu} from './useMenu';
import {errMessage} from '@/utils/message';
export function usePageConfig(route: string) {
  const [node, setNode] = useState([]);
  const menuRx = useMenuGraph(route);

  useEffect(() => {
    (async () => {
      const menuOpcode = await init(route)
      const isExister = menuGraph.get(route);

      if(isExister && !isEmpty(isExister.lowCodeGraph)) {
        const nodeResource = isExister.lowCodeGraph;
        setNode(nodeResource.nodeGraph)
        return;
      }
      const pageConfig = await getPfsModelTagValueByTginfo({
        menuOpcode: menuOpcode,
        proappCode: '025',
        isNew: 1
      });

      const dataStr = get(pageConfig, 'modelTagvalueJson', '{}')
      let data = JSON.parse(dataStr);
      if(!data.hasOwnProperty('nodeGraph')) {
        errMessage('脏数据, 初始化默认数据');

        data = {
          nodeGraph: [],
          page: '',
          version: '',
          pageConfig: {}
        }
      }
      menuRx.init(data);
      setNode(data.nodeGraph)
    })()
  }, [route]);


  async function init(path: string) {
    let menu: Array<any> = Taro.getStorageSync('menu') || [];
    if(isEmpty(menu)) {
      menu = await loadMenu()
    }
    const {menuOpcode} = menu.find(item => path.includes(item.menuJspath || item.pagePath)) || {};

    if(!menuOpcode) {
      errMessage('菜单配置有问题');
      return;
    }
    return menuOpcode
  }

  return node
}

