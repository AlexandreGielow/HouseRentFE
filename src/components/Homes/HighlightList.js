import React from 'react'
import {List,ListItem, ListItemText, Box, Typography} from '@mui/material'

export default function HighlightList({highlightss}) {
  return (
	<>	
		<Box sx={{display:'flex'}}>
			<Typography variant="caption" gutterBottom component="div">Highlights</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(highlightss) ? highlightss.map((high)  => (
				<>
					<ListItem disablePadding key={high.Id}/>
					<ListItemText primary= {high.Name} sx={{fontSize:'0.5rem'}} />
				</>
			)) : <></>}
		</List>	
  </>
  )
}