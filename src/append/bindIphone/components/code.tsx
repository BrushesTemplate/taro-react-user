import { useEffect, useState } from 'react';
import { Button  } from 'antd-mobile';
import { FormInstance } from 'antd-mobile/es/components/form'
import { sendPhone } from 'qj-b2c-api';
import { useMountedRef } from '@/hooks';
import {taroMessage} from '@brushes/utils';

const CodeJsx = ({ form }: { form: FormInstance }) => {
  const [dataTime, setDataTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const isMounted = useMountedRef();
  useEffect(() => {
    const time = setTimeout(function next() {
      if (dataTime === 0) {
        clearTimeout(time);
        return;
      }
      if (isMounted.current) {
        setDataTime((prev: number) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(time);
  }, [dataTime, isMounted]);

  const fetchCode = async () => {
    try {
      await form.validateFields(['userPhone'])
      setLoading(true);
      const userPhone = form.getFieldValue('userPhone');
      sendPhone({ userPhone })
        .then((res) => {
          if(res.success) {
            taroMessage(res);
          }
          setDataTime(1 * 60);
        })
        .catch((error: any) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {

    }

  };

  return (
    <Button
      loading={loading}
      fill='none'
      disabled={dataTime > 0}
      onClick={fetchCode}
    >
      {dataTime === 0 ? '获取验证码' : `倒计时${dataTime}秒`}
    </Button>
  );
};

export default CodeJsx;
