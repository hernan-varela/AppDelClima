import { Box } from '@mui/material';
import Navbar from './navbar/Navbar';
import { PropTypes } from 'prop-types';

function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Box >
      <Navbar />
      {children}
    </Box>
  );
}

export default Layout;
