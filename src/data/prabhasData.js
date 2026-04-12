export const movies = [
  // 2000s
  {
    id: 1,
    title: "Eeswar",
    year: 2002,
    language: "Telugu",
    genre: "Action Drama",
    rating: 6.5,
    description: "Prabhas' debut film, an action drama about a young man seeking revenge.",
    director: "K. Raghavendra Rao",
    cast: ["Prabhas", "Rambha"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BZTUwMTc5Y2YtOTI3NC00YjA5LWI3YTItOWI3ZmQzMzQ4YWVjXkEyXkFqcGc@._V1_.jpg",
    status: "Debut"
  },
  {
    id: 2,
    title: "Raghavendra",
    year: 2003,
    language: "Telugu",
    genre: "Action",
    rating: 6.8,
    description: "An action film featuring Prabhas in a lead role.",
    director: "A. Kodandarami Reddy",
    cast: ["Prabhas", "Sneha"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjI2MTA1MWQtNGE5ZC00OGE5LWI3ZWYtYjZmNzA3MjYxYWE3XkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 3,
    title: "Varsham",
    year: 2004,
    language: "Telugu",
    genre: "Romantic Drama",
    rating: 7.1,
    description: "A romantic drama with stellar performances - a hit film of the year.",
    director: "Sobhan",
    cast: ["Prabhas", "Trisha"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjZmNWU0NjItYTAwNC00MzZkLWE1NGQtMzQ3ZTg5OWU1ZjY1XkEyXkFqcGc@._V1_.jpg",
    status: "Hit"
  },
  {
    id: 4,
    title: "Adavi Ramudu",
    year: 2004,
    language: "Telugu",
    genre: "Action Adventure",
    rating: 6.7,
    description: "An action-packed adventure set in the forest.",
    director: "V.V. Vinayak",
    cast: ["Prabhas", "Ileana D'Cruz"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjU3YWJkOTAtOTc0ZC00YzEwLWI5MDctMDU2Y2U4Y2Q0MDc1XkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 5,
    title: "Chakram",
    year: 2005,
    language: "Telugu",
    genre: "Action Thriller",
    rating: 6.9,
    description: "An intense action thriller with high-octane sequences.",
    director: "S. Madhavan",
    cast: ["Prabhas", "Asin"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjA2Nzg3NzYtMjAxOC00YWE1LWJkYjctMjk5YTQ0ZjQzNThhXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 6,
    title: "Chatrapathi",
    year: 2005,
    language: "Telugu",
    genre: "Action Epic",
    rating: 7.4,
    description: "An epic action film showcasing mass appeal and powerful action sequences - Blockbuster!",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Bhanupriya"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "1080p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjA4MzM2MDItOTg0OC00OWU0LWI0Y2QtNTk1ZjI4MjI4YjU0XkEyXkFqcGc@._V1_.jpg",
    status: "Blockbuster"
  },
  {
    id: 7,
    title: "Pournami",
    year: 2006,
    language: "Telugu",
    genre: "Action Adventure",
    rating: 6.8,
    description: "An adventure film with action and romance.",
    director: "V.V. Vinayak",
    cast: ["Prabhas", "Charmi"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMTY5YjBmZjgtYTk3NC00ZTUyLTlkYjAtNzI0OTkyZTI2YTgyXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 8,
    title: "Yogi",
    year: 2007,
    language: "Telugu",
    genre: "Romantic Comedy",
    rating: 6.6,
    description: "A romantic comedy with lighthearted humor and charm.",
    director: "Hari",
    cast: ["Prabhas", "Charmi"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BOTAxMDg5MGItNzEzOS00MjFkLTg1NDctMDAwZjZkNTdhNjU5XkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 9,
    title: "Munna",
    year: 2007,
    language: "Telugu",
    genre: "Comedy Action",
    rating: 6.5,
    description: "A comedy-action film with entertaining sequences.",
    director: "Vamshi Paidipally",
    cast: ["Prabhas", "Ileana D'Cruz"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMzM2YzBjZWQtN2JmNi00ZjEwLWI1YjctMWM5ODBkZDZkM2YxXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 10,
    title: "Bujjigadu",
    year: 2008,
    language: "Telugu",
    genre: "Comedy Action",
    rating: 6.4,
    description: "A fun-filled action comedy with humor and entertainment.",
    director: "Nandini Reddy",
    cast: ["Prabhas", "Trisha"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BYME5MmQ1MzgtOGZkNi00NDhkLTk5YTktYTk5ODlmNjk5NTgwXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 11,
    title: "Billa",
    year: 2009,
    language: "Telugu, Tamil, Kannada",
    genre: "Action Thriller",
    rating: 7.2,
    description: "A stylish action thriller with high production values.",
    director: "Meher Ramesh",
    cast: ["Prabhas", "Anushka Shetty"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "1080p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjI1YjhkZGUtNmFmNi00OTZhLWE1MWMtOTE1MzA2MWQ2MjhiXkEyXkFqcGc@._V1_.jpg",
    status: "Hit"
  },
  {
    id: 12,
    title: "Ek Niranjan",
    year: 2009,
    language: "Telugu, Tamil, Hindi",
    genre: "Action Thriller",
    rating: 6.9,
    description: "An action thriller with mystery and suspense elements.",
    director: "Puri Jagannadh",
    cast: ["Prabhas", "Kangana Ranaut"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BYzY3ZGI0ZmMtZWQ1Yi00M2JmLWE5YzUtNzlmMDBiMzIwODhhXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  // 2010s
  {
    id: 13,
    title: "Darling",
    year: 2010,
    language: "Telugu",
    genre: "Romantic Comedy",
    rating: 7.5,
    description: "A lighthearted romantic comedy about a love story with unexpected twists - Hit!",
    director: "Karunakaran",
    cast: ["Prabhas", "Kajal Aggarwal"],
    trailerUrl: "https://www.youtube.com/embed/3QxpFHgVbEI",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMTc3MTkwNjU3N15BMl81L1UyXkEyXkFqcGc@._V1_.jpg",
    status: "Hit"
  },
  {
    id: 14,
    title: "Mr. Perfect",
    year: 2011,
    language: "Telugu",
    genre: "Romantic Comedy",
    rating: 7.3,
    description: "A romantic comedy about finding the perfect match - Blockbuster hit!",
    director: "Vamshi Paidipally",
    cast: ["Prabhas", "Kajal Aggarwal"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BODg3N2VjZTgtMWQ5Mi00ZWVkLTkxZDEtMGI0MzY3YzRkZjQ1XkEyXkFqcGc@._V1_.jpg",
    status: "Blockbuster"
  },
  {
    id: 15,
    title: "Rebel",
    year: 2012,
    language: "Telugu",
    genre: "Action Drama",
    rating: 6.8,
    description: "An action drama exploring youthful rebellion and social issues.",
    director: "Puri Jagannadh",
    cast: ["Prabhas", "Deeksha Seth"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "YouTube": { url: "https://www.youtube.com", quality: "720p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjAwMjg1MDYtZGQzMi00YTkwLWI3MjEtNGM4N2MxNDJkZTM4XkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 16,
    title: "Mirchi",
    year: 2013,
    language: "Telugu",
    genre: "Romantic Action",
    rating: 7.8,
    description: "A romantic action thriller where a young man falls deeply in love and fights all odds - Blockbuster!",
    director: "Koratala Siva",
    cast: ["Prabhas", "Anushka Shetty"],
    trailerUrl: "https://www.youtube.com/embed/LZFVVVKK8kI",
    streamingLinks: { "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "1080p" } },
    image: "https://m.media-amazon.com/images/M/MV5BMjIwNjg0MDkyOF5BMl81L1UyXkEyXkFqcGc@._V1_.jpg",
    status: "Blockbuster"
  },
  {
    id: 17,
    title: "Baahubali: The Beginning",
    year: 2015,
    language: "Telugu, Tamil, Kannada, Malayalam",
    genre: "Epic Action",
    rating: 8.1,
    description: "An epic action film about a warrior's quest to avenge his father's death - Industry Hit!",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Anushka Shetty", "Tamannaah Bhatia"],
    trailerUrl: "https://www.youtube.com/embed/WJpwMErKPYM",
    streamingLinks: {
      "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "4K" },
      "Netflix": { url: "https://www.netflix.com", quality: "1080p" },
      "YouTube": { url: "https://www.youtube.com", quality: "720p" }
    },
    image: "https://m.media-amazon.com/images/M/MV5BMTQxMjExMTk2NV5BMl81L1UyXkEyXkFqcGc@._V1_.jpg",
    status: "Industry Hit"
  },
  {
    id: 18,
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    language: "Telugu, Tamil, Kannada, Malayalam",
    genre: "Epic Action",
    rating: 8.2,
    description: "The triumphant conclusion to the Baahubali saga - All-Time Blockbuster!",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Anushka Shetty", "Tamannaah Bhatia"],
    trailerUrl: "https://www.youtube.com/embed/82HqVpTKgIQ",
    streamingLinks: {
      "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "4K" },
      "Netflix": { url: "https://www.netflix.com", quality: "1080p" }
    },
    image: "https://m.media-amazon.com/images/M/MV5BZGM5MzE0YTYtOGQ1MC00NGM5LTk3NDUtNzY2YzVlN2Q0NjBjXkEyXkFqcGc@._V1_.jpg",
    status: "All-Time Blockbuster"
  },
  {
    id: 19,
    title: "Saaho",
    year: 2019,
    language: "Telugu, Tamil",
    genre: "Heist Action",
    rating: 7.1,
    description: "A high-octane heist thriller involving a daring mission - Commercial Success!",
    director: "Sujeeth",
    cast: ["Prabhas", "Shraddha Kapoor"],
    trailerUrl: "https://www.youtube.com/embed/yMPjfQ_8QBk",
    streamingLinks: {
      "Amazon Prime Video": { url: "https://www.primevideo.com", quality: "4K" },
      "YouTube": { url: "https://www.youtube.com", quality: "720p" }
    },
    image: "https://m.media-amazon.com/images/M/MV5BZTA4ZGEtYzhhLTRhYWItOGQ0Ny1kZTgwYmU1MzFkYTBfXkEyXkFqcGc@._V1_.jpg",
    status: "Commercial Success"
  },
  // 2020s
  {
    id: 20,
    title: "Radhe Shyam",
    year: 2022,
    language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
    genre: "Romantic Drama",
    rating: 5.8,
    description: "A romantic drama set against a European backdrop with period aesthetics.",
    director: "Radha Krishna Kumar",
    cast: ["Prabhas", "Pooja Hegde"],
    trailerUrl: "https://www.youtube.com/embed/qQfJsKCzs3Y",
    streamingLinks: { "Prime Video": { url: "https://www.primevideo.com", quality: "4K" } },
    image: "https://m.media-amazon.com/images/M/MV5BYzI1ZjczMzAtNDk0OS00YzI1LTk4YWItOTZlOTQ0ZjVhZjkyXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 21,
    title: "Adipurush",
    year: 2023,
    language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
    genre: "Mythological Epic",
    rating: 5.5,
    description: "A mythological epic adaptation with grand visual effects and action sequences.",
    director: "Om Raut",
    cast: ["Prabhas", "Kriti Sanon", "Saif Ali Khan"],
    trailerUrl: "https://www.youtube.com/embed/fHQnNdhMPVU",
    streamingLinks: { "Prime Video": { url: "https://www.primevideo.com", quality: "4K" } },
    image: "https://m.media-amazon.com/images/M/MV5BNWU0MGM1YWItMjE4OS00OGI1LWI4MDQtNGMzZTQwNzQ1OWExXkEyXkFqcGc@._V1_.jpg",
    status: "Release"
  },
  {
    id: 22,
    title: "Salaar: Part 1 – Ceasefire",
    year: 2023,
    language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
    genre: "Action Thriller",
    rating: 7.2,
    description: "An intense action thriller showcasing raw power and mass appeal - Blockbuster!",
    director: "Prashanth Neel",
    cast: ["Prabhas", "Shruti Haasan"],
    trailerUrl: "https://www.youtube.com/embed/3XklNVu8gwU",
    streamingLinks: { "Prime Video": { url: "https://www.primevideo.com", quality: "4K" } },
    image: "https://m.media-amazon.com/images/M/MV5BNGMxZDMxNjctNDdkMC00ZjIxLTk3ODQtYzQyYzk0ZjRjZjYyXkEyXkFqcGc@._V1_.jpg",
    status: "Blockbuster"
  },
  {
    id: 23,
    title: "Kalki 2898 AD",
    year: 2024,
    language: "Telugu, Tamil, Kannada, Malayalam, Hindi",
    genre: "Sci-Fi Mythology",
    rating: 7.4,
    description: "A futuristic mythological epic featuring high-octane action - Major Hit!",
    director: "Nag Ashwin",
    cast: ["Prabhas", "Deepika Padukone", "Amitabh Bachchan"],
    trailerUrl: "https://www.youtube.com/embed/video",
    streamingLinks: { "Prime Video": { url: "https://www.primevideo.com", quality: "4K" } },
    image: "https://m.media-amazon.com/images/M/MV5BNjFlZTY2MW1mN2MtMGM0OS00NjMwLTg4NDgtMmQxYjBhMzM2MWQyXkEyXkFqcGc@._V1_.jpg",
    status: "Major Hit"
  }
]

export const biography = {
  name: "Prabhas Rameswara Rao Uppalapati",
  birthDate: "July 23, 1979",
  birthPlace: "Chennai, Tamil Nadu",
  height: "6'\'' 0\"",
  languages: ["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi", "English"],
  profession: "Film Actor",
  yearsActive: "2002 - Present",
  
  about: `Prabhas is one of Indian cinema's biggest superstars, known for his iconic roles and mass appeal. Starting his career with small roles, he rose to prominence through Telugu cinema, becoming a leading actor in the industry. His breakthrough came with films like Chatrapathi and Billa, but he achieved international recognition with the Baahubali franchise, which became a global phenomenon.`,
  
  careerHighlights: [
    "Baahubali franchise - became a global phenomenon",
    "Multiple National Awards and Filmfare Awards",
    "First Indian actor to work with international directors on Indian productions",
    "23+ films across Telugu, Tamil, Kannada, Malayalam, and Hindi industries",
    "Highest-paid Telugu actor",
    "Global fan following with millions of followers across all platforms"
  ],

  awards: [
    { year: 2009, title: "Nandi Award for Best Actor", film: "Billa" },
    { year: 2013, title: "Filmfare Award for Best Actor", film: "Mirchi" },
    { year: 2016, title: "National Film Award Special Mention", film: "Baahubali" },
    { year: 2018, title: "IIFA Award for Best Actor", film: "Baahubali 2" },
    { year: 2023, title: "SIIMA Award for Best Actor", film: "Salaar" }
  ]
}

export const news = [
  {
    id: 1,
    title: "Prabhas Completes Kalki 2898 AD Shoot",
    date: "2024",
    content: "Actor Prabhas has wrapped up his portions for the highly anticipated sci-fi mythology film Kalki 2898 AD.",
    image: "https://via.placeholder.com/400x300?text=Kalki+News"
  },
  {
    id: 2,
    title: "Salaar: Part 1 Breaks Box Office Records",
    date: "2023",
    content: "Prabhas' latest action thriller Salaar Part 1 has broken numerous box office records across all industries.",
    image: "https://via.placeholder.com/400x300?text=Salaar+Records"
  },
  {
    id: 3,
    title: "Prabhas' Next Project Announced",
    date: "2024",
    content: "An exciting new project featuring Prabhas in an unprecedented role has been officially announced.",
    image: "https://via.placeholder.com/400x300?text=Next+Project"
  },
  {
    id: 4,
    title: "Prabhas Wins International Recognition",
    date: "2024",
    content: "The Telugu superstar receives accolades at international film festivals for his contributions to cinema.",
    image: "https://via.placeholder.com/400x300?text=International+Awards"
  }
]

export const reviews = [
  {
    id: 1,
    userName: "Raj Kumar",
    rating: 5,
    review: "Prabhas is a phenomenal actor! His performances in Baahubali and Salaar are exceptional."
  },
  {
    id: 2,
    userName: "Priya Sharma",
    rating: 5,
    review: "An absolute legend! His dedication to cinema is inspiring and his movies are always entertaining."
  },
  {
    id: 3,
    userName: "Arjun Verma",
    rating: 4,
    review: "Great action sequences and amazing performances. Prabhas is a true action hero!"
  },
  {
    id: 4,
    userName: "Sneha Gupta",
    rating: 5,
    review: "The way he performs in romantic and action roles is superb. Truly versatile!"
  },
  {
    id: 5,
    userName: "Vikram Singh",
    rating: 5,
    review: "Prabhas has given us some of the best films in Indian cinema. Respect!"
  }
]
