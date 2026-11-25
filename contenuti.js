/* Dati del gioco: aggiornare qui i testi, le carte e gli esempi. */
window.NUMBER_TRAP_DATA = {
  "game": "NUMBER TRAP PRO",
  "subtitle": "Designed by FRCBRS",
  "edition": "Bozza 1 · 24 novembre 2026",
  "status": "Bozza di revisione editoriale delle regole: da verificare prima di considerarla una versione ufficiale definitiva.",
  "intro": "Un gioco di carte per 2–8 astronauti: tieni il totale entro 50, sfrutta le carte speciali e rimani l’ultimo giocatore in partita.",
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
        "Il numero consigliato è di 5/6 giocatori. Tuttavia, è possibile giocare da un minimo di 2 fino ad un massimo di 8 persone."
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
      "title": "Effetti concatenati e MYSTERY",
      "text": "Ogni carta giocata attraverso un effetto viene attivata come una carta giocata dalla mano. MYSTERY può quindi rivelare un’altra MYSTERY o una carta speciale con effetto completo. Se una carta rivelata è inutilizzabile per i suoi requisiti, viene posta nella pila delle carte giocate senza effetto e MYSTERY fa pescare ancora. Le carte pescate e giocate direttamente non aumentano e non riducono le carte presenti nella mano."
    },
    {
      "title": "DOUBLE: due carte, non quattro",
      "text": "Chi subisce una DOUBLE deve giocare due carte dalla mano. Gli effetti delle carte vengono risolti nell’ordine in cui sono giocate. Se una delle due è a sua volta una DOUBLE, il prossimo giocatore effettivo dovrà giocare due carte: gli obblighi non si sommano, anche se nello stesso turno sono state giocate due DOUBLE. La seconda carta normalmente va scelta dalla mano senza reintegro intermedio."
    },
    {
      "title": "Priorità di MISSION TO THE MOON",
      "text": "MISSION TO THE MOON interrompe la parte ancora da completare di una DOUBLE, anche se viene attivata indirettamente attraverso MYSTERY. Chi la gioca ripristina la mano e salta il proprio turno successivo. La carta non cancella gli effetti già attivati in precedenza, per esempio una DOUBLE che obbligherà il giocatore successivo a giocare due carte."
    },
    {
      "title": "Rinforzi e reintegro a cinque carte",
      "text": "Le pescate di reintegro sono sempre quelle necessarie a tornare a cinque carte in mano. Le carte pescate e immediatamente giocate con MYSTERY non devono essere reintegrate, perché non sono entrate nella mano. Per TRAP e SHUFFLE il ripristino delle mani a cinque avviene prima dello scambio o della mescolata, anche durante una DOUBLE."
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
      "title": "Giocatori sulla Luna",
      "text": "Chi deve saltare il proprio prossimo turno per MISSION TO THE MOON non può essere scelto come prossimo giocatore da I DECIDE WHAT’S NEXT e viene saltato nella normale successione dei turni. Un obbligo DOUBLE destinato al prossimo giocatore effettivo passa oltre chi deve saltare il turno. Le carte di quest’ultimo rimangono però disponibili per SHUFFLE, TRAP e LAST CALL."
    },
    {
      "title": "Eliminazione durante una sequenza",
      "text": "Se il totale supera 50 durante una giocata multipla o una catena di effetti, il giocatore viene eliminato subito e non completa le azioni che gli restavano da svolgere. Le conseguenze di carte già giocate, come l’inversione di REVERSE o il vincolo di una DOUBLE, continuano ad applicarsi ai turni successivi."
    }
  ],
  "examples": [
    {
      "title": "MYSTERY su MYSTERY",
      "body": "Gioco MYSTERY dalla mano. Pesco un’altra MYSTERY: la gioco e pesco ancora. Se la terza carta è un 3, incremento il totale di 3. Reintegro poi una sola carta nella mano, perché dalla mano era uscita soltanto la prima MYSTERY."
    },
    {
      "title": "Carta non giocabile pescata con MYSTERY",
      "body": "Con totale 8, MYSTERY rivela MINUS 10. MINUS 10 non è utilizzabile: la deposito con le carte giocate senza effetto e pesco ancora, fino a trovare una carta valida."
    },
    {
      "title": "DOUBLE seguita da MYSTERY",
      "body": "B deve giocare due carte. Come prima usa MYSTERY e ne risolve l’effetto: la carta pescata è aggiuntiva e non conta come seconda carta della DOUBLE. Se B resta in partita, gioca la seconda carta dalla mano e poi ripristina la mano a cinque."
    },
    {
      "title": "DOUBLE seguita da MISSION TO THE MOON",
      "body": "B deve giocare due carte, ma come prima usa MISSION TO THE MOON (o la rivela attraverso MYSTERY). Non deve giocare la seconda carta: ripristina la mano e salterà il proprio prossimo turno."
    },
    {
      "title": "LAST CALL seguita da TRAP",
      "body": "A gioca LAST CALL e prende casualmente TRAP dalla mano di B. Prima dello scambio A e B riportano le rispettive mani a cinque carte, pescando nell’ordine A poi B. A sceglie il destinatario di TRAP ed effettua lo scambio."
    },
    {
      "title": "I DECIDE e REVERSE",
      "body": "Durante una DOUBLE, B usa I DECIDE WHAT’S NEXT e designa C, scegliendo il senso orario. Come seconda carta gioca REVERSE. C rimane il prossimo giocatore, ma il senso di gioco diventa antiorario."
    }
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
      "id": "reverse",
      "name": "REVERSE",
      "count": 3,
      "category": "Speciale",
      "effect": "Inverte il senso di gioco, senza modificare il totale.",
      "details": "Con due giocatori rimasti equivale a una carta 0. Se viene giocata durante una DOUBLE, il cambio di direzione resta valido e si applica alla successione dei turni dopo il completamento dell’obbligo. Due REVERSE nello stesso turno annullano reciprocamente l’inversione.",
      "image": "assets/carte/reverse.webp"
    },
    {
      "id": "reset",
      "name": "RESET",
      "count": 1,
      "category": "Speciale",
      "effect": "Riporta immediatamente il totale a 0.",
      "details": "Può essere utilizzata per azzerare il totale durante la partita.",
      "image": "assets/carte/reset.webp"
    },
    {
      "id": "mystery",
      "name": "MYSTERY",
      "count": 2,
      "category": "Speciale",
      "effect": "Fa pescare e giocare subito la prima carta del mazzo.",
      "details": "La carta pescata viene attivata integralmente, anche se speciale. Se viene pescata un’altra MYSTERY, si pesca e gioca un’ulteriore carta. Se la carta pescata non è utilizzabile per i suoi requisiti, viene collocata con le carte giocate senza effetto e si continua a pescare fino a trovare una carta utilizzabile. Le carte pescate e giocate direttamente non entrano nella mano.",
      "image": "assets/carte/mystery.webp"
    },
    {
      "id": "trap",
      "name": "TRAP",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di scambiare tutte le carte della propria mano con quelle di un altro giocatore.",
      "details": "Prima dello scambio, entrambi i giocatori devono avere cinque carte; chi attiva TRAP pesca quanto necessario e, se serve, anche l’avversario reintegra la propria mano. Durante una DOUBLE, se TRAP è la prima carta, la seconda viene scelta dalla nuova mano. Può coinvolgere anche un giocatore che deve saltare il turno per MISSION TO THE MOON.",
      "image": "assets/carte/trap.webp"
    },
    {
      "id": "minus-10",
      "name": "MINUS 10",
      "count": 2,
      "category": "Speciale",
      "effect": "Sottrae 10 al totale.",
      "details": "Può essere giocata soltanto se il totale è almeno 10. Se viene pescata da MYSTERY quando il totale è inferiore a 10, viene scartata senza effetto e si pesca di nuovo.",
      "image": "assets/carte/minus-10.webp"
    },
    {
      "id": "double-simple",
      "name": "DOUBLE SIMPLE",
      "count": 2,
      "category": "Speciale",
      "effect": "Il totale non cambia; il prossimo giocatore deve giocare due carte.",
      "details": "Le due carte vanno giocate dalla mano senza pescate di reintegro tra l’una e l’altra, salvo quelle indispensabili per risolvere TRAP o SHUFFLE. Al termine si torna a cinque carte. Una DOUBLE giocata tra le due carte trasferisce l’obbligo al prossimo giocatore effettivo; due DOUBLE nello stesso turno non obbligano a giocare quattro carte. MISSION TO THE MOON interrompe l’obbligo ancora da completare.",
      "image": "assets/carte/double-simple.webp"
    },
    {
      "id": "double-plus-1",
      "name": "DOUBLE +1",
      "count": 1,
      "category": "Speciale",
      "effect": "Aumenta il totale di 1 e obbliga il prossimo giocatore a giocare due carte.",
      "details": "Vale la regola generale delle DOUBLE: due giocate dalla mano, senza reintegro intermedio ordinario; gli obblighi di DOUBLE non si cumulano. Se il +1 fa superare 50, chi la gioca viene eliminato, ma l’obbligo già attivato resta valido.",
      "image": "assets/carte/double-plus-1.webp"
    },
    {
      "id": "double-plus-2",
      "name": "DOUBLE +2",
      "count": 1,
      "category": "Speciale",
      "effect": "Aumenta il totale di 2 e obbliga il prossimo giocatore a giocare due carte.",
      "details": "Vale la regola generale delle DOUBLE. Se il +2 fa superare 50, chi la gioca viene eliminato, ma l’obbligo già attivato resta valido. Si applica anche quando DOUBLE +2 viene rivelata attraverso MYSTERY.",
      "image": "assets/carte/double-plus-2.webp"
    },
    {
      "id": "cocoa-minus",
      "name": "COCOA MINUS",
      "count": 1,
      "category": "Speciale",
      "effect": "Sottrae 23 al totale.",
      "details": "Può essere giocata soltanto quando il totale è almeno 23.",
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
      "id": "ten-plus-minus",
      "name": "TEN PLUS-MINUS",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di scegliere +10 oppure −10 al totale.",
      "details": "La sottrazione di 10 è possibile soltanto quando il totale è almeno 10. La scelta spetta al giocatore che attiva la carta, anche se viene rivelata da MYSTERY o LAST CALL.",
      "image": "assets/carte/ten-plus-minus.webp"
    },
    {
      "id": "i-decide",
      "name": "I DECIDE WHAT’S NEXT",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di scegliere il prossimo giocatore, il senso di gioco e un incremento da 0 a 5.",
      "details": "È consentito scegliere sé stessi come prossimo giocatore. Non si può designare chi deve ancora saltare un turno per MISSION TO THE MOON. In una DOUBLE l’obbligo di due carte è rivolto al giocatore designato. Un successivo REVERSE cambia la direzione ma non annulla la scelta del prossimo giocatore.",
      "image": "assets/carte/i-decide.webp"
    },
    {
      "id": "shuffle",
      "name": "SHUFFLE",
      "count": 1,
      "category": "Speciale",
      "effect": "Raccoglie, mescola e ridistribuisce le mani dei giocatori in partita.",
      "details": "Prima della mescolata le mani di tutti i giocatori ancora in partita devono contenere cinque carte. Chi attiva SHUFFLE pesca quanto necessario; il giocatore alla sua sinistra taglia, quindi le carte sono ridistribuite una per volta a partire dal giocatore successivo nel senso corrente. Sono comprese le mani dei giocatori sulla Luna. Durante una DOUBLE, se SHUFFLE è la prima carta, la seconda si sceglie dalla nuova mano.",
      "image": "assets/carte/shuffle.webp"
    },
    {
      "id": "mission",
      "name": "MISSION TO THE MOON",
      "count": 1,
      "category": "Speciale",
      "effect": "Fa saltare al giocatore il proprio turno successivo.",
      "details": "La giocata corrente termina; il giocatore pesca fino a cinque carte. Se era soggetto all’obbligo di una DOUBLE, MISSION TO THE MOON prevale e interrompe le eventuali giocate ancora dovute, anche se rivelata da MYSTERY. Durante l’assenza, il giocatore viene saltato nella successione dei turni, ma le sue carte possono essere coinvolte da TRAP, SHUFFLE e LAST CALL.",
      "image": "assets/carte/mission.webp"
    },
    {
      "id": "last-call",
      "name": "LAST CALL",
      "count": 1,
      "category": "Speciale",
      "effect": "Permette di prelevare a caso una carta dalla mano di un avversario e giocarla subito.",
      "details": "Si può usare soltanto con totale almeno 46. La carta prelevata produce il proprio effetto per il giocatore che ha attivato LAST CALL: è lui a scegliere quando la carta richiede decisioni. Le mani vengono riportate a cinque carte; se l’effetto impone uno scambio o una mescolata, il reintegro avviene prima. Il giocatore preso di mira può anche trovarsi sulla Luna. Se LAST CALL è la prima carta di una DOUBLE, dopo la risoluzione normalmente resta da giocare la seconda carta dalla propria mano.",
      "image": "assets/carte/last-call.webp"
    }
  ]
};
