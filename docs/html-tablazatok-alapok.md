---
id: html-tablazatok-alapok
title: HTML táblázatok alapjai
description: A HTML táblázatok alapvető használata
sidebar_label: HTML táblázatok alapjai
sidebar_position: 4
tags: [HTML, táblázatok, címkék]
keywords: [HTML, táblázatok]
---
# HTML táblázatok alapjai - Kezdő tananyag

## 1. Mi a HTML táblázat?

A HTML táblázatok lehetővé teszik, hogy adatainkat sorokba és oszlopokba rendezzük. A táblázatok különösen hasznosak, amikor strukturált információkat szeretnénk megjeleníteni, mint például:
- Órarendek
- Árak listája
- Statisztikai adatok
- Összehasonlító információk

## 2. Táblázatok alapvető elemei

### A táblázat váza
```html
<table>
    <!-- A táblázat tartalma ide kerül -->
</table>
```

### Sorok létrehozása
```html
<table>
    <tr> <!-- table row = táblázat sor -->
        <!-- A sor cellái ide kerülnek -->
    </tr>
</table>
```

### Cellák létrehozása
```html
<table>
    <tr>
        <td>Első cella</td>    <!-- table data = táblázat adat -->
        <td>Második cella</td>
    </tr>
</table>
```

## 3. Táblázat fejléc

### Fejléc cellák
A `<th>` elem (table header = táblázat fejléc) fejléc cellákat hoz létre:
```html
<table>
    <tr>
        <th>Név</th>
        <th>Életkor</th>
    </tr>
    <tr>
        <td>János</td>
        <td>25</td>
    </tr>
</table>
```

## 4. Táblázat szerkezeti elemei

### Fejléc, törzs és lábléc
```html
<table>
    <thead> <!-- táblázat fejléc rész -->
        <tr>
            <th>Termék</th>
            <th>Ár</th>
        </tr>
    </thead>
    <tbody> <!-- táblázat törzs -->
        <tr>
            <td>Alma</td>
            <td>300</td>
        </tr>
    </tbody>
    <tfoot> <!-- táblázat lábléc -->
        <tr>
            <td>Összesen:</td>
            <td>300</td>
        </tr>
    </tfoot>
</table>
```

## 5. Cellák összevonása

### Oszlopok összevonása (colspan)
```html
<table>
    <tr>
        <td colspan="2">Ez két oszlopot foglal el</td>
    </tr>
    <tr>
        <td>Oszlop 1</td>
        <td>Oszlop 2</td>
    </tr>
</table>
```

### Sorok összevonása (rowspan)
```html
<table>
    <tr>
        <td rowspan="2">Ez két sort foglal el</td>
        <td>Sor 1</td>
    </tr>
    <tr>
        <td>Sor 2</td>
    </tr>
</table>
```

## 6. Gyakorlati példa - Egyszerű órarend

```html
<table>
    <thead>
        <tr>
            <th>Idő</th>
            <th>Hétfő</th>
            <th>Kedd</th>
            <th>Szerda</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>8:00-8:45</td>
            <td>Matematika</td>
            <td>Magyar</td>
            <td>Történelem</td>
        </tr>
        <tr>
            <td>9:00-9:45</td>
            <td colspan="2">Testnevelés</td>
            <td>Fizika</td>
        </tr>
    </tbody>
</table>
```

## 7. Jó gyakorlatok

1. **Táblázat használata**
   - Csak adatok strukturálására használd
   - Ne használd oldal elrendezéshez
   - Mindig használj fejléc cellákat a megfelelő oszlopokhoz

2. **Szerkezet**
   - Tartsd logikus rendben a sorokat és oszlopokat
   - Használd a thead, tbody, tfoot elemeket a nagyobb táblázatoknál
   - Figyelj a cellák helyes számára minden sorban

3. **Tartalmi szempontok**
   - Adj értelmes fejléceket az oszlopoknak
   - A fejlécek legyenek rövidek és érthetőek
   - Az adatok legyenek konzisztensek az oszlopokon belül

## 8. Gyakori hibák

1. **Szerkezeti hibák**
   - Hiányzó záró tagek
   - Hiányzó cellák a sorokban
   - Helytelen összevonás használata

2. **Tervezési hibák**
   - Túl komplex táblázatszerkezet
   - Táblázat használata oldal elrendezéshez
   - Fejlécek hiánya

## 9. Gyakorló feladatok

### 1. Alapszintű feladat
Készíts egy egyszerű, két oszlopos táblázatot a kedvenc ételeidről:
- Első oszlop: Étel neve
- Második oszlop: Származási ország

### 2. Haladó feladat
Készíts egy mini órarendet:
- Legalább 3 nap
- Legalább 4 időpont
- Használj összevont cellákat, ahol szükséges

## 10. Ellenőrző kérdések

1. Mi a különbség a `<td>` és `<th>` elemek között?
2. Mire szolgál a `colspan` attribútum?
3. Mire szolgál a `rowspan` attribútum?
4. Mi a szerepe a `<thead>`, `<tbody>` és `<tfoot>` elemeknek?
5. Milyen esetekben NEM ajánlott táblázatot használni?

---

Most, hogy megismerted a HTML táblázatok alapjait, később a CSS tananyagban megtanuljuk, hogyan lehet ezeket a táblázatokat szépen megformázni különböző stílusokkal.
