const apiKey = "0d77e5f24fc35fb8f8bd60fefb12a19a"; // Replace with your actual API key
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`,
  options
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error fetching data:", err));
