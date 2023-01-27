import { districts, provinces } from "./location";

export const initialValues = {
    name:  '',
    breed: '',
    genre:  'macho',
    age: '',
    ageNumber: 0,
    ageString: '',
    location: {
        province: provinces[0],
        district: districts[provinces[0]][0]
    },
    description: '',
    contact: {
        whatsapp: '',
        email:  ''
    }
}