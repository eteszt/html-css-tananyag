---
id: html-links-images
title: Linkek és képek
sidebar_label: 'Linkek és képek'
description: 'Linkek és képek használata HTML dokumentumokban - hivatkozások készítése, képek beillesztése és optimalizálása'
keywords: [html, link, image, href, src, anchor, img, web, tutorial]
sidebar_position: 4
tags: [html, kezdő]
---

# HTML hivatkozások és képek

## 1. HTML hivatkozások (linkek)

### Mi a hivatkozás?
A hivatkozások teszik lehetővé, hogy:
- Más weboldalakra navigáljunk
- Ugyanazon weboldal különböző részeire ugorjunk
- E-mail címeket vagy telefonszámokat hívjunk meg
- Fájlokat töltsünk le

### Hivatkozás alapszerkezete
```html
<a href="cél">Link szövege</a>
```

### Hivatkozás típusok

1. **Külső hivatkozás** (más weboldalra)
```html
<a href="https://www.pelda.hu">Példa weboldal</a>
```

2. **Belső hivatkozás** (saját webhelyen belül)
```html
<a href="kapcsolat.html">Kapcsolat oldal</a>
```

3. **Helyi hivatkozás** (ugyanazon az oldalon belül)
```html
<a href="#fejezet1">Ugrás az 1. fejezethez</a>

<!-- Az oldal egy másik részén: -->
<h2 id="fejezet1">1. fejezet</h2>
```

4. **E-mail hivatkozás**
```html
<a href="mailto:info@pelda.hu">Küldjön e-mailt</a>
```

### Hivatkozás megnyitása új ablakban
```html
<a href="https://www.pelda.hu" target="_blank">
    Megnyitás új ablakban
</a>
```

## 2. Képek beillesztése

### A kép elem alapszerkezete
```html
<img src="kep-neve.jpg" alt="Kép leírása">
```

### A kép elem fő attribútumai

1. **src** (source = forrás)
- A kép fájl elérési útja
- Lehet relatív vagy abszolút útvonal

2. **alt** (alternative text = helyettesítő szöveg)
- A kép szöveges leírása
- Akkor jelenik meg, ha a kép nem tölthető be
- Képernyőolvasók ezt a szöveget olvassák fel
- Nagyon fontos az akadálymentesítés szempontjából

### Példák képek beillesztésére

1. **Helyi kép beszúrása**
```html
<img src="macska.jpg" alt="Egy szürke macska">
```

2. **Kép másik mappából**
```html
<img src="kepek/macska.jpg" alt="Egy szürke macska">
```

3. **Kép az internetről** (nem ajánlott)
```html
<img src="https://www.pelda.hu/macska.jpg" alt="Egy szürke macska">
```

### Képek és hivatkozások kombinálása

```html
<a href="macskak.html">
    <img src="macska.jpg" alt="Egy szürke macska">
</a>
```

## 3. Fájl és mappa szerkezet

### Relatív és abszolút útvonalak

1. **Relatív útvonal**
```
weboldal/
    ├── index.html
    ├── kepek/
    │   ├── macska.jpg
    │   └── kutya.jpg
    └── oldalak/
        └── kapcsolat.html
```

Példák relatív útvonalakra:
```html
<!-- index.html-ből -->
<img src="kepek/macska.jpg" alt="Macska">
<a href="oldalak/kapcsolat.html">Kapcsolat</a>

<!-- kapcsolat.html-ből -->
<img src="../kepek/macska.jpg" alt="Macska">
<a href="../index.html">Főoldal</a>
```

2. **Abszolút útvonal** (nem ajánlott helyi fájlokhoz)
```html
<img src="https://www.pelda.hu/kepek/macska.jpg" alt="Macska">
```

## 4. Jó gyakorlatok

### Hivatkozásoknál
1. Használj beszédes link szövegeket
   - JÓ: `<a href="arak.html">Nézze meg árainkat</a>`
   - ROSSZ: `<a href="arak.html">Kattintson ide</a>`

2. Jelezd, ha a link új ablakban nyílik meg
```html
<a href="https://www.pelda.hu" target="_blank">
    Példa weboldal (új ablakban nyílik meg)
</a>
```

### Képeknél
1. Mindig adj meg alt szöveget
2. Az alt szöveg legyen informatív
   - JÓ: `alt="Piros alma egy kosárban"`
   - ROSSZ: `alt="kép"`
3. Ha a kép csak díszítő elem, használj üres alt attribútumot
```html
<img src="diszito.jpg" alt="">
```

## 5. Gyakori hibák

1. **Hivatkozásoknál**
   - Nem létező oldalra mutató linkek
   - Rossz relatív útvonalak
   - Nem beszédes linkszövegek
   - Target attribútum helytelen használata

2. **Képeknél**
   - Hiányzó alt szöveg
   - Túl nagy méretű képek használata
   - Rossz fájlformátum választása
   - Nem létező képekre hivatkozás

## 6. Gyakorló feladatok

### 1. Alapszintű feladat
Készíts egy egyszerű navigációs menüt:
- Főoldal
- Termékek
- Kapcsolat
(A hivatkozások mutathatnak nem létező oldalakra is)

### 2. Haladó feladat
Készíts egy képgalériát:
- Legalább 4 kép
- A képekre kattintva nyíljon meg egy részletes oldal
- Minden képnek legyen megfelelő alt szövege

## 7. Ellenőrző kérdések

1. Mi a különbség a relatív és abszolút útvonal között?
2. Mire szolgál az alt attribútum?
3. Hogyan lehet egy képet hivatkozássá alakítani?
4. Mikor használjunk target="_blank" attribútumot?
5. Miért fontos a megfelelő könyvtárszerkezet kialakítása?

---

Most, hogy megtanultad a hivatkozások és képek használatát, a következő leckében a CSS alapjaival fogunk foglalkozni, ahol megtanuljuk, hogyan lehet ezeket az elemeket stílusosan megformázni.
