import {memo, useState} from "react";
import {Button, Image} from "antd";

export default memo(function AlbumListItem({image}) {
  let splits = image.split('/')
  splits[5] = `gzip_${splits[5]}`
  return (
      <>
        <div className={"album-list-item"}>
          <Image src={`${splits.join('/')}`}
                 preview={{
                   src: `${image}`,
                 }}
          loading={'lazy'}/>
        </div>

      </>
  );
});
