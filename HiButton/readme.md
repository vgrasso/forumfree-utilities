# HiButton (hiButton.js)
Questo script aggiunge a tutti i topic della propria sezione di presentazioni un pulsante che permette agli utenti di salutare in modo automatico il nuovo arrivato con messaggi predefiniti.
## Informazioni
Lo script è completamente personalizzabile, oltre che tramite il codice, tramite i seguenti id:
- **#hiButton** per il pulsante
- **#loader_hiButton** per la barra di caricamento
## Installazione
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
