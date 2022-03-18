import {memo, useState} from "react";
import {Button, Form, Input, message, Modal, Radio} from "antd";
import {service} from "../../requests/request";

const CollectionCreateForm = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();
  return (
      <Modal
          visible={visible}
          title="输入密码"
          okText="验证"
          cancelText="取消"
          onCancel={onCancel}
          onOk={() => {
            form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
          }}
      >
        <Form
            form={form}
            layout="vertical"
            name="check"
        >
          <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: '输入密码进入后台哦',
                },
              ]}
          >
            <Input.Password/>
          </Form.Item>
        </Form>
      </Modal>
  );
};

const CollectionsPage = ({visible, setVisible}) => {

  const onCreate = async ({password}) => {
    let {data} = await service.get('/password')
    if (password === data[0]) {
      message.loading("登录成功，正在进入...")
      setVisible(false);
    } else {
      message.error("密码不对哦")
    }
  };

  return (
      <div>
        <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
        />
      </div>
  );
};


export default memo(function BackStageLogin(props) {
  return <><CollectionsPage {...props}/></>;
});
