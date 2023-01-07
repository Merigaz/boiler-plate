import { Image } from 'antd';
import { Link } from 'react-router-dom';
function Logo () {
return (
<>
<Link to="/">
<Image src={require( "../assets/logo.png")  } style={{paddingBottom:"8px"}} height={50} preview={false}/>
</Link>
</>
);
}
export default Logo;