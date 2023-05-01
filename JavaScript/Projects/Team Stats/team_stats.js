/*
Team Stats

We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players: [{ firstName: 'Arif', lastName: 'Iqbal', age: 48 }],
  _games: [{ opponent: 5, teamPoints: 10, opponentPoints: 12 }],
  get player() {
    console.log(Object.value(_players));
  },
  get games() {
    console.log(Object.entries(this._games));
  },
};

team.player;
team.games;
