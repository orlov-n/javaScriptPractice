const createPlayer = (name, age, moveset) => {
return {
    name,
    age,
    moveset,
}
}

const createLevel = (levelName, player) => {

    console.log(levelName)
return {
    name: levelName,
    players: player,
    coins: 0,
    lives: 3,
}
}

const findCoins = (level, coins) => {
console.log(level)
level.coins += coins
if(level.coins >= 100) {
    level.lives += 1
}
return level
}

const defeatPlayer = (level) => {
level.lives -= 1
return level.lives >= 1 ? level : "GAME OVER"
}

module.exports = { 
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer,
};
