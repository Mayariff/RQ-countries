import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {apiRoutes} from "../../Routes";
import {countries, country_notes, show_more, to_do_in_country} from "./db";
import {match, pathToRegexp} from "path-to-regexp";
import {countryNotesType} from "../../types/api-types";


const COUNT = 4;


export const initializeMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 1000});

    mock.onGet(apiRoutes.getCountryList).reply((config) => {
        const {pageParam} = config.params;

        const nextId =
            countries.length > pageParam * COUNT ? pageParam + 1 : undefined;

        return [
            200,
            {
                nextId,
                data: countries.slice((pageParam - 1) * COUNT, pageParam * COUNT),
                count: countries.length,
            },
        ];
    });


    mock.onGet(pathToRegexp(apiRoutes.getCountry)).reply((config) => {

        const result = match<{ id: string }>(apiRoutes.getCountry, {
            decode: decodeURIComponent,
        })(config.url!);

        if (result === false) {
            return [403];
        }
        const {id} = result.params;

        let currentCountry = countries.find((item) => item.id === id)
        if (!currentCountry) {
            return [444];
        }

        return [200, currentCountry];
    });

    mock.onPatch(pathToRegexp(apiRoutes.getCountry)).reply((config) => {

        const body = JSON.parse(config.data);
        const idx = countries.findIndex((item) => item.id === body.id);

        countries[idx] = {
            ...countries[idx],
            ...body,
            done_items: [...body.done_items]
        };

        return [200, countries[idx]];
    });

    mock.onGet(apiRoutes.getToDo).reply((config) => {
        return [200, to_do_in_country];
    });


    mock.onGet(pathToRegexp(apiRoutes.getMoreInfo)).reply((config) => {


        const result = match<{ id: string }>(apiRoutes.getMoreInfo, {
            decode: decodeURIComponent,
        })(config.url!);

        if (result === false) {
            return [403];
        }

        const {id} = result.params;

        return [200, show_more.find((item) => item.countryID === id)];
    });

    mock.onGet(pathToRegexp(apiRoutes.country_notes)).reply((config) => {


        const result = match<{ id: string }>(apiRoutes.country_notes, {
            decode: decodeURIComponent,
        })(config.url!);

        if (result === false) {
            return [403];
        }

        return [200, country_notes];
    });

    mock.onPost(pathToRegexp(apiRoutes.country_notes)).reply((config) => {

        const data = JSON.parse(config.data);

        const body: countryNotesType = {
            ...data,
            id: (Math.floor(Math.random() * 10000000)).toString(),
        };
        country_notes.push(body);

        return [200, body];
    });

    mock.onDelete(pathToRegexp(apiRoutes.country_notes)).reply((config) => {


        const result = match<{ id: string }>(apiRoutes.country_notes, {
            decode: decodeURIComponent,
        })(config.url!);

        if (result === false) {
            return [403];
        }

        const {id} = result.params;

        const idx = country_notes.findIndex((item) => item.id === id);

        const [body] = country_notes.splice(idx, 1);

        return [200, body];
    });
};


