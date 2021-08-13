# Směnky Client

Vaším úkolem je dokončit vytvořit klientskou aplikaci. Pro spouštění použijte zde připravený webpack dev server nebo obdobný nástroj (neřešte BE část klientské aplikace).

Klientská aplikace musí umožnit následující:

Navigace:

- Zvolit si ze seznamu danou osobu (ideálně stránkovaně)
- Zvolit si ze seznamu danou směnku (ideálně stránkovaně)

Detail osoby:

- Vypsat všechny směnky, které daná osoba vystavila
- Vypsat všechny směnky, které daná osoba právě vlastní (tj. je navrchu řadu)
- Proklik na detail směnky skrze danou směnku

Detail směnky:

- Zobrazit kdo směnku vystsavil a kdo je aktuální vlastník
- Zobrazit kompletní řad směnky (tj. kdo všechno směnku vlastnil na základě rubopisů) **včetně jmen osob**
- Proklik na detail osoby skrze jméno osoby

Aplikace by měl být schopná handlovat vyjímky vyhozené API serverem aniž by došlo k jejím pádu.

Na grafickém zpracování nezáleží. Použijte svojí oblíbenou knihovnu, vlastní stylování, nebo použite nenastylované elementy. **Pokud řešíte pouze klientskou část s placeholder daty, záleží i na grafickém zpracování.**

**Bonusové body:**

- Použít TypeScript
- Použít React
- Pokrýt kód unit testy
- Zajistit aby při opuštění a návratu mohl uživatel pokračovat tam, kde skončil

## Co zde již je

Je zde připravený webpack dev server a příkaz `npm run start`.
