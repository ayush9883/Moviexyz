import axios from "axios";
import { useEffect, useState } from "react";


function useFetchData(apiEndpoint) {
    const [alldata, setAlldata] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [initialLoad, setInitialLoad] = useState([true]);
    const [allMovie, setAllMovie] = useState([]);

    useEffect(() => {
        if (initialLoad) {
            // set initialLoad to false to prevent the api call on subsequent renders
            setInitialLoad(false);
            setLoading(false);
            return; // exit useEffect
        }

        // set loading to true to indicate data fetching.
        setLoading(true);

        const fetchAllData = async () => {
            try {
                const res = await axios.get(apiEndpoint);
                const alldata = res.data;
                setAlldata(alldata);
                setAllMovie(alldata);
                setLoading(false); // set loading state to false after data is fetched.
            } catch (error) {
                console.error("error fetching movie data:", error);
                setLoading(false); // set loading state to false even if there's an error
            }
        };

        // fetch movie data only if category exits
        if (apiEndpoint) {
            fetchAllData(); // call this function if api exists
        }

    }, [initialLoad, apiEndpoint]); // depend on initial and apiEndpoint to trigger api call
    return { alldata, allMovie, loading };

}

export default useFetchData;