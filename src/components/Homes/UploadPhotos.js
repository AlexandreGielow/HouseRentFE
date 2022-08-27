import React, { useState } from 'react'
import { Box, Button, FormLabel,FormGroup }  from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Gallery from '../Gallery'

const NewHomeFormPhotos = () => {
  const [photos,setPhotos] = useState([])

	const uploadHandler = (event) =>{
		 const file = event.target.files[0]
     if(!file) return
     file.isUploading = true
     setPhotos([...photos,file])
     //aqui mandar o arquivo para o backend
     const formData = new FormData()
     formData.append(
        file.name,
        file,
        file.name
     )
     //chamar a API aqui
     file.isUploading = false
     setPhotos([...photos,file])
	}	
  //acho que vou mover isso pra galeria, adicionar na chamada
  const removePhoto = (fileName) =>{
    setPhotos(photos.filter(file => file.name !==fileName))
  }
  return (
    <>
      <Box className="container" sx={ {background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3} }>
      <FormGroup>
          <FormLabel sx={{color:'white'}}>Upload the Photos</FormLabel>    
          <Button variant="contained" component="label" onChange={uploadHandler} >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
          {<Gallery photos={photos} source="local"/>}
        </FormGroup>
      </Box>
    </>
  )
}

export default NewHomeFormPhotos
