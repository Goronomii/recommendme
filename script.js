const TMDB_API_KEY = "0d77e5f24fc35fb8f8bd60fefb12a19a";
const genres = {
  anime: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Cars" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Avante Garde" },
    { id: 6, name: "Demons" },
    { id: 7, name: "Mystery" },
    { id: 8, name: "Drama" },
    { id: 9, name: "Ecchi" },
    { id: 10, name: "Fantasy" },
    { id: 11, name: "Game" },
    { id: 12, name: "Hentai" },
    { id: 13, name: "Historical" },
    { id: 14, name: "Horror" },
    { id: 15, name: "Kids" },
    { id: 17, name: "Martial Arts" },
    { id: 18, name: "Mecha" },
    { id: 19, name: "Music" },
    { id: 20, name: "Parody" },
    { id: 21, name: "Samurai" },
    { id: 22, name: "Romance" },
    { id: 23, name: "School" },
    { id: 24, name: "Sci-Fi" },
    { id: 25, name: "Shoujo" },
    { id: 26, name: "Girls Love" },
    { id: 27, name: "Shounen" },
    { id: 28, name: "Boys Love" },
    { id: 29, name: "Space" },
    { id: 30, name: "Sports" },
    { id: 31, name: "Super Power" },
    { id: 32, name: "Vampire" },
    { id: 35, name: "Harem" },
    { id: 36, name: "Slice of Life" },
    { id: 37, name: "Supernatural" },
    { id: 38, name: "Military" },
    { id: 39, name: "Police" },
    { id: 40, name: "Psychological" },
    { id: 41, name: "Suspense" },
    { id: 42, name: "Seinen" },
    { id: 43, name: "Josei" },
  ],
  manga: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Cars" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Avante Garde" },
    { id: 6, name: "Demons" },
    { id: 7, name: "Mystery" },
    { id: 8, name: "Drama" },
    { id: 9, name: "Ecchi" },
    { id: 10, name: "Fantasy" },
    { id: 11, name: "Game" },
    { id: 12, name: "Hentai" },
    { id: 13, name: "Historical" },
    { id: 14, name: "Horror" },
    { id: 17, name: "Martial Arts" },
    { id: 18, name: "Mecha" },
    { id: 19, name: "Music" },
    { id: 20, name: "Parody" },
    { id: 21, name: "Samurai" },
    { id: 22, name: "Romance" },
    { id: 23, name: "School" },
    { id: 24, name: "Sci-Fi" },
    { id: 25, name: "Shoujo" },
    { id: 26, name: "Girls Love" },
    { id: 27, name: "Shounen" },
    { id: 28, name: "Boys Love" },
    { id: 29, name: "Space" },
    { id: 30, name: "Sports" },
    { id: 31, name: "Super Power" },
    { id: 32, name: "Vampire" },
    { id: 35, name: "Harem" },
    { id: 36, name: "Slice of Life" },
    { id: 37, name: "Supernatural" },
    { id: 38, name: "Military" },
    { id: 39, name: "Police" },
    { id: 40, name: "Psychological" },
    { id: 41, name: "Seinen" },
    { id: 42, name: "Josei" },
  ],
  movie: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ],
};

// Rest of your functions remain the same

function updateSelections() {
  const entertainmentType = document.getElementById("entertainment-type").value;
  const genresContainer = document.getElementById("genres-container");
  const excludeGenresContainer = document.getElementById(
    "exclude-genres-container"
  );
  const genreSection = document.getElementById("genre-section");
  const excludeGenreSection = document.getElementById("exclude-genre-section");
  const recommendationCountSection = document.getElementById(
    "recommendation-count-section"
  );
  const yearRangeSection = document.getElementById("year-range-section");
  const recommendButton = document.querySelector(".button-container button");

  genresContainer.innerHTML = "";
  excludeGenresContainer.innerHTML = "";
  document.getElementById("genre-dropdown").textContent = "Select Genres";
  document.getElementById("exclude-genre-dropdown").textContent =
    "Exclude Genres";

  document.getElementById("exclude-genre-dropdown").classList.add("disabled");

  if (entertainmentType) {
    genreSection.classList.remove("hidden");
    excludeGenreSection.classList.remove("hidden");
    recommendationCountSection.classList.remove("hidden");
    yearRangeSection.classList.remove("hidden");
    recommendButton.style.display = "block";

    const sortedGenres = [...genres[entertainmentType]].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedGenres.forEach((genre) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = genre.name.toLowerCase();
      checkbox.name = "genre";
      checkbox.addEventListener("change", updateDropdownLabel);
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(genre.name));
      genresContainer.appendChild(label);
    });

    updateExcludeDropdown();
  } else {
    genreSection.classList.add("hidden");
    excludeGenreSection.classList.add("hidden");
    recommendationCountSection.classList.add("hidden");
    yearRangeSection.classList.add("hidden");
    recommendButton.style.display = "none";
  }
}

