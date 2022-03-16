import resso from "resso";

const store = resso({
  siderHide: true,
  headerOtherHide: true,
  setSiderHide: () => {
    store.siderHide = !store.siderHide;
    if (store.siderHide) {
      document.body.style.position = "";
      document.body.style.overflow = "";
    } else {
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    }
  },
  setHeaderOtherHide: () => {
    store.headerOtherHide = !store.headerOtherHide;
  },
  refresh: true,
  setRefresh: () => {
    store.refresh = !store.refresh;
  },
});
export default store;
