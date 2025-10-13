import { useRef } from "react";
import styles from "./SearchBar.module.scss";
import { CircleX } from "lucide-react";
import colors from "@/styles/colors.module.scss";

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
          <CircleX size={18} strokeWidth={1} color={colors.grayBlue} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
