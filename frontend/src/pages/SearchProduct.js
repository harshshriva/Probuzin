import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SummaryApi from '../common';
import VerticalCard from '../components/VerticalCard';

const SearchProduct = () => {
    const query = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.searchProduct.url + query.search);
        const dataResponse = await response.json();
        setLoading(false);
        setData(dataResponse.data);
    };

    useEffect(() => {
        fetchProduct();
    }, [query]);

    return (
        <div className="container mx-auto p-4">
            {loading && (
                <p className="text-lg text-center sm:text-xl">Loading ...</p>
            )}

            <p className="text-lg font-semibold my-3 sm:text-xl">
                Search Results: {data.length}
            </p>

            {data.length === 0 && !loading && (
                <p className="bg-white text-lg text-center p-4 sm:text-xl">
                    No Data Found...
                </p>
            )}

            {data.length !== 0 && !loading && (
                <div className="flex flex-col sm:flex-row flex-wrap justify-center">
                    {data.map((product, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            <VerticalCard loading={loading} data={product} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchProduct;
