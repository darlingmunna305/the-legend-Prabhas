# The Legend Prabhas - Fan Website 🎬✨

A modern, interactive 3D fan website dedicated to actor Prabhas, featuring a comprehensive filmography, biography, interactive 3D gallery, news updates, and fan reviews.

## 🌟 Features

### 1. **Home Page**

- Stunning 3D animated background with rotating cube
- Hero section introducing Prabhas
- Key statistics and highlights
- Call-to-action buttons for navigation

### 2. **Filmography**

- Complete movie listing with grid view
- Sort by year or rating
- Interactive movie cards with hover effects
- Detailed modal view for each film
- Information includes: genre, cast, director, description, rating
- Direct links to legal streaming platforms (Amazon Prime, Netflix, YouTube)

### 3. **Biography**

- Comprehensive information about Prabhas
- Quick info sidebar (birthdate, birthplace, height, years active)
- Languages spoken
- Career highlights
- Awards and recognitions
- Personal interests and philanthropy

### 4. **3D Interactive Gallery**

- Three.js powered 3D carousel of movie posters
- Interactive movie selection
- Animated 3D transformations
- Movie details panel
- Previous/Next navigation

### 5. **News Section**

- Latest news and updates about Prabhas
- Expandable news items
- Chronologically sorted
- Source attribution

### 6. **Fan Reviews**

- User review submission form
- Star rating system (1-5 stars)
- Movie selection dropdown
- Review listing and sorting
- Community-driven content

## 🎨 Design Features

- **Dark Theme**: Professional dark background with gold accents
- **3D Elements**: Three.js integration for immersive 3D experiences
- **Smooth Animations**: CSS animations and transitions throughout
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with premium feel

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **3D Graphics**: Three.js
- **Routing**: React Router
- **Styling**: CSS3 with modern features
- **HTTP Client**: Axios (for future API integration)

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Navigate to project directory**

   ```bash
   cd "The Legend Prabhas"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```bash
   http://localhost:3000
   ```

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```txt
The Legend Prabhas/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Footer with links
│   ├── pages/
│   │   ├── Home.jsx            # Home page with 3D background
│   │   ├── Filmography.jsx     # Movies listing
│   │   ├── Biography.jsx       # Actor biography
│   │   ├── Gallery.jsx         # 3D interactive gallery
│   │   ├── News.jsx            # News section
│   │   └── Reviews.jsx         # Reviews page
│   ├── data/
│   │   └── prabhasData.js      # All data (movies, biography, etc.)
│   ├── styles/
│   │   ├── global.css          # Global styles
│   │   ├── header.css          # Header styles
│   │   ├── footer.css          # Footer styles
│   │   └── pages/              # Page-specific styles
│   ├── 3d/                     # 3D utilities (for future expansion)
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   └── main.jsx                # Entry point
├── public/                      # Static assets
├── index.html                   # HTML entry point
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Data Structure

### Movies

Each movie includes:

- Title, year, languages, genre
- IMDb rating
- Description, director, cast
- Streaming platform links
- Movie poster image

### Biography

- Personal information
- Career highlights
- Awards and recognitions
- Languages spoken
- Personal interests

### News

- Title, date, content
- Source attribution

### Reviews

- User name, movie selection
- 1-5 star rating
- Review comment
- Date posted

## 🎯 Features & Customization

### Adding New Movies

Edit `src/data/prabhasData.js` and add to the `movies` array:

```javascript
{
  id: 9,
  title: "Movie Title",
  year: 2024,
  language: "Telugu, Tamil",
  genre: "Action",
  rating: 8.0,
  description: "Description...",
  director: "Director Name",
  cast: ["Prabhas", "Actor 2"],
  streamingLinks: {
    "Platform": "https://link"
  },
  image: "image-url"
}
```

### Customizing Colors

The color scheme uses CSS variables in `src/styles/global.css`:

```css
--primary-gold: #d4af37;
--dark-bg: #0a0a0a;
--lighter-bg: #1a1a1a;
--text-light: #ffffff;
--text-muted: #cccccc;
```

## 🌐 Streaming Links

The website includes links to legal streaming platforms:

- Amazon Prime Video
- Netflix
- YouTube

*Note: This is a fan website. Please support official releases by watching through legal platforms.*

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## ⚠️ Disclaimer

This is an unofficial fan website created for educational and entertainment purposes. All content is for informational only. Images and information are sourced ethically. This website respects all copyright and intellectual property rights.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to:

- Report bugs
- Suggest new features
- Improve design

## 📄 License

This project is created for educational purposes. All images and information about Prabhas belong to their respective owners.

## 🎬 About Prabhas

Prabhas (born July 23, 1979) is one of Indian cinema's biggest superstars, best known for his iconic roles in the Baahubali film series. He has established himself as a leading actor in Indian cinema with a massive fan following both nationally and internationally.

---

**Made with ❤️ for Prabhas fans worldwide** 🌟

For more information, visit official sources and streaming platforms.
