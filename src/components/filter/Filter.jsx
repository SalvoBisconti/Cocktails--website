import "./index.scss";

const Filter = ({ filterCategory, setCategoryFilter, categoryFilter }) => {
  const onHandleFilter = (category) => {
    setCategoryFilter(category);
  };
  return (
    <div className="Filter">
      <div className="filter-area">
        {filterCategory.map((category) => (
          <h3
            key={filterCategory.length++}
            className={`filter-btn ${
              categoryFilter === category && "chosen-category"
            } `}
            onClick={() => onHandleFilter(category)}
          >
            {category}
          </h3>
        ))}
      </div>
    </div>
  );
};
export default Filter;
