import { capitaliseEachWord } from 'process/utility';

export const getUsers = async (num) => {
	const raw = await fetch(`https://randomuser.me/api/?results=${num}`);
	const json = await raw.json();
	return json.results;
};

export const parseUsers = (data) => {
	return data.map((entry, i) => {
		return {
			index: i,
			firstname: entry.name.first,
			lastname: entry.name.last,
			gender: capitaliseEachWord(entry.gender),
			age: entry.dob.age,
			address: `${entry.location.street.number} ${entry.location.street.name} ${entry.location.postcode}`,
			country: entry.location.country,
			email: entry.email,
			phone: entry.phone,
			mobile: entry.cell,
			active: Math.random() > 0.5,
			premium: Math.random() > 0.5
		};
	});
};

export const getSingleValue = async (key) => {
	const user = await getUsers(1);
	const parsed = parseUsers(user);
	return parsed[0][key];
};
