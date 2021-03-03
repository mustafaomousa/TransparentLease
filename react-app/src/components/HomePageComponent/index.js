import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllLatestDeals } from '../../store/deals';
import './homepage.css'
const HomePageComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div>
            <h1>Home Page</h1>
            <div>

            </div>
            <div>

            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
};

export default HomePageComponent