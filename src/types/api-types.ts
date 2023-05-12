export type countryType = {
	id: string;
	title: string;
	population: string;
	world_population_percent: number;
	image: string;
	country_code: string;
	capital: string;
	done_items: string[];
}

export type toDoType =  {
	id: string;
	description: string;
}
export type countryNotesType ={
    id?: string;
    value: string|number;
}

export type showMoreType = {
	id: string;
	countryID: string;
	population: string;
	world_population_percent: number;
	capital: string;
}


