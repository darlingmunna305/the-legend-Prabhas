# Copilot Instructions for The Legend Prabhas Website

## Project Overview
This is a modern React + Three.js fan website dedicated to actor Prabhas with features including:
- Interactive 3D elements using Three.js
- Comprehensive filmography with movie details
- Actor biography and career information
- 3D interactive gallery
- News updates
- User reviews system
- Responsive design with dark theme and gold accents

## Key Technologies
- React 18 with Vite for fast development
- Three.js for 3D graphics and animations
- React Router for navigation
- CSS3 with responsive design
- JavaScript ES6+

## Project Structure
- `src/pages/` - Page components (Home, Filmography, Biography, Gallery, News, Reviews)
- `src/components/` - Reusable components (Header, Footer)
- `src/data/prabhasData.js` - All data including movies, biography, news, reviews
- `src/styles/` - CSS files organized by component and page
- `src/3d/` - 3D utilities and helpers

## Common Tasks

### Adding New Movies
1. Edit `src/data/prabhasData.js`
2. Add entry to `movies` array with required fields
3. Include poster image URL and streaming links

### Styling Customization
- Global theme colors in `src/styles/global.css`
- Gold color: `#d4af37`
- Dark background: `#0a0a0a`
- Page-specific styles in `src/styles/pages/`

### 3D Features
- Home page: Rotating 3D cube background
- Gallery page: 3D carousel with Three.js

## Running the Project
```bash
npm install
npm run dev
```

## Building for Production
```bash
npm run build
npm run preview
```

## Design Standards
- Dark elegant theme with gold accents
- Smooth animations and transitions
- Mobile-first responsive design
- Accessibility considerations
- Performance optimization

## Component Guidelines
- Functional components with React hooks
- Proper prop validation
- Reusable component architecture
- Separation of concerns
- Clean code structure

## Important Notes
- This is an educational fan website
- All streaming links point to legal platforms
- Respect copyright and intellectual property
- No actual movie files are hosted
- Community reviews are moderated concepts

## Future Enhancement Ideas
- User authentication system
- Comment functionality
- Social media integration
- Search and filtering optimization
- Backend API integration
- Image optimization and lazy loading
- Progressive Web App (PWA) support