function updateExcludeDropdown() {
  const selectedGenres = Array.from(
    document.querySelectorAll('input[name="genre"]:checked')
  ).map((checkbox) => checkbox.value);

  const entertainmentType = document.getElementById("entertainment-type").value;
  const excludeGenresContainer = document.getElementById(
    "exclude-genres-container"
  );
  const excludeDropdown = document.getElementById("exclude-genre-dropdown");

  excludeGenresContainer.innerHTML = "";
  excludeDropdown.innerHTML = "Exclude Genres";

  const sortedGenres = [...genres[entertainmentType]].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  sortedGenres.forEach((genre) => {
    if (!selectedGenres.includes(genre.name.toLowerCase())) {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = genre.name.toLowerCase();
      checkbox.name = "exclude-genre";
      checkbox.addEventListener("change", updateExcludeDropdownLabel);
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(genre.name));
      excludeGenresContainer.appendChild(label);
    }
  });
}

function updateDropdownLabel() {
  const selectedGenres = Array.from(
    document.querySelectorAll('input[name="genre"]:checked')
  ).map((checkbox) => ({
    value: checkbox.value,
    label: checkbox.nextSibling.nodeValue.trim(),
  }));

  const dropdown = document.getElementById("genre-dropdown");
  dropdown.innerHTML = "";

  if (selectedGenres.length > 0) {
    selectedGenres.forEach((genre) => {
      const span = document.createElement("span");
      span.classList.add("selected-item");
      span.textContent = genre.label;

      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "x";
      removeBtn.onclick = () => removeGenre(genre.value);

      span.appendChild(removeBtn);
      dropdown.appendChild(span);
    });

    document
      .getElementById("exclude-genre-dropdown")
      .classList.remove("disabled");
  } else {
    dropdown.textContent = "Select Genres";
    document.getElementById("exclude-genre-dropdown").classList.add("disabled");
  }

  updateExcludeDropdown();
}

function updateExcludeDropdownLabel() {
  const selectedExcludeGenres = Array.from(
    document.querySelectorAll('input[name="exclude-genre"]:checked')
  ).map((checkbox) => ({
    value: checkbox.value,
    label: checkbox.nextSibling.nodeValue.trim(),
  }));

  const dropdown = document.getElementById("exclude-genre-dropdown");
  dropdown.innerHTML = "";

  if (selectedExcludeGenres.length > 0) {
    selectedExcludeGenres.forEach((genre) => {
      const span = document.createElement("span");
      span.classList.add("selected-item");
      span.textContent = genre.label;

      const removeBtn = document.createElement("span");
      removeBtn.classList.add("remove-btn");
      removeBtn.textContent = "x";
      removeBtn.onclick = () => removeExcludeGenre(genre.value);

      span.appendChild(removeBtn);
      dropdown.appendChild(span);
    });
  } else {
    dropdown.textContent = "Exclude Genres";
  }
}

function removeGenre(value) {
  const checkbox = document.querySelector(
    `input[name="genre"][value="${value}"]`
  );
  if (checkbox) {
    checkbox.checked = false;
    updateDropdownLabel();
  }
}

function removeExcludeGenre(value) {
  const checkbox = document.querySelector(
    `input[name="exclude-genre"][value="${value}"]`
  );
  if (checkbox) {
    checkbox.checked = false;
    updateExcludeDropdownLabel();
  }
}

document
  .querySelector("#genre-dropdown")
  .addEventListener("click", toggleDropdown);
document
  .querySelector("#exclude-genre-dropdown")
  .addEventListener("click", toggleExcludeDropdown);

function toggleDropdown() {
  const dropdownContent = document.querySelector(
    "#genre-section .dropdown-content"
  );
  dropdownContent.classList.toggle("show");
}

function toggleExcludeDropdown() {
  const dropdownContent = document.querySelector(
    "#exclude-genre-section .dropdown-content"
  );
  dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
};

