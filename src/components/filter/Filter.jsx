import "./index.scss";

const Filter = ({ filterCategory, setCategoryFilter, categoryFilter }) => {
  const onHandleFilter = (category) => {
    setCategoryFilter(category);
  };
  return (
    <div className="Filter">
      <div className="filter-area">
        {filterCategory.map((category, i) => (
          <>
            <div
              key={filterCategory.length++}
              className={`filter-element ${
                categoryFilter === category && "chosen-category"
              } `}
              onClick={() => onHandleFilter(category)}
            >
              <h3 className="filter-btn" key={filterCategory.length++}>
                {category}
              </h3>
              <hr
                key={filterCategory.length++}
                className={`filter-line ${
                  categoryFilter === category && "chosen-category-line"
                } `}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Filter;
