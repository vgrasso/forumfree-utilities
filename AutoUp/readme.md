# AutoUp Button (autoUp.js)
Pulsante per eseguire automaticamente l'up delle discussioni tramite Ajax.
## Installazione
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