async function generateRecommendation() {
  showLoadingSpinner(); // Show spinner before starting

  const entertainmentType = document.getElementById("entertainment-type").value;
  const selectedGenres = Array.from(
    document.querySelectorAll('input[name="genre"]:checked')
  ).map((checkbox) => checkbox.value);
  const excludedGenres = Array.from(
    document.querySelectorAll('input[name="exclude-genre"]:checked')
  ).map((checkbox) => checkbox.value);
  const count = parseInt(
    document.getElementById("recommendation-count").value,
    10
  );
  const yearRange = document.getElementById("year-range").value;

  // Check if count is valid
  if (count < 4 || count > 8) {
    hideLoadingSpinner(); // Hide spinner
    alert("Error: The number of recommendations must be between 4 and 8.");
    return; // Stop execution
  }

  // Check if entertainment type or selected genres are valid
  if (!entertainmentType || count <= 0 || selectedGenres.length === 0) {
    hideLoadingSpinner(); // Hide spinner if no valid inputs
    alert("Error: You must select at least one genre.");
    return; // Stop execution
  }

  let attempts = 0;
  const maxAttempts = 5; // Increased number of retry attempts
  let filteredResults = [];

  while (attempts < maxAttempts && filteredResults.length < count) {
    const randomPage = Math.floor(Math.random() * 50) + 1; // Adjust range to reduce randomness
    const apiUrl = getApiUrl(
      entertainmentType,
      selectedGenres,
      excludedGenres,
      count * 3, // Request more results than needed (tripled)
      randomPage,
      yearRange
    );

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        if (response.status === 429) {
          console.error("Rate limit exceeded. Pausing for 10 seconds.");
          await new Promise((resolve) => setTimeout(resolve, 10000)); // Handle rate limiting
          attempts++;
          continue;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const results = data.results || data.data || [];

      if (!Array.isArray(results) || results.length === 0) {
        console.error("No results found in API response.");
        attempts++;
        continue; // Retry if no results
      }

      filteredResults = results.filter((item) => {
        let itemGenres;

        if (entertainmentType === "movie") {
          itemGenres = item.genre_ids || item.genres.map((g) => g.id);
        } else {
          itemGenres = item.genres || [];
        }

        return (
          itemGenres.length > 0 &&
          !itemGenres.some((genre) => excludedGenres.includes(genre.toString()))
        );
      });

      // Limit to the exact number of recommendations needed
      filteredResults = filteredResults.slice(0, count);

      console.log("Filtered Results:", filteredResults);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      attempts++;
    }
  }

  hideLoadingSpinner(); // Hide spinner when done

  if (filteredResults.length === 0) {
    console.error("No valid recommendations after retries.");
    displayPopup([], entertainmentType, true); // Show no recommendations message
  } else {
    displayPopup(filteredResults, entertainmentType, false); // Display filtered recommendations
  }
}

