# Forumfree JS Utilities
Piccoli script JS di utilità per le board Forumfree, Forumcommunity e Blogfree.
## Versioni Originali
Gli script sono stati realizzati nell'anno 2013 per cui non si garantisce una totale compatibilità con i circuiti.
### AutoUp Button (autoUp.js)
Pulsante per eseguire automaticamente l'up delle discussioni tramite Ajax.
#### Installazione
Codice da inserire, se non è già presente, in **Amministrazione>Grafica>Codice HTML codice HTML che verrà mostrato in fondo al forum**.
```HTML
<script type="text/javascript" src="path/to/autoUp.js"></script>
```
Codice da inserire in **Amministrazione>Grafica>Codice HTML** dove volete che appaia
```HTML
<input class="up_buttons" value="Testo Pulsante" f="id_sez" t="id_topic" text="Testo UP" />
```
**value** è il testo del pulsante
**f** è l'id della sezione nella quale è presente il topic.
**t** è l'id del topic nel quale inviare il messaggio.
**text** è il messaggio da inviare.
Il precedente codice è inseribile anche all'interno del topic stesso anche come risposta o all'interno della propria firma
### FastNotification (fastnotification.js)
Questo script carica le nuove risposte di un topic __senza che venga aggiornata la pagina__, alla pressione del comodo pulsante posto vicino a "Invia la Risposta"; comodo per i topics "caldi" in cui arrivano risposte molto velocemente.
#### Installazione
Inserire questo codice in **Amministrazione>Grafica>Codice HTML in fondo a tutte le pagine**, se non già presente:
```HTML
<script type="text/javascript" src="path/to/fastnotification.js"></script>
```
Inserite questo codice in **Amministrazione>Grafica>Codice HTML in cima a tutte le pagine**:
```HTML
<script type="text/javascript">
  fastNotification = {
    active:true // Modificare in false se si vuole disattivare lo script
  };
</script>
```
#### Attenzione! Info su file getNewTopic.php
Deve essere hostato su qualsiasi server per ottenere tramite le API i nuovi post.
### TopVote (topVote.js)
Voto automatico in Top Forum/Blog tramite Ajax
### Tabella Staff (staffTable.php)
Questa pagina, richiamata con Ajax tramite JS, inserisce automaticamente una tabella con tutto lo staff del forum in base ai ruoli impostati.
### Default Avatar (defaultAvatar.js)
Lo script, incluso in cima a tutte le pagine, mostra un avatar di default pre-impostato per gli utenti che non ne possiedono uno.
#### Installazione
**Codice HTML in cima a tutte le pagine**
```HTML
<script type="text/javascript">
dfAvatar = { active : true,
avatar : "http://dumpshare.net/images/1928573default-avatar.jpg"
};
</script>
<script type="text/javascript" src="path/to/defaultAvatar.js"></script>
```
### HiButton (hiButton.js)
Questo script aggiunge a tutti i topic della propria sezione di presentazioni un pulsante che permette agli utenti di salutare in modo automatico il nuovo arrivato con messaggi predefiniti.
#### Informazioni
Lo script è completamente personalizzabile, oltre che tramite il codice, tramite i seguenti id:
- **#hiButton** per il pulsante
- **#loader_hiButton** per la barra di caricamento
#### Installazione
Inserire in **Amministrazione>Grafica>Codice HTML in fondo al forum** se non già presente
```HTML
<script type="text/javascript" src="path/to/hiButton.js"></script>
```
Inserire in **Amministrazione>Grafica>Codice HTML in cima alla sezione** (selezionare la sezione "Benvenuto" o similia, avendo cura di togliere il segno di spunta da "Nascondi nelle discussioni")
```HTML
<script type="text/javascript">
var messages = new Array(
       "Bevenuto sul forum!",
       "Benvenuto!",
       "Welcome!"
);
hiButton = {
active : true,
image : "http://dumpshare.net/images/4171638chat.png",
bMessage : "Dai Benvenuto",
f : "8586647",
message : messages,  // NON TOCCARE
done : "Messaggio inviato correttamente!",
error : "Errore durante l'invio del messaggio!"
};
</script>
```
**active** (true/false) determina se lo script è attivo o meno
**image** è il link all'immagine da usare nel bottone
**bMessage** è il testo del bottone
**f** è l'id della sezione nel quale è attivo lo script (esempio: in http://dominio.forumfree.net/?f=8586647 l'id è 8586647)
**done** è il messaggio da dare a messaggio inviato (il testo "Ricarica la Pagina" compare automaticamente)
**fail** è il messaggio da dare nel caso il messaggio non potesse essere inviato (il testo "Ricarica la Pagina" compare automaticamente)

Modificando l'array messages potrete inserire più di un messaggio predefinito; ogni messaggio è da inserire fra le virgolette "così" e separato dagli altri con una virgola.
