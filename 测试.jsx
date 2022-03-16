import { useEffect, useRef, useState } from "react";
import store from "./src/reducer/resso.js";
import { Button, Divider } from "antd";
import { useRequest } from "ahooks";
import axios from "axios";
import { useImmer } from "use-immer";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import json from "react-syntax-highlighter/dist/cjs/languages/hljs/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/hljs/markdown";
import rust from "react-syntax-highlighter/dist/cjs/languages/hljs/rust";
import java from "react-syntax-highlighter/dist/cjs/languages/hljs/java";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function getBlog() {
  return axios.get("/api/blogs", {
    params: {
      _limit: 2,
      _page: 1,
      _sort: "time",
      _order: "asc",
    },
  });
}

function handle(files) {
  const { length } = files;
  let formData = new FormData();
  for (let i = 0; i < length; i++) {
    formData.append(files[i].name, files[i], files[i].name);
  }
  Promise.all([]);
  axios
    .post("/api/blogImages", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
      axios
        .post("/api/blogs", {
          title: "title",
          content: "content",
          time: +new Date(),
          images: res.data,
          likes: [],
          comments: [],
          post: [res.data[0]],
          tags: [],
        })
        .then((res) => {
          alert("发布成功");
        });
    });
}

function uploadImgs(imgs) {
  return function () {
    handle(imgs);
  };
}

function patchImgs(files) {
  return function () {
    const { length } = files;
    let formData = new FormData();
    for (let i = 0; i < length; i++) {
      formData.append(files[i].name, files[i], files[i].name);
    }

    axios
      .post("/api/blogImages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        axios
          .patch("/api/blogs/2", {
            title: "title",
            content: "content",
            // time: +new Date(),
            images: res.data,
            // likes: [],
            // comments: [],
            post: [res.data[0]],
          })
          .then((res) => {
            alert("修改成功");
          });
      });
  };
}

// function getImg(setSrc) {
//   return function () {
//     return axios
//         .get("/api/getBlogImages", {
//           headers: {
//             responseType: "blob",
//           },
//           params: {
//             id: "a3a01b8116690ebb9a556e4bef108698efa1d8513dcef0bc0299e544561b1a0e.jpeg",
//             time: "2022-03-03",
//           },
//         })
//         .then((res) => {
//           let fileName = "a3a01b8116690ebb9a556e4bef108698efa1d8513dcef0bc0299e544561b1a0e.jpeg";
//           let type = fileName.match(/\.(png|jpg|gif|jpeg|webp)$/)[1];
//           let result = "data:image/" + type + ";base64," + window.btoa(res.data);
//           setSrc(result);
//         });
//   };
// }

export default function () {
  const { setObj } = store;
  const { data, error, loading } = useRequest(getBlog);
  let [imgs, setImgs] = useImmer({});
  let [src, setSrc] = useState("");
  let [input, setInput] = useState(``);
  if (data) {
    console.log(data);
  }

  function setFile(e) {
    let reader = new FileReader();
    reader.onload = function () {
      setInput(this.result);
      let file = new File([this.result], "test.md", { type: "text/md" });
      let formData = new FormData();
      formData.append(file.name, file, file.name);
      axios
        .post("/api/blogMd", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    };
    reader.readAsText(e.target.files[0]);
  }

  function set(e) {
    setImgs((draft) => {
      draft.files = e.target.files;
    });
  }

  return (
    <>
      <Button
        type={"primary"}
        onClick={function () {
          console.log(import.meta.env.MODE);
          if (import.meta.env.MODE === "development") {
            window.location.href = "http://localhost:8083/backstage/dist/";
          } else {
            window.location.href = "/backstage";
          }
        }}
      >
        去后台
      </Button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ReactMarkdown children={input} components={components} remarkPlugins={[remarkGfm]} />
        <input type={"file"} accept={"text/markdown"} onChange={setFile} />
      </div>
      <input type="file" alt="4545" multiple={true} accept="image/*" onChange={set} />
      {/*<button onClick={getImg(setSrc)}>获得图片们</button>*/}
      <Button type="primary" onClick={uploadImgs(imgs.files)}>
        上传
      </Button>
      <Button type="primary" onClick={patchImgs(imgs.files)}>
        修改
      </Button>
      {/*<img src={src} alt={""} style={{width: "100px", height: "100px"}}/>*/}
      <img
        src={
          "http://localhost:3000/blogImages/2022-03-02/21aad9d3a3b24afaae982fcbeb976430e0200c665dc0b66abe10801a7de1c5c6.jpeg"
        }
        alt={""}
        style={{ width: "100px", height: "100px" }}
      />
    </>
  );
}