async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (response.status === 429) {
        // If rate limit error, retry after delay
        throw new Error("Rate limit exceeded");
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      if (attempt < retries - 1) {
        console.warn(`Retrying ${url} (${attempt + 1}/${retries})`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      } else {
        throw error;
      }
    }
  }
}
// Function to get recommendations from the API based on type (Jikan, TMDB)
async function getRecommendationsFromAPI(
  entertainmentType,
  selectedGenres,
  excludedGenres,
  yearRange,
  limit
) {
  let apiUrl;

  if (entertainmentType === "anime" || entertainmentType === "manga") {
    apiUrl = `https://api.jikan.moe/v4/recommendations/${entertainmentType}?genres=${selectedGenres.join(
      ","
    )}&excludedGenres=${excludedGenres.join(
      ","
    )}&year=${yearRange}&limit=${limit}`;
  } else if (entertainmentType === "movie") {
    apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=0d77e5f24fc35fb8f8bd60fefb12a19a&with_genres=${selectedGenres.join(
      ","
    )}&without_genres=${excludedGenres.join(
      ","
    )}&year=${yearRange}&limit=${limit}`;
  }

  const response = await fetch(apiUrl);
  const data = await response.json();

  // Adjust response data based on API format
  if (entertainmentType === "anime" || entertainmentType === "manga") {
    return data.recommendations || []; // Ensure to return an empty array if no recommendations found
  } else if (entertainmentType === "movie") {
    return data.results || []; // Ensure to return an empty array if no results found
  }
}

// Utility function to show/hide loading spinner
function showLoadingSpinner(show) {
  const spinner = document.getElementById("loadingSpinner");
  spinner.style.display = show ? "block" : "none";
}

function getSelectedGenres() {
  // Example: Retrieve selected genres from checkboxes
  return [
    ...document.querySelectorAll('input[name="selectedGenres"]:checked'),
  ].map((cb) => cb.value);
}

function getExcludedGenres() {
  // Example: Retrieve excluded genres from checkboxes
  return [
    ...document.querySelectorAll('input[name="excludedGenres"]:checked'),
  ].map((cb) => cb.value);
}

// Example function to display recommendations
function displayRecommendations(recommendations, entertainmentType) {
  const recommendationList = document.getElementById("recommendationList");
  recommendationList.innerHTML = ""; // Clear previous recommendations

  recommendations.forEach((item) => {
    // Create container for each recommendation
    const recommendationItem = document.createElement("div");
    recommendationItem.classList.add("recommendation-item");

    // Title
    const title = document.createElement("h3");
    title.textContent = item.title || item.name || "Untitled";

    // Image
    const image = document.createElement("img");
    if (item.poster_path) {
      image.src = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      image.alt = item.title || item.name || "Recommendation image";
    } else {
      image.alt = "No image available";
    }

    // Link for more info
    const moreInfoLink = document.createElement("a");
    if (entertainmentType === "movie") {
      moreInfoLink.href = `https://www.themoviedb.org/movie/${item.id}`;
    } else if (entertainmentType === "anime") {
      moreInfoLink.href = `https://myanimelist.net/anime/${item.id}`;
    } else if (entertainmentType === "manga") {
      moreInfoLink.href = `https://myanimelist.net/manga/${item.id}`;
    }
    moreInfoLink.textContent = "More Info";
    moreInfoLink.target = "_blank"; // Opens in a new tab

    // Append title, image, and link to the recommendation item
    recommendationItem.appendChild(title);
    recommendationItem.appendChild(image);
    recommendationItem.appendChild(moreInfoLink);

    // Append the recommendation item to the list
    recommendationList.appendChild(recommendationItem);
  });
}

let spinnerContainer;
function showLoadingSpinner() {
  // Check if the spinnerContainer has already been created
  if (!spinnerContainer) {
    spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("loading-spinner");

    // Get the overlay element and append the spinner inside it
    const overlay = document.getElementById("loadingOverlay");
    overlay.style.display = "flex"; // Show the overlay
    overlay.appendChild(spinnerContainer);
  }
}

function hideLoadingSpinner() {
  // Hide the overlay and remove the spinner
  const overlay = document.getElementById("loadingOverlay");
  overlay.style.display = "none"; // Hide the overlay

  if (spinnerContainer) {
    spinnerContainer.remove();
    spinnerContainer = null;
  }
}
function getApiUrl(
  entertainmentType,
  selectedGenres,
  excludedGenres,
  count,
  page = 1,
  yearRange = ""
) {
  let apiUrl = "";
  const timestamp = new Date().getTime();

  switch (entertainmentType.toLowerCase()) {
    case "anime":
    case "manga":
      const selectedGenreIds = selectedGenres
        .map(
          (genreName) =>
            genres[entertainmentType]?.find(
              (genre) => genre.name.toLowerCase() === genreName
            )?.id
        )
        .filter((id) => id !== undefined);

      const excludedGenreIds = excludedGenres
        .map(
          (genreName) =>
            genres[entertainmentType]?.find(
              (genre) => genre.name.toLowerCase() === genreName
            )?.id
        )
        .filter((id) => id !== undefined);

      apiUrl = `https://api.jikan.moe/v4/${entertainmentType}?genres=${selectedGenreIds.join(
        ","
      )}&exclude_genres=${excludedGenreIds.join(
        ","
      )}&limit=${count}&page=${page}&timestamp=${timestamp}`;

      if (yearRange) {
        const [startYear, endYear] = yearRange.split("-").map(Number);
        apiUrl += `&start_date=${startYear}-01-01&end_date=${endYear}-12-31`;
      }
      break;

    case "movie":
      const selectedMovieGenreIds = selectedGenres
        .map(
          (genreName) =>
            genres.movie.find((genre) => genre.name.toLowerCase() === genreName)
              ?.id
        )
        .filter((id) => id !== undefined);

      const excludedMovieGenreIds = excludedGenres
        .map(
          (genreName) =>
            genres.movie.find((genre) => genre.name.toLowerCase() === genreName)
              ?.id
        )
        .filter((id) => id !== undefined);

      apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=0d77e5f24fc35fb8f8bd60fefb12a19a&with_genres=${selectedMovieGenreIds.join(
        ","
      )}&without_genres=${excludedMovieGenreIds.join(
        ","
      )}&page=${page}&timestamp=${timestamp}`;

      if (yearRange) {
        const [startYear, endYear] = yearRange.split("-").map(Number);
        apiUrl += `&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`;
      }
      break;

    default:
      console.error("Unsupported entertainment type");
  }

  return apiUrl;
}
function displayPopup(data, entertainmentType, noRecommendations = false) {
  const existingPopup = document.querySelector(".popup");
  if (existingPopup) {
    existingPopup.remove();
  }

  const popup = document.createElement("div");
  popup.classList.add("popup");

  const closeButton = document.createElement("span");
  closeButton.classList.add("popup-close");
  closeButton.textContent = "x";
  closeButton.onclick = () => popup.remove();
  popup.appendChild(closeButton);

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");

  if (noRecommendations) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent =
      "No recommendations found. Please try adjusting your filters.";
    errorMessage.classList.add("popup-error");
    popupContainer.appendChild(errorMessage);
  } else {
    if (!Array.isArray(data) || data.length === 0) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "No recommendations found.";
      errorMessage.classList.add("popup-error");
      popupContainer.appendChild(errorMessage);
    } else {
      data.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("popup-item");

        const title = document.createElement("h3");
        title.textContent = item.title || item.name || "No Title";
        itemDiv.appendChild(title);

        let imageUrl = "";
        let rating = ""; // Initialize rating variable

        // Determine the image URL and rating based on the entertainment type
        if (entertainmentType === "movie") {
          imageUrl = item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "";
          rating = item.vote_average
            ? `Rating: ${item.vote_average}/10`
            : "Rating: N/A";
        } else if (
          entertainmentType === "anime" ||
          entertainmentType === "manga"
        ) {
          imageUrl = item.images?.jpg?.image_url || "";
          rating = item.score ? `Rating: ${item.score}/10` : "Rating: N/A";
        }

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = item.title || item.name;
        img.onerror = function () {
          this.src = "placeholder-image.png"; // Fallback image
        };
        itemDiv.appendChild(img);

        // Display the rating below the image
        const ratingParagraph = document.createElement("p");
        ratingParagraph.textContent = rating;
        itemDiv.appendChild(ratingParagraph);

        // Add "More Info" link
        const moreInfoLink = document.createElement("a");
        moreInfoLink.textContent = "More Info";
        moreInfoLink.target = "_blank";

        if (entertainmentType === "movie") {
          moreInfoLink.href = `https://www.themoviedb.org/movie/${item.id}`;
        } else if (entertainmentType === "anime") {
          moreInfoLink.href = `https://myanimelist.net/anime/${item.mal_id}`;
        } else if (entertainmentType === "manga") {
          moreInfoLink.href = `https://myanimelist.net/manga/${item.mal_id}`;
        }

        itemDiv.appendChild(moreInfoLink); // Add the link to each item

        popupContainer.appendChild(itemDiv);
      });
    }
  }

  // Add Regenerate Button
  const regenerateButton = document.createElement("button");
  regenerateButton.textContent = "Regenerate Recommendations";
  regenerateButton.classList.add("regenerate-button");
  regenerateButton.onclick = () => {
    popup.remove(); // Close popup before regenerating
    generateRecommendation(); // Call function to regenerate recommendations
  };

  popupContainer.appendChild(regenerateButton); // Add the regenerate button to the popup

  popup.appendChild(popupContainer);
  document.body.appendChild(popup);
}

function displaySpinner() {
  const spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("spinner-container");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const spinner = document.createElement("div");
  spinner.classList.add("loading-spinner");

  const closeButton = document.createElement("span");
  closeButton.classList.add("spinner-close");
  closeButton.textContent = "x";
  closeButton.onclick = () => {
    document.body.removeChild(spinnerContainer);
  };

  spinnerContainer.appendChild(overlay);
  spinnerContainer.appendChild(spinner);
  spinnerContainer.appendChild(closeButton);
  document.body.appendChild(spinnerContainer);
}

async function fetchMovieGenres() {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=0d77e5f24fc35fb8f8bd60fefb12a19a&language=en-US";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const genreMap = {};
    data.genres.forEach((genre) => {
      genreMap[genre.name.toLowerCase()] = genre.id;
    });
    return genreMap;
  } catch (error) {
    console.error("Error fetching movie genres:", error);
  }
}
