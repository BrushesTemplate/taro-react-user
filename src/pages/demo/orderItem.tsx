import { useComponent, antdMobile } from '@brushes/simulate-component';
import { navigatorImpl } from '@brushes/utils';
import { orderStatusImpl, routerMap } from 'qj-mobile-store';
import { CardJsx } from '@/common/card';
import FooterComponent from '@/components/OrderDetail/component/footer';

const { Button } = antdMobile;

interface OrderType {
    contractBillcode: string;
    goodsList: Array<OrderGoodsItem>;
    dataBmoney: number;
    dataBnum: number;
    dataState: number | string;
    contractId: string | number;
    init: () => void;
    contractAppraise: number;
}

export interface OrderGoodsItem {
    dataPic: string;
    goodsName: number;
    dataBmoney: number;
    goodsCamount: number;
    contractGoodsId: number;
    dataState: number | string;
}

export function Item({
    contractBillcode,
    dataBmoney,
    dataBnum,
    goodsList,
    dataState,
    contractId,
    init,
    contractAppraise
}: OrderType) {
    const { View } = useComponent();
    const status = orderStatusImpl(dataState);
    return (
        <View className='orderListItem'>
            <View onClick={() => navigatorImpl(`${routerMap.orderDetail}?contractBillcode=${contractBillcode}`)}>
                <View className='topInfo'>
                    <View className='orderNo'>
                        订单号: {contractBillcode}
                        <Button className='copy' size='mini' fill='outline'>
                            复制
                        </Button>
                    </View>
                    <View className='status'>{status}</View>
                </View>
                <View className='goodsItemWrap'>
                    {goodsList.map((item) => (
                        <CardJsx key={item.contractGoodsId} {...item} />
                    ))}
                    <View className='allInfo'>
                        <View className='totalNum'>共{dataBnum}件商品</View>
                        <View className='totalPrice'>合计 ￥{dataBmoney}</View>
                    </View>
                </View>
            </View>
            <FooterComponent
                init={init}
                contractId={contractId}
                contractBillcode={contractBillcode}
                dataState={dataState}
                contractAppraise={contractAppraise}
            />
        </View>
    );
}
