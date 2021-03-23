import React, { useEffect, useState } from "react";
import { InputLabel, Select, MenuItem, Accordion, Typography, AccordionDetails, AccordionSummary, Checkbox, FormGroup, FormControlLabel, FormControl } from "@material-ui/core";
import { useSelector } from "react-redux";

import "./locate.css";

const LocateComponent = () => {
    const makes = useSelector(state => state.utils.makes);

    const [selectedMakes, setSelectedMakes] = useState({});
    const [selectedModels, setSelectedModels] = useState([]);
    const [selectedTrims, setSelectedTrims] = useState([]);
    const [models, setModels] = useState([]);

    const updateSelectedMakes = (e) => {
        setSelectedMakes({ ...selectedMakes, [e.target.value]: selectedMakes[e.target.value] ? false : true });
    };

    useEffect(() => console.log(selectedMakes), [selectedMakes])

    const updateSelectedModels = (e) => {
        setSelectedModels(e.target.value);
    };

    const updateSelectedTrims = (e) => {
        setSelectedTrims(e.target.value);
    };

    return (
        <div className="locate-body">
            <p>Locate a deal</p>
            <div className="locate-container">
                <div className="locate-controls-container">
                    <div className="locate-vehicle-container">
                        <FormControl>
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography>Make</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            {makes && Object.entries(makes).map(([makeId, makeObj]) => (
                                                <FormControlLabel control={<Checkbox onChange={updateSelectedMakes} value={makeObj.make.id} />} label={makeObj.make.name} />
                                            ))}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography>Model</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            {selectedMakes && Object.entries(selectedMakes).map(([selectedMakeId, truthy]) => {
                                                if (truthy) return Object.entries(makes[selectedMakeId].models).map(([modelId, modelObj]) => (
                                                    <FormControlLabel control={<Checkbox />} label={modelObj.model.name} />)
                                                )
                                            })}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </FormControl>
                    </div>
                    <div className="locate-deal-container">

                    </div>
                </div>
                <div className="locate-results-container">

                </div>
            </div>
        </div >
    )
};

export default LocateComponent;