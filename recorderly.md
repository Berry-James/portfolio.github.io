## Title
Recorderly

## Subtext
A light-weight and simpler tool for the casual music collector to keep track of their collection.

## Built using

MEN stack

# Front-end 
- Single-page application
- Bulma as CSS framework
- Mustache for rendering content
- Anime.js for cool animations

# Back-end
- Mongo, Express, Node
- MongoDB for storing user collections and auth
- Express for making API requests

## Intro
After building my first single page application (Honda Parts Center), I was overwhelmed by overall complexity of the project.  Whilst the site I had built was functional, truth be told - I didn't really understand how all of these different components worked together.  The aim when developing *Recorderly* was to delve back in to the world of SPAs and build something bigger and better.

## Recorderly Overview
Recorderly is a site where users can organise and manage their physical music collection.  The idea is simple: Users search for releases they own, add them to their collection in the correct format (usually Vinyl, Casette or CD) and share with their friends via QR code or URL.  Users can also add items to their wishlist whilst browsing.


## Design
The early design drafts for *Recorderly*  took inspiration from popular music streaming and database sites such as Discogs and Spotify.  Discogs has a powerful, user updated database with almost any release you could ask for.  Depsite this, its user interface design is somewhat outdated, visually unappealing and tricky to navigate at times.

*Spotify's* design is far more appealing and helped me shape my final design layout.

## Data acquisition
I would utilise the Discogs API in the building of my app as it is fast, reliable and contains all the data I could ask for.  The highly customisable __Search__ endpoint would come in useful for the majority of my data acquisition.  I chose to filter the results to 'master release' only, as Discogs stores data for every iteration of a release and would display many duplicates of most releases as a result.  This also automatically filtered out Artists, as *Recorderly* would only search for actual releases.

## The user collection
The user collection is a relatively simple undertaking.  Utilising Mongo's own Atlas service for hosting, each user's collection and wishlist is stored as an array of integers (Discogs IDs for each release).  My backend API was built on Node.js and Express, with Mongoose used to keep database connection simple.  API endpoints were set up for typical CRUD operations and user authentication was done via JWT.

## Retrieving the user collection
Retrieving the user's collection and wishlist was another challenge in itself.  Fetching the array's from my own database is easy  The Discogs API provides no method for getting multiple release IDs in one operation (understandable, as there is likely no relationship between the IDs being looked up).  As a workaround, I needed to loop through the user's collection array one by and create objects for each, store these objects in an array, render these objects in the DOM and finally animate each object into view using anime.js.


## Conclusion

