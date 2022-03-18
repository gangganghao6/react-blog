import {memo, useEffect, useRef} from "react";
import "../assets/style/Blog/blogCommentInput.scss";
import {Button, Form, Input, message} from "antd";
import NProgress from "nprogress";
import {useRequest} from "ahooks";
import {addComment} from "../requests/blog";
import store from "../reducer/resso";

const {TextArea} = Input;

export default memo(function BlogCommentInput({replyData: {replyName, isInner, floor}, id, totalComments, type}) {
  let ref = useRef();
  const {setRefresh} = store;
  const [form] = Form.useForm();

  function onFinish({comment, name, email}) {
    addComment(id, isInner, floor, replyName, name, email, comment, totalComments, type).then((res) => {
      form.resetFields();
      setRefresh();
      message.success('发布成功');
    });
  }

  useEffect(() => {
    if (replyName !== undefined) {
      ref.current.resizableTextArea.textArea.placeholder = `回复 @${replyName}:`;
      ref.current.focus();
    }
  }, [replyName]);
  return (
      <div className={"blog-comment-input-container"}>
        <Form onFinish={onFinish} name="basic" form={form}>
          <Form.Item label="评论" name="comment" rules={[{required: true, message: "评论内容不能为空哦"}]}>
            <TextArea className={"blog-comment-input-textarea"} rows={4} showCount maxLength={128} ref={ref}/>
          </Form.Item>

          <div className={"blog-comment-input-msg-container"}>
            <Input.Group compact={true}>
              <div style={{width: "48%", paddingRight: "10px"}}>
                <Form.Item label="名称" name="name" rules={[{required: true, message: "名称不能为空哦"}]}>
                  <Input className={"blog-comment-input-msg"}/>
                </Form.Item>
              </div>
              <div style={{width: "48%"}}>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{required: true, message: "邮箱格式不正确哦", type: "email"}]}
                >
                  <Input className={"blog-comment-input-msg"}/>
                </Form.Item>
              </div>
            </Input.Group>
          </div>
          <Button type="primary" htmlType="submit" style={{marginLeft: "10px"}}>
            提交
          </Button>
        </Form>
      </div>
  );
});
