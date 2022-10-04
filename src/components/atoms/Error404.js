import { LocaleConsumer } from '../../contexts/LocaleContext';
import Logo from './notfound.jpg';
const Error404 = () => {
    return(
        <LocaleConsumer>
        {({locale}) => {
            return(
                <>
                    <div className='flex justify-center'>
                        <p className='mt-36 font-bold text-3xl text-purple-400'>{locale === 'id' ? 'Halaman Tidak Diketahui' : 'NotFound Page'}</p>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <img src={Logo} alt="Not Found" className='w-1/4 rounded-3xl animate-pulse'/>
                    </div>
                </>
            );
        }}
        </LocaleConsumer>
    );
}

export default Error404;