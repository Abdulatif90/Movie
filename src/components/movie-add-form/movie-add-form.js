import "./movie-add-form.css"


const MovieAddFrom = () => {
  return (
    <div className="movie-add-form">
        <h3> Add new movies </h3>
        <form className="add-form d-flex">
            <input type="text" className="form-control new-post-label" placeholder="which movie?" />
            <input type="number" className="form-control new-post-label" placeholder="how many has it been seen?" />
            <button type="submit" className="btn btn-outline-dark" > Add</button>
         </form>
        </div>
  )
}

export default MovieAddFrom;