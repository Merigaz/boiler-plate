import { Image } from 'antd';
function Logo () {
return (
<>
<Image src={require( "../assets/logo.png")  } style={{paddingBottom:"8px"}} height={50} />
</>
);
}
export default Logo;