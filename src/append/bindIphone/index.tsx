import './index.scss';
import {View, CheckboxGroup, Label, Checkbox} from '@tarojs/components';
import { msgInfo } from './hooks'
import {useState} from 'react';

export default () => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log(9, e.detail.value)
  }

  return (
    <>
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='radio-list'>
              <CheckboxGroup onChange={onChange}>
                {msgInfo.map((item, i) => {
                  return (
                    <Label className='radio-list__label' key={i}>
                      <Checkbox className='radio-list__radio' value={item.value}>{item.text}</Checkbox>
                    </Label>
                  )
                })}
              </CheckboxGroup>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}
