/**
* Funzione per l'ottenimento dei documenti collegati ad un VID tramite API
* @param {string} vid - Identificativo SBN Autore
* @param {number} limit - Numero massimo risultati
* @param {string} [endpoint="opac.sbn.it"] - opzionale
* @returns {Array|[]} - Ritorna una stringa o null
*/

const searchOpacWorksByVid = async (vid, limit, endpoint = "opac.sbn.it") => {

    try {

        // Parametri URL
        const params = new URLSearchParams({
            core: "sbn",
            "item:5032:BID": vid,
            "page-size": limit,
            page: 1
        })

        const myHeaders = new Headers();
        myHeaders.append(
            "Cookie", 
            "COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=it_IT;"
        );

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow"
        };

        let url = `https://${endpoint}/o/opac-api/titles-search-post?${params.toString()}`
        const response = await fetch(url, requestOptions); 
        const json = await response.json();

        const resultList = json.data.results.map((result) => ({
            bid: result.bid,
            title: result.title.info.split(" / ")[0],
            author: result.title.text,
            type: result.type,
            notes: result.infos.join(" | ")
        }))

        return resultList

    } catch (error) {
        console.log(error)
        return []
    }

}

export { searchOpacWorksByVid };
