// src/features/homepage/homepageAPI.js
export const fetchHomePageData = async () => {
    const res = await fetch("http://localhost:3000/api/oleotechsolution/homepage");
    if (!res.ok) {
      throw new Error("Failed to fetch homepage data");
    }
    return res.json();
  };
  