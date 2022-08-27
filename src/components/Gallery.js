import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery({photos, source}) {

	return (
		<ImageList sx={{ width: 400, height: 350 }} cols={3} rowHeight={164}>
		  {Array.isArray(photos)  ? photos.map((item) => (
			<ImageListItem key={item.Id}>
			  {source==="local" ? 
			  <img
			  src={URL.createObjectURL(item)}
			  srcSet={URL.createObjectURL(item)}
			  alt={item.title}
			  loading="lazy"
			/> :
			  <img
				src={item.img}
				srcSet={item.img}
				alt={item.title}
				loading="lazy"
			  />
			}
			</ImageListItem>
		  )): <></>}
		</ImageList>
	);
}
