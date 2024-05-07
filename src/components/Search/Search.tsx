import styles from './Search.module.css';
import {ChangeEvent, FC} from "react";
import SearchProps from "./Search.props";


const Search: FC<SearchProps> = ({onChange, onReset}) => {

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        onChange(e.target.value);
    }

    return (
        <div className={styles['search']}>
            <form className={styles['form']}>
                <input placeholder='Поиск' onChange={handleChange}/>
                <button type='button' onClick={onReset}>Reset</button>
            </form>
        </div>

    )
}

export default Search;