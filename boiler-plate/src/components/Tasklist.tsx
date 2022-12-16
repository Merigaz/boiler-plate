import { Button, Card, Row, Col } from "antd";
import {EditTwoTone,  DeleteTwoTone} from  "@ant-design/icons"

function Tasklist(values: any) {
  const { tasks, handleDelete, handleEdit } = values;
  const { Meta } = Card;
  return (
    <Row gutter={[10, 10]}>
      {tasks.map((tasks: any) => (
        <Col key={tasks.id}>
          <Card
            style={{ width: 300 }}
            actions={[
             
               <Button type="link" onClick={() => handleDelete(tasks.id)} icon={<DeleteTwoTone />} size={"large"} />,
               
              <Button type="link" onClick={() => handleEdit(tasks.id)} icon={<EditTwoTone />} size={"large"} />,
            ]}
          >
            <Meta title={tasks.title} description={tasks.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default Tasklist;
