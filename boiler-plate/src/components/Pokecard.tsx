import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import { useQuery } from "react-query";
import getPokemon from "../plugins/Useaxios";



function Pokecard() {
  const { data, isError, isLoading } = useQuery('pokemon', getPokemon)

if (isLoading) {
  return <div>Loading...</div>
}
if (isError) {
  return <div>Error! </div>
}
  const { Meta } = Card;
 
 console.log (data)
  


  return (
    <>
    <Row gutter={[10, 10]}>
        <Col>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={data.name}
                src={data['sprites']['other']['official-artwork']['front_default']}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar size={64} src={data['sprites']['front_default']} />}
              title={data.name}
            
              description=""
            />
          </Card>
        </Col>
    </Row>
    </>
  );
}

export default Pokecard;
