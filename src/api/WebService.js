const WebService = (object, route) => {

const Send = async (object, route) => {
	const requestOptions = {
	  method: 'POST',
	  body: object,
	  json: true,
	  headers: new Headers({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
		'Content-Type': 'application/json'
	  })
	}
	await fetch(String.concat('https://localhost:44307/api/',route), requestOptions)
  }
  Send(object, route)

}

export default WebService
