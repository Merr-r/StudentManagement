import PropTypes from 'prop-types';
import { memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AvatarGenerator from '../../../../ui-component/cards/Avatar'
// assets


// ==============================|| PROGRESS BAR WITH LABEL ||============================== //


// ==============================|| SIDEBAR - MENU CARD ||============================== //

const MenuCard = ({ name , id, status}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        bgcolor: '#cce3f9c2',
        mb: 2.75,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box sx={{ p: 2 }}>
        <List disablePadding sx={{ m: 0 }}>
          <ListItem alignItems="flex-start" disableGutters disablePadding>
            <ListItemAvatar sx={{ mt: 0 }}>
            <AvatarGenerator name={name}
              sx={{ ml: 2, mr: 10 }} />
            </ListItemAvatar>
            <ListItemText
              sx={{ mt: 0 , ml:2}}
              primary={
                <>
                  <Typography variant="subtitle1" sx={{ color: 'primary.800' }}>
                    {name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.800' }}>
                    {id}
                  </Typography>
                </>
              }
              secondary={
              <Typography variant="caption"> Sinh viên</Typography>}
            />
          </ListItem>
        </List>
      </Box>
    </Card>
  );
};

export default memo(MenuCard);
