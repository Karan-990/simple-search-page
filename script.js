// Sample blog data
const blogs = [
    { title: "Tech Trends 2024", category: "technology", snippet: "Latest trends in tech for 2024." },
    { title: "Healthy Living Tips", category: "lifestyle", snippet: "Simple tips for a healthy lifestyle." },
    { title: "AI Innovations", category: "technology", snippet: "How AI is changing the world." },
    { title: "Minimalism 101", category: "lifestyle", snippet: "Living more with less." },
  ];
  
  // DOM elements
  const resultsSection = document.getElementById("results");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  
  // Apply saved dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }
  
  
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
  
  
  document.getElementById("search-btn").addEventListener("click", () => {
    const query = document.getElementById("search-box").value.toLowerCase();
    const category = document.getElementById("category").value;
  
    const results = blogs.filter((blog) => {
      const matchesQuery = blog.title.toLowerCase().includes(query);
      const matchesCategory = category === "all" || blog.category === category;
      return matchesQuery && matchesCategory;
    });
  
    displayResults(results);
  });
  
  
  function displayResults(results) {
    resultsSection.innerHTML = "";
  
    if (results.length === 0) {
      resultsSection.innerHTML = "<p>No results found.</p>";
      return;
    }
  
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.snippet}</p>`;
      resultsSection.appendChild(resultItem);
    });
  }
  