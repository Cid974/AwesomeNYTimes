This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

- Option 1 was completed
- Option 2 was completed
- Option 3 was completed

## Bonuses

Given my recent experience, I decided to try and make it in React Typescript, with Hooks and functional components.

Although I am familiar with the concept, I lack hands-on experience with Redux, so I used React Context instead (which I used in my latest professional mission).

I made minimal responsive adjustments to the design as well.
