import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails
  return (
    <li className="repository-item">
      <img className="image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="status-text">{starsCount}</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="status-text">{forksCount}</p>
      </div>
      <div className="stats-container">
        <img
          className="stats-icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p className="status-text">{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
