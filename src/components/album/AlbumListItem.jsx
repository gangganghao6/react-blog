import {memo, useState} from "react";
import {Button, Image} from "antd";

export default memo(function AlbumListItem({image}) {
  let splits = image.split('/')
  splits[3] = `gzip_${splits[3]}`
  return (
      <>
        <div className={"album-list-item"}>
          <Image loading={"lazy"} src={`http://127.0.0.1:3000${splits.join('/')}`}
                 preview={{
                   src: `http://127.0.0.1:3000${image}`,
                 }}/>
        </div>

      </>
  );
});
