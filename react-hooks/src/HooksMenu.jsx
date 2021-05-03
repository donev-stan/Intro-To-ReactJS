import { Link } from "react-router-dom";

const HooksMenu = () => {
    return (
        <div className="container my-5">
            <div className="row shadow-lg p-3 mt-5">
                <div className="col">
                    <Link to="/useStateHook">
                    <h2>useState hook</h2>
                        {/* <button type="button" className="btn btn-info">
                            useStateHook
                        </button> */}
                    </Link>
                </div>

                <div className="col">
                    <Link to="/useEffectHook">
                        <button type="button" className="btn btn-info">
                            useEffectHook
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HooksMenu;
