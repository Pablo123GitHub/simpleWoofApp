import axios from 'axios'


export default async term => {
    const response = await axios.get('https://api.thedogapi.com/v1/images/search');

    return response.data;
};

//
//
// {
//     params: {
//         client_id: process.env.REAC_APP_UNSPLASH_TOKEN,
//             query: term
//     }
// }