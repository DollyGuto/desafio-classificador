let heroi = "Marquinhos"
let xp = 4900
let nivelHeroi = ""


if (xp < 1.000){
    nivelHeroi = "Ferro"
} else if ( xp >= 1001 && xp < 2000){
    nivelHeroi = "Bronze"
} else if ( xp >= 2001 && xp < 5000){
    nivelHeroi = "Prata"
} else if ( xp >= 5001 && xp < 6000){
    nivelHeroi = "Ouro"
} else if ( xp >= 6001 && xp < 8000){
    nivelHeroi = "Diamante"
} else if ( xp >= 8001 && xp < 9000){
    nivelHeroi = "Ascendente"
} else if ( xp >= 9001 && xp < 10000){
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log ("O Herói " + heroi + ", alcançou o nível " + nivelHeroi)