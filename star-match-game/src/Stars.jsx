import utils from "./Utils";

const Stars = ({starsCount}) => {
    return (
        <>
            {utils.range(1, starsCount).map((starID) => (
                <div key={starID} className="star" />
            ))}
        </>
    );
};

export default Stars;
