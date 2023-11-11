import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import SearchCity from "./components/SearchCity";

function NavbarListDrawer({ navLinks }) {
  NavbarListDrawer.propTypes = {
    navLinks: PropTypes.array.isRequired,
  };

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component={NavLink} to={item.path}>
                <ListItemText
                  sx={{ color: "#FEFEFE", fontWeight: "bold" }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/**aca va el componente buscar */}
          <Box sx={{paddingTop : '3rem'}}>
            <SearchCity />
          </Box>
        </List>
      </nav>
    </Box>
  );
}

export default NavbarListDrawer;
