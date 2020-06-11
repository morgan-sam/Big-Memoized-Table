export const capitaliseEachWord = (string) => {
	const arr = string.split(' ');
	const caps = arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
	return caps.join(' ');
};
