# MVNU Interactive Campus Map

An interactive web application for navigating Mount Vernon Nazarene University's campus. Built with React, Mapbox GL JS, and Tailwind CSS.

![MVNU Campus Map](./docs/screenshot.png)

## 🎯 Features

- **Interactive Map**: Explore MVNU campus with an interactive Mapbox-powered map
- **Building Search**: Search for buildings, rooms, and professors with fuzzy matching
- **Category Filtering**: Filter buildings by type (Academic, Dining, Recreation, etc.)
- **Building Details**: View operating hours, accessibility info, and amenities
- **Room Directories**: Browse room-by-room directories for each building
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Accessibility Information**: Highlights accessible entrances, elevators, and ramps

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Mapbox account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BlairK22/MVNU-Campus-Map.git
   cd MVNU-Campus-Map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Mapbox access token:
   ```
   VITE_MAPBOX_TOKEN=your_mapbox_access_token_here
   ```
   
   Get a free token at [Mapbox Account](https://account.mapbox.com/access-tokens/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
mvnu-campus-map/
├── public/
│   └── images/           # Building images (to be added)
├── src/
│   ├── components/       # React components
│   │   ├── MapContainer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── BuildingDetailPanel.jsx
│   │   ├── Header.jsx
│   │   └── MobileNav.jsx
│   ├── data/             # JSON data files
│   │   ├── buildings.json
│   │   └── rooms.json
│   ├── styles/           # CSS files
│   │   └── index.css
│   ├── App.jsx           # Main application
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Mapping**: Mapbox GL JS with react-map-gl
- **Styling**: Tailwind CSS
- **Search**: Fuse.js (fuzzy search)
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📊 Data Structure

### Buildings (buildings.json)
```json
{
  "id": "thorne-library",
  "name": "Thorne Library",
  "code": "LIB",
  "category": "academic",
  "coordinates": [-82.48545, 40.39785],
  "floors": 3,
  "hours": { ... },
  "accessibility": { ... }
}
```

### Rooms (rooms.json)
```json
{
  "id": "lib-101",
  "buildingId": "thorne-library",
  "roomNumber": "101",
  "floor": 1,
  "name": "Computer Lab A",
  "type": "computer-lab",
  "capacity": 30
}
```

## 🚧 Development Roadmap

### Phase 1 (Current) ✅
- [x] Project setup with React + Vite
- [x] Mapbox integration
- [x] Building markers and popups
- [x] Search functionality
- [x] Category filtering
- [x] Building detail panels
- [x] Room directories
- [x] Mobile responsive design

### Phase 2 (In Progress)
- [ ] Add all MVNU buildings with accurate coordinates
- [ ] Collect real room data for key buildings
- [ ] Add building photos
- [ ] Implement walking directions
- [ ] User testing and feedback

### Phase 3 (Future)
- [ ] Real-time room availability
- [ ] Event calendar integration
- [ ] Admin interface for data updates
- [ ] PWA capabilities for offline access
- [ ] Floor plan images

## 🤝 Contributing

This is a capstone project for MVNU's Computer Applications Practicum course. Feedback and suggestions are welcome!

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

## 👤 Author

**Blair Karamaga**
- GitHub: [@BlairK22](https://github.com/BlairK22)
- Mount Vernon Nazarene University, Class of 2026

## 🙏 Acknowledgments

- MVNU Student Life Office for stakeholder input
- MVNU IT Department
- Computer Applications Practicum course instructor
