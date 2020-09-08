This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Subject

The subject is to make a tiny app that retrieves all existing article from The New York Times, using their API. It should be a SPA made with React, and meet the following requirements:

### Required : Loading Articles

Find all articles containing a keyword entered by the user.
Each article should show up to 30 characters of text, remainder should be displayed as `...more`
Click the link to go to the original page.

### Option 1 : Bookmark

Enable a bookmark feature on the articles you load.

### Option 2 : Pagination

10 article per page, and you should be able to load the next 10 when clicking the `Load more` button.

### Option 3 : Display Image

Display the image of the article

### Bonus : Make use of the following:

- Hook
- Typescript
- Redux
- Reddux Middleware
- Responsive Design

## How to start

After cloning the project, run:

### `npm install` then `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Decisions regarding the UI/Flow

As there was no specifications for the UI behavior regarding the listing, but only for the 30 char limit of Article body, I decided to show the title of the article (given freely from API) and show the Article substract with 30 char limit on the details page.<br />
This is something that could easily be adjusted to match UI specifications.

### Regarding Pagination

I wanted to try something different from a table, and given the huge amounts of hits some keywords return, I thought a virtualized table was a good idea.<br />
[react-window](https://github.com/bvaughn/react-window) was exactly what I was thinking about.<br />
In hindsight, although I learned a lot from that experience, I probably would have had less trouble overall using a Table.

## Options

- [x] Option 1
- [x] Option 2
- [x] Option 3

## Bonus

Given my recent experience, I decided to try and make it in React Typescript, with Hooks and functional components.

Although I am familiar with the concept, I lack hands-on experience with Redux, so I used React Context instead (which I used in my latest professional mission).

I made minimal responsive adjustments to the design as well.
