<p align="center">
  <a href="https://aaballaboutbooks.web.app/" rel="noopener" target="_blank"><img width="150" src="public/icon.svg" alt="AAB Logo"></a>
</p>

<h1 align="center">AAB - All About Books</h1>



**AAB** is an online book browser app that uses third party [Open Library](https://openlibrary.org/developers/api) API for fetching books' data.

Thousands of books can be browsed in total of 6 specified catogories. Apart from the categories, total of 5 featured collections/series are also availabe to browse books in.
Contact form can be used to write reviews/comments to the website. It'll also send an auto-reply to the user provided email address.

### Tech Stack used
- React Js
    - React Hooks: useState, useEffect, useRef
    - Fetch API and abort controller
    - Intersection Observer API (for infinite scrolling)
    - Browser router and useLocation hook from react router dom
- Tailwind CSS
- Email Js (for receiving emails from users and sending auto-replies)





# How to Run
This react project has been created using VTTE. Inorder to run the project on your local system, follow the steps below:


*1. Clone this repository on your system*
```sh
git clone https://github.com/IqraChishty/AAB_AllAboutBooks.git
cd AAB_AllAboutBooks
```

*2. Install the required dependencies*

```sh
npm install
```

*3. Run the app in the development mode*

```sh
npm run dev
```
Open http://localhost:5173 to view the project in the browser

*4. Inorder to build the app for production*

```sh
npm run build
```
Builds to `dist` folder.