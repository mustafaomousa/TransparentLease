import React, { useEffect, useState } from "react";
import { Form, Button, Layer, Image, Box, TextArea, CheckBox } from "grommet";
import ImageUploading from "react-images-uploading";
import { useSelector } from "react-redux";
import "./deal.css";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Collapse, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const Row = ({ deal }) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <p>{deal.id}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.make.name}</p>
                </TableCell>

                <TableCell >
                    <p>{deal.lease_info.trim.model.name}</p>
                </TableCell>
                <TableCell>
                    <p>{deal.lease_info.trim.name}</p>
                </TableCell>
                <TableCell >
                    <p>${deal.lease_info.msrp}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.discount}</p>
                </TableCell>
                <TableCell >
                    <p>{deal.lease_info.payment}</p>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div>
                            <h5>{deal.make.name}</h5>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const ManageDeal = ({ selectedDeal }) => {
    const [images, setImages] = useState([])
    const [pictureLayerOpen, setPictureLayerOpen] = useState(false);

    useEffect(() => {
        if (images.length) {
            setPictureLayerOpen(true)
        }
    }, [images])

    const onChange = (imageList, idx) => {
        setImages(imageList)
    };

    return (
        <div className="single-deal-manage-container">
            <p id="deal-header">Selected deal:</p>
            <div className="deal-manage-radio" style={{ textAlign: "center" }}>
                <p>Deal settings</p>
                {selectedDeal && (
                    <div className="checkbox-container">
                        <CheckBox checked={selectedDeal.listed} label="Listed" />
                        <CheckBox checked={selectedDeal.advertise} label="Advertised" />
                        <CheckBox checked={selectedDeal.demo} label="Demo" />
                    </div>)}
            </div>
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
                        <div className="upload-images-container">
                            <p>Deal images</p>
                            <Button id="upload-field" style={isDragging ? { color: "blue" } : null} onClick={onImageUpload} {...dragProps}>
                                <p>Click or drop images</p>
                            </Button>
                            <Button id="open-field" onClick={() => setPictureLayerOpen(true)}><p>Open image manager</p></Button>
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
                <p>Deal notes</p>
                <Form>
                    <TextArea id="deal-notes">

                    </TextArea>
                </Form>
            </div>
        </div>
    )
};

const DealManageComponent = () => {
    const brokerDeals = useSelector(state => state.user.user_deals);

    return (
        <div className="deal-manage-body">
            <div className="deal-manage-container">
                <div className="deal-chart-container">
                    <p id="deal-header">Manage your deals</p>
                    <div className="deal-chart">
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell><p>Deal #</p></TableCell>
                                        <TableCell><p>Make</p></TableCell>
                                        <TableCell><p>Model</p></TableCell>
                                        <TableCell><p>Trim</p></TableCell>
                                        <TableCell><p>Msrp</p></TableCell>
                                        <TableCell><p>Selling price</p></TableCell>
                                        <TableCell><p>Payment</p></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {brokerDeals && brokerDeals.map((deal, idx) => (
                                        <Row deal={deal} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div className="deal-manage-header">
                    <ManageDeal />
                </div>
            </div>
        </div >
    )
};


export default DealManageComponent