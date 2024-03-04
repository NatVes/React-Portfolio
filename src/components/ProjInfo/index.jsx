// import { Link } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';

function ProjInfo(props) {
        return (
        <>
        <img src={props.image} alt={props.title} /><div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            {/* <Link to="/project-gallery"> */}
                <button onClick={props.closeProject} className="btn btn-primary">
                    Close
                </button>
            {/* </Link> */}
        </div>
        </>
    )
}

export default ProjInfo;