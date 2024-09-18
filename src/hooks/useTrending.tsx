import { useEffect, useState } from 'react';
import apiClient from '@/services/api-client';

const useTrendingList = (trending: string = "movie") => {
    const [trendingData, setTrendingData] = useState();  // Adjust type if you have a specific type for movie data

    const fetchTrending = async () => {
        try {
            const res = await apiClient.get(`trending/${trending}/day`);
            setTrendingData(res.data.results);
        } catch (error) {
            console.error( error);
        }
    };

    useEffect(() => {
        fetchTrending();
    }, [trending]);

    return { trendingData, setTrendingData };
};

export default useTrendingList;
