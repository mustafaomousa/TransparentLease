import React, { useState, useEffect } from "react";
import { Image } from "grommet";
import { Button, TextField as TextArea, Modal, CardMedia, Card, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import ImageUploading from "react-images-uploading";

const ManageSingleDeal = ({ selectedDeal }) => {
    const [images, setImages] = useState([])
    const [uploadImageModalOpen, setUploadImageModalOpen] = useState(false);

    const onChange = (imageList) => {
        setImages(imageList);
        setUploadImageModalOpen(true);
    };

    return (
        <div className="single-deal-manage-container">
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
                    <Button id="upload-field" style={isDragging ? { color: "blue" } : null} onClick={onImageUpload} {...dragProps}>
                        <p>Click or drop images: {images.length}/9 available</p>
                    </Button>
                )}
            </ImageUploading>
            <div>
                <Button onClick={() => setUploadImageModalOpen(true)}>View images</Button>
                <Button>Edit deal</Button>
                <Button>Delete deal</Button>
            </div>
            <Modal id="deal-images" open={uploadImageModalOpen}>
                <div className="deal-images-body">
                    <GridList cols={3}>
                        {images.map((image, idx) => {
                            return (
                                <GridListTile key={idx} >
                                    <img src={image.data_url} alt="" />
                                    <GridListTileBar title={`image ${idx + 1}`} />
                                </GridListTile>
                            )
                        })}
                    </GridList>
                    <div>
                        <Button onClick={() => setUploadImageModalOpen(false)}>Close</Button>
                    </div>
                </div>
            </Modal>
        </div >
    )
};

export default ManageSingleDeal;