import React from 'react'
import {List,ListItem, ListItemText, Box, Typography} from '@mui/material'
import { Kitchen, LocalLaundryService, Bathtub, NetworkWifi, LocalParking } from '@mui/icons-material'

export default function AmenitiesList({amenitiess}) {
  return (
	<>	
		<Box sx={{display:'flex'}}>
			<Kitchen/>	
			<Typography variant="caption" gutterBottom component="div">Kitchen</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(amenitiess) ? amenitiess.filter(k => k.Type === 0).map((kitchen)  => (
				<>
					<ListItem disablePadding key={kitchen.Id}/>
					<ListItemText primary= {kitchen.Name} sx={{fontSize:'0.5rem'}} />
				</>
			)) : <></>}
		</List>	
		<Box sx={{display:'flex'}}>
			<LocalLaundryService/>
			<Typography variant="caption" gutterBottom component="div">Washing</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
		{Array.isArray(amenitiess) ? amenitiess.filter(k => k.Type === 1).map((wash)  => (
				<>
					<ListItem disablePadding key={wash.Id}/>
					<ListItemText primary= {wash.Name} />
				</>
			)) : <></>}
		</List>
		<Box sx={{display:'flex'}}>
			<Bathtub/>
			<Typography variant="caption" gutterBottom component="div">Bathing</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(amenitiess) ? amenitiess.filter(k => k.Type === 2).map((bath)  => (
					<>
						<ListItem disablePadding key={bath.Id}/>
						<ListItemText primary= {bath.Name} />
					</>
				)) : <></>}
		</List>
		<Box sx={{display:'flex'}}>
			<NetworkWifi/>
			<Typography variant="caption" gutterBottom component="div">Technology</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(amenitiess) ? amenitiess.filter(k => k.Type === 3).map((tech)  => (
					<>
						<ListItem disablePadding key={tech.Id}/>
						<ListItemText primary= {tech.Name} />
					</>
				)) : <></>}
		</List>
		<Box sx={{display:'flex'}}>
			<LocalParking/>
			<Typography variant="caption" gutterBottom component="div">Parking and Facilities</Typography>
		</Box>
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(amenitiess) ? amenitiess.filter(k => k.Type === 4).map((park)  => (
						<>
							<ListItem disablePadding key={park.Id}/>
							<ListItemText primary= {park.Name} />
						</>
					)) : <></>}
		</List>
  </>
  )
}