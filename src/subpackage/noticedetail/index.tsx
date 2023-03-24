import { View, Image } from '@tarojs/components';
import useNoticeDetail from "@/subpackage/noticedetail/useNoticeDetail";
import {useRouter} from '@tarojs/taro';
import './index.scss'

const Index = () => {
  const router = useRouter();
  const {info} = useNoticeDetail(router.params.noticeId);
  return (
    <View className='container'>
      <View className='title'>
        {info.noticeTitle}
      </View>
      {
        info.noticePicurl?<Image className='img' mode='widthFix' src={info.noticePicurl} /> : null
      }
      {
        info.noticePicurl1?<Image className='img' mode='widthFix' src={info.noticePicurl1} /> : null
      }
      {
        info.noticePicurl2?<Image className='img' mode='widthFix' src={info.noticePicurl2} /> : null
      }
      {
        info.noticePicurl3?<Image className='img' mode='widthFix' src={info.noticePicurl3} /> : null
      }
      <View className='content'>
        {info.noticeContext}
      </View>
    </View>
  )
}


export default Index;
