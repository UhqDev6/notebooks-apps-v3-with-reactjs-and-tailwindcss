import Navigation from '../molecules/Navigation';
import Logo from './notfound.jpg';
import Title from './Title';
const Error404 = () => {
    return(
        <>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                    <div>
                        <Title/>
                    </div>
                    <div>
                        <Navigation/>
                    </div>
            </div>
            <div className='flex justify-center'>
                <p className='mt-36 font-bold text-3xl text-purple-400'>NotFound Page</p>
            </div>
            <div className='flex justify-center mt-20'>
                <img src={Logo} alt="Not Found" className='w-1/4 rounded-3xl animate-pulse'/>
            </div>
        </>
    );
}

export default Error404;