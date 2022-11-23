import { Spin } from 'antd';
import { useSelector } from 'react-redux';

function Spinload () {
    const loading = useSelector((state: any) => state.loading);
    return (
        <>
        {
            loading ? <Spin size="large" /> : <></>
        }
        </>
    )
}

export default Spinload;