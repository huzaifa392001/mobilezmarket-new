import { fetchFromApi } from "@/Utils/api";

// Get devices function
export const getDevices = async (data, newPage) => {
  try {
    // Use fetchFromApi to get data from the API (or you can choose to use `api.post` if necessary)
    const res = await fetchFromApi(`/category?page=${newPage}`, data);

    // Process the response here
    console.log(res);
    // If you want to update any state or do something with the response, do it here
  } catch (error) {
    console.log(error);
  }
};
