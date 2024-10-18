import { constants } from "vm"

const axios = require('axios')

async function getParkingSpots(location: string, radius: string) {
  const apiKey = process.env.GCP_MAPS_API
  const PARKINGSPOTSAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=${location}&radius=${radius}&type=parking`

  try {
    const reqToPlacesAPI = axios.get(PARKINGSPOTSAPI)
    const data = reqToPlacesAPI.data
  }
  catch (err) {
    console.log(err)
    return { msg: `Serverside error is ${err}` }
  }
}
