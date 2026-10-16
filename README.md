# Image Gallery

A responsive image gallery built with React and Vite. The app displays a clean grid of photos and opens them in a modern lightbox viewer with caption support, zoom, fullscreen, thumbnails, and download options.

## Features

- Responsive image grid layout
- Click any image to open the full-screen lightbox
- Captions and descriptions for each image
- Zoom controls, fullscreen mode, and thumbnails
- Download option for gallery images
- Simple data-driven gallery setup using a central slide list

## Tech Stack

- React
- Vite
- Tailwind CSS
- yet-another-react-lightbox

## Project Structure

```bash
image-gallery/
├── public/
│   └── images/            # Gallery image assets
├── src/
│   ├── component/
│   │   └── images.tsx     # Gallery grid component
│   ├── lib/
│   │   └── data.ts        # Image metadata and slide data
│   ├── App.jsx            # Main app and lightbox logic
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
2. Navigate into the project folder
3. Install dependencies:

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

## Usage

- The gallery is powered by the image data in `src/lib/data.ts`.
- Each slide includes a source path, title, and description.
- Clicking any card opens the image in the lightbox viewer.
- Use the controls in the lightbox to zoom, open fullscreen, browse thumbnails, or download the current image.

## Notes

The images used in this project are stored in the `public/images` folder and referenced from the slide list in `src/lib/data.ts`.

## License

This project is currently unlicensed and intended for learning and personal use.
