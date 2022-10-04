import { useNavigate } from "react-router-dom";
import Form from "../components/molecules/Form";
import { addNote } from "../utils/network-data";

const AddPage = () => {
    const navigate = useNavigate();
    const onAddHandler = async ({title, body}) => {
        const {error} = await addNote({ title, body });
        if(!error) {
            navigate('/');
        }
    }
    return(
        <>
            <aside className="flex justify-center mt-10">
                <Form addNote={onAddHandler} />
            </aside>
        </>
    );
}

export default AddPage;