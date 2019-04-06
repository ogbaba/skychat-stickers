// ==UserScript==
// @name         skysticker
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  Script permettant d'ajouter soi-même de nouveaux stickers à vos messages redsky.fr.
// @author       You
// @updateURL 	 https://raw.githubusercontent.com/skychatorg/skychat-stickers/master/stickers.user.js
// @downloadURL  https://raw.githubusercontent.com/skychatorg/skychat-stickers/master/stickers.user.js
// @match        https://redsky.fr/
// @grant        none
// ==/UserScript==



// liste des stickers

let sticker = [
  {nom : ':larry:', url : 'https://api.risibank.fr/cache/stickers/d1190/119000-full.png'},
  {nom : ':suisse:', url : 'https://api.risibank.fr/cache/stickers/d220/22033-full.png'},
  {nom : ':gilbert:', url : 'https://api.risibank.fr/cache/stickers/d27/2729-full.png'},
  {nom : ':dgsi:', url : 'https://api.risibank.fr/cache/stickers/d951/95106-full.png'},
  {nom : ':fritz:', url : 'https://api.risibank.fr/cache/stickers/d100/10050-full.png'},
  {nom : ':math', url : 'https://api.risibank.fr/cache/stickers/d27/2777-full.png'},
  {nom : ':ouh:', url : 'https://api.risibank.fr/cache/stickers/d76/7605-full.png'},
  {nom : ':thug:', url : 'https://api.risibank.fr/cache/stickers/d70/7056-full.png'},
  {nom : ':baroque:', url : 'https://api.risibank.fr/cache/stickers/d1299/129904-full.png'},
  {nom : ':poivron:', url : 'https://api.risibank.fr/cache/stickers/d1333/133305-full.png'},
];

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        stickers(e);
    }
});

function stickers(e) {
    let input = document.getElementById("skychat_form_message_input");
    let inputValue = input.value;

    for (let i = 0; i < sticker.length; i++) {
        if (inputValue.indexOf(sticker[i].nom) != -1) {
            let message = inputValue.replace(sticker[i].nom, sticker[i].url);
            //SkyWindow.client.sendMessage(message); // à remplacer
            input.value = message;
        }
    }
}
