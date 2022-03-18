import "../../assets/style/Index/footer.scss";
import {memo} from "react";
import Footer from "rc-footer";
import {useRequest} from "ahooks";
import {getFooter} from "../../requests";

export default memo(function () {
  let {data = {data: []}} = useRequest(getFooter)
  if (data) {
    data.data.forEach((item) => {
      item.icon = <img src={`http://127.0.0.1:3000${item.post}`} loading={"lazy"} alt={item.post}/>
      item.items.forEach((itemx) => {
        if(itemx.url===''){
          delete itemx.url
        }
        itemx.openExternal = true;
      })
    })
  }
  return <Footer theme={"light"} columns={data.data} bottom={`Made by Pikachu - Powered by React`}/>;
});
