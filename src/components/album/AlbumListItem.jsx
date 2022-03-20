import {memo, useState} from "react";
import {Button, Image} from "antd";

export default memo(function AlbumListItem({image}) {
  let splits = image.split('/')
  splits[3] = `gzip_${splits[3]}`
  return (
      <>
        <div className={"album-list-item"}>
          <Image src={`${window.url}${splits.join('/')}`}
                 preview={{
                   src: `${window.url}${image}`,
                 }}/>
        </div>

      </>
  );
});
