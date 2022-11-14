import { Form, Input, Button } from "antd";
import { useEffect } from "react";

function Taskform(values: any) {
  const { handleOk, initialValues } = values;
  const [form] = Form.useForm();
  useEffect(() => {
    if (initialValues && initialValues.id) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  });

  const onFinish = (values: any) => {
    if (initialValues && initialValues.id) {
      handleOk({
        id: initialValues.id,
        ...values,
      });
    } else {
      handleOk(values);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="title" label="title">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button key="submit" type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Taskform;
