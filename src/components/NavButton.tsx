import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material';

interface NavButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton = ({ to, children, ...props }: NavButtonProps) => {

  return (
      <Button
      component={NavLink}
      variant="text"
      color="info"
      size="small"
      sx={{
        '&.active': {
          color: '#183871',
          fontWeight: 'bold',
        },
      }}
      to={to}
      {...props}
    >
      {children}
    </Button>
  );
};

export default NavButton;
