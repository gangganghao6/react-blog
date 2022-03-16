import "./assets/style/App.scss";
import { useEffect, useNavigate } from "react";
import AllRoutes from "./routes/route";
import Header from "./components/index/Header";
import LeftSider from "./components/index/LeftSider";
import Footer from "./components/index/Footer";
import Index from "./components";
import { BackTop } from "antd";

function App() {
  return (
    <div className="App">
      <BackTop />
      <Header />
      <LeftSider />
      <Index>
        <AllRoutes />
      </Index>
      <Footer />
    </div>
  );
}

export default App;
