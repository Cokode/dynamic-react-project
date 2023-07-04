import { useState, useEffect } from "react";

export default function useDataFetching (dataSource) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        async function fetchData() {
            const data = await fetch(dataSource);
            const result = await data.json();
                try { 
                        if (result) {
                            setLoading(false);
                            setData(result);
                        }
                    } catch (e){
                        setLoading(false);
                        setError(e.message);
                    }
        }
            fetchData();
        
    },[dataSource])

    return [loading, error, data];
}