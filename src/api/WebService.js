const WebService = (object, route) => {

const Send = async (object, route) => {
	const requestOptions = {
	  method: 'POST',
	  body: JSON.stringify(object),
	  json: true,
	  headers: new Headers({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Access-Control-Allow-Methods': 'POST',
		'Content-Type': 'application/json',
		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFsZXguZ2llbG93QGdtYWlsLmNvbSIsInJvbGUiOiJPd25lciIsIm5iZiI6MTczMDQwMjYyMSwiZXhwIjoxNzMwNDA5ODIxLCJpYXQiOjE3MzA0MDI2MjF9.4xb8Gbe1JQYHt4Z5VgkB4AtESeqzyD-7QtsMWpJI_Kc'
	  })
	}
	await fetch(''.concat('https://localhost:7023/api/v1/',route), requestOptions)
  }
  Send(object, route)
}



export default WebService