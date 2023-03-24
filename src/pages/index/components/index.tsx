import { IconMobile } from '@brushes/simulate-component';
import { View  } from '@tarojs/components'
import {useEffect, useMemo, useState, memo, useRef} from 'react';
// import { useComponent } from '@/hooks';
import { getTaro, getEnv } from '@brushes/utils';
const isTaro = getEnv();

interface NoticebarInterface {
  content: Array<string>;
  speed?: number;
  fontSize?: number;
  icon?: string;
  color: string;
  direction?: 'horizontal' | 'vertical';
  navigator?: (e: number) => void;
}

const SmoothNoticeBar: React.FC<NoticebarInterface> = ({
                                                         fontSize = 12,
                                                         color,
                                                         content = [],
                                                         speed,
                                                         icon = 'gonggao',
                                                         direction = 'horizontal',
                                                         navigator
                                                       }) => {
  // const { View, NoticeBar } = useComponent();
  const [animationData, setAnimation] = useState({});
  const id = useMemo(() => {
    return `animElemId${Math.ceil(Math.random() * 10e5).toString(36)}`
  }, []);

  const sped = useMemo(() => {
    return direction === 'horizontal' ? speed ?? 30 : speed ?? 20;
  }, []);
  const className = direction === 'horizontal' ? 'scroll-animate' : 'normal';
  const length = useMemo(() => content.toString().length, [content]);
  const defaultTime = useMemo(() => {
    return direction === 'horizontal' ? 1000 : 250;
  }, [direction]);

  const widthSize = useMemo(() => {
    switch (direction) {
      case 'horizontal':
        return 10 * length;
      case 'vertical':
        return '100%';
    }
  }, [direction, length]);

  useEffect(() => {
    if (!isTaro) return;
    const Taro = getTaro();
    let intervalId = '' as any;
    const timeId = setTimeout(() => {
      const query = Taro.createSelectorQuery();
      query
        .select(`#${id}`)
        .boundingClientRect((res: any) => {
          const { width, height } = res;
          const n = getWidth(width) || 1;
          const dura = (n * 500) / +sped;
          const animBody = () => {
            const animation = Taro.createAnimation({
              duration: dura * defaultTime,
              timingFunction: 'linear'
            });

            const resetAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            });

            const horizontalImpl = () => {
              setTimeout(() => {
                resetAnimation.translateX(width / n).step();
                setAnimation(resetAnimation.export());
              }, dura * defaultTime + 200);
              setTimeout(() => {
                animation.translateX(-width).step();
                setAnimation(animation.export());
              }, 100);
            };

            const verticalImpl = () => {
              setTimeout(() => {
                resetAnimation.translateY(height / content.length).step();
                setAnimation(resetAnimation.export());
              }, dura * defaultTime + 200);

              setTimeout(() => {
                animation.translateY(-height).step();
                setAnimation(animation.export());
              }, 100);
            };

            switch (direction) {
              case 'horizontal':
                horizontalImpl();
                break;
              case 'vertical':
                verticalImpl();
                break;
              default:
                horizontalImpl();
            }
          };
          animBody();
          intervalId = setInterval(animBody, dura * defaultTime + 300);
        })
        .exec();
    }, 1000);
    return () => {
      clearTimeout(timeId);
      clearInterval(intervalId);
    };
  }, []);

  const getWidth = (width: number) => {
    if (!isTaro) return;
    const Taro = getTaro();
    const sysInfo = Taro.getSystemInfoSync();
    const deviceW = sysInfo.windowWidth;
    if (direction === 'horizontal' && width / deviceW > 1) {
      return width / deviceW;
    }
    return 1;
  };

  return (
    <>
      {isTaro ? (
        <View id={'noticebar-wrap'}>
          <View className={'icon-pre'}>
            <IconMobile style={{ fontSize: 20, fontWeight: 600 }} value={icon} />
          </View>
          <View animation={animationData} id={id}>
            <View style={{ width: widthSize }} className={className}>
              {content.map((item, index) => (
                <View
                  style={{ color }}
                  onClick={() => (navigator ? navigator(index) : () => {})}
                  key={index}
                  className={'scroll-animate-item'}
                >
                  {item}
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : (
       1231232
      )}
    </>
  );
};

export const NoticeBar = memo(SmoothNoticeBar);
