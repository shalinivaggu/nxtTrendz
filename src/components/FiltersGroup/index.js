import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    getCategoryAndRating,
    clearAllFilters,
    getTitleValue,
    ratingsList,
  } = props

  let activateCategoryId
  let activateRatingId
  let searchValue
  const filterByTerms = () => {
    getCategoryAndRating(activateCategoryId, activateRatingId)
  }

  const onClickOption = categoryId => {
    activateCategoryId = categoryId
    filterByTerms()
  }

  const onClickRating = ratingId => {
    activateRatingId = ratingId
    filterByTerms()
  }

  const clearFilters = () => {
    clearAllFilters()
  }

  const getTitleInput = () => {
    getTitleValue(searchValue)
  }

  const searchInput = event => {
    searchValue = event.target.value
    getTitleInput()
  }
  return (
    <div className="filters-group-container">
      <input
        type="search"
        placeholder="Search"
        onChange={searchInput}
        value={searchValue}
      />
      <h1>Category</h1>
      <ul className="category-list">
        {categoryOptions.map(each => (
          <li key={each.name} onClick={() => onClickOption(each.categoryId)}>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="category-list">
        {ratingsList.map(each => (
          <li
            key={each.ratingId}
            onClick={() => {
              onClickRating(each.ratingId)
            }}
          >
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="rating-image"
            />
            <span>&up</span>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-filters" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
