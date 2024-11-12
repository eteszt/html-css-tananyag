---
id: html-alapok
title: HTML alapok
description: Bevezetés a HTML használatába és alapvető koncepciók
sidebar_label: HTML alapok
sidebar_position: 2
tags: [HTML, webfejlesztés, alapok]
keywords: [HTML, weblap, struktúra, címkék, elemek]
---
# HTML alapok - Kezdő tananyag

## 1. Mi a HTML?

A HTML (HyperText Markup Language) egy jelölőnyelv, amelyet weboldalak készítéséhez használunk. Nem programozási nyelv, hanem egy olyan eszköz, amely leírja egy weboldal szerkezetét és tartalmát.

### Mire használjuk?
- Weboldalak tartalmának strukturálására
- Szövegek, képek, linkek és egyéb tartalmak megjelenítésére
- Dokumentumok formázására
- Különböző elemek (pl. táblázatok, űrlapok) létrehozására

## 2. HTML dokumentum alapszerkezete

Minden HTML dokumentum egy meghatározott alapszerkezettel rendelkezik. Nézzük meg ezt egy egyszerű példán keresztül:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Az én első weboldalam</title>
</head>
<body>
    <h1>Üdvözöllek a weboldalamon!</h1>
    <p>Ez egy egyszerű weboldal.</p>
</body>
</html>
```

### Az alapszerkezet részei:

1. `<!DOCTYPE html>`: Ez a sor jelzi a böngészőnek, hogy HTML5 dokumentumot olvas
2. `<html>`: A dokumentum gyökéreleme
3. `<head>`: A dokumentum fejléce, meta-információkat tartalmaz
4. `<title>`: Az oldal címe, ami a böngésző címsorában jelenik meg
5. `<body>`: A dokumentum törzse, itt található a megjelenítendő tartalom

## 3. HTML elemek felépítése

A HTML elemek általában nyitó és záró címkékből állnak:

```html
<címke>tartalom</címke>
```

Például:
```html
<p>Ez egy bekezdés.</p>
<h1>Ez egy főcím.</h1>
```

### Üres elemek
Vannak olyan elemek, amelyeknek nincs záró címkéjük:
```html
<br> <!-- sortörés -->
<img src="kep.jpg"> <!-- kép -->
```

## 4. Szövegszerkesztő használata HTML íráshoz

### Ajánlott szövegszerkesztők:
- Visual Studio Code (ingyenes, sokrétű)
- Notepad++ (Windows, ingyenes)
- Sublime Text (többplatformos)
- Atom (többplatformos)

### Hasznos funkciók a szövegszerkesztőkben:
- Szintaxis kiemelés
- Automatikus kódkiegészítés
- Élő előnézet
- Kód formázás

### Példa egy egyszerű munkafolyamatra:

1. Hozz létre egy új fájlt például `index.html` néven
2. Írd be az alapszerkezetet:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Kezdőoldal</title>
</head>
<body>
    <h1>Üdvözöllek!</h1>
    <p>Ez az én első weboldalam.</p>
</body>
</html>
```
3. Mentsd el a fájlt `.html` kiterjesztéssel
4. Nyisd meg egy böngészőben

## Próbáld ki! - Interaktív HTML szerkesztő

Most kipróbálhatod a HTML kódolást az alábbi interaktív szerkesztőben:

```jsx live
function HTMLEditor() {
  return (
    <div className="language-html live-editor">
      <h1>Próbáld ki a HTML-t!</h1>
      <p>Ez egy interaktív példa.</p>
      <ul>
        <li>Módosíthatod ezt a kódot</li>
        <li>Azonnal látod az eredményt</li>
        <li>Kísérletezz bátran!</li>
      </ul>
    </div>
  );
}
```

:::tip Feladatok
Próbáld ki a következőket:
1. Változtasd meg a címsort valami másra
2. Adj hozzá egy új bekezdést (`<p>` elem)
3. Bővítsd a listát új elemekkel
4. Próbáld ki a félkövér (`<strong>`) és dőlt (`<em>`) formázást
:::

## 5. Gyakorló feladat

Készíts egy egyszerű HTML oldalt, amely tartalmazza:
- Az oldal címét
- Egy főcímet
- Két bekezdést

Megoldás:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Gyakorló oldal</title>
</head>
<body>
    <h1>Az én gyakorló oldalam</h1>
    <p>Ez az első bekezdés a gyakorló oldalamon.</p>
    <p>Ez a második bekezdés, ahol már gyakorlom a HTML írást.</p>
</body>
</html>
```

## 6. Fontos szabályok és tippek

1. Mindig használj megfelelő behúzást a kód olvashatósága érdekében
2. A HTML nem különbözteti meg a kis- és nagybetűket, de ajánlott kisbetűket használni
3. Az elemeket mindig zárd le (kivéve az üres elemeket)
4. Használj értelmes fájlneveket
5. Rendszeresen mentsd a munkádat
6. Gyakran ellenőrizd az oldalt böngészőben

## 7. Ellenőrző kérdések

1. Mi a HTML és mire használjuk?
2. Melyek egy HTML dokumentum fő részei?
3. Mi a különbség a `<head>` és `<body>` között?
4. Hogyan néz ki egy HTML elem általános szerkezete?
5. Miért fontos a megfelelő szövegszerkesztő használata?

---

Most, hogy megismerkedtél a HTML alapjaival, készen állsz arra, hogy egyszerű weboldalakat készíts. A következő leckében a különböző HTML elemekkel és azok használatával fogunk foglalkozni.
