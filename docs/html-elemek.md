---
id: html-elemek
title: HTML elemek
description: A legfontosabb HTML elemek és használatuk
sidebar_label: HTML elemek
sidebar_position: 3
tags: [HTML, elemek, címkék]
keywords: [HTML, címsorok, bekezdések, listák, címkék]
---
# Alapvető HTML elemek

## 1. Címsorok (Headings)

A HTML hat különböző szintű címsort biztosít, `<h1>`-től `<h6>`-ig. A `<h1>` a legnagyobb, legfontosabb címsor.

### Példák:
```html
<h1>Ez egy főcím</h1>
<h2>Ez egy alcím</h2>
<h3>Ez egy harmadik szintű cím</h3>
<h4>Ez egy negyedik szintű cím</h4>
<h5>Ez egy ötödik szintű cím</h5>
<h6>Ez a legkisebb címsor</h6>
```

### Gyakorlati tippek:
- Oldalanként csak egy `<h1>` címsort használj
- Tartsd be a hierarchiát (ne ugorj át szinteket)
- A címsorok segítik a keresőmotorokat és a képernyőolvasókat

## 2. Bekezdések (Paragraphs)

A bekezdéseket a `<p>` elemmel hozzuk létre. Ez az egyik leggyakrabban használt HTML elem.

### Példák:
```html
<p>Ez egy egyszerű bekezdés.</p>
<p>Ez egy másik bekezdés. A böngésző automatikusan
   térközt helyez el a bekezdések között.</p>
```

### Fontos tudnivalók:
- A böngésző figyelmen kívül hagyja a felesleges szóközöket és sortöréseket
- Minden bekezdés új sorban kezdődik
- A bekezdések között automatikus térköz jelenik meg

## 3. Szövegformázási elemek

### Félkövér szöveg
Két lehetőség van:
```html
<strong>Ez fontos szöveg</strong>
<b>Ez is félkövér szöveg</b>
```
- A `<strong>` szemantikai jelentéssel bír (fontos szöveg)
- A `<b>` csak vizuális formázást jelent

### Dőlt szöveg
Szintén két lehetőség:
```html
<em>Kiemelt szöveg</em>
<i>Dőlt szöveg</i>
```
- Az `<em>` szemantikai kiemelést jelent
- Az `<i>` csak vizuális formázást jelent

### Kombinált formázás
A formázási elemek egymásba ágyazhatók:
```html
<p>Ez egy <strong>nagyon <em>fontos</em></strong> szöveg.</p>
```

## 4. Sortörés

A `<br>` elem új sort kezd. Ez egy üres elem, nincs záró címkéje.

### Példák:
```html
<p>Ez az első sor.<br>
Ez már a második sorban van.</p>
```

### Mikor használjuk:
- Verssorok között
- Címekben vagy elérhetőségeknél
- Ne használjuk bekezdések közötti térköz létrehozására!

## 5. Gyakorlati példa

Nézzünk egy komplex példát, amely az összes tanult elemet tartalmazza:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Verstanulás</title>
</head>
<body>
    <h1>Petőfi Sándor: Nemzeti dal</h1>
    
    <h2>Első versszak</h2>
    <p>
        Talpra magyar, hí a haza!<br>
        Itt az idő, most vagy soha!<br>
        Rabok legyünk vagy <strong>szabadok</strong>?<br>
        Ez a kérdés, válasszatok!
    </p>
    
    <h3>A vers keletkezése</h3>
    <p>
        A verset Petőfi <em>1848. március 13-án</em> írta, és
        másnap szavalta el a <strong>Nemzeti Múzeum</strong> lépcsőjén.
    </p>
</body>
</html>
```

## 6. Jó gyakorlatok és tippek

1. **Szemantikus használat**
   - Használj `<strong>` és `<em>` elemeket `<b>` és `<i>` helyett, ha a tartalom jelentése fontos
   - A címsorokat fontossági sorrendben használd

2. **Olvashatóság**
   - Használj megfelelő behúzást
   - A bekezdéseket különítsd el egymástól
   - Ne használj felesleges üres sorokat a kódban

3. **Elkerülendő hibák**
   - Ne használj sortörést (`<br>`) bekezdések elválasztására
   - Ne ugorj át címsor szinteket
   - Ne használj túl sok egymásba ágyazott formázást

## 7. Gyakorló feladatok

1. **Alapszintű feladat**
   Készíts egy egyszerű bemutatkozó oldalt magadról:
   - Használj főcímet a nevedhez
   - Írj egy bekezdést a hobbijaidról
   - Használj félkövér és dőlt szöveget a fontos részek kiemelésére

2. **Haladó feladat**
   Készítsd el kedvenc versed vagy dalszöveged formázott változatát:
   - Használj címsorokat a szerkezet kialakításához
   - A verssorokat sortöréssel válaszd el
   - Emeld ki a fontos részeket megfelelő formázással

## 8. Ellenőrző kérdések

1. Mi a különbség a `<strong>` és `<b>` elemek között?
2. Mikor használjunk sortörést (`<br>`) és mikor új bekezdést (`<p>`)?
3. Hány címsorszint létezik HTML-ben?
4. Mi a szemantikus HTML jelentése?
5. Hogyan lehet kombinálni a különböző szövegformázási elemeket?

---

A következő leckében a HTML táblázatokkal fogunk foglalkozni, amelyek segítségével strukturált adatokat jeleníthetünk meg az oldalunkon.
