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
  const recommendButton = document.getElementById("generate-btn");

  genresContainer.innerHTML = "";
  excludeGenresContainer.innerHTML = "";
  document.getElementById("genre-dropdown").textContent = "Select genres";
  document.getElementById("exclude-genre-dropdown").textContent =
    "Exclude genres";

  document.getElementById("exclude-genre-dropdown").classList.add("disabled");

  if (entertainmentType) {
    genreSection.classList.remove("hidden");
    excludeGenreSection.classList.remove("hidden");
    recommendationCountSection.classList.remove("hidden");
    yearRangeSection.classList.remove("hidden");
    recommendButton.hidden = false;

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
    recommendButton.hidden = true;
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
  excludeDropdown.innerHTML = "Exclude genres";

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
    dropdown.textContent = "Select genres";
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
    dropdown.textContent = "Exclude genres";
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
  const toggle = document.getElementById("genre-dropdown");
  const open = dropdownContent.classList.toggle("show");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

function toggleExcludeDropdown() {
  const dropdownContent = document.querySelector(
    "#exclude-genre-section .dropdown-content"
  );
  const toggle = document.getElementById("exclude-genre-dropdown");
  const open = dropdownContent.classList.toggle("show");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

window.onclick = function (event) {
  if (!event.target.closest(".dropdown-toggle")) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
    const genreToggle = document.getElementById("genre-dropdown");
    const excludeToggle = document.getElementById("exclude-genre-dropdown");
    if (genreToggle) genreToggle.setAttribute("aria-expanded", "false");
    if (excludeToggle) excludeToggle.setAttribute("aria-expanded", "false");
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
    hideLoadingSpinner();
    alert("Error: The number of recommendations must be between 4 and 8.");
    return;
  }

  // Check if entertainment type or selected genres are valid
  if (!entertainmentType || count <= 0 || selectedGenres.length === 0) {
    hideLoadingSpinner();
    alert("Error: You must select at least one genre.");
    return;
  }

  let attempts = 0;
  const maxAttempts = 5; // Increased number of retry attempts
  let filteredResults = [];

  while (attempts < maxAttempts && filteredResults.length < count) {
    const randomPage = Math.floor(Math.random() * 50) + 1;
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
        continue;
      }

      // Apply filtering to exclude genres
      filteredResults = results.filter((item) => {
        let itemGenres;

        if (entertainmentType === "movie") {
          // For movies, use genre_ids directly or map genres to their ids
          itemGenres = item.genre_ids || item.genres.map((g) => g.id);
        } else {
          // For anime or manga, use the genres field directly
          itemGenres = item.genres
            ? item.genres.map((g) => g.name.toLowerCase())
            : [];
        }

        // Exclude items that contain any genre from the excludedGenres
        return !itemGenres.some((genre) =>
          excludedGenres.includes(genre.toString().toLowerCase())
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

function setLoadingCopy(entertainmentType) {
  const titleEl = document.getElementById("loadingTitle");
  const msgEl = document.getElementById("loadingMessage");
  const copy = {
    anime: {
      title: "Finding anime",
      msg: "Matching genres on Jikan and assembling your queue…",
    },
    manga: {
      title: "Finding manga",
      msg: "Browsing titles that fit your include / exclude rules…",
    },
    movie: {
      title: "Finding movies",
      msg: "Searching The Movie Database for titles in your range…",
    },
  };
  const c = copy[entertainmentType] || {
    title: "Finding recommendations",
    msg: "Querying catalogs…",
  };
  titleEl.textContent = c.title;
  msgEl.textContent = c.msg;
}

function showLoadingSpinner() {
  const type = document.getElementById("entertainment-type").value;
  setLoadingCopy(type);
  const overlay = document.getElementById("loadingOverlay");
  overlay.classList.add("is-visible");
  overlay.setAttribute("aria-hidden", "false");
}

function hideLoadingSpinner() {
  const overlay = document.getElementById("loadingOverlay");
  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
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
              (g) => g.name.toLowerCase() === genreName
            )?.id
        )
        .filter((id) => id !== undefined);

      const excludedGenreIds = excludedGenres
        .map(
          (genreName) =>
            genres[entertainmentType]?.find(
              (g) => g.name.toLowerCase() === genreName
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
            genres.movie.find((g) => g.name.toLowerCase() === genreName)?.id
        )
        .filter((id) => id !== undefined);

      const excludedMovieGenreIds = excludedGenres
        .map(
          (genreName) =>
            genres.movie.find((g) => g.name.toLowerCase() === genreName)?.id
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
  const existing = document.querySelector(".results-modal");
  if (existing) {
    existing.remove();
  }

  const typeLabels = {
    anime: "Anime",
    movie: "Movies",
    manga: "Manga",
  };
  const typeLabel = typeLabels[entertainmentType] || "Results";

  const showEmpty =
    noRecommendations ||
    !Array.isArray(data) ||
    data.length === 0;

  const modal = document.createElement("div");
  modal.className = "results-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "results-modal-title");

  const backdrop = document.createElement("button");
  backdrop.type = "button";
  backdrop.className = "results-modal__backdrop";
  backdrop.setAttribute("aria-label", "Close");

  const sheet = document.createElement("div");
  sheet.className = "results-modal__sheet";
  sheet.addEventListener("click", (e) => e.stopPropagation());

  const head = document.createElement("div");
  head.className = "results-modal__head";

  const titles = document.createElement("div");
  titles.className = "results-modal__titles";

  const eyebrow = document.createElement("p");
  eyebrow.className = "results-modal__eyebrow";
  eyebrow.textContent = "Your picks";

  const heading = document.createElement("h2");
  heading.id = "results-modal-title";
  heading.className = "results-modal__title";
  heading.textContent = showEmpty
    ? "Nothing matched yet"
    : `${typeLabel} for you`;

  const meta = document.createElement("p");
  meta.className = "results-modal__meta";
  if (!showEmpty) {
    meta.textContent = `${data.length} title${data.length === 1 ? "" : "s"} · Adjust filters anytime`;
  } else {
    meta.textContent = "Try broadening genres or changing the year range.";
  }

  titles.appendChild(eyebrow);
  titles.appendChild(heading);
  titles.appendChild(meta);

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "results-modal__close";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.innerHTML = "&times;";

  head.appendChild(titles);
  head.appendChild(closeBtn);

  const body = document.createElement("div");
  body.className = "results-modal__body";

  const grid = document.createElement("div");
  grid.className = "results-grid";

  if (showEmpty) {
    const empty = document.createElement("p");
    empty.className = "results-empty";
    empty.textContent = noRecommendations
      ? "No recommendations matched those filters. Loosen genres or pick another year bucket."
      : "No recommendations found.";
    body.appendChild(empty);
  } else {
    data.forEach((item) => {
      const card = document.createElement("article");
      card.className = "result-card";

      const media = document.createElement("div");
      media.className = "result-card__media";

      let imageUrl = "";
      let ratingText = "";

      if (entertainmentType === "movie") {
        imageUrl = item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : "";
        ratingText =
          item.vote_average != null && item.vote_average !== ""
            ? String(item.vote_average).slice(0, 4)
            : "";
      } else if (
        entertainmentType === "anime" ||
        entertainmentType === "manga"
      ) {
        imageUrl = item.images?.jpg?.image_url || "";
        ratingText =
          item.score != null && item.score !== ""
            ? String(item.score).slice(0, 4)
            : "";
      }

      if (!imageUrl) {
        media.classList.add("result-card__media--empty");
      }

      const img = document.createElement("img");
      img.src = imageUrl || "";
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      if (imageUrl) {
        img.alt = item.title || item.name || "";
      }
      img.addEventListener("error", () => {
        media.classList.add("result-card__media--empty");
        img.removeAttribute("src");
      });

      if (imageUrl) {
        media.appendChild(img);
      }

      if (ratingText) {
        const badge = document.createElement("span");
        badge.className = "result-card__badge";
        badge.textContent = `${ratingText} ★`;
        media.appendChild(badge);
      }

      const cardBody = document.createElement("div");
      cardBody.className = "result-card__body";

      const titleEl = document.createElement("h3");
      titleEl.className = "result-card__title";
      titleEl.textContent = item.title || item.name || "Untitled";

      const link = document.createElement("a");
      link.className = "result-card__link";
      link.textContent = "Open details →";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      if (entertainmentType === "movie") {
        link.href = `https://www.themoviedb.org/movie/${item.id}`;
      } else if (entertainmentType === "anime") {
        link.href = `https://myanimelist.net/anime/${item.mal_id}`;
      } else if (entertainmentType === "manga") {
        link.href = `https://myanimelist.net/manga/${item.mal_id}`;
      }

      cardBody.appendChild(titleEl);
      cardBody.appendChild(link);

      card.appendChild(media);
      card.appendChild(cardBody);
      grid.appendChild(card);
    });
    body.appendChild(grid);
  }

  const footer = document.createElement("div");
  footer.className = "results-modal__footer";

  const regenerateBtn = document.createElement("button");
  regenerateBtn.type = "button";
  regenerateBtn.className = "btn btn--primary btn--full";
  regenerateBtn.textContent = "Regenerate recommendations";
  regenerateBtn.addEventListener("click", () => {
    destroyModal();
    generateRecommendation();
  });

  footer.appendChild(regenerateBtn);

  sheet.appendChild(head);
  sheet.appendChild(body);
  sheet.appendChild(footer);

  modal.appendChild(backdrop);
  modal.appendChild(sheet);

  function destroyModal() {
    document.removeEventListener("keydown", onKey);
    modal.remove();
  }

  function onKey(e) {
    if (e.key === "Escape") {
      destroyModal();
    }
  }

  backdrop.addEventListener("click", destroyModal);
  closeBtn.addEventListener("click", destroyModal);
  document.addEventListener("keydown", onKey);

  document.body.appendChild(modal);
  closeBtn.focus();
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

function initTypeCards() {
  const select = document.getElementById("entertainment-type");
  const cards = document.querySelectorAll(".type-card");

  function syncCards() {
    const v = select.value;
    cards.forEach((btn) => {
      const on = btn.dataset.typeValue === v;
      btn.classList.toggle("type-card--active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  cards.forEach((btn) => {
    btn.addEventListener("click", () => {
      select.value = btn.dataset.typeValue;
      updateSelections();
      syncCards();
    });
  });

  select.addEventListener("change", syncCards);
}

function initDropdownKeyboard() {
  const genreToggle = document.getElementById("genre-dropdown");
  const excludeToggle = document.getElementById("exclude-genre-dropdown");
  if (genreToggle) {
    genreToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown();
      }
    });
  }
  if (excludeToggle) {
    excludeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExcludeDropdown();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTypeCards();
  initDropdownKeyboard();
});
