// /utils/api.js
import { BASE_URL } from "./apiConfig";

export async function fetchFromApi(endpoint, options = {}) {
    try {
        const url = `${BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });

        if (!response.ok) {
            Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}
