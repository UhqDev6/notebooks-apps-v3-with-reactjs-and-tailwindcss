import AddPage from '../pages/AddPage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Archive from './Archive';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import { useEffect, useMemo, useState } from 'react';
import { LocaleProvider } from '../contexts/LocaleContext';
import Title from '../components/atoms/Title';
import Navlanguage from '../components/atoms/Navlanguage';
import NavTheme from '../components/atoms/NavTheme';
import Navigation from '../components/molecules/Navigation';
import { ThemeProvider } from '../contexts/ThemeContext';


const Page = () => {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const navigate = useNavigate();
    const [locale,setLocale] = useState(
        localStorage.getItem('localeNote') || 'id'
    );
    const [theme, setTheme] = useState(
        localStorage.getItem('themeNote') || 'light'
    );

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const changeLocale = prevLocale === 'id' ? 'en' : 'id';
            localStorage.setItem('localeNote', changeLocale);
            return changeLocale;
        });
    };

    const localeContext = useMemo(() => {
        return {
            locale,
            toggleLocale,
        }
    },[locale]);

    useEffect(() => {
        const dataUserLogged = async () => {
            const {data} = await getUserLogged();
            setAuthedUser(data);
            setInitializing(false);

        };
        dataUserLogged();

    },[]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const changeTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeNote', changeTheme);
            return changeTheme;
        });
    };

    const themeContext = useMemo(() => {
        return {
            theme,
            toggleTheme,
        }
    },[theme]);

    useEffect(() => {
        const root = document.querySelector('html')
        root.removeAttribute('class');
        root.classList.add(theme);
    },[theme]);



    const onLoginSuccess = async ({accessToken}) => {
        putAccessToken(accessToken);
        const {data} = await getUserLogged();
        setAuthedUser(data);
        navigate('/');
    }

    const onLogout = () => {
        setAuthedUser(null);
        navigate('/');
        putAccessToken('');
    }

    if(initializing) {
        return null
    }

    if(authedUser === null){
        return(
            <LocaleProvider value={localeContext}>
            <ThemeProvider value={themeContext}>
            <>
            <div className="max-w-full h-[100vh] -mt-10 dark:bg-slate-700 w-full ">
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-md">
                    <div className='mt-10'>
                        <Title/>
                    </div>
                    <div className="flex pt-1.5 mt-10 bg-purple-100 rounded-3xl w-48 justify-center">
                        <Navlanguage/>
                        <NavTheme/>
                    </div>
            </div>
            <Routes>
                
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess}/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
            </div>
            </>
            </ThemeProvider>
            </LocaleProvider>
        );
    }
        return(
            <LocaleProvider value={localeContext}>
            <ThemeProvider value={themeContext}>
            <>
            <div className="max-w-full h-[100vh] -mt-10 dark:bg-slate-700 w-full ">
            <header className="mt-6  sm:mt-10 flex justify-center space-x-6 text-md">
            <div className='mt-10'>
                <Title/>
            </div>
            <div className='mt-10'>
                <Navigation logout={onLogout} name={authedUser.name}/>
            </div>
            </header>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/add" element={<AddPage/>} />
                <Route path="/archive" element={<Archive/>} />
                <Route path="/detail/:id" element={<DetailPage/>} />
                <Route path="/404" element={<NotFound/>} />
                <Route path="*" element={<Navigate to='/404'/>} />
            </Routes>
            </div>
            </>
            </ThemeProvider>
            </LocaleProvider>
        );
    
    
}

export default Page;
