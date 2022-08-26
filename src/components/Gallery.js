import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Gallery({photos}) {
	return (
		<ImageList sx={{ width: 400, height: 350 }} cols={3} rowHeight={164}>
		  {Array.isArray(photos)  ? photos.map((item) => (
			<ImageListItem key={item.Id}>
			  <img
				src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
				srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
				alt={item.title}
				loading="lazy"
			  />
			</ImageListItem>
		  )): <></>}
		</ImageList>
	);
}
