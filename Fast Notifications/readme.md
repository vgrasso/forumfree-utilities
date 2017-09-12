# FastNotifications (fastnotification.js)
Questo script carica le nuove risposte di un topic __senza che venga aggiornata la pagina__, alla pressione del comodo pulsante posto vicino a "Invia la Risposta"; comodo per i topics "caldi" in cui arrivano risposte molto velocemente.
## Installazione
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
### Attenzione! Info su file getNewTopic.php
Deve essere hostato su qualsiasi server per ottenere tramite le API i nuovi post.
