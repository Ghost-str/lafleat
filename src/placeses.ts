const data = `Саратов	г. Саратов, пл. Орджоникидзе, 1	51,501224	45,944021
Саратов	г. Саратов, ул. Танкистов, 1	51,546939	46,014673
Саратов	г. Саратов, ул.Гвардейская, 2А	51,585463	45,946087
Саратов	г. Саратов, пр-т Кирова, 43	51,532526	46,021788
Саратов	г. Саратов, Новоастраханское ш., 80	51,491708	45,916398
Саратов	г. Саратов, ул. Симбирская, д. 154	51,556577	46,045638
Саратов	г. Саратов, Вольский тракт, 2А	51,618636	45,971222`;

const places = data.split('\n').map((row) => {
	const columns = row.split('	');
	return {
		city: columns[0],
		addres: columns[1],
		lat: Number(columns[2].replace(',', '.')),
		long: Number(columns[3].replace(',', '.')),
	};
});

export default places;
