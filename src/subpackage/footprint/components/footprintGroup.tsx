import {groupBy} from 'lodash-es';
import {useMemo} from "react";
import {Footprint} from './footprint'


export const FootprintGroup = ({footprintList, edit}) => {

  const list = useMemo(() => {
    const originArr = footprintList.map(item => {
      item.gmtCreate = `
        ${new Date(+item.gmtCreate).getFullYear()}-
        ${new Date(+item.gmtCreate).getMonth()+1}-
        ${new Date(+item.gmtCreate).getDate()}
        `
      return item
    })

    const groupObj = groupBy(originArr, 'gmtCreate');

    const resultArr = Object.keys(groupObj).map(item => {
      return {
        title: item,
        option: groupObj[item]
      }
    })
    console.log(8, resultArr);

    return resultArr
  }, [footprintList])

  return (
    <>
      {
        list.map((item, index) => {
          return (
            <>
              <Footprint key={index} item={item} edit={edit} />
            </>
          )
        })
      }
    </>
  )
}
