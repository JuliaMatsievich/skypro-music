export const getTimeInMinutes = (seconds) => {
	const timeInMinutes = (Number(seconds) / 60).toFixed(2)
	return timeInMinutes
 }