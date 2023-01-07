import { useState } from "react";
import { Row, Col, Modal, Typography, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask } from "../store/reducers/taskSlice";
import { resetModal, toggleModal } from "../store/reducers/modalSlice";
import ButtonCreate from "../components/ButtonCreate";
import Taskform from "../components/Taskform";
const { Title } = Typography;
function App() {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const isOpen = useSelector((store: any) => store.modals);
  const tasks = useSelector((state: any) => state.tasks);

  const handleDelete = (id: any) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id: any) => {
    const task = tasks.find((x: any) => x.id === id);
    dispatch(toggleModal({}));
    setState(task);
  };

  const handleCreate = () => {
    setState({});
    dispatch(toggleModal({}));
  };

  const handleCancel = () => {
    dispatch(resetModal({}));
  };

  const handleOk = (values: any) => {
    if (values.id) {
      dispatch(editTask(values));
    } else {
      dispatch(addTask(values));
    }
    dispatch(toggleModal({}));
  };

  let args: any = {
    tasks,
    handleDelete,
    handleEdit,
    handleCancel,
    isOpen,
    handleOk,
    initialValues: state,
    handleCreate,
  };

  return (
    <>
      <Row justify="end" align="middle">
        <Col>
          <Button href="/poke">poke</Button>
        </Col>
        <Col>
          <Title style={{ color: "#e67e22", marginBottom: 0 }}>Tasks</Title>
        </Col>
        <Col>
          <Modal
            title="Edit Task"
            open={isOpen}
            onCancel={handleCancel}
            footer={[]}
          >
            <Taskform {...args} />
          </Modal>
          <ButtonCreate {...args} />
        </Col>
      </Row>
    </>
  );
}
export default App;
