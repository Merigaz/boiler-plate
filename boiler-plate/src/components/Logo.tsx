import { Image } from 'antd';
function Logo () {
return (
<>
<Image src={require( "../assets/logo.png")} height={50} />
</>
);
}
export default Logo;