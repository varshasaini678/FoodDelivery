import '../App.css';
import { useRouteError } from 'react-router-dom';

const Error = ()=>{
    const err = useRouteError();
    return (
        <div className=''>
            <h2>{err.data}</h2>
           Something went wrong</div>
    )
}

export default Error