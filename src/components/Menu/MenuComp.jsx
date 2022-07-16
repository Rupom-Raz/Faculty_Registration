import * as React from "react";
import { Menu, MenuList, MenuItem, IconButton } from "@mui/material";

import { MoreVert } from "@mui/icons-material";
import { colors } from "../../Theme/colors";
import DeadlineModal from "../Modal/DeadlineModal";

export default function MenuComp({
    startDate,
    onStartDate,
    endDate,
    onEndDate,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                style={{ width: "10px", color: `${colors.purple}` }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MoreVert />
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem divider className="menuItem">
                    <DeadlineModal
                        startDate={startDate}
                        onStartDate={onStartDate}
                        endDate={endDate}
                        onEndDate={onEndDate}
                    />
                </MenuItem>
            </Menu>
        </>
    );
}
