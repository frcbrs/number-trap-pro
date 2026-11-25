# Number Trap Pro

Sito statico senza librerie esterne, adatto a GitHub Pages.

## Contenuto
- `index.html`: sito con le sezioni concordate.
- `styles.css`: stile e versioni responsive per desktop, tablet e smartphone.
- `contenuti.js`: regole, descrizioni carte e casi speciali; modificabile senza riscrivere il sito.
- `app.js`: schede, ricerca e filtri.
- `assets/`: immagini, favicon e loghi. Le scritte del marchio in Nusar sono convertite in grafica vettoriale; non sono inclusi file di font.
- `Number_Trap_Pro_Designed_by_FRCBRS_Rulebook.pdf`: regolamento in versione pdf.

## Pubblicazione GitHub Pages
1. Crea un account su https://github.com se non lo hai.
2. Crea un repository **pubblico** chiamato `number-trap-pro`.
3. Nella pagina del repository, usa `Add file` → `Upload files` e trascina i contenuti estratti dello ZIP.
4. Conferma il caricamento (commit su `main`).
5. `Settings` → `Pages` → `Build and deployment` → `Source: Deploy from a branch` → branch `main`, cartella `/(root)` → `Save`.
6. Apri l'indirizzo `https://FRCBRS.github.io/number-trap-pro`.

**Non stampare il QR finché l'indirizzo definitivo non è stato verificato** su più dispositivi; una volta stampato, mantieni invariati nome dell'account e repository.

## Aggiornamenti futuri
- Per aggiornare il testo online, modifica `contenuti.js` nel repository: l'URL della homepage rimane invariato.
- Le due immagini di Standard e Deluxe sono provvisorie (`assets/carte/retro.webp`): potrai sostituirle con foto vere aggiornando gli `src` nell'HTML.
- Il PDF è separato dai contenuti online: se un giorno ne creerai uno nuovo, dovrai sostituire il file con lo stesso nome o aggiornare i due collegamenti HTML.

## Nota editoriale
La sezione FAQ contiene ancora l'avviso di bozza che avevi deciso di mantenere; potrai sostituirlo quando vorrai. Per pubblicare il sito e condividere il QR, considera se tenerlo visibile al pubblico.
