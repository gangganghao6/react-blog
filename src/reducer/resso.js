import resso from "resso";
import {startTransition} from 'react';

const store = resso({
  siderHide: true,
  headerOtherHide: true,
  setSiderHide: () => {
    startTransition(()=>{
      store.siderHide = !store.siderHide;
      if (store.siderHide) {
        document.body.style.position = "";
        document.body.style.overflow = "";
      } else {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
      }
    });
  },
  setHeaderOtherHide: () => {
    startTransition(()=>{
      store.headerOtherHide = !store.headerOtherHide;
    });
  },
  refresh: true,
  setRefresh: () => {
    store.refresh = !store.refresh;
  },
});
export default store;
