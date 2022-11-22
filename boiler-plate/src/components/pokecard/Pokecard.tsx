import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";


function Pokecard(values: any) {
  const { Meta } = Card;
  const {response} = values
 console.log (response)
  


  return (
    <Row gutter={[10, 10]}>
        <Col>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={response && response.name}
                src={response && response['sprites']['other']['official-artwork']['front_default']}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar size={64} src={response && response['sprites']['front_default']} />}
              title={response && response.name}
            
              description=""
            />
          </Card>
        </Col>
    </Row>
  );
}

export default Pokecard;
