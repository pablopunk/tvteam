# ⚽ TV TEAM

Generate a website with your favorite team's next games, including day, time, and what TV channel you can see it on.

To add a team, you'll need to add one more entry to `lib/teams.ts` with all the necessary info. Also, you need to include the images/logos on `public/` folder (check current examples).

Right now the team is selected depeding on the URL you use to deploy. In `lib/teams.ts` you can see the rules to check. For example if you deploy it to an URL containing `"arsenal"`, then that team will be used.

Current live examples:

- [Real Madrid](https://madrid.pablopunk.com)
- [Arsenal](https://arsenal.pablopunk.com)
- [Barça](https://barcelona.pablopunk.com)
