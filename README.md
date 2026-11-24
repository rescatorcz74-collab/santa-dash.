# 🎄 Vánoční Santa Dash

Vánoční 8bitová hra ve stylu Boulder Dash: 12 úrovní, česky i anglicky.

- **Hra v prohlížeči / na telefonu (česky):** `https://VAS-UZIVATEL.github.io/santa-dash/`
- **Anglická verze:** `https://VAS-UZIVATEL.github.io/santa-dash/en/`
- **Aplikace pro Android TV:** záložka **Actions** → poslední běh → **Artifacts** → `santa-dash-apk`

(`VAS-UZIVATEL` nahraďte svým jménem na GitHubu.)

---

## 1. Nahrání na GitHub (jen poprvé)

1. Rozbalte soubor `santa-dash-github.zip`. Vznikne složka `santa-dash`.
2. Na GitHubu klikněte vpravo nahoře na **+** → **New repository**.
   - **Repository name:** `santa-dash`
   - zvolte **Public** (GitHub Pages zdarma funguje jen pro veřejné repozitáře)
   - nic dalšího nezaškrtávejte (žádné README) → **Create repository**
3. Na stránce prázdného repozitáře klikněte na odkaz **uploading an existing file**.
4. Otevřete složku `santa-dash` a **přetáhněte myší celý její obsah** do okna prohlížeče
   (všechny soubory i složky: `index.html`, `en`, `icons`, `android`, `.github` …).
   - Na Macu se složka `.github` nezobrazuje – ukážete ji zkratkou **Cmd + Shift + .** (tečka).
5. Dole klikněte na **Commit changes**.
6. Kontrola: v repozitáři musí být složka `.github/workflows`. Kdyby chyběla:
   **Add file → Create new file**, jako název napište `.github/workflows/build-apk.yml`,
   vložte obsah stejnojmenného souboru ze zipu a dejte **Commit changes**.

## 2. Hra na telefonu (webová aplikace)

1. V repozitáři otevřete **Settings → Pages**.
2. **Source:** *Deploy from a branch*, **Branch:** `main`, složka `/ (root)` → **Save**.
3. Za 1–2 minuty se nahoře ukáže adresa hry (`https://VAS-UZIVATEL.github.io/santa-dash/`).
4. Na telefonu s Androidem ji otevřete v **Chromu**. Na úvodní obrazovce hry se objeví tlačítko
   **📲 Nainstalovat do telefonu** – stačí na něj klepnout. Když se neobjeví, použijte menu Chromu
   **⋮** (tři tečky vpravo nahoře) → **Přidat na plochu** → **Instalovat**.
   Hra dostane ikonu, poběží přes celou obrazovku a i bez internetu.
5. Na iPhonu: adresu otevřete v **Safari** → **Sdílet** (čtvereček se šipkou) → **Přidat na plochu**.
   Když je na iPhonu zapnutý tichý režim, hra nebude slyšet – hra na to při spuštění upozorní.
6. Na telefonu hrajte **na šířku**: nahoře je tenká lišta s tlačítkem ⏸ Pauza, ovládání je po stranách hrací plochy.
   Restart úrovně, hudba, zvuk a návrat do menu jsou v pauze.
   Testovací režim: v pauze **Hudba, Zvuk, Hudba, Zvuk** a pak **⏸ Pauza** v liště.
7. Dotykové ovládání si hráč vybere na úvodní obrazovce, nebo kdykoli v pauze tlačítkem **🎮 Ovládání**:
   - **Rozdělené šipky** – vlevo ▲▼, vpravo ◀▶ (každý palec má svou osu),
   - **Kříž** – klasický kříž vlevo,
   - **Páčka** – položte palec kamkoli do levé poloviny plochy a táhněte.
   Santa jde, dokud tlačítko držíte; palcem lze přejet z jedné šipky na druhou bez zvednutí, u kříže stačí palcem šoupat do všech čtyř směrů. Krátké klepnutí znamená přesně jeden krok.
   Volba se pamatuje. Na Androidu tlačítka při stisku krátce zavibrují.
