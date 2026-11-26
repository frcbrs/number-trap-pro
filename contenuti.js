/* Dati del gioco: aggiornare qui i testi, le carte e gli esempi. */
window.NUMBER_TRAP_DATA = {
  "game": "NUMBER TRAP PRO",
  "subtitle": "Designed by FRCBRS",
  "edition": "Versione 1.0",
  "status": "Published",
  "intro": "",
  "sections": [
    {
      "id": "scopo",
      "title": "Scopo del gioco",
      "paragraphs": [
        "Lo scopo di Number Trap Pro è rimanere l’ultimo “astronauta” in partita, eliminando gli avversari."
      ]
    },
    {
      "id": "partecipanti",
      "title": "Partecipanti",
      "paragraphs": [
        "Il numero consigliato è di 5/6 astronauti. Tuttavia, è possibile giocare da un minimo di 2 fino ad un massimo di 8 persone."
      ]
    },
    {
      "id": "setup",
      "title": "Setup",
      "paragraphs": [
        "Il mazzo contiene 60 (sessanta) carte, suddivise tra numeri da 0 (zero) a 9 (nove) e carte speciali.",
        "All’inizio di ogni partita viene stabilito, tramite accordo tra i giocatori, un mazziere, che ha il compito di mescolare il mazzo. Dopo aver fatto fare il taglio al giocatore alla sua sinistra, il mazziere distribuisce le carte una per giocatore iniziando dal giocatore alla sua destra e proseguendo in senso antiorario, fino a consegnare 5 (cinque) carte per ciascun giocatore.",
        "Le restanti carte vanno poste a faccia in giù al centro del tavolo e compongono il mazzo da cui pescare."
      ]
    },
    {
      "id": "gameplay",
      "title": "Gameplay",
      "paragraphs": [
        "Inizia il giocatore alla destra del mazziere. A turno si gioca una carta ponendola a faccia in su nella pila delle carte giocate, accanto al mazzo di pesca, e si applica l’effetto della carta sul totale o sul gioco.",
        "Alla fine del proprio turno, il giocatore pesca tante carte quante ne servono per tornare ad averne 5 (cinque) in mano, di norma una ma talvolta due.",
        "Inizialmente, il gioco procede in senso antiorario, fatte salve eventuali modifiche introdotte da alcune carte speciali."
      ]
    },
    {
      "id": "totale",
      "title": "Il totale e l'eliminazione",
      "paragraphs": [
        "Il totale iniziale è 0 (zero) e non deve mai superare 50 (cinquanta). Le carte numeriche incrementano il totale del rispettivo valore, le carte speciali applicano ciascuna il rispettivo effetto.",
        "Se una giocata, effettuata per errore o per distrazione, incrementa il totale oltre il valore numerico 50 (cinquanta), chi ha effettuato quella giocata viene immediatamente eliminato.",
        "Quando un giocatore dispone soltanto di carte numeriche che incrementerebbero il totale fino a superare 50 (cinquanta), ovvero quando non dispone di giocate legali, è obbligato a mostrare tutte le carte componenti la sua mano ed è eliminato. Le sue carte vanno poste nella pila delle carte, con in cima quella dal valore numerico più alto, che rappresenta la sua giocata effettiva (obbligata).",
        "Il nuovo totale si calcola con la formula: **(totale precedente + valore carta giocata) − 50**.",
        "A titolo d'esempio, se il totale è 47 (quarantasette) e il giocatore (A), di turno, dispone delle carte numeriche 4/5/6/7/8, lo stesso deve giocare la carta 8 e il nuovo totale diventa (47 + 8) - 50 = 5."
      ]
    },
    {
      "id": "mazzo",
      "title": "Esaurimento del mazzo",
      "paragraphs": [
        "Quando il mazzo di pesca si esaurisce, o prima che si esaurisca, si capovolge la pila delle carte già giocate, senza mescolarla, per formare il nuovo mazzo di pesca.",
      ]
    },
    {
      "id": "numeriche",
      "title": "Carte numeriche",
      "paragraphs": [
        "Le carte numeriche hanno sfondo blu e un valore da 0 (zero) a 9 (nove). Quando giocate, incrementano il totale del proprio valore. La carta 0 (zero) non lo modifica.",
      ]
    }
  ],
  "clarifications": [
    {
      "title": "MYSTERY concatenate",
      "text": "Il giocatore (A) gioca una carta MYSTERY. Per effetto di questa carta pesca la prima carta del mazzo e la gioca immediatamente. A sua volta si svela una MYSTERY. Il suo effetto si applica, il giocatore (A) pesca di nuovo la prima carta del mazzo e la gioca immediatamente."
    },
    {
      "title": "DOUBLE: due carte, non quattro",
      "text": "Il giocatore (A) gioca una carta DOUBLE (S, +1, +2). Il giocatore successivo (B) deve giocare due carte. Se entrambe le carte giocate da (B) sono di tipo DOUBLE (S, +1, +2), il giocatore successivo (C) deve giocare soltanto 2 (due) carte, non 4 (quattro)."
    },
    {
      "title": "La potenza di MTTM",
      "text": "Se il giocatore (A) gioca la carta MISSION TO THE MOON come prima carta in risposta all'effetto di una DOUBLE (S, +1, +2), la seconda giocata non deve essere effettuata."
    },
    {
      "title": "Astronauta in missione",
      "text": "Un giocatore (A) temporaneamente fermo per effetto della carta MISSION TO THE MOON non può essere scelto come giocatore successivo da chi gioca la carta I DECIDE WHAT’S NEXT e viene saltato nella normale successione dei turni. Risulta trasparente all'effetto di una DOUBLE (S, +1, +2), che passa oltre. Le carte di (A) rimangono però disponibili per giocate di tipo SHUFFLE, TRAP e LAST CALL."
    },
    {
      "title": "TRAP, SHUFFLE e cambio di mano durante DOUBLE",
      "text": "Se la prima carta di un turno DOUBLE è TRAP o SHUFFLE, l’effetto si completa, incluse le pescate necessarie, e la seconda carta viene scelta dalla nuova mano. Se TRAP o SHUFFLE sono la seconda giocata, si ripristina comunque la mano a cinque prima dello scambio o della mescolata."
    },
    {
      "title": "LAST CALL e scelte del giocatore",
      "text": "La carta prelevata dalla mano di un avversario attraverso LAST CALL si considera giocata da chi ha attivato LAST CALL. È quindi quest’ultimo a effettuare le scelte richieste da carte come I DECIDE WHAT’S NEXT, TRAP o TEN PLUS-MINUS. Se la carta estratta è MYSTERY, ne viene risolto l’effetto come di consueto. Nel caso LAST CALL + TRAP o LAST CALL + SHUFFLE, le mani vengono ripristinate a cinque prima dello scambio o della mescolata, pescando prima il giocatore che ha attivato LAST CALL e poi l’altro giocatore coinvolto."
    },
    {
      "title": "Direzione di gioco e scelta del prossimo giocatore",
      "text": "REVERSE cambia il senso di gioco; due REVERSE giocati nello stesso turno si annullano. I DECIDE WHAT’S NEXT può designare un giocatore specifico e fissare la direzione: un successivo REVERSE cambia la direzione ma non sostituisce il giocatore già designato. Se quel giocatore è chi ha giocato I DECIDE e successivamente gioca MISSION TO THE MOON, il turno che si era attribuito viene saltato e si prosegue nella direzione scelta."
    },
    {
      "title": "Eliminazione durante una sequenza",
      "text": "Se il totale supera 50 durante una giocata multipla o una catena di effetti, il giocatore viene eliminato subito e non completa le azioni che gli restavano da svolgere. Le conseguenze di carte già giocate, come l’inversione di REVERSE o il vincolo di una DOUBLE, continuano ad applicarsi ai turni successivi."
    }
  ],
  "examples": [
    {
      "title": "Il giocatore successivo",
      "body": "Si supponga che il senso di gioco sia (A)->(B)->(C). Il giocatore (B) è temporaneamente fermo per effetto della carta MISSION TO THE MOON, da lui giocata nel proprio turno precedente. L'astronauta (A) gioca una carta DOUBLE (S, +1, +2). L'effetto di questa giocata viene applicato al giocatore (C), in quanto (B) si trova in missione."
    },
    {
      "title": "MYSTERY che rivela una carta non giocabile",
      "body": "Il totale è pari a 8 (otto). L'astronauta (A) gioca la carta MYSTERY e pesca la prima carta del mazzo, che deve immediatamente giocare. Questa carta è MINUS 10 (ad esempio), non utilizzabile in questo momento della partita, poiché richiede che il totale sia maggiore o uguale a 10 (dieci). Pertanto, la carta MINUS 10 va depositata con le carte già giocate, senza applicarne l'effetto, e il giocatore (A) deve ripetere il procedimento, considerandosi non ancora completato l'effetto della MISTERY."
    },
  ],
  "variants": [
    "Prima della partita, i partecipanti possono concordare una diversa modalità di aggiornamento del totale dopo ogni eliminazione.",
    "Come variante, le carte speciali possono essere rimosse dalla pila delle carte giocate e quindi non tornare nel mazzo quando viene ricostituito."
  ],
  "cards": [
    {
      "id": "0",
      "name": "0",
      "count": 4,
      "category": "Numerica",
      "effect": "Aggiunge 0 al totale.",
      "details": "Carta numerica: il totale rimane invariato.",
      "image": "assets/carte/0.webp"
    },
    {
      "id": "1",
      "name": "1",
      "count": 5,
      "category": "Numerica",
      "effect": "Aggiunge 1 al totale.",
      "details": "Carta numerica: aumenta il totale di 1.",
      "image": "assets/carte/1.webp"
    },
    {
      "id": "2",
      "name": "2",
      "count": 5,
      "category": "Numerica",
      "effect": "Aggiunge 2 al totale.",
      "details": "Carta numerica: aumenta il totale di 2.",
      "image": "assets/carte/2.webp"
    },
    {
      "id": "3",
      "name": "3",
      "count": 5,
      "category": "Numerica",
      "effect": "Aggiunge 3 al totale.",
      "details": "Carta numerica: aumenta il totale di 3.",
      "image": "assets/carte/3.webp"
    },
    {
      "id": "4",
      "name": "4",
      "count": 4,
      "category": "Numerica",
      "effect": "Aggiunge 4 al totale.",
      "details": "Carta numerica: aumenta il totale di 4.",
      "image": "assets/carte/4.webp"
    },
    {
      "id": "5",
      "name": "5",
      "count": 4,
      "category": "Numerica",
      "effect": "Aggiunge 5 al totale.",
      "details": "Carta numerica: aumenta il totale di 5.",
      "image": "assets/carte/5.webp"
    },
    {
      "id": "6",
      "name": "6",
      "count": 4,
      "category": "Numerica",
      "effect": "Aggiunge 6 al totale.",
      "details": "Carta numerica: aumenta il totale di 6.",
      "image": "assets/carte/6.webp"
    },
    {
      "id": "7",
      "name": "7",
      "count": 3,
      "category": "Numerica",
      "effect": "Aggiunge 7 al totale.",
      "details": "Carta numerica: aumenta il totale di 7.",
      "image": "assets/carte/7.webp"
    },
    {
      "id": "8",
      "name": "8",
      "count": 3,
      "category": "Numerica",
      "effect": "Aggiunge 8 al totale.",
      "details": "Carta numerica: aumenta il totale di 8.",
      "image": "assets/carte/8.webp"
    },
    {
      "id": "9",
      "name": "9",
      "count": 3,
      "category": "Numerica",
      "effect": "Aggiunge 9 al totale.",
      "details": "Carta numerica: aumenta il totale di 9.",
      "image": "assets/carte/9.webp"
    },
    {
      "id": "trap",
      "name": "TRAP",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di scambiare tutta la propria mano con quella di un altro giocatore.",
      "details": "• Entrambi i giocatori devono avere 5 (cinque) carte prima dello scambio.\n• Chi attiva TRAP pesca quanto necessario prima dello scambio.\n• Durante una DOUBLE, se TRAP è la prima carta, la seconda deve essere scelta dalla nuova mano.\n• Può coinvolgere anche un giocatore che deve saltare il turno per MISSION TO THE MOON.",
      "image": "assets/carte/trap.webp"
    },
    {
      "id": "double-simple",
      "name": "DOUBLE SIMPLE",
      "count": 2,
      "category": "Speciale",
      "effect": "Il prossimo giocatore deve giocare due carte. Il totale resta invariato.",
      "details": "• Di norma, il giocatore successivo (B) deve giocare entrambe le carte scegliendole dalla sua mano, senza pescate di reintegro tra la prima e la seconda.\n• Se una delle due carte giocate è TRAP o SHUFFLE, l'effetto di quest'ultima viene applicato prima della rispettiva giocata.\n• Se una delle due carte giocate è di tipo DOUBLE (S, +1, +2), l'effetto di quest'ultima viene applicato al giocatore successivo.\n• Se entrambe le carte giocate sono di tipo DOUBLE (S, +1, +2) gli effetti vengono applicati sul totale ma non sul giocatore successivo, che deve giocare soltanto 2 (due) carte.\n• Se la prima carta giocata è MISSION TO THE MOON, quest'ultima interrompe l’obbligo residuo di giocare una seconda carta.\n• Se la prima carta giocata è LAST CALL, quest'ultima si attiva e, qualora il suo effetto non comporti l'eliminazione, la giocata della seconda carta residua deve essere effettuata.",
      "image": "assets/carte/double-simple.webp"
    },
    {
      "id": "double-plus-1",
      "name": "DOUBLE +1",
      "count": 1,
      "category": "Speciale",
      "effect": "Il totale aumenta di 1 (uno). Il prossimo giocatore deve giocare due carte.",
      "details": "• Il funzionamento è analogo alla carta DOUBLE SIMPLE per quanto riguarda gli obblighi sul giocatore successivo.\n• Il totale viene incrementato immediatamente di 1 (uno), quindi se è già pari a 50 (cinquanta) chi gioca questa carta viene eliminato (eventualmente l’obbligo sul giocatore successivo resta valido).",
      "image": "assets/carte/double-plus-1.webp"
    },
    {
      "id": "double-plus-2",
      "name": "DOUBLE +2",
      "count": 1,
      "category": "Speciale",
      "effect": "Il totale aumenta di 2 (due). Il prossimo giocatore deve giocare due carte.",
      "details": "• Il funzionamento è analogo alla carta DOUBLE SIMPLE per quanto riguarda gli obblighi sul giocatore successivo.\n• Il totale viene incrementato immediatamente di 2 (due), quindi se è già maggiore o uguale a 49 (quarantanove) chi gioca questa carta viene eliminato (eventualmente l’obbligo sul giocatore successivo resta valido).",
      "image": "assets/carte/double-plus-2.webp"
    },
    {
      "id": "mystery",
      "name": "MYSTERY",
      "count": 2,
      "category": "Speciale",
      "effect": "Fa pescare e giocare subito la prima carta del mazzo.",
      "details": "• La carta pescata viene, di norma, attivata immediatamente.\n• Se la carta pescata è speciale e non utilizzabile per i suoi requisiti, viene scartata nella pila delle carte giocate senza applicare il suo effetto e si continua a pescare fino alla prima carta utilizzabile.\n• Si possono concatenare due MISTERY consecutivamente.",
      "image": "assets/carte/mystery.webp"
    },
    {
      "id": "shuffle",
      "name": "SHUFFLE",
      "count": 1,
      "category": "Speciale",
      "effect": "Raccoglie, mescola e ridistribuisce le mani dei giocatori in partita.",
      "details": "• Prima della mescolata tutti i giocatori ancora in partita devono avere 5 (cinque) carte in mano.\n• Il giocatore che gioca questa carta pesca dapprima quanto necessario, poi raduna tutte le carte in mano agli avversari (comprese le sue) e le mescola. Dopodiché il giocatore alla sua sinistra effettuerà il taglio del mazzo e le carte verranno distribuite una per astronauta a partire dal giocatore successivo nel senso di gioco corrente.\n• Le carte in mano al giocatore temporaneamente fermo per effetto di MISSION TO THE MOON sono comprese.",
      "image": "assets/carte/shuffle.webp"
    },
    {
      "id": "reverse",
      "name": "REVERSE",
      "count": 3,
      "category": "Speciale",
      "effect": "Inverte il senso di gioco.",
      "details": "• Con due giocatori rimasti equivale a una carta 0.\n• Se viene giocata durante una DOUBLE, il cambio di direzione resta valido e si applica alla successione dei turni dopo il completamento dell’obbligo.\n• Due REVERSE nello stesso turno annullano reciprocamente l’inversione.",
      "image": "assets/carte/reverse.webp"
    },
    {
      "id": "minus-10",
      "name": "MINUS 10",
      "count": 2,
      "category": "Speciale",
      "effect": "Sottrae 10 al totale.",
      "details": "• Può essere giocata soltanto se il totale è almeno 10.\n• Se viene pescata per effetto di una MYSTERY quando il totale è inferiore a 10 (dieci), viene scartata come non utilizzabile.",
      "image": "assets/carte/minus-10.webp"
    },
    {
      "id": "cocoa-minus",
      "name": "COCOA MINUS",
      "count": 1,
      "category": "Speciale",
      "effect": "Sottrae 23 al totale.",
      "details": "• Può essere giocata soltanto quando il totale è maggiore o uguale a 23 (ventitré).\n• Se viene pescata per effetto di una MYSTERY quando il totale è inferiore a 23 (ventitré), viene scartata come non utilizzabile.",
      "image": "assets/carte/cocoa-minus.webp"
    },
    {
      "id": "cocoa-start",
      "name": "COCOA START",
      "count": 1,
      "category": "Speciale",
      "effect": "Porta il totale esattamente a 23.",
      "details": "È utilizzabile in qualsiasi momento, indipendentemente dal valore corrente del totale.",
      "image": "assets/carte/cocoa-start.webp"
    },
    {
      "id": "reset",
      "name": "RESET",
      "count": 1,
      "category": "Speciale",
      "effect": "Azzera il totale.",
      "details": "Carta speciale: riporta il totale a 0.",
      "image": "assets/carte/reset.webp"
    },
    {
      "id": "ten-plus-minus",
      "name": "TEN PLUS-MINUS",
      "count": 1,
      "category": "Speciale",
      "effect": "Incrementa o decrementa di 10 (dieci) il totale, a scelta del giocatore che la gioca.",
      "details": "Il decremento è possibile soltanto quando il totale è maggiore o uguale a 10 (dieci).",
      "image": "assets/carte/ten-plus-minus.webp"
    },
    {
      "id": "mission",
      "name": "MISSION TO THE MOON",
      "count": 1,
      "category": "Speciale",
      "effect": "Fa saltare al giocatore (A) il proprio turno, non incrementando il totale, e anche quello successivo.",
      "details": "• Il giocatore (A) che gioca questa carta prima pesca tante carte fino ad averne (cinque) in mano, dopodiché salterà il proprio turno successivo.\n• Se (A) era soggetto all’effetto di una DOUBLE (S, +1, +2), questa carta prevale e interrompe le eventuali giocate residue.",
      "image": "assets/carte/mission.webp"
    },
    {
      "id": "i-decide",
      "name": "I DECIDE WHAT’S NEXT",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di scegliere il prossimo giocatore, il senso di gioco e un incremento da 0 (zero) a 5 (cinque).",
      "details": "• È consentito scegliere sé stessi come giocatore successivo.\n• Non è consentito scegliere come giocatore successivo un astronauta che deve saltare un turno per l'effetto di MISSION TO THE MOON.\n• Qualora questa carta sia giocata come prima di una DOUBLE (S, +1, +2), un successivo REVERSE cambia il senso di gioco ma non annulla la scelta del prossimo giocatore.",
      "image": "assets/carte/i-decide.webp"
    },
    {
      "id": "last-call",
      "name": "LAST CALL",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di prelevare a caso una carta dalla mano di un avversario e giocarla immediatamente.",
      "details": "• Si può usare soltanto con totale maggiore o uguale a 46 (quarantasei).\n• La carta prelevata dalla mano di un avversario (B) si considera come giocata da (A), che ha giocato questa carta.\n• La carta può essere scelta anche dalla mano di un giocatore fermo temporaneamente per effetto di MISSION TO THE MOON.",
      "image": "assets/carte/last-call.webp"
    }
  ]
};
