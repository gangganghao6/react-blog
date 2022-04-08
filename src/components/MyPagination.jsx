import { memo } from "react";
import { Pagination } from "antd";
import "../assets/style/pagination.scss";

export default memo(function MyPagination({ total, current, setPage, pageSize = 10 }) {
  return (
    <div className={"pagination-container"}>
      <Pagination current={current} defaultCurrent={1} total={total} pageSize={pageSize} onChange={setPage} />
    </div>
  );
});
