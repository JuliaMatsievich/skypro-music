
export const getTracksAll = async () => {
	const response = await fetch("https://painassasin.online/catalog/track/all/")
	 const data = await response.json();
	 return data;
  }
