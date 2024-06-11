// import client from "./axiosConfig";
import { mockData } from "./mockData";

export const getCarsDetails = (pageNumber) => {
//  Dummy API Binding
//   const config = {
//     url: `/cars/?page=${pageNumber}`,
//     method: "GET",
//   };
//   const response = client(config);
//   return response;

const itemsPerPage = 6; // Number of items per page
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (startIndex >= 0 && startIndex < mockData.length) {
    return mockData.slice(startIndex, endIndex);
  } else {
     // Handle cases where the page number is out of range
    return [];
  }

};