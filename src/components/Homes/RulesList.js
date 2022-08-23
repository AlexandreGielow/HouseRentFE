import React from 'react'
import {List,ListItem, ListItemText} from '@mui/material'

export default function RulesList({ruless}) {
  return (
	<>	
		<List sx={{marginLeft:'20px'}}>
			{Array.isArray(ruless) ? ruless.map((rule)  => (
				<>
					<ListItem disablePadding key={rule.Id}/>
					<ListItemText primary= {rule.Name} sx={{fontSize:'0.5rem'}} />
				</>
			)) : <></>}
		</List>	
  </>
  )
}