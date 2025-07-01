export const fetchSerivedata = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/oleotechsolution/servicepage");
    return await res.json();
  } catch (error) {
    console.error("Service API call failed:", error);
    return {};
  }
};
