# React Quiz Application

A simple and modern quiz application built with React. Users can test their knowledge with multiple-choice questions and see their score at the end.

## Features

- Multiple-choice quiz questions
- Progress tracking and scoring
- Responsive and clean UI
- Timer per question (optional)
- Backend powered by `json-server` for easy question management

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### 1. Start the Backend Server

The app uses `json-server` to serve questions from a local JSON file.

```
npm run server
```

This will start the backend at [http://localhost:8000/questions](http://localhost:8000/questions).

#### 2. Start the React App

In a separate terminal, run:

```
npm start
```

This will start the React app at [http://localhost:3000](http://localhost:3000).

### Project Structure

```
react-quiz/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── data/
│   │   └── questions.json
│   ├── components/
│   │   └── ...
│   └── ...
├── package.json
└── README.md
```

### Customizing Questions

Edit `src/data/questions.json` to add, remove, or modify quiz questions.

### Scripts

- `npm start` — Start the React development server
- `npm run server` — Start the JSON backend server
- `npm run build` — Build the app for production
- `npm test` — Run tests

## License

This project is for educational purposes.

