import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Accordion, Typography, AccordionSummary, Checkbox, FormGroup, FormControlLabel, FormControl, Collapse } from "@material-ui/core";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"
import { useSelector } from "react-redux";
import { isEmpty, omit } from "lodash";

import { StyledAccordionDetails, StyledLocateSlider } from "../../component_utils/styledElements";
import DealCard from "../DealComponent/DealCard";

import "./locate.css";

const LocateComponent = () => {
    const history = useHistory();

    const makes = useSelector(state => state.utils.makes);

    const [selectedMakes, setSelectedMakes] = useState({});
    const [selectedModels, setSelectedModels] = useState({});
    const [milesRange, setMilesRange] = useState([7500, 1200]);
    const [monthsRange, setMonthsRange] = useState([24, 36]);
    const [paymentRange, setPaymentRange] = useState([300, 600]);
    const [locatedDeals, setLocatedDeals] = useState({})
    const [rerender, setRerender] = useState(false)

    const updateSelectedMakes = (e) => {
        setSelectedMakes({ ...selectedMakes, [e.target.value]: selectedMakes[e.target.value] ? false : true });
        history.push(`/locate/make=${makes[e.target.value].make.name}`)
    };

    const locateDeals = async (querySearch) => {
        const response = await fetch(`/api/deals/locate?${querySearch}`);
        const result = await response.json()
        setLocatedDeals(result.locate_results)
    }

    useEffect(() => {
        let searchObj = { makes: [] }
        Object.entries(selectedMakes).map(([make_id, truthy]) => {
            if (truthy) {
                searchObj.makes.push(makes[make_id].make.name)
            }
        })
        let querySearch = queryString.stringify(searchObj)
        history.push(`/locate/${querySearch}`);
        locateDeals(querySearch)
    }, [selectedMakes, selectedModels])



    const updateSelectedModels = (e) => {
        if (e.target.value in selectedModels) {
            setSelectedModels(omit(selectedModels, e.target.value))
        } else {
            setSelectedModels({ ...selectedModels, [e.target.value]: selectedModels[e.target.value] ? false : true });
        }
    };

    useEffect(() => console.log(selectedModels), [selectedModels])

    const updateMilesRange = (e, newMilesRange) => {
        setMilesRange(newMilesRange);
    };

    const updateMonthsRange = (e, newMonthsRange) => {
        setMonthsRange(newMonthsRange);
    }

    const updatePaymentRange = (e, newPaymentRange) => {
        setPaymentRange(newPaymentRange);
    };

    const milesMarks = [
        {
            value: 5000,
            label: "5,000"
        },
        {
            value: 10000,
            label: "10,000"
        },
        {
            value: 15000,
            label: "15,000"
        },
        {
            value: 20000,
            label: "20,000"
        }
    ];

    const monthsMarks = [
        {
            value: 12,
            label: "12mo"
        },
        {
            value: 24,
            label: "24mo"
        },
        {
            value: 36,
            label: "36mo"
        },
        {
            value: 48,
            label: "48mo"
        }
    ]

    return (
        <div className="locate-body">
            <Collapse component="div" children={<p>Hi</p>} />
            <div className="locate-container">
                <div className="locate-controls-container">
                    <div className="body-header">
                        <p>Locate a deal</p>
                    </div>
                    <div className="locate-forms-container">
                        <FormControl>
                            <Accordion square className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Make</Typography>
                                </AccordionSummary>
                                <StyledAccordionDetails className="locate-accordion-details">
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
                                <StyledAccordionDetails className="locate-accordion-details">
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
                                <StyledAccordionDetails className="locate-accordion-details">
                                    <FormGroup>
                                        <Typography>Miles per year</Typography>
                                        <StyledLocateSlider
                                            marks={milesMarks}
                                            value={milesRange}
                                            onChange={updateMilesRange}
                                            valueLabelDisplay="auto"
                                            min={2500}
                                            max={20000}
                                            step={2500}
                                        />
                                        <Typography>Months</Typography>
                                        <StyledLocateSlider
                                            marks={monthsMarks}
                                            value={monthsRange}
                                            onChange={updateMonthsRange}
                                            valueLabelDisplay="auto"
                                            min={12}
                                            max={48}
                                            step={12}
                                        />
                                    </FormGroup>
                                </StyledAccordionDetails>
                            </Accordion>
                            <Accordion className="locate-accordion">
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography>Payment</Typography>
                                </AccordionSummary>
                                <StyledAccordionDetails className="locate-accordion-details">
                                    <FormGroup>
                                        <Typography>Desired monthly payment</Typography>
                                        <StyledLocateSlider
                                            value={paymentRange}
                                            onChange={updatePaymentRange}
                                            valueLabelDisplay="auto"
                                            min={0}
                                            max={2000}
                                            step={5}
                                        />
                                    </FormGroup>
                                </StyledAccordionDetails>
                            </Accordion>
                        </FormControl>
                    </div>

                </div>
                <div className="locate-results-container">
                    {locatedDeals && isEmpty(selectedModels) && Object.entries(locatedDeals).map(([dealId, deal]) => (
                        <div>
                            <DealCard latestDeal={deal} />
                        </div>
                    ))}
                    {locatedDeals && !isEmpty(selectedModels) && Object.entries(locatedDeals).map(([dealId, deal]) => {
                        if (deal.lease_info.trim.model.id in selectedModels) return (
                            <div>
                                <DealCard latestDeal={deal} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default LocateComponent;