8. **Jukebox** vpravo nad šipkami přepne klepnutím na další z 10 vánočních melodií (bez pauzy; vypnutou hudbu zapne).
   Na klávesnici totéž dělá klávesa **J**.

## 3. Aplikace pro Android TV (APK)

### Sestavení (automaticky)
1. Otevřete záložku **Actions**. Pokud GitHub nabídne tlačítko pro povolení workflow, potvrďte ho.
2. Po každém nahrání změn se spustí **Sestavit APK pro Android TV** (trvá asi 3–6 minut).
   Ručně ho spustíte tlačítkem **Run workflow**.
3. Klikněte na hotový běh (zelená fajfka) → dole **Artifacts** → **santa-dash-apk**.
   Stáhne se zip se dvěma soubory:
   - `santa-dash-cz.apk` – Vánoční Santa Dash (česky)
   - `santa-dash-en.apk` – Christmas Santa Dash (anglicky)
   Obě verze jde nainstalovat současně.

### Instalace na Blaupunkt B-Stream Box (Android TV 9)
1. Na boxu nainstalujte z Google Play správce souborů, např. **File Commander** nebo **X-plore File Manager**.
   (Alternativa bez flashky: aplikace **Send files to TV** na boxu i na telefonu/počítači.)
2. Povolte instalaci z neznámých zdrojů:
   **Nastavení → Předvolby zařízení → Zabezpečení a omezení → Neznámé zdroje** → povolit pro správce souborů.
3. Nahrajte APK na USB flashku, zasuňte ji do boxu, ve správci souborů APK otevřete → **Instalovat**.
4. Hra se objeví mezi aplikacemi s banerem „SANTA DASH“.

### Ovládání na televizi
| Ovladač / gamepad | Akce |
|---|---|
| Šipky / d-pad / páčka | pohyb Santy, výběr v menu |
| OK / tlačítko A | potvrdit |
| Zpět / tlačítko B | pauza; v pauze pokračovat; na úvodní obrazovce ukončí hru |
| Start / Menu | pauza |
| Jméno na úvodní obrazovce | OK = upravit (pole zezelená), ▲▼ písmeno, ◀▶ posun, znovu OK = hotovo |
| Jméno u nového rekordu | ▲▼ písmeno, ◀▶ posun, OK uloží |

V pauze jsou tlačítka **Restart úrovně, Hudba, Zvuk a Hlavní menu**.

**Testovací režim na TV:** v pauze stiskněte **Hudba, Zvuk, Hudba, Zvuk** a pak **Zpět**.

## 4. Aktualizace hry

1. V repozitáři **Add file → Upload files** a nahrajte nové `index.html` (do kořene)
   a `en/index.html` (do složky `en`) → **Commit changes**.
2. Web se aktualizuje sám, nové APK se samo sestaví v **Actions**.
3. Nové APK nainstalujte na box přes staré – rekordy zůstanou zachované.
4. Aby si telefony stáhly novou verzi, zvyšte v souboru `sw.js` číslo v řádku
   `const CACHE = 'santa-dash-v5.6';` (např. na `v5.7`).

## Řešení potíží

- **Sestavení v Actions skončí červeně:** otevřete běh, klikněte na červený krok a jeho výpis pošlete.
- **Písmo vypadá jako psací stroj:** box nebo telefon nemá internet; pixelová písma se stahují z Google Fonts.
  Hra funguje i tak.
- **Santa se nehýbe šipkami nebo nefunguje OK:** napište, které tlačítko co dělá – upravím to.

---

*Podpisový klíč `android/app/santa-dash.keystore` slouží jen pro vlastní instalaci (heslo `santadash`).
Pro případné vydání na Google Play je potřeba vytvořit nový, tajný klíč.*
