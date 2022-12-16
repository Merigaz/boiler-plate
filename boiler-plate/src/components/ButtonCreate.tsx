import { Button, Tooltip } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

function ButtonCreate(values: any) {
  const {handleCreate} = values;
  return (
    <Tooltip title={"Create Task"}>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleTwoTone />}
        size="large"
        onClick={handleCreate}
      />
    </Tooltip>
  );
}
export default ButtonCreate;
