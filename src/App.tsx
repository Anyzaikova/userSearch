import './App.css'
import Search from "./components/Search/Search";
import List from "./components/List/List";
import {useState, useEffect} from "react";
import Loader from "./components/Loader/Loader";
import IUser from "./Interfaces/user";

const url = 'https://randomuser.me/api/?results=15';

function App() {
    const [filter, setFilter] = useState<string>('');
    const [data, setData] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleChangeFilter = (value: string) => {
        setFilter(value);
    };

    useEffect(() => {
        const fetchData= async ():Promise<void> => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='App'>
            {isLoading ? (
                <Loader/>
            ) : (
                <>
                    <h1 className='heading'>User Search</h1>
                    <Search onChange={handleChangeFilter}/>
                    <List filter={filter} data={data}/>
                </>
            )}
        </div>
    )
}

export default App;
