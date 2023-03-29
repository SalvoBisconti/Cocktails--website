import styles from "./index.module.scss";

const Filter = ({ filterCategory, setCategoryFilter, categoryFilter }) => {
  const onHandleFilter = (category) => {
    setCategoryFilter(category);
  };
  return (
    <div className={styles.Filter}>
      <div className={styles.content}>
        {filterCategory.map((category, i) => (
          <>
            <div
              key={filterCategory.length++}
              className={` ${styles.category} ${
                categoryFilter === category && styles.chosenCategory
              } `}
              onClick={() => onHandleFilter(category)}
            >
              <h3 className={styles.name} key={filterCategory.length++}>
                {category}
              </h3>
              <hr
                key={filterCategory.length++}
                className={` ${styles.underline} ${
                  categoryFilter === category && styles.chosenUnderline
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
