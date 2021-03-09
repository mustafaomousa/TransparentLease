import React, { useState } from "react";
import { Select, Input, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search"

const LocateBar = () => {
    const [selectedMiles, setSelectedMiles] = useState();
    const [selectedMonths, setSelectedMonths] = useState();

    const allMiles = [2500, 5000, 7500, 10000, 12000, 15000];
    const allMonths = [12, 24, 36, 48];

    return (
        <div className="locate-body-container">
            <div className="locate-deal-search-container">
                <Select id="locate-deal-select" options={allMiles} value={selectedMiles} placeholder="Miles per year" onChange={({ option }) => setSelectedMiles(option)} >
                    {allMiles && allMiles.map((miles, idx) => <MenuItem value={miles} key={idx}>{miles}</MenuItem>)}
                </Select>
                <Select id="locate-deal-select" options={allMonths} value={selectedMonths} placeholder="Months" onChange={({ option }) => setSelectedMonths(option)} >
                    {allMonths && allMonths.map((months, idx) => <MenuItem value={months} key={idx}>{months}</MenuItem>)}
                </Select>
                <Input />
            </div>
            <SearchIcon id="locate-deal-search-button" color="white" size="medium" />
        </div>
    )
};

export default LocateBar;