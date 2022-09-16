import { useNavigate } from "react-router-dom";
import Title from "../components/atoms/Title";
import Form from "../components/molecules/Form";
import Navigation from "../components/molecules/Navigation";
import { addNote } from "../utils/local-data";

const AddPage = () => {
    const navigate = useNavigate();
    const onAddHandler = ({title, body}) => {
        addNote({title, body});
        navigate("/");
    }
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
            <aside className="flex justify-center mt-10">
                <Form addNote={onAddHandler} />
            </aside>
        </>
    );
}

export default AddPage;