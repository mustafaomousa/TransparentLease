import React, { useState } from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"

const LocateBar = () => {
    const [selectedMiles, setSelectedMiles] = useState(10000);
    const [selectedMonths, setSelectedMonths] = useState(36);

    const allMiles = [2500, 5000, 7500, 10000, 12000, 15000];
    const allMonths = [12, 24, 36, 48];

    return (
        <div>
            <div className="locate-body-container">
                <p>Find your next car</p>
                <div className="locate-deal-search-container">
                    <InputLabel>Miles per year</InputLabel>
                    <Select id="locate-deal-select" options={allMiles} value={selectedMiles} placeholder="Miles per year" onChange={({ option }) => setSelectedMiles(option)} >
                        {allMiles && allMiles.map((miles, idx) => <MenuItem value={miles} key={idx}>{miles}</MenuItem>)}
                    </Select>
                    <InputLabel>How many months?</InputLabel>
                    <Select id="locate-deal-select" options={allMonths} value={selectedMonths} placeholder="Months" onChange={({ option }) => setSelectedMonths(option)} >
                        {allMonths && allMonths.map((months, idx) => <MenuItem value={months} key={idx}>{months}</MenuItem>)}
                    </Select>
                </div>
                <SearchIcon id="locate-deal-search-button" size="medium" />
            </div>
        </div>

    )
};

export default LocateBar;