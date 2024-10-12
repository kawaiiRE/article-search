# Search Highlight App

This project is a simple search application that highlights searched terms within articles. It allows users to search for articles and displays the results with the search terms highlighted. The layout includes a sidebar on the right that adjusts its height based on the content.

## Features

- **Search for Articles:** Users can search for articles based on a keyword or phrase.
- **Highlight Search Terms:** The searched keyword is highlighted in both the title and content of each article.
- **Responsive Layout:** The page layout adjusts for different screen sizes, with a fixed sidebar on the right.
- **Article Count:** Displays the number of articles found below the search box.

## How to Run the Application

1. **Clone the repository:**

   ```
   git clone https://github.com/kawaiiRE/article-search
   ```

2. **Navigate to the project directory:**

   ```
   cd search-highlight-app
   ```

3. **Install the necessary dependencies:**

   ```
   npm install
   ```

4. **Start the development server:**

   ```
   npm start
   ```

The app will run on [http://localhost:3000]. You can open this in your browser to view and interact with the app.

## Project Structure

- **`src/`**: Contains the main components, styles, and article data.
  - **`Search.js`**: Main component handling the search logic.
  - **`articles.js`**: Contains the dummy article data used for searching.
  - **`Search.css`**: Contains the styles for the search input and layout.
  
## Instructions

1. Enter a search term in the input box.
2. The matching articles will be displayed below with the search term highlighted in yellow.
3. If no search term is entered, the page will prompt you to enter a query.
