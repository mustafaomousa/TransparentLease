import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllLatestDeals } from '../../store/deals';

const HomePageComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(getAllLatestDeals()), [dispatch])

    return (
        <div>
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