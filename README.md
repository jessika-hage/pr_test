# Pricerunner kodtest

Uppgiften gick ut på att rita ut en lista av produkter för en specifik kategori enligt egen design. 

## Setup

Jag började med att skapa mitt egna repo, efter det klonade jag repot med koden och pekade om den mot mitt repo med
git kommandot git remote set-url. Sedan körde jag npm install från mappen 'app' och npm start.


## Process

Jag började med att ändra om till React Hooks istället för classes och ändra om till arrow functions. Då slutade det att funka,
men insåg då att jag måste uppdatera till senare react versioner.
Sen gick det väldigt smidigt med att få fram och lista alla produkter. Började med att bara se så jag kunde få fram dom genom .map vilket
inte var några konstigheter. 
Sedan började jag lägga till lite styling på 'produkt korten' och göra så att man kan filtera och sortera produkterna. 
Man kan filtrera på mobil märke och man kan sortera på lägsta pris, högsta rating och de mest köpta! Sedan finns det såklart
en knapp för att få fram alla produkter igen. 
Efter det ville jag göra så att man kan välja att visa produkterna antingen som ikoner eller som en lista. Är tveksam på om jag gjorde
på bästa möjliga vis.. På senaste tiden har jag vant mig vid att jobba med styled components så då hade jag bara kunnat använda props
för att visa de olika. Har aldrig jobbat med sass tidigare men det var kul att testa på det, men inser att jag bör lära mig mer där för
det verkar som det finns mycket bra saker man kan utnyttja där jämfört med vanlig css. Så nu fick det bli att jag istället gjorde två
olika komponenter för produktkorten (en för ikoner, en för lista). 
Sedan har jag mest fixat smågrejer med stylingen så det ska se så snyggt ut som möjligt. Den är även responsiv, körde mobile first approach.

Jag har nog spenderat cirka 8-9 timmar totalt på testet. Skulle jag lagt mer tid så hade jag gjort så att man kan gilla produkterna och att
de sparas på sidan med localstorage. 


## Se den live

https://pr-dev-test.netlify.app/

