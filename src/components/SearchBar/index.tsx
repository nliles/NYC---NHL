import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { CircleX, Search } from "lucide-react";
import colors from "@/styles/colors.module.scss";

const SearchBar = ({
  onChange,
}: {
  onChange: (inputValue: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = () => {
    inputRef.current!.value = "";
    onChange("");
  };

  return (
    <div className={styles.searchContainer}>
      <Search
        className={styles.searchIcon}
        size={18}
        strokeWidth={1.5}
        color={colors.grayBlue}
      />

      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search landmarks by name, architect..."
        ref={inputRef}
        onChange={() => onChange(inputRef.current!.value)}
      />

      {inputRef.current?.value && (
        <button
          type="button"
          onClick={handleClearSearch}
          className={styles.clearIcon}
          aria-label="Clear search"
        >
          <CircleX
            size={18}
            strokeWidth={1}
            color={colors.grayBlue}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
