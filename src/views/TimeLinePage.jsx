import { memo, useEffect } from "react";
import { PageHeader, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import "../assets/style/Timeline/timeline.scss";
import { useNavigate } from "react-router-dom";
import HeaderRouter from "../components/HeaderRouter";
import store from "../reducer/resso";
import { useRequest } from "ahooks";
import { getTimeLine } from "../requests/timeLine";
import dayjs from "dayjs";

export default memo(function TimeLinePage() {
  const { siderHide, setSiderHide } = store;
  let { data = { data: [] } } = useRequest(getTimeLine);
  // console.log(data)
  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      <div className={"timeline-container"}>
        <HeaderRouter />
        <h1 style={{ marginLeft: "20px" }}>时间轴</h1>
        <Timeline mode="alternate" className={"timeline"}>
          {data.data.map((item) => {
            return (
              <Timeline.Item
                key={item.id}
                label={dayjs(item.time).format("YYYY-MM-DD HH:mm:ss")}
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              >
                {item.record}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </>
  );
});
