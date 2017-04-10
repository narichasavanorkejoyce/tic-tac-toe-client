[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
Tic-Tac-Toe

This is the first project in WDI.

-https://lisamsmith100.github.io/tic-tac-toe-client/
- Live API: [Quiltr API](https://quiltr.herokuapp.com/)
- Repo on GitHub: [lisamsmith100/tic-tac-toe-client](https://github.com/lisamsmith100/tic-tac-toe-client)

## About Project 1

[Tic-Tac-Toe](https://lisamsmith100.github.io/tic-tac-toe-client/) This is a two person game using one device where the first person to place 3 of their symbols in same row, column, or diagonal wins.

The first player is X and clicks with mouse/pass on the grid board piece and the turn automatically turns to player O where they do the same.  There may be no more than 9 moves in one game, and the goal is to outwit opponent by placing 3 symbols X or O in an consecutive row, column, or diagonal.

Tic-Tac-Toe is built using HTML, CSS, SASS, Javascript, and jQuery and relies on a Rails API/Postgres to persist data.

### User stories
- As a user, I want to play tic-tac-toe online accessed via a single page.
- As a developer, I want to work with separate branches for various pieces of work with frequest commits and then merge them from master branch.
- As a developer, I want a practical README.md to explain details about the project and how to run the code.
- As a user, I want to see how many wins, how many over all games played, and percentages.
- As a user, I want play consecutive games without refreshing the page.
- As a user and developer, I want authentication functionality (login, logout, change password).

### Wireframes
- http://imgur.com/zFI76Dd
- http://imgur.com/sE8y9Su

### Data Model

- The data model was provided to us in the project documentation.  These were several nested objects.  The high-level models are for the User, the data about the games passed back, the board.  The numerous functions were setup to manage the interactions between resources (front-end server, Rails server, javascript).

## Development Process

Since this is the first project of this type I have begun, I wasn't sure where to begin other than setting up a website.  So I reviewed the various bells and whistles available with bootstrap. I'm not very familiar with these templates but learned quite a bit about the restrictions--there are many restrictive classes maintaining its structure/template foundations.  I ran into some difficult with getting the authentication to work in the modals but with someone's suggestion (as they too ran into that situation), I was able to have my sign-ins authenticated with 200s.  I felt bewildered with this project but quickly learned some important notions as follows:

be sure to follow every last instruction with the browser template install because if any sort of copying or moving of files, can cause a significant setback in time and psyche.  I lost quite a bit of time dealing with git.  I discovered major issue when initially deploying to production.  The feature branch on which I was working was not connected to master branch and therefore could not push my changes to it and could not deploy.  This also caused issues in later deployment.

The next struggle in this project was decided which part of the project to tackle next.  Daily, I had a short list of goals to complete and tried to cross of as many as possible.  While the git fiasco carried on, I did make progress but extremely slowly.  I spent most of my weekend coding and tackling problems with code.

Unfortunately, I was unable to complete all of the requirements and will have to continue work on them this week.  I feel these are reasonable goals and that will achieve them.

Another major part of the learning process with this project is the issues repository and the interaction for getting questions answered.  With practice, I expect I will become comfortable with the process.  I do feel like I spent more time trying to figure out how to ask a question than I did on my project itself.  The system in place to manage the tickets will be beneficial, but will require some more work and training.

While working on this project, I am becoming more comfortable with the interactions between the resources and with the MacBook Pro, the Terminal, and the syntax.

## Dependencies

Install build dependencies with `bundle install`. Browser-template provided many pre-populated files for use with this project.  I used Bootstrap template for this site.
-   [Bootstrap](http://getbootstrap.com)

## Additional Tech Used

There were numerous files given to us in template files.

## Next Steps

- Fix functionality to restrict clicking in the grid after the game is over.
- Fix functionality to display how many wins Player X has made.
- Fix functionality to display a game by game ID
- Fix any issues related to deployment.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3.
