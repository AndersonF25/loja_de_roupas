import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./subMenu.style";
import { OptionsMenu } from "./subMenu.style";
import { IoMdArrowDropdown } from "react-icons/io";

type SubMenuProps = {
  handleAscendingPrice: () => void;
  handleDescendingPrice: () => void;
  handleAlphabeticOrder: () => void;
};

export default function SubMenu({
  handleAscendingPrice,
  handleDescendingPrice,
  handleAlphabeticOrder
}: SubMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <OptionsMenu>
          organizar por <IoMdArrowDropdown />
        </OptionsMenu>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <OptionsMenu onClick={handleAscendingPrice}>
            Preço: Menor - maior
          </OptionsMenu>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <OptionsMenu onClick={handleDescendingPrice}>
            Preço : Maior - menor
          </OptionsMenu>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <OptionsMenu onClick={handleAlphabeticOrder}>
            Ordem : A - Z
          </OptionsMenu>
        </MenuItem>
      </Menu>
    </div>
  );
}
