import axios from 'axios';

export const getProductAPI = async(category) => {
    // console.log(category,"sahil")
    let res = await fetch(`https://zeptojson.onrender.com/${category}`);
    const data = await res.json();

    return {data}
}

