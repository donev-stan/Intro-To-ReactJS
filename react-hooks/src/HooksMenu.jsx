import UseStateHook from "./hooks/UseStateHook";
import { Link } from "react-router-dom";

const HooksMenu = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <UseStateHook />
                </div>
            </div>
        </div>
    );
};

export default HooksMenu;
