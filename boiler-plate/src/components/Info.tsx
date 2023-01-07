import { Col, Row, Image, Typography } from "antd";

function Info() {
  const { Title, Paragraph } = Typography;
  return (
    <Row justify="space-around" align="middle" style={{height: "100%"}} >
      
      <Col span={8}>
        <Title >Lorem ipsum</Title>
        <Paragraph >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste
          magni nisi! Odit, voluptate dolores? Ea quidem fuga maiores omnis
          itaque labore suscipit magni animi! Vitae voluptatibus eos id rerum.
        </Paragraph>
      </Col>
      <Col span={8}>
        <Image height={"auto"} width={"auto"} src={require("../assets/Info.png")}  preview={false}/>
      </Col>
     
    </Row>
  );
}
export default Info;
