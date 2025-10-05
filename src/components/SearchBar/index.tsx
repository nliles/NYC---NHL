import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { CircleX, X } from "lucide-react";

const SearchBar = ({
  onChange,
}: {
  onChange: (inputValue: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = () => {
    inputRef.current!.value = "";
    onChange(inputRef.current!.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search landmarks..."
        ref={inputRef}
        onChange={() => onChange(inputRef.current!.value)}
      />
      {inputRef.current?.value && (
        <button onClick={handleClearSearch} className={styles.clearIcon}>
          <CircleX size={20} strokeWidth={1}/>
        </button>
      )}
      <img
        className={styles.searchIcon}
        src="search.png"
        alt="Search"
        width={30}
        height={30}
      />
    </div>
  );
};

export default SearchBar;
