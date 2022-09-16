import AddPage from '../pages/AddPage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import { Route, Routes } from 'react-router-dom';
import Archive from './Archive';
import NotFound from './NotFound';


export const Page = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/add" element={<AddPage/>} />
            <Route path="/archive" element={<Archive/>} />
            <Route path="/detail/:id" element={<DetailPage/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </>
    );
}
