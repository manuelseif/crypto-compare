const axios = require("axios");

export const getSymbol = async () => {
  return axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}exchangeInfo`)
    .then((data: any) => {
      if (data) {
        return data.data;
      }
      return "Error!";
    })
    .catch((err: any) => {
      return err;
    });
};

export const getAuthenticatedCC = (endpoint: string) => {
  return axios
    .get(`${process.env.REACT_APP_API_CC_ENDPOINT}${endpoint}`, {
      headers: {
        authorization: `Apikey ${process.env.REACT_APP_API_CC_API_KEY}`,
      },
    })
    .then((data: any) => {
      if (data) {
        return data.data;
      }
      return "Error!";
    })
    .catch((err: any) => {
      return err;
    });
};
