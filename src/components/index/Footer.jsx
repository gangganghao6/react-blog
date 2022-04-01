import '../../assets/style/Index/footer.scss';
import {memo} from 'react';
import Footer from 'rc-footer';
import {useRequest} from 'ahooks';
import {getFooter} from '../../requests';

export default memo(function () {
 let {data} = useRequest(getFooter);
 return <Footer theme={'light'} columns={data ? data.data.data : []} bottom={`Made by Pikachu - Powered by React`}/>;
});
