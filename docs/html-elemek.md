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

## 5. Betűtípusok és Színek a HTML-ben

### A font elem (elavult)
A `<font>` elem régebben használt megoldás volt a betűtípusok és színek beállítására, de ma már elavultnak számít:

```html
<!-- ELAVULT, NE HASZNÁLD! -->
<font face="Arial" color="blue" size="3">Ez kék színű Arial betűtípusú szöveg</font>
```

### Miért ne használjuk a HTML-ben a formázást?

1. **Szétválasztás elve**
   - A HTML a tartalomért felel
   - A CSS a megjelenésért felel
   - A JavaScript a viselkedésért felel

2. **Karbantarthatóság**
   - A CSS-ben központilag kezelhetjük a stílusokat
   - Egy helyen módosítva minden elem megjelenése változik
   - Könnyebb a designt frissíteni

3. **Teljesítmény**
   - Kisebb fájlméret
   - A CSS cache-elhető
   - Gyorsabb betöltés

4. **Következetesség**
   - A CSS biztosítja az egységes megjelenést
   - Könnyebb a stílusokat újrahasználni
   - Professzionálisabb végeredmény

### Helyes megoldás CSS használatával

```html
<!-- HTML fájl -->
<p class="kiemelt-szoveg">Ez egy kiemelt szöveg</p>
```

```css
/* CSS fájl */
.kiemelt-szoveg {
    font-family: Arial, sans-serif;
    color: #0066cc;
    font-size: 16px;
}
```

### CSS előnyei a betűtípusok kezelésében:

1. **Betűtípus-családok**
   ```css
   body {
       font-family: 'Open Sans', Arial, sans-serif;
   }
   ```
   - Több alternatívát adhatunk meg
   - Fallback betűtípusokat definiálhatunk
   - Web-biztos betűtípusokat használhatunk

2. **Web fontok**
   ```css
   @font-face {
       font-family: 'SajatBetutipus';
       src: url('betutipus.woff2') format('woff2');
   }
   ```
   - Egyedi betűtípusokat tölthetünk be
   - Több formátumot támogathatunk
   - Optimalizálhatjuk a betöltést

3. **Rugalmas méretezés**
   ```css
   p {
       font-size: 1.2em;
       line-height: 1.5;
   }
   ```
   - Relatív méreteket használhatunk
   - Reszponzív tipográfiát alakíthatunk ki
   - Könnyebb a karbantartás

### CSS előnyei a színek kezelésében:

1. **Többféle színmegadási mód**
   ```css
   .szoveg {
       color: #ff6600;             /* Hexadecimális */
       color: rgb(255, 102, 0);    /* RGB */
       color: hsl(24, 100%, 50%);  /* HSL */
       color: rgba(255, 102, 0, 0.5); /* Átlátszóság */
   }
   ```

2. **Színváltozók**
   ```css
   :root {
       --primary-color: #0066cc;
       --secondary-color: #ff6600;
   }

   .gomb {
       background-color: var(--primary-color);
   }
   ```

3. **Színátmenetek**
   ```css
   .hatter {
       background: linear-gradient(to right, #ff6600, #0066cc);
   }
   ```

## 6. Gyakorlati példa

Nézzünk egy komplex példát, amely az összes tanult elemet tartalmazza:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Verstanulás</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Petőfi Sándor: Nemzeti dal</h1>
    
    <h2>Első versszak</h2>
    <p class="vers-szakasz">
        Talpra magyar, hí a haza!<br>
        Itt az idő, most vagy soha!<br>
        Rabok legyünk vagy <strong>szabadok</strong>?<br>
        Ez a kérdés, válasszatok!
    </p>
    
    <h3>A vers keletkezése</h3>
    <p class="leiras">
        A verset Petőfi <em>1848. március 13-án</em> írta, és
        másnap szavalta el a <strong>Nemzeti Múzeum</strong> lépcsőjén.
    </p>
</body>
</html>
```

```css
/* styles.css */
body {
    font-family: 'Georgia', serif;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #2c3e50;
    font-size: 2.5em;
}

.vers-szakasz {
    font-family: 'Times New Roman', serif;
    margin: 20px 0;
    font-size: 1.2em;
}

.leiras {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 15px;
    border-left: 3px solid #2c3e50;
}
```

## 7. Jó gyakorlatok és tippek

1. **Szemantikus használat**
   - Használj `<strong>` és `<em>` elemeket `<b>` és `<i>` helyett, ha a tartalom jelentése fontos
   - A címsorokat fontossági sorrendben használd
   - A formázásokat mindig CSS-ben valósítsd meg

2. **Olvashatóság**
   - Használj megfelelő behúzást
   - A bekezdéseket különítsd el egymástól
   - Ne használj felesleges üres sorokat a kódban
   - A CSS-ben kommentezd a komplexebb stílusokat

3. **Elkerülendő hibák**
   - Ne használj inline stílusokat (`style` attribútum)
   - Ne használj elavult HTML formázó elemeket (`<font>`, `<center>`)
   - Ne keverd a HTML és CSS felelősségi köreit

## 8. Gyakorló feladatok

1. **Alapszintű feladat**
   Készíts egy egyszerű bemutatkozó oldalt magadról:
   - Használj főcímet a nevedhez
   - Írj egy bekezdést a hobbijaidról
   - A formázásokat CSS-ben valósítsd meg

2. **Haladó feladat**
   Készítsd el kedvenc versed vagy dalszöveged formázott változatát:
   - Használj címsorokat a szerkezet kialakításához
   - A verssorokat sortöréssel válaszd el
   - Készíts hozzá stíluslapot egyedi betűtípusokkal és színekkel

## 9. Ellenőrző kérdések

1. Mi a különbség a `<strong>` és `<b>` elemek között?
2. Mikor használjunk sortörést (`<br>`) és mikor új bekezdést (`<p>`)?
3. Miért jobb CSS-ben kezelni a formázásokat?
4. Milyen előnyei vannak a külső CSS fájl használatának?
5. Hogyan lehet biztonságosan web fontokat használni?
6. Mi a különbség az inline stílusok és a külső CSS között?
7. Miért fontos a szemantikus HTML használata?
8. Hogyan lehet hatékonyan kezelni a színeket CSS-ben?

---

A következő leckében a HTML táblázatokkal fogunk foglalkozni, amelyek segítségével strukturált adatokat jeleníthetünk meg az oldalunkon.