import styles from './Search.module.css';
import { ChangeEvent, FC } from "react";
import SearchProps from "./Search.props";

const Search: FC<SearchProps> = ({ onChange }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounce(e.target.value);
    };

    const debounce = (value: string) => {
        setTimeout(() => {
            onChange(value);
        }, 400);
    };

    const handleReset = () => {
        onChange('');
    };

    return (
        <div className={styles['search']}>
            <form className={styles['form']}>
                <input className={styles['input']}
                    placeholder='Поиск...'
                    onChange={handleChange}
                    type="search"
                />
                <button className={styles['button']} type='reset' onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default Search;
