import { BASEURL } from "./url"

export const getTracksAll = async () => {
	const response = await fetch(
		BASEURL + '/catalog/track/all/',
	)
 
	if (!response.ok) {
	  throw new Error('Ошибка сервера')
	}
	const data = await response.json()
	return data
 }