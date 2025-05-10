import './app-filter.css'


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-outline-dark" type="button">
                All movies
            </button>
            <button className="btn btn-outline-dark" type="button">
                top ranked movies
            </button>
            <button className="btn btn-outline-dark" type="button">
                top watched movies
            </button>
        </div>

    )
}

export default AppFilter