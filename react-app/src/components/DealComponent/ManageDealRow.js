import React, { useState } from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Collapse, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ManageSingleDeal from "./ManageSingleDeal"

const ManageDealRow = ({ deal }) => {
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div>
                            <ManageSingleDeal />
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
};

export default ManageDealRow;