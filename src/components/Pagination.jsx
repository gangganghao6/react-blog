import { memo } from "react";
import { Pagination } from "antd";
import "../assets/style/pagination.scss";

export default memo(function ({ total, setPage }) {
  const test = (currentPage) => {
    setPage(currentPage);
  };
  return (
    <div className={"pagination-container"}>
      <Pagination defaultCurrent={1} total={total} defaultPageSize={10} showQuickJumper onChange={test} />
    </div>
  );
});
