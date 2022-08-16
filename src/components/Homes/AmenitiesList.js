import React from 'react'
import {List,ListItem, ListItemText, Box, Typography} from '@mui/material'
import { Kitchen, LocalLaundryService, Bathtub, NetworkWifi, LocalParking } from '@mui/icons-material'

function AmenitiesList(amenitiesList) {

	const kitchens = amenitiesList.filter(kitchen => kitchen.type === 0)
	const washing = amenitiesList.filter(wash => wash.type === 1)
	const bathing = amenitiesList.filter(bath => bath.type === 2)
	const technologies = amenitiesList.filter(tech => tech.type === 3)
	const parkings = amenitiesList.filter(park => park.type === 4)
  return (
	<>	
		<Box sx={{display:'flex'}}>
			<Kitchen/>	
			<Typography variant="caption" gutterBottom component="div">Kitchen</Typography>
		</Box>
		<List>
			{kitchens.map((kitchen) => (
				<>
					<ListItem disablePadding/>
					<ListItemText primary= {kitchen.name} />
				</>
			))}
		</List>
		<Box sx={{display:'flex'}}>
			<LocalLaundryService/>
			<Typography variant="caption" gutterBottom component="div">Washing</Typography>
		</Box>
		<List>
			{washing.map((wash) => (
					<>
						<ListItem disablePadding/>
						<ListItemText primary= {wash.name} />
					</>
				))}
		</List>
		<Box sx={{display:'flex'}}>
			<Bathtub/>
			<Typography variant="caption" gutterBottom component="div">Bathing</Typography>
		</Box>
		<List>
			{bathing.map((bath) => (
						<>
							<ListItem disablePadding/>
							<ListItemText primary= {bath.name} />
						</>
					))}
		</List>
		<Box sx={{display:'flex'}}>
			<NetworkWifi/>
			<Typography variant="caption" gutterBottom component="div">Technology</Typography>
		</Box>
		<List>
			{technologies.map((tech) => (
							<>
								<ListItem disablePadding/>
								<ListItemText primary= {tech.name} />
							</>
						))}
		</List>
		<Box sx={{display:'flex'}}>
			<LocalParking/>
			<Typography variant="caption" gutterBottom component="div">Parking and Facilities</Typography>
		</Box>
		<List>
			{parkings.map((park) => (
								<>
									<ListItem disablePadding/>
									<ListItemText primary= {park.name} />
								</>
							))}
		</List>
  </>
  )
}

export default AmenitiesList