import React, { useEffect, useState } from "react";
import { DataTable, Form, Button, RadioButton, TextInput, Layer, Image, Box, TextArea, CheckBox, Grommet } from "grommet";
import ImageUploading from "react-images-uploading";
import { grommet } from 'grommet/themes'
import { CaretUp } from "grommet-icons"
import { FileInput } from "grommet";
import { useSelector } from "react-redux";
import "./deal.css";

const columns = [
    {
        property: 'id',
        header: <p>Deal</p>
    },
    {
        property: 'make',
        header: <p>Make</p>,
    },
    {
        property: 'model',
        header: <p>Model</p>,
    },
    {
        property: 'trim',
        header: <p>Trim</p>
    },
    {
        property: 'msrp',
        header: <p>MSRP</p>
    },
    {
        property: 'discount',
        header: <p>Discount</p>
    },
    {
        property: 'months',
        header: <p>Months</p>
    },
    {
        property: 'miles',
        header: <p>Miles</p>
    },
    {
        property: 'residual',
        header: <p>Residual</p>
    },
    {
        property: 'moneyFactor',
        header: <p>MF</p>
    },
    {
        property: 'rebates',
        header: <p>Rebates</p>
    },
    {
        property: 'additionalFees',
        header: <p>Fees</p>
    },
    {
        property: 'payment',
        header: <p>Payment</p>
    },
];


const DealManageComponent = () => {
    const brokerDeals = useSelector(state => state.user.user_deals);
    const [selectedDeal, setSelectedDeal] = useState(null)
    const [images, setImages] = useState([])
    const [pictureLayerOpen, setPictureLayerOpen] = useState(false);
    const [select, setSelect] = useState([]);

    useEffect(() => console.log(select), [select])

    const onChange = (imageList, idx) => {
        setImages(imageList)
    };

    const ManageDealTable = ({ columns, data }) => (
        <div>
            <DataTable
                columns={columns}
                data={data}
                step={5}
                paginate={true}
                sortable={true}
                select={select}
                onSelect={id => {
                    setSelect(id)
                }
                }
                onClickRow={({ datum }) => {
                    setSelectedDeal(datum)
                }}
            />
        </div>
    );

    useEffect(() => {
        if (images.length) {
            setPictureLayerOpen(true)
        }
    }, [images])

    useEffect(() => {
        if (select.length === 1) {
            let controlsContainer = document.getElementById('control-container')
            let controlsSet = document.getElementById('control-set')
            controlsContainer.style.height = "230px"
            setTimeout(() => controlsSet.style.display = "grid", 1200)
        } else {
            let controlsContainer = document.getElementById('control-container')
            let controlsSet = document.getElementById('control-set')
            controlsSet.style.display = "none"
            setTimeout(() => controlsContainer.style.height = "5px", 200)
        }

    }, [selectedDeal, select.length])

    let data = []
    if (brokerDeals) {
        brokerDeals.map(brokerDeal => data.push({
            id: brokerDeal.id,
            make: brokerDeal.make.name,
            model: brokerDeal.lease_info.trim.model.name,
            trim: brokerDeal.lease_info.trim.name,
            msrp: brokerDeal.lease_info.msrp,
            discount: brokerDeal.lease_info.discount,
            months: brokerDeal.lease_info.months,
            miles: brokerDeal.lease_info.miles_yearly,
            residual: brokerDeal.lease_info.residual,
            moneyFactor: brokerDeal.lease_info.money_factor,
            rebates: brokerDeal.lease_info.lease_cash + brokerDeal.lease_info.loyalty + brokerDeal.lease_info.conquest,
            additionalFees: brokerDeal.fee + brokerDeal.lease_info.additional_fees,
            payment: brokerDeal.lease_info.payment,
            listed: brokerDeal.listed,
            demo: brokerDeal.demo,
            advertise: brokerDeal.advertised

        }))
    }

    if (brokerDeals) return (
        <div className="deal-manage-body">
            <Form>
                <div className="deal-manage-container">
                    <div className="deal-manage-header">
                        <div className="h4">
                            <h4>Manage your deals</h4>
                            <div className="h4-underline" style={{ width: "345px", marginBottom: "45px" }} />
                        </div>
                    </div>
                    <div className="deal-manage">

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "1200px", overflowY: "scroll" }}>
                            <ManageDealTable columns={columns} setSelectedDeal={setSelectedDeal} data={data} />
                        </div>
                        <div className="deal-manage-controls-container" id="control-container">
                            <div className="deal-manage-controls-set" id="control-set">
                                <div className="deal-manage-upload">
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={10}
                                        dataURLKey="data_url">
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageUpdate,
                                            onImageRemove,
                                            onImageRemoveAll,
                                            isDragging,
                                            dragProps
                                        }) => (
                                            <div className="upload-images-container" id="upload-images-container">
                                                <h5>Images</h5>
                                                <Button id="upload-field" style={isDragging ? { color: "blue" } : null} onClick={onImageUpload} {...dragProps}>
                                                    <p>Click or drop images</p>
                                                </Button>
                                                <Button id="remove-images-button" onClick={() => setPictureLayerOpen(true)}>View images</Button>
                                                {pictureLayerOpen && <Layer style={{ borderRadius: "0.5em" }}>
                                                    <div className="picture-manage-container">
                                                        <div className="images-container">
                                                            {imageList.map((image, idx) => (
                                                                <Box height="small" width="small" margin="5px" alignContent="center" justifyContent="center">
                                                                    <Image src={image.data_url} alt="" fit="cover" />
                                                                </Box>))}
                                                        </div>
                                                        <div className="picture-manage-button">
                                                            {images.length !== 0 && <Button id="remove-images-button" onClick={onImageRemoveAll}>Remove all images</Button>}
                                                            <Button id="remove-images-button" onClick={() => setPictureLayerOpen(false)}>Close</Button>
                                                        </div>
                                                    </div>
                                                </Layer>}
                                                {/* {images.length !== 0 && <Button id="remove-images-button" onClick={onImageRemoveAll}>Remove all images</Button>} */}
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                                <div className="deal-manage-notes" style={{ textAlign: "center" }}>
                                    <h5>Deal notes</h5>
                                    <Form>
                                        <TextArea id="deal-notes">

                                        </TextArea>
                                    </Form>
                                </div>
                                <div className="deal-manage-radio" style={{ textAlign: "center" }}>
                                    <h5>Deal settings</h5>
                                    {selectedDeal && (
                                        <div className="checkbox-container">
                                            <CheckBox checked={selectedDeal.listed} label="Listed" />
                                            <CheckBox checked={selectedDeal.advertise} label="Advertised" />
                                            <CheckBox checked={selectedDeal.demo} label="Demo" />
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="deal-manage-footer">
                    </div> */}
                </div>
            </Form>
        </div >
    )
};


export default DealManageComponent