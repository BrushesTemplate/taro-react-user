import Taro from "@tarojs/taro";

export const safeArea = () => {
  try {
    const systemInfo = Taro.getSystemInfoSync();
    const screenHeight = systemInfo.screenHeight;
    const safeHeight = systemInfo.safeArea?.bottom || 0;
    const screenWidth = systemInfo.screenWidth;
    Taro.setStorageSync('safeArea', screenHeight - safeHeight);
    Taro.setStorageSync('tabBarHeight', Math.floor(50 * screenWidth / 375))
    console.log('<-------->', systemInfo)
  } catch (e) {
    console.log(e)
  }
}
