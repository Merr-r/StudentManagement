// AvatarGenerator.jsx
import React from 'react';
import { Avatar } from '@mui/material';

const AvatarGenerator = ({ name }) => {
  // Tách các chữ cái đầu tiên của tên
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <Avatar sx={{ bgcolor: '#c88af5',color:'#fff', width: 70, height: 70 }}>
      {initials}
    </Avatar>
  );
};

export default AvatarGenerator;
