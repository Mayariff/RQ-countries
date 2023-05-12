import {countryNotesType} from "../../types/api-types";

export const countries = [
    {
        id: "1",
        title: "Казахстан",
        population: "19 788 254",
        world_population_percent: 0.24,
        image: "https://24.kg/files/media/285/285234.jpg",
        country_code: "KZ",
        capital: "Астана",
        done_items: ["12", "13", "11"]
    },
    {
        id: "2",
        title: "Турция",
        population: "86 154 997",
        world_population_percent: 1.07,
        image: "https://www.melares.com/uploads/cappadocia-turkey317309280.jpg",
        country_code: "TR",
        capital: "Анкара",
        done_items: ["11", "12", "13", "14"]
    },
    {
        id: "3",
        title: "Греция",
        population: "10 741 165",
        world_population_percent: 0.13,
        image: "https://polis812.ru/blog/wp-content/uploads/2021/03/grecziya-otkryta.jpg",
        country_code: "GR",
        capital: "Афины",
        done_items: ["12", "13", "15"]

    },
    {
        id: "4",
        title: "Грузия",
        population: "3 723 500",
        world_population_percent: 0.046,
        image: "https://img.kapital.kz/uSzGEMr49fY/bG9jYWw6Ly8vYi8wL2QvOC9hL2ZjM2VmYTg3OTUxYzJhNmM0ZjkxODliNzVlYy53ZWJw",
        country_code: "GE",
        capital: "Тбилиси",
        done_items: ["11", "12", "13", "14", "15"]
    },
    {
        id: "5",
        title: "Болгария",
        population: "6 951 482",
        world_population_percent: 0.087,
        image: "https://www.newsler.ru/data/content/2021/103075/d367f22fc81fa8352612dd68628abe5a.jpg",
        country_code: "BG",
        capital: "София",
        done_items: ["13", "14", "15"]
    },
    {
        id: "6",
        title: "Кипр",
        population: "875 898",
        world_population_percent: 0.011,
        image: "https://www.avenutver.ru/uploads/posts/2013-05/1367690637_400123_large.jpg",
        country_code: null,
        capital: "Никосия",
        done_items: ["11", "12", "15"]
    },
    {
        id: "7",
        title: "Черногория",
        population: "622 218",
        world_population_percent: 0.008,
        image: "https://viasun.ru/blog/wp-content/uploads/2021/09/depositphotos_6838503_s-2019.jpg",
        country_code: "ME",
        capital: "Подгорица",
        done_items: ["11", "14", "15"]
    },
    {
        id: "8",
        title: "Тунис",
        population: "11 658 341",
        world_population_percent: 0.15,
        image: "https://www.expresstours.ru/foto/countries/2/3.jpg",
        country_code: "TN",
        capital: "Тунис",
        done_items: ["11", "13", "15"]
    },
    {
        id: "9",
        title: "ОАЭ",
        population: "9 771 000",
        world_population_percent: 0.12,
        image: "https://migrant-wiki.ru/wp-content/uploads/2022/10/migraciya-v-oaeh.png",
        country_code: "AE",
        capital: "Абу-Даби", done_items: ["11", "12", "14"]
    },
    {
        id: "10",
        title: "Аргентина",
        population: "44 938 712",
        world_population_percent: 0.56,
        image: "https://top10.travel/wp-content/uploads/2016/05/patagoniya.jpg",
        country_code: "AR",
        capital: "Буэнос-Айрес",
        done_items: []
    }
]
export const to_do_in_country = [
    {
        id: "11",
        description: "Побывать в столице"
    },
    {
        "id": "12",
        "description": "Попробовать необычное национальное блюдо"
    },
    {
        "id": "13",
        "description": "Выучить 3 фразы на местном языке"
    },
    {
        "id": "14",
        "description": "Познакомиться и пообщатся с местными жителями"
    },
    {
        "id": "15",
        "description": "Посетить 5 топовых достопримечательностей"
    }

]
export const country_notes = [] as countryNotesType[]
export const show_more = [
    {
        id: "111",
        countryID: "1",
        population: "19 788 254",
        world_population_percent: 0.24,
        capital: "Астана"
    }
]
