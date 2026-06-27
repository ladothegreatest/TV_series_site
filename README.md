# TV Series Site

Responsive React project for the TV Series page from the provided design.

## Used

- React + Vite
- Axios
- Context API
- LocalStorage bookmarks
- Responsive desktop / tablet / mobile CSS

## Run

```bash
npm install
npm run dev
```

Open the local Vite URL in your browser.

## Main files

```txt
src/
  api/movieApi.js
  context/MovieContext.jsx
  components/Icons.jsx
  components/Sidebar.jsx
  components/SearchBar.jsx
  components/MovieCard.jsx
  components/MovieGrid.jsx
  assets/avatar.svg
  App.jsx
  main.jsx
  index.css
```

The app loads data from:

```txt
https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json
```

Bookmarks are stored in LocalStorage under this key:

```txt
bookmarkedMovieTitles
```
