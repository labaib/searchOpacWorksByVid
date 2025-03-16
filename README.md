# searchOpacWorksByVid
Funzione per l'ottenimento dei documenti collegati ad un VID tramite API


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { searchOpacWorksByVid } from 'https://cdn.jsdelivr.net/gh/labaib/searchOpacWorksByVid@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { searchOpacWorksByVid } from './js/searchOpacWorksByVid.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { searchOpacWorksByVid } from 'https://cdn.jsdelivr.net/gh/labaib/searchOpacWorksByVid@main/index.js';

 (async () => {
     const works = await searchOpacWorksByVid("CFIV008732", 10);
 })();

</script>
```
```
<script type="module">
        
  import { searchOpacWorksByVid } from './js/searchOpacWorksByVid.js';

  (async () => {
    const works = await searchOpacWorksByVid("CFIV008732", 10);
  })();

</script>
```
