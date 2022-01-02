import React, { useState, useEffect } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async (url) => {
        const res = await fetch(url);
        const resData = await res.json();
        setData(resData);
        setLoading(false);
    }

    useEffect(() => {
        getData('https://api.randomuser.me');
    }, []);


    return { data, setData, loading, setLoading };  
};
export default useFetch;