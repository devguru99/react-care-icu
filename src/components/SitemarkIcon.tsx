import * as React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface SitemarkIconProps {
  height?: number | string;
  width?: number | string;
}

export default function SitemarkIcon({ height = 24, width = 160 }: SitemarkIconProps) {
  return (
    <Link to="/" style={{ lineHeight: '0.5' }}>
      <Box component="img" sx={{ height, width, mr: 2 }} src="/logo.png" alt="Sitemark" />
    </Link>
  );
}
