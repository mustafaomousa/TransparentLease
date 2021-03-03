import React from "react";
import {
    Box,
    Button,
    CheckBox,
    Form,
    FormField,
    Grommet,
    MaskedInput,
    RadioButtonGroup,
    RangeInput,
    Select,
    TextArea,
    TextInput,
} from 'grommet';
import { grommet } from 'grommet/themes';

const CalculatorBasicComponent = () => {
    return (
        <Form className="simple-calculator-form">
            <div className="simple-calculator-form-1">
                <label>MSRP</label>
                <TextInput plain="full" type="number" />
                <label>Selling price</label>
                <TextInput plain="full" type="number" />
                <label>Down payment</label>
                <TextInput plain="full" type="number" />
                <label>Money factor</label>
                <TextInput plain="full" name="mf" />
            </div>
            <div className="simple-calculator-form-2">
                <label>Months</label>
                <RangeInput plain="full" name="months" min="12" step="6" max="48" />
                <label>Miles</label>
                <RangeInput plain="full" name="miles" min="2500" step="2500" max="15000" />
            </div>
            <div className="simple-calculator-form-3">
                <label>Discount:</label>
                <p>$20,000</p>
                <label>Principal:</label>
                <p>$20,000</p>
                <label>Interest:</label>
                <p>$20,000</p>
                <label>Payment monthly:</label>
                <p>$1,085</p>
            </div>
        </Form>
    )
};

export default CalculatorBasicComponent