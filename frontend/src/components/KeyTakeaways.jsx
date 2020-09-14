import { Box, List, ListItem, ListItemIcon } from '@material-ui/core';
import * as React from 'react'
import { ParaTypography, SubTitleTextTypography } from './typography';
import StarIcon from '@material-ui/icons/Star';


export const KeyTakeaways = (props) => {
  return (
    <Box >
      <Box m={4}>
        <SubTitleTextTypography variant="h2">Key Takeaways</SubTitleTextTypography>
        <List>
          {
            props?.keyTakeaways?.map(x => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <StarIcon color="secondary" />
                  </ListItemIcon>
                  <ParaTypography variant="body1" >{x}</ParaTypography>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    </Box>
  )
}