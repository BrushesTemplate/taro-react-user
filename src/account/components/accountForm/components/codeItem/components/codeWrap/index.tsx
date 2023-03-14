import {useEffect, useRef, useState} from "react";
import {View} from '@tarojs/components';
import {mobileRex} from "@/utils";
import {sendPhone, checkUserPhone} from 'qj-b2c-api';
import {errMessage} from "@/utils/message";

const seconds = 60;

export const CodeWrap = ({form, type}) => {
  const [timeFlag, setTimeFlag] = useState(false);
  const [time, setTime] = useState<number>(seconds);
  const timeRef = useRef<any>();
  const [lock, setLock] = useState(false);

  const getMobile = async () => {
    if (lock) return;
    const mobile = form.getFieldValue('mobile');
    if (!mobile) errMessage('请填写手机号');

    const pass = type === 'mobileLogin'? true:mobileRex.test(mobile);

    if (!pass) {
      errMessage('请填写正确的手机号');
    } else {
      setLock(true);
      try {
        const phone = {
          userPhone: mobile
        }
        if(type !== 'mobileLogin') {
          const checkResult = await checkUserPhone(phone);
          if(!checkResult.success) {
            errMessage(checkResult.msg);
            return
          }
        }

        const result = await sendPhone(phone)
        console.log(26, result);
        setTimeFlag(true)
        setTime(seconds);
      } catch (err) {
        console.log(err);
      } finally {
        setLock(false);
      }
    }
  }

  useEffect(() => {
    if (time && time !== 0)
      timeRef.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    if (time === 0) setTimeFlag(false);
    return () => {
      clearTimeout(timeRef.current);
    }
  }, [time]);


  return (
    <View>
      {
        timeFlag ? <View>倒计时 {time} 秒</View> : <View onClick={getMobile}>获取验证码</View>
      }
    </View>
  )
}
