import styles from './Search.module.css';
import { ChangeEvent, FC } from "react";
import SearchProps from "./Search.props";

const Search: FC<SearchProps> = ({ onChange }) => {

    let timeoutId:number;

    const debounce = (value: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            onChange(value);
        }, 800);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounce(e.target.value);
    };

    const handleReset = () => {
        clearTimeout(timeoutId);
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
