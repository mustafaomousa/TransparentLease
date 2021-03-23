import React, { useEffect, useState } from "react";
import { InputLabel, Select, MenuItem, Accordion, Typography, AccordionDetails, AccordionSummary, Checkbox, FormGroup, FormControlLabel, FormControl, Collapse } from "@material-ui/core";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"
import { useSelector } from "react-redux";

import "./locate.css";
import { StyledAccordionDetails } from "../../component_utils/styledElements";

const LocateComponent = () => {
    const makes = useSelector(state => state.utils.makes);

    const [selectedMakes, setSelectedMakes] = useState({});
    const [selectedModels, setSelectedModels] = useState({});
    const [selectedTrims, setSelectedTrims] = useState([]);
    const [models, setModels] = useState([]);

    const updateSelectedMakes = (e) => {
        setSelectedMakes({ ...selectedMakes, [e.target.value]: selectedMakes[e.target.value] ? false : true });
    };

    useEffect(() => console.log(selectedMakes), [selectedMakes])

    const updateSelectedModels = (e) => {
        setSelectedModels({ ...selectedModels, [e.target.value]: selectedModels[e.target.value] ? false : true });
    };

    const updateSelectedTrims = (e) => {
        setSelectedTrims(e.target.value);
    };

    return (
        <div className="locate-body">
            <p>Locate a deal</p>
            <Collapse component="div" children={<p>Hi</p>} />
            <div className="locate-container">
                <div className="locate-controls-container">
                    <div className="locate-forms-container">
                        <FormControl>
                            <Accordion square className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Make</Typography>
                                </AccordionSummary>
                                <StyledAccordionDetails>
                                    <FormGroup>
                                        {makes && Object.entries(makes).map(([makeId, makeObj]) => (
                                            <FormControlLabel control={<Checkbox onChange={updateSelectedMakes} value={makeObj.make.id} />} label={makeObj.make.name} />
                                        ))}
                                    </FormGroup>
                                </StyledAccordionDetails>
                            </Accordion>
                            <Accordion className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Model</Typography>
                                </AccordionSummary>
                                <StyledAccordionDetails>
                                    <FormGroup>
                                        {selectedMakes && Object.entries(selectedMakes).map(([selectedMakeId, truthy]) => {
                                            if (truthy) return Object.entries(makes[selectedMakeId].models).map(([modelId, modelObj]) => (
                                                <FormControlLabel control={<Checkbox onChange={updateSelectedModels} value={modelObj.model.id} />} label={modelObj.model.name} />)
                                            )
                                        })}
                                    </FormGroup>
                                </StyledAccordionDetails>
                            </Accordion>
                            <Accordion square className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Term</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Payment</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </FormControl>
                    </div>

                </div>
                <div className="locate-results-container">

                </div>
            </div>
        </div >
    )
};

export default LocateComponent;