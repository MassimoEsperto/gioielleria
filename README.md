# gioielleria
esempio di https://tinesoft.github.io/ngx-wow/doc/index.html
e https://therichpost.com/how-to-implement-wow-js-in-angular-8/

#esecuzione
npm install --save wowjs
"scripts": [
        "node_modules/wowjs/dist/wow.js"
]
"styles": [
      "node_modules/animate.css/animate.css"
]

npm install --save ngx-wow

npm install bootstrap --save
npm install bootstrap-icons --save

ng build --base-href "/gioielleria/"


1*. pagina Carrello:
    a. ridurre il box sinistro di poco
    b. aumentare la dimensione del carattere ella stringa "Totale Provvisorio" nel box "acquista"
    c. distanziare il box "acquista" maggiormente (almeno il triplo) da box "prodotti Correlati"
   -- d. tasto "Torna alla ricerca" in alto dx nella barra dove c'e' il titolo "Carrello"
    e. il tasto "Svuota Carrello" sotto il tasto verde "Acquista" nel box "acquista"
2*. implementazione dettaglio oggetto
3*. finalizzare pagina Acquista
4. implementazione menu di sinistra mokkato (Di Tendenza,Scegli per categoria,Aiuti e Impostazioni)
5. [lp] -> Decidere! -> analisi hosting per angular versione 12 e nodeJS gratuito.
6. implementazione "ricerca" oggetti reali (stabilire l'etichettatura agli oggetti da ricercare)
7. popolamento di oggetti a tema giolleria. (immagini ecc ecc)