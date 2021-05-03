import { Link } from "react-router-dom";

const HooksMenu = () => {
    return (
        <div className="container my-5 d-flex flex-column">
            <div className="row shadow-lg p-3">
                <div className="col">
                    <Link to="/useStateHook">
                    <h2>useState</h2>
                        {/* <button type="button" className="btn btn-info">
                            useStateHook
                        </button> */}
                    </Link>
                </div>

            </div>
            <div className="row shadow-lg p-3">
                <div className="col">
                    <Link to="/useEffectHook">
                        <h2>useEffect</h2>
                    </Link>
                </div>
            </div>

            <div className="row shadow-lg p-3">
                <div className="col">
                    <Link to="/useMemoHook">
                    <h2>useMemo</h2>
                        {/* <button type="button" className="btn btn-info">
                            useMemoHook
                        </button> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HooksMenu;
