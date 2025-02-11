import { Link } from "react-router-dom";

function Identificador({value, link}) {
    return (
            <Link to={link}>
                <p>{value}</p>
            </Link>
    )
}

export default Identificador