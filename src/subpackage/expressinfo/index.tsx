import { useRouter } from "@tarojs/taro";
import { View } from "@tarojs/components";
import CommonJsx from "../../components";

const Index = () => {
  const { path = "/pages/index/index", params } = useRouter();
  const { code } = params;
  return (
    <View className='expressInfo'>
      <CommonJsx route={path} code={code} />
    </View>
  );
};

export default Index;
