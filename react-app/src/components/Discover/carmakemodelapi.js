export const getMakesByYear = (year) => {
  return fetch(
    `https://carmakemodeldb.com/api/v1/car-lists/get/makes/${year}?api_token=${process.env.REACT_APP_CARDBAPIKEY}`
  ).then((data) => data.json());
};

export const getModelsByMake = (make, year) => {
  return fetch(
    `https://carmakemodeldb.com/api/v1/car-lists/get/models/${year}/${make}?api_token=${process.env.REACT_APP_CARDBAPIKEY}`
  ).then((data) => data.json());
};
