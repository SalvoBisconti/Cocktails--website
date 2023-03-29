import styles from "./index.module.scss";

const CategorySelect = ({ setCategoryLetter }) => {
  const alphabetsArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  alphabetsArray.slice(
    alphabetsArray.indexOf("a"),
    alphabetsArray.indexOf("z") + 1
  );

  return (
    <div className={styles.CategorySelect}>
      <div className={styles.content}>
        <h3>Choose the initilal cocktail's letter</h3>
        <div className={styles.inputEl}>
          <form>
            <select
              className={styles.select}
              name="category"
              id="category"
              onChange={(e) => setCategoryLetter(e.target.value)}
            >
              {alphabetsArray.map((letter) => (
                <option value={letter}>{letter}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
