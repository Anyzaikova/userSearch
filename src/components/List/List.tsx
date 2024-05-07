import styles from './List.module.css';
import {FC, useMemo} from "react";
import IUser from "../../Interfaces/user";
import ListProps from "./List.props";

const List: FC<ListProps> = ({filter, data}) => {

    function getRandomKey() {
        return Math.random().toString(36).substr(2, 9);
    }

    const formatDate = (isoDate: Date): string => {
        const date = new Date(isoDate);
        const formatter = new Intl.DateTimeFormat('ru', {day: '2-digit', month: '2-digit', year: 'numeric'});
        return formatter.format(date);
    };

    const filterData = (data: IUser[], filter: string): IUser[] => {
        const filterLower = filter.toLowerCase();
        return data.filter(user =>
            user.name.first.toLowerCase().includes(filterLower) || user.name.last.toLowerCase().includes(filterLower)
        );
    };

    const filteredData = useMemo(() => filterData(data, filter), [data, filter]);

    return (
        <>
            <table className={styles['table']}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>picture</th>
                    <th>location</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>registered date</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((user) => (
                    <tr key={getRandomKey()}>
                        <td>{user.name.first} {user.name.last}</td>
                        <td><img src={user.picture.thumbnail} alt='Аватарка пользователя'/>
                        </td>
                        <td>{user.location.state} {user.location.city}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{formatDate(user.registered.date)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default List;
