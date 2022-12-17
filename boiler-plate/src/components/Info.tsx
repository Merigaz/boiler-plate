import { Col, Row, Image, Typography } from "antd";

function Info() {
  const { Title, Paragraph } = Typography;
  return (
    <Row justify="space-around" align="middle" style={{height: "100%"}} >
      
      <Col span={8}>
        <Title style={{padding:"0px 10px"}}>Lorem ipsum</Title>
        <Paragraph style={{padding:"0px 10px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          magni nisi! Odit, voluptate dolores? Ea quidem fuga maiores omnis
          itaque labore suscipit magni animi! Vitae voluptatibus eos id rerum.
        </Paragraph>
      </Col>
      <Col span={8}>
        <Image height={"auto"} width={"auto"} src={require("../assets/Info.png")} />
      </Col>
     
    </Row>
  );
}
export default Info;
