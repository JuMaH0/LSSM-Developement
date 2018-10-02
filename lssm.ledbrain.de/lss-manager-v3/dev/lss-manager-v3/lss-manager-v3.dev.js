freigeschalten = [
    205976, // KBOE2
    28153, // KBOE2 => Meldkamer
    49584, // KBOE2 => Missionchief
    84537, // Noah (BobMeier),
    31873, // Noah (BobMeier) => Missionchief
    895, // Dennis (Smarty)
    67418, // Dennis (Smarty) => Missionchief
    211151, // Martin (Martin090497)
    276026, // Sören (JRKPirna)
    53272, // Sören (JRKPirna) => Meldkamer
    66018, // Sören (JRKPirna) => Missionchief
	470769, // Jannis (Jannis636)
    88857, // Gregor (GregorPaul)
    675, // Sanni,
    411202, // Sanni Tester

    381370, // Scripttester
    548597 // Scripttester2
];

if (typeof(extm) !== "undefined" && freigeschalten.indexOf(user_id) !== -1) {
    $.ajaxPrefilter(function(e, n) {
        "script" !== e.dataType && "script" !== n.dataType && "stylesheet" !== e.dataType && "stylesheet" !== n.dataType || (e.cache = !0)
    }), jQuery.expr[":"].containsci = function(e, n, s) {
        return jQuery(e).text().toUpperCase().indexOf(s[3].toUpperCase()) >= 0
    };
    var lssm = {
        config: {
            server: "https://lssm.ledbrain.de/lss-manager-v3/dev",
            stats_uri: "https://lssm.ledbrain.de/lss-manager-v3/dev/stat.php",
            forum_link: "https://forum.leitstellenspiel.de/index.php/Thread/11166-LSS-MANAGER-V3/",
            version: '0',
            github: "https://github.com/LSS-Manager/lss-manager-v3",
            prefix: "lssm"
        },
        game: window.location.hostname.toLowerCase().replace("www.","").split(".")[0],
        loadScript: function(e) {
            try {
                var n, s = "";
                "undefined" != typeof user_id && (s = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0]), n = "?uid=" + s + user_id, $.getScript(this.config.server + e + n)
            } catch (e) {
                console.log("On script load: " + e.message)
            }
        },
        loadStyle: function(e) {
            try {
                var n = "";
                "undefined" != typeof user_id && (n = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0]), "?uid=" + n + user_id, $("body").append('<link href="' + this.getlink(e) + '" rel="stylesheet" type="text/css">')
            } catch (e) {
                console.log("On script load: " + e.message)
            }
        },
        getlink: function(e) {
            try {
                var n, s = "";
                return "undefined" != typeof user_id && (s = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0]), n = "?uid=" + s + user_id, this.config.server + e + n
            } catch (e) {
                console.log("On script load: " + e.message)
            }
        }
    };

    I18n.defaultLocale = "de", I18n.fallbacks = !0, I18n.locales.nl = ["nl", "en", "de"], I18n.translations.de.lssm = {
            lssm: "LSS-Manager",
            version: "KBOE2-Entwicklung",
            appstore: "APPSTORE",
            appstore_welcome: "Willkommen im Appstore vom LSS Manager",
            appstore_desc: 'Hier findest du verschiedene Plugins, die dein Spielerlebnis bereichern sollen. Jedes Plugin kann einzeln aktiviert werden, indem du den Hebel auf Grün stellst. Sollte es zu irgendwelchen Problemen kommen, kannst du uns gerne eine Nachricht schreiben oder <a href="' + lssm.config.forum_link + '" target="blank">im Forum einen Beitrag verfassen</a>.',
            back_lss: "Zurück zu Leitstellenspiel",
            settings: "Einstellungen",
            saving: "Speichere...",
            save: "Speichern",
            cantactivate: "kann nicht aktiviert werden, da es mit folgenden Modul(en) inkompatibel ist:",
            activated: "Folgende Module wurden aktiviert:",
            cantload: "<h2>LSS-Manager konnte nicht geladen werden</h2>Bitte kontaktiere ein Mitglied vom Entwicklerteam.",
            login: "Bitte zuerst anmelden",
            mapkit: "Mapkit wird aktuell noch nicht vom LSS-Manager unterstützt.\n\nBitte deaktiviere das Addon solange oder schalte wieder \nauf OpenStreeMap um",
            apps: {},
            Module_DevelopementActive: 'Dieses Modul ist derzeit in Entwicklung! Ein Aktivieren dieses Moduls hat keine Auswirkungen.'
        }, I18n.translations.en.lssm = {
            lssm: "LSS-Manager",
            version: "KBOE2-Entwicklung",
            appstore: "APPSTORE",
            appstore_welcome: "Welcome to the lssm.appstore of LSS Manager",
            appstore_desc: 'Here you will find various plugins that will enrich your playing experience. Each plugin can be activated individually by placing the lever on green. If there are any problems, you can write us a message or <a href="' + lssm.config.forum_link + '" target="blank">write a message in the forum</a>.',
            back_lss: "Back to missionchief",
            settings: "Settings",
            saving: "Saving...",
            save: "Save",
            activated: "Following Modules have been activated:",
            cantactivate: "can't be activated as it's incompatible with the following modul(es):",
            cantload: "<h2>LSS-Manager could not be loaded</h2>Please contact a member of the development team.",
            login: "Please log in first",
            mapkit: "Mapkit is not currently supported by LSS-Manager.\n\nPlease turn this Add-On off or change back to OpenStreetMap",
            apps: {},
            Module_DevelopementActive: 'This module is currently under development! Activating this module has no effect.'
        }, I18n.translations.nl.lssm = {
            lssm: "LSS-Manager",
            version: "KBOE2-Entwicklung",
            appstore: "App Store",
            appstore_welcome: "Welkom bij de App Store van LSS Manager",
            appstore_desc: 'Hier vindt u verschillende plug-ins die uw game-ervaring kunnen verbeteren. Elke plugin kan individueel worden geactiveerd, de bijbehorende hendel op groen te zetten. Mochten er problemen zijn, kunt u <a href="' + lssm.config.forum_link + '" target="blank">ons een bericht sturen of een bericht posten in ons topic op het forum.</a>.',
            back_lss: "Terug naar Meldkamerspel",
            settings: "Instellingen",
            saving: "Wijzigingen aan het opslaan...",
            save: "Opslaan",
            activated: "De volgende modules zijn geactiveerd:",
            cantactivate: "Kan niet worden geactiveerd omdat deze lssm_module niet samenwerkt met de volgende lssm_module(s):",
            mapkit: "Mapkit wordt momenteel niet ondersteund door LSS-Manager.\n\nPlease zet deze Add-On uit of ga terug naar OpenStreetMap.",
            apps: {},
            Module_DevelopementActive: 'Deze module is momenteel in ontwikkeling! Het activeren van deze module heeft geen effect.'
        }, lssm.Module = {
            keyboardAlert: {
                name: {
                    de: "Keyboard Alarmierung",
                    en: "Callview control",
                    nl: "Besturing met toetsenbord"
                },
                active: !1,
                description: {
                    de: "Einsatzmaske mit Tastatur steuern.",
                    en: "Control the mission view with the keyboard.",
                    nl: "Bestuur het meldingscherm met het toetsenbord."
                },
                source: "/modules/lss-keyboardAlert/lss-keyboardAlert.user.js",
                develop: !1,
                inframe: !0
            },
            AaoTime: {
                name: {
                    de: "AAO Anrückzeit",
                    en: "ARR duration",
                    nl: "AUR duur"
                },
                active: !1,
                description: {
                    de: "Beim Überfahren eines AAO Links wird angegeben, wie lange es dauern würde, bis das letzte Fahrzeug eingetroffen ist.",
                    en: "Shows the calculated total time for all vehicles to arrive when hovering an ARR link.",
                    nl: "Toont de berekende totale tijd voor alle voertuigen die aankomen bij het zweven van een AUR-link."
                },
                source: "/modules/lss-aao-time/lss-aao-time.user.js",
                develop: !1,
                inframe: !0
            },
            tailoredTabs: {
                name: {
                    de: "Maßgeschneiderte Tabs"
                },
                active: !1,
                description: {
                    de: "Das Plugin ermöglicht es, weitere Tabs zur Trennung von Fahrzeug-Typen im Alarmierungsfenster einzustellen."
                },
                source: "/modules/lss-TailoredTabs/TailoredTabs.user.js",
                develop: !1,
                inframe: !0,
                supportedLocales: ["de"]
            },
            Layout01: {
                name: {
                    de: "Layout 01"
                },
                active: !1,
                description: {
                    de: "Ansicht mit großer Karte - Einsätze & Co mit Menu durchschaltbar. Eine Badge wie bei den Nachrichten zeigt die Einsäte/Nachrichten/Funksprüche seit dem letzten Aufruf des jeweiligen Fensters im Menu.",
                    en: "View with main focus on the map. Missions and other windows can be changed using a menu. A badge is telling you how many missions etc. you have since your last visit within that window.",
                    nl: "Design met een extra grote kaartweergave aan de linkerkant. Aan de rechterkant van het scherm kan met menuknoppen tussen de andere schermen gewisseld worden. Een teller houdt het aantal bericheten en meldingen voor je bij."
                },
                source: "/modules/lss-layout-01/layout-01.user.js",
                develop: !1,
                collisions: ["Layout02", "Layout03", "Layout04", "Layout05"]
            },
            Layout02: {
                name: {
                    de: "Layout 02"
                },
                active: !1,
                description: {
                    de: "Ansicht mit 100% Karte im oberen Bereich - darunter die vier Fenster Einsätze, Gebäude, Chat & Funksprüche.",
                    en: "View with 100% map at the upper area - below that the four windows calls, buildings, chat and radio.",
                    nl: "Design met een grote kaart bovenaan je scherm. onder de kaart zijn de vier overige schermen; meldingen, gebouwen, chat en statusmeldingen weergegeven."
                },
                ghuser: "lostdesign",
                source: "/modules/lss-layout-02/layout-02.user.js",
                develop: !1,
                collisions: ["Layout01", "Layout03", "Layout04", "Layout05"]
            },
            Layout03: {
                name: {
                    de: "Layout 03"
                },
                active: !1,
                description: {
                    de: "Layout ohne Karte. Die vier Fenster werden über die ganze Höhe dargestellt.",
                    en: "Layout without map. The four windows are using 100% of the given browser height.",
                    nl: "Design zonder kaart. De vier overige schermen vullen het gehele scherm."
                },
                source: "/modules/lss-layout-03/layout-03.user.js",
                develop: !1,
                collisions: ["Layout01", "Layout02", "Layout04", "Layout05", "FMS5InMap"]
            },
            Layout04: {
                name: {
                    de: "Layout 04"
                },
                active: !1,
                description: {
                    de: "Karte im linken Bereich auf 100% Höhe. Rechts davon die Einsätze auf voller breite - alle Einsatzarten werden in jeweils einer Spalte dargestellt. Darunter Gebäude, Chat und Funk.",
                    en: "Map with 100% height on the left side. Next to it the calls, each category in its own column. Below that the buildings, chat and radio.",
                    nl: "Design met een langwerpige kaart aan de linkerzijde van het scherm. Daarnaast een groot overzicht van de meldingen en daaronder hebben de overige schermen een eigen kolom"
                },
                source: "/modules/lss-layout-04/layout-04.user.js",
                develop: !1,
                collisions: ["Layout01", "Layout02", "Layout03", "Layout05"]
            },
            Layout05: {
                name: {
                    de: "Layout 05"
                },
                active: !1,
                description: {
                    de: "Vollständig anpassbares Layout",
                    nl: "Een volledig aanpasbaar design"
                },
                source: "/modules/lss-layout-05/layout-05.user.js",
                develop: !0,
                collisions: ["Layout01", "Layout02", "Layout03", "Layout04"]
            },
            DoctorRadioCall: {
                name: {
                    de: "NEF Nachforderung per FMS",
                    en: "HEMS request in radio",
                    nl: "Spraakaanvraag voor MMT"
                },
                active: !1,
                description: {
                    de: "Bei NEF Nachforderung wird ein Sprechwunsch im Funk angezeigt.",
                    en: "Issues a radio call if HEMS is required.",
                    nl: "Spraakaanvraag weergeven indien MMT benodigd is."
                },
                source: "/modules/lss-doctor-radio-call/DoctorRadioCall.user.js",
                develop: !1
            },
            MissionOut: {
                name: {
                    de: "MissionOut",
                    nl: "Meldingen inklappen"
                },
                active: !1,
                description: {
                    de: "Alle Einsätze ein/ausklappen oder für jeden Einsatz einzeln.",
                    en: "Minimize mission list entries. You can either expand or minimize all calls at once or do it for each one.",
                    nl: "Verkleint de meldingen in de lijst. Je kunt alle meldingen verkleint weergeven of per melding kiezen."
                },
                source: "/modules/lss-MissionOut/MissionOut.user.js",
                develop: !1
            },
            saveVGE: {
                name: {
                    de: "Eigene VGE speichern",
                    en: "Save created alliance calls",
                    nl: "Zelgemaakte inzetten opslaan."
                },
                active: !1,
                description: {
                    de: "Funktion um sebst erstlle VGE zu speichern.",
                    en: "Enables a function to save own created mission calls to use them as template.",
                    nl: "Maakt het mogelijk om zelgemaakte inzetten op te slaan als sjabloon zodat je ze latet nog eens kan gebruiken."
                },
                source: "/modules/lss-saveVGE/saveVGE.user.js",
                develop: !1
            },
            coinConfirm: {
                name: {
                    de: "Coin Confirm",
                    en: "Coin Confirm"
                },
                active: !1,
                inframe: !0,
                description: {
                    de: "Fordert zur Bestätigung bei Coin Ausgaben auf, um versehendliche Ausgaben zu vermeiden.<br>Funktionalität ist mittlerweile im Basisspiel integriert.",
                    en: "Asks for confirmation on coin spendings to avoid mistakes.<br>Functionality is integrated in base game now."
                },
                source: null,
                develop: !0
            },
            vonginator: {
                name: {
                    de: "Vonginator",
                    en: "Vonginator"
                },
                active: !1,
                inframe: !0,
                description: {
                    de: "Hallo i bims. 1 total sinnlose Skript vong Bedeutung her. lol",
                    en: "Not seriously meant script for german language only."
                },
                source: "/modules/lss-vonginator/Vonginator.user.js",
                supportedLocales: ["de"],
                develop: !1
            },
            Notification_Alert: {
                name: {
                    de: "Notification Alert",
                    nl: "Browsermeldingen"
                },
                active: !1,
                description: {
                    de: "Zeigt eine HTML-5 Notification an sobald ein Status oder eine Nachricht eingegangen ist. (ChatPoput included)",
                    en: "HTML5 Chatnotifications using the browser notificationsystem.",
                    nl: "Toon HTML5 chatnotificaties met behulp van het notificatiesysteem van je browser zodat je nooit meer een chat of melding hoeft te missen."
                },
                source: "/modules/lss-notification_alert/Notification_alarm.user.js",
                develop: !1
            },
            Redesign01: {
                name: {
                    de: "Redesign 01"
                },
                active: !1,
                description: {
                    de: "Neues Design für die Oberfläche",
                    en: "New design for the game.",
                    nl: "Een nieuw uiterlijk voor het spel."
                },
                source: "/modules/lss-redesign-01/redesign-01.user.js",
                develop: !1
            },
            Eventsmission: {
                name: {
                    de: "Markiert Eventeinsätze",
                    en: "Marked events",
                    nl: "Merken gebeurtenissen"
                },
                active: !1,
                inframe: !0,
                description: {
                    de: "Zeigt die Aktuellen Eventeinsätze an mit Großgeschriebenen ZEILEN!",
                    en: "Displays the current events with capitalized LINE!",
                    nl: "Toont de actuele gebeurtenissen met hoofdlettercode LINE!"
                },
                source: "/modules/lss-eventmissions/eventmission.user.js",
                develop: !1
            },
            DestinationFilter: {
                name: {
                    de: "Zielort Filter",
                    en: "Destination filter",
                    nl: "Ziekenhuis-Filter"
                },
                active: !1,
                description: {
                    de: "Ermöglicht belegte oder ungeeignete KH auszublenden",
                    en: "Allows hiding full or unelegible hospitals",
                    nl: "Maakt het mogelijk om ziekenhuizen die vol zijn of nietde juiste afdeling hebben uit het spraakaanvraagscherm te filteren"
                },
                source: "/modules/lss-destinationFilter/DestinationFilter.user.js",
                develop: !1,
                inframe: !0
            },
            FMS5InMap: {
                name: {
                    de: "FMS 5 in der Karte",
                    en: "Request transport in map",
                    nl: "Spraakaanvragen op de kaart weergeven."
                },
                active: !1,
                description: {
                    de: "Zeigt alle FMS 5 in der Karte an.",
                    en: "Shows request transports within the map lower left corner.",
                    nl: "Toont alle spraakaanvragen op de kaart."
                },
                source: "/modules/lss-FMS5InMap/FMS5InMap.user.js",
                develop: !1,
                collisions: ["Layout03", "WachenplanungOnMap"]
            },
            Clock: {
                name: {
                    de: "Clock",
                    nl: "Klok"
                },
                active: !1,
                description: {
                    de: "Zeigt eine Uhr in der Karte an.",
                    en: "Enables a small clock within the map.",
                    nl: "Toont een kleine klok op de kaart."
                },
                source: "/modules/lss-clock/clock.user.js",
                develop: !1
            },
            WachenplanungOnMap: {
                name: {
                    de: "Wachenplanung auf der Karte",
                    en: "Station management on map",
                    nl: "Gebouwplanning op de kaart."
                },
                active: !1,
                description: {
                    de: "Zeichnet Kreise im Radius X um deine Wachen. Der Radius kann selbst bestimmt werden & die Gebäude sind wählbar.",
                    en: "Draws circles around buildings with your chosen radius in kilometer. You can also filter for specific buildings.",
                    nl: "Toont cirkels met een zelf in te stellen radius rondom gebouwen. Je kunt ook filteren op specifieke gebouwen."
                },
                source: "/modules/lss-WachenplanungOnMap/WachenplanungOnMap.user.js",
                develop: !1,
                collisions: ["Layout03", "FMS5InMap", "heatmap"]
            },
            tagMissions: {
                name: {
                    de: "Einsätze markieren",
                    en: "Mark calls",
                    nl: "Meldingen markeren."
                },
                active: !1,
                description: {
                    de: "Wurde ins Spiel integriert, vorerst deaktiviert.",
                    en: "Got inplemented into the game - deactivated for now.",
                    nl: "Zit in het spel ingebouwd - momenteel gedeactiveerd."
                },
                source: "/modules/lss-tagMissions/tagMissions.user.js",
                develop: !0
            },
            allianceMissionlistShare: {
                name: {
                    de: "Einsätze freigeben",
                    en: "Mission share",
                    nl: "Meldingen vrijgeven"
                },
                active: !1,
                description: {
                    de: "Mit einem klick in der Übersicht, ohne den Einsatz zu öffnen, freigeben.",
                    en: "Instantly share missions without opening the call by clicking a button in the overview.",
                    nl: "Vanuit het hoofdscherm gemakkelijk meldingen vrijgeven in je team met behulp van een extra knop in de meldingenlijst."
                },
                source: "/modules/lss-allianceMissionlistShare/allianceMissionlistShare.user.js",
                develop: !1
            },
            searchMissions: {
                name: {
                    de: "Einsätze suchen",
                    en: "Mission search",
                    nl: "Meldingen doorzoeken"
                },
                active: !1,
                description: {
                    de: "In der Übersicht Einsätze suchen & filtern. In der Alarmmaske diese Liste mit Buttons durchgehen.",
                    en: "Search for calls & filter them - a group of buttons on the bottom lets you change searched missions quickly.",
                    nl: "In het overzicht meldingen zoeken en filteren. Een rij knoppen aan de onderkant van het scherm laat je snel door je meldingen bladeren."
                },
                source: "/modules/lss-searchMissions/searchMissions.user.js",
                develop: !1
            },
            dashboard: {
                name: {
                    de: "Dashboard"
                },
                active: !1,
                description: {
                    de: "Dashboard",
                    en: "Dashboard",
                    nl: "Een Dashboard waarin je een duidelijk overzicht krijgt van je gebouwen en voertuigen."
                },
                source: "/modules/lss-dashboard/dashboard.user.js",
                develop: !1
            },
            WachenHoverStati: {
                name: {
                    de: "Wachen Status",
                    en: "Station status",
                    nl: "Voertuigstatus bij gebouwen"
                },
                active: !1,
                description: {
                    de: "Zeigt beim drüberfahren einer Wache auf der Karte die Status der Fahrzeuge an.",
                    en: "Shows the code of vehciles on station hover on the map.",
                    nl: "Toont de status van voertuigen van een gebouw als je je muis boven het gebouw houdt."
                },
                source: "/modules/lss-WachenHoverStati/WachenHoverStati.user.js",
                develop: !1
            },
            RenameFZ: {
                name: {
                    de: "Fahrzeuge umbennenen",
                    en: "Rename vehicle",
                    nl: "Voertuigen herbenoemen"
                },
                active: !1,
                description: {
                    de: "Fahrzeuge in bulk mit Tags umbennenen.",
                    en: "Rename vehicles in bulk using tags.",
                    nl: "Maakt het makkelijk om grote hoeveelheiden voertuigen snel van een nieuwe naam te voorzien met behulp van tags."
                },
                source: "/modules/lss-RenameFZ/renameFZ.user.js",
                inframe: !0,
                develop: !1
            },
            telemetry: {
                name: {
                    de: "Telemetrie",
                    en: "Telemetry",
                    nl: "Telemetrie"
                },
                active: !0,
                description: {
                    de: "Sendet Daten an das Entwicklerteam zur Erstellung einer Statistik",
                    en: "Sends data to the developer team for the purpose of creating a statistic",
                    nl: "Stuurt gegevens naar het developmentteam om statistieken te kunnen gebruiken."
                },
                source: "/modules/telemetry/telemetry.user.js",
                noapp: !0,
                develop: !1
            },
            mapreload: {
                name: {
                    de: "Map Reload",
                    nl: "Kaart opnieuw laden"
                },
                active: !0,
                description: {
                    de: "-"
                },
                source: "/modules/lss-mapReload/mapreload.user.js",
                noapp: !0,
                develop: !1
            },
            showBackAlarmAbove: {
                name: {
                    de: "show Back Alarm Above",
                    en: "show Back Alarm Above",
                    nl: "Extra annuleerknop"
                },
                active: !1,
                description: {
                    de: "Zeigt den Alle Rückalamieren Button auch überhalb der Fahrzeuge an",
                    nl: "Voegt een extra annuleerknop toe bovenaan de voertuiglijst."
                },
                source: "/modules/lss-showBackAlarmAbove/showBackAlarmAbove.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            aaosearch: {
                name: {
                    de: "AAO-Suche",
                    en: "AAO-Search",
                    nl: "AUR-zoekfuncties"
                },
                active: !1,
                description: {
                    de: "Packt alle AAO's in ein durchsuchbares dropdown",
                    nl: "Maakt het mogelijk om de Alarm en Uitrukregels te doorzoeken met een dropdownmenu."
                },
                source: "/modules/lss-aao-search/aao-search.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            recolor: {
                name: {
                    de: "Einfärben",
                    en: "Colorize",
                    nl: "Hoofdkleur veranderen"
                },
                active: !1,
                description: {
                    de: "Ändere die Farbe des Leitstellenspiels. THIS FUNCTION IS WORK IN PROGRESS",
                    en: "Change the color of Missionchief.  THIS FUNCTION IS WORK IN PROGRESS",
                    nl: "Verander de kleur van meldkamerspel. DEZE FUNCTIE IS NOG IN AANBOUW."
                },
                source: "/modules/lss-recolor/recolor.user.js",
                noapp: !1,
                inframe: !0,
                develop: !0
            },
            heatmap: {
                name: {
                    de: "LS-Heatmap",
                    en: "LS-Heatmap",
                    nl: "Voertuigspreiding weergeven"
                },
                active: !1,
                description: {
                    de: "Zeigt die Dichte bestimmter Fahrzeugtypen auf der Karte an, um Versorgungslücken zu identifizieren.",
                    en: "Shows the density of selectable vehicle types on map to identify supply gaps.",
                    nl: "Maakt het mogelijk om de verspreiding per voertuigsoort te zien. Hiermee kun je zien waar je nog extra voertuigen nodig hebt voor optimale dekking van je inzetgebied."
                },
                source: "/modules/lss-heatmap/LSHeatmap.user.js",
                noapp: !1,
                inframe: !1,
                develop: !1,
                collisions: ["Layout03", "WachenplanungOnMap"]
            },
            centermap: {
                name: {
                    de: "Center-Map",
                    en: "Center-Map",
                    nl: "KAART CENTREREN"
                },
                active: !1,
                description: {
                    de: "Zentriert die Karte beim Aufruf des Spiels und bei Knopfdruck. Genau so wie du es möchtest.",
                    en: "Centers the map on page load and on click. Just as you prefer.",
                    nl: "Maakt het mogelijk zelf de zoom en het bereik van de kaart in te stellen als je het spel opstart of door gebruik van de Centreer-knop"
                },
                source: "/modules/lss-centermap/Centermap.user.js",
                noapp: !1,
                inframe: !1,
                develop: !1
            },
            missionHelper: {
                name: {
                    de: "Einsatzhelfer",
                    en: "Missionhelper",
                    nl: "Meldinghelper"
                },
                active: !1,
                description: {
                    de: "Zeigt benötigte Fahrzeuge an!.",
                    en: "Shows required vehicles in mission mask.",
                    nl: "Toont de benodigde voertuigen in het meldingscherm."
                },
                source: "/modules/lss-missionHelper/missionHelper.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            statusDispatching: {
                name: {
                    de: "Verbesserte Status 5",
                    en: "Enhanced transport requests",
                    nl: "Verbeterde spraakaanvragen"
                },
                active: !1,
                description: {
                    de: "Schnellere Abarbeitung von Status 5 Meldungen.",
                    en: "Faster processing of transport requests.",
                    nl: "Sneller verwerken van spraakaanvragen."
                },
                source: "/modules/lss-statusDispatching/statusDispatching.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1,
                settings: {
                    has: !1,
                    function_code: "statusDispatching_show_settings"
                }
            },
            managedSettings: {
                name: {
                    de: "Einstellungen",
                    en: "Settings"
                },
                active: !0,
                description: {
                    de: "Globale Einstellungen",
                    en: "Global Settings"
                },
                source: "/modules/lss-managedsettings/ManagedSettings.user.js",
                noapp: !0,
                inframe: !0,
                develop: !1
            },
            missionKeyword: {
                name: {
                    de: "Einsatzstichworte",
                    en: "Mission Keywords",
                    nl: "Steekwoorden bij meldingen"
                },
                active: !1,
                description: {
                    de: "Anzeige von Stichworten bei Einsätzen. Die Stichworte orientieren sich weitgehend an denen für Bayern.",
                    en: "Shows keywords for missions. The keywords are oriented to those used in Bavaria.",
                    nl: "Toont steekwoorden bij de meldingen. Deze steekwoorden zijn grotendeels gebaseerd op de steekwoorden die in Nederlandse hulpverlening gebruikt worden."
                },
                source: "/modules/lss-missionKeyword/missionKeyword.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            missionDate: {
                name: {
                    de: "Meldedatum für Einsätze",
                    en: "Mission Date",
                    nl: "Begintijd melding weergeven"
                },
                active: !1,
                description: {
                    de: "Zeigt das Meldedatum und die vergangene Zeit seit Eingang an. Bei Bedarf auch Anzeige in der Einsatzliste",
                    en: "Shows the date when the mission was generated and the hours/minutes since then. Possibility to show also in Missionlist",
                    nl: "Deze module toont de begintijd en -datum van je melding en laat daarnaast zien hoeveel tijd er verstreken is sinds de melding binnenkwam. Mogelijkheid om ook in Missie lijst te tonen"
                },
                source: "/modules/lss-missionDate/missionDate.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            iconFilter: {
                name: {
                    de: "Icon Gebäude Filter",
                    en: "Icon building filter",
                    nl: "REDESIGN FILTERKNOPPEN GEBOUWEN"
                },
                active: !1,
                description: {
                    de: "Tauscht den Gebäude Filter mit Icons aus.",
                    en: "Replaces the building filter with icons.",
                    nl: "Vervangt de gebouwfilter met nieuwe iconen."
                },
                source: "/modules/lss-iconFilter/iconFilter.user.js",
                noapp: !1,
                inframe: !1,
                develop: !1
            },
            sumDailyMissions: {
                name: {
                    de: "Summe für die tägliche Zusammenfassung",
                    en: "Sum for daily stats",
                    nl: "Totaalweergave in dagsamenvatting"
                },
                active: !1,
                description: {
                    de: "Zeigt eine Summe über Anzahl Einsätze, Patienten, Gefangene und Verbandseinlieferungen in der täglichen Zusammenfassung an.",
                    en: "Shows sums over missions, patients, prisoners and alliance in the daily stats page",
                    nl: "Geeft een totaaloverzicht van het aantal meldingen, patienten, gevangenen en teamopnames."
                },
                source: "/modules/lss-sumDailyMissions/sumDailyMissions.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            aaoZaehler: {
                name: {
                    de: "AAO-Klick-Zähler",
                    en: "Alarm-Regulations-Counter",
                    nl: "AUR-Klik-Teller"
                },
                active: !1,
                description: {
                    de: "Zählt die Klicks auf einen AAO-Button",
                    en: "Counts the clicks on an alarm-regulations-button",
                    nl: "Telt het aantal keer dat een AUR aangeklikt is."
                },
                source: "/modules/lss-AAO-Zaehler/aao-zaehler.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            creditserweiterung: {
                name: {
                    de: "Creditserweiterung",
                    en: "Credits expansion",
                    nl: "Credits-uitbreiding"
                },
                active: !1,
                description: {
                    de: "Fügt ein paar spezielle Informationen zu den Credits in einem Dropdown hinzu",
                    en: "Add some special information about the credits in a drop-down list",
                    nl: "Voegt wat speciale informatie over de credits toe in een vervolgkeuzelijst"
                },
                source: "/modules/lss-creditserweiterung/creditserweiterung.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            displayUserId: {
                name: {
                    de: "User-ID",
                    en: "User-ID",
                    nl: "User-ID"
                },
                active: !1,
                description: {
                    de: "Zeigt die eigene ID in der Kopfzeile an",
                    en: "shows your ID in the header",
                    nl: "Geeft uw eigen ID in de kopregel weer"
                },
                source: "/modules/lss-userid/lss-userId.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            showChatButtonAbove: {
                name: {
                    de: "show Chatbutton Above",
                    en: "show Chatbutton Above",
                    nl: "Toon boven chat-knop"
                },
                active: !1,
                description: {
                    de: "Zeigt den Chatverlauf-Knopf auch in der Kopfzeile des Chats an.",
                    en: "Displays the Chat History button in the chat header.",
                    nl: "Toont de chatgeschiedenisknop  in de chatheader."
                },
                source: "/modules/lss-showChatbuttonAbove/showChatbuttonAbove.user.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            showNotTransportButtonAbove: {
                name: {
                    de: "show Patient entlassen Above"
                },
                active: !1,
                description: {
                    de: "Zeigt den Patient-Entlassen-Knopf bei einem Sprechwunsch unter dem Fahrzeugnamen an."
                },
                source: "/modules/lss-show-notTransportPatientButtonAbove/show-notTransportPatientButtonAbove.user.js",
                noapp: !1,
                supportedLocales: ["de"],
                inframe: !0,
                develop: !1
            },
            fms7ZielAnzeige: {
                name: {
                    de: "Zielanzeige von Status 7"
                },
                active: !1,
                description: {
                    de: ""
                },
                source: "/modules/lss-fms7Zielanzeiger/fms7Zielanzeiger.js",
                supportedLocales: ["de"],
                noapp: !1,
                inframe: !0,
                develop: !0
            },
            bundeslandUndKreisGrenzen: {
                name: {
                    de: "Bundesland- & Kreis-Grenzen auf Karte"
                },
                active: !1,
                description: {
                    de: "Gibt die Möglichkeit, Bundesland bzw. Kreisgrenzen innerhalb von Deutschland anzeigen zu lassen."
                },
                source: "/modules/lss-bundeslandUndKreisGrenzen/bundeslandUndKreisGrenzen.js",
                supportedLocales: ["de"],
                noapp: !1,
                inframe: !0,
                develop: !1,
                developActive: !0
            },
            statusHistory: {
                name: {
                    de: "Status Historie"
                },
                active: !1,
                description: {
                    de: "Zeigt einen Status-Verlauf im jeweiligen Fahrzeug-Fenster an"
                },
                // source: "/modules/lss-statusHistory/statusHistory.js",
                supportedLocales: ["de"],
                noapp: !1,
                inframe: !0,
                develop: !1,
                developActive: !0
            },
            verbandsverwaltung: {
                name: {
                    de: "Verbandsverwaltung",
                    en: "Alliance-extension",
                    nl: "Team-uitbreiding"
                },
                active: !1,
                description: {
                    de: "Verbandsübersicht auf einen Blick im Hauptfenster",
                    en: "Alliance overview at a glance in the main window",
                    nl: "Teamoverzicht in een oogopslag in het hoofdvenster"
                },
                source: "/modules/lss-verbandsverwaltung/verbandsverwaltung.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            },
            overview: {
                name: {
                    de: "Übersicht",
                    en: "overview",
                    nl: "overzicht"
                },
                active: !1,
                description: {
                    de: "Übersicht über alle Fahrzeuge, später auch Wachen.",
                    en: "Overview of all vehicles, later also buildings.",
                    nl: "Overzicht van alle voertuigen, later ook gebouwen."
                },
                source: "/modules/lss-overview/overview.js",
                noapp: !1,
                inframe: !0,
                develop: !1
            }

        }, lssm.appstore = {
            canActivate: function(e) {
                var n = !0;
                if ("collisions" in e)
                    for (var s in e.collisions) {
                        var t = e.collisions[s];
                        lssm.Module[t].active && (n = !1)
                    }
                return n
            },
            hideAllForSettings: function() {
                $("." + lssm.config.prefix + "__appstore_hideForSettings").hide()
            },
            createModulePanels: function() {
                var e = $('<div class="row"><div class="col-sm-4" id="apps_col_0"></div><div class="col-sm-4" id="apps_col_1"></div><div class="col-sm-4" id="apps_col_2"></div></div>'),
                    n = 0,
                    s = $.map(lssm.Module, function(e, n) {
                        return [n]
                    });
                for (var t in s.sort(function(e, n) {
                        "use strict";
                        var s = I18n.t("lssm.apps." + e + ".name").toLowerCase(),
                            t = I18n.t("lssm.apps." + n + ".name").toLowerCase();
                        return s < t ? -1 : s > t ? 1 : 0
                    }), s) {
                    var i = lssm.Module[s[t]],
                        a = !("supportedLocales" in i) || i.supportedLocales.indexOf(I18n.currentLocale()) >= 0;
                    if (!("noapp" in i && !0 === i.noapp) && a) {
                        var o = $('<div style="margin-top:10px;" class="lssm_module' + (i.develop ? " lssm_module_develop" : "") + (i.developActive ? " lssm_module_developActive" : "") + '"><div class="panel panel-default" style="display: inline-block;width:100%;"><div class="panel-body"><span class="pull-right"><div class="onoffswitch"><input class="onoffswitch-checkbox" id="lssm.modules_' + s[t] + '" ' + (i.active ? 'checked="true"' : "") + ' value="' + s[t] + '"name="onoffswitch" type="checkbox"><label class="onoffswitch-label" for="lssm.modules_' + s[t] + '"></label></div></span><h4>' + I18n.t("lssm.apps." + s[t] + ".name") + '</h4>' + (i.developActive ? ("<small>" + I18n.t("lssm.Module_DevelopementActive") + "<br></small>") : "") + '<small style="display:none">' + I18n.t("lssm.apps." + s[t] + ".description") + "</small></div></div></div>");
                        o.find("h4").on("click", function() {
                            "use strict";
                            var e = $(this).next().next();
                            e.is(":hidden") ? e.slideDown("slow") : e.slideUp("slow")
                        }), e.find("#apps_col_" + n).append(o), ++n > 2 && (n = 0)
                    }
                }
                return e
            },
            createModuleMain: function() {
                var e = lssm.config.prefix + "_appstore",
                    n = $('<div class="col-md-12 lssm.appstore" id="' + e + '"><div class="jumbotron"><h1>' + I18n.t("lssm.appstore") + "</h1><p>" + I18n.t("lssm.appstore_welcome") + ".</p><p>" + I18n.t("lssm.appstore_desc") + '</p> <br><p><input type="text" class="form-control pull-right" id="' + e + '_search" placeholder="Suche" style=" width:25%;display:inline-block;"><button type="button" class="btn btn-grey btn-sm" id="' + e + '_close" aria-label="Close"><span aria-hidden="true">' + I18n.t("lssm.back_lss") + '</span></button></p><span class="pull-right"><small>MADE BY:</small>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/81460" target="_blank" class="username-link">@lost</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=lost" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/168556" target="_blank" class="username-link">@Northdegree</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Northdegree" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/201213" target="_blank" class="username-link">@Mausmajor</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=Mausmajor" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/359760" target="_blank" class="username-link">@DLRG-Dominik</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=DLRG-Dominik" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/68742" target="_blank" class="username-link">@MrWeezle</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=MrWeezle" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/675" target="_blank" class="username-link">@SanniHameln</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=SanniHameln" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span>&nbsp;<span class="label label-primary"><a href="https://www.leitstellenspiel.de/profile/205976" target="_blank" class="username-link">@KBOE2</a>&nbsp;<a href="https://www.leitstellenspiel.de/messages/new?target=KBOE2" target="_blank" class="username-link"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></span></div></div>');
                return n.on("keyup", "#" + e + "_search", function() {
                    "use strict";
                    var e = $(this).val();
                    e.length > 0 ? (n.find(".lssm_module:containsci(" + e + ")").show(), n.find(".lssm_module:not(:containsci(" + e + "))").hide()) : n.find(".lssm_module").show()
                }), n.on("click", "#" + e + "_close", function() {
                    lssm.appstore.closeAppstore()
                }), n.on("change", ".onoffswitch-checkbox", function(e) {
                    var n = e.target;
                    if (!n.checked || lssm.appstore.canActivate(lssm.Module[n.value])) lssm.Module[n.value].active = n.checked;
                    else {
                        $(n).prop("checked", !1);
                        var s = '"' + I18n.t("lssm.apps." + n.value + ".name") + '" ' + I18n.t("lssm.cantactivate");
                        for (var t in lssm.Module[n.value].collisions) {
                            var i = lssm.Module[n.value].collisions[t];
                            lssm.Module[i].active && (s += "\r\n• " + I18n.t("lssm.apps." + i + ".name"))
                        }
                        alert(s)
                    }
                }), n.append(this.createModulePanels()), n
            },
            appendAppstore: function() {
                var e = lssm.config.prefix + "_appstore",
                    n = $('<li role="presentation" id="' + e + '"><a id="' + e + '_activate" href="#">' + I18n.t("lssm.appstore") + "</a></li>"),
                    s = $('<div class="row" id="' + e + '_row"></div>').append(this.createModuleMain()),
                    t = $("#navbar-mobile-footer").prev();
                t.attr("id", "content"), n.click(function() {
                    t.hide().after(s), $("#" + lssm.config.prefix + "_appstore_row").show(), $("footer").hide()
                }), $("#" + lssm.config.prefix + "_menu").append(n)
            },
            closeAppstore: function() {
                "use strict";
                var e = this.checkModChanges();
                if (lssm.modules.saveall(), "Reload" === e) location.reload();
                else {
                    $("#" + lssm.config.prefix + "_appstore_row").hide(), $("#content").show(), $("footer").show();
                    var n = "";
                    for (var s in e) lssm.modules.load(e[s]), n += I18n.t("lssm.apps." + e[s] + ".name") + ", ";
                    if ((n = n.substring(0, n.length - 2)).length > 0) {
                        var t = I18n.t("lssm.activated") + " " + n;
                        lssm.notification(t)
                    }
                }
            },
            checkModChanges: function() {
                "use strict";
                var e = [],
                    n = [],
                    s = lssm.settings.get("Modules", {});
                for (var t in lssm.Module) s[t] && !lssm.Module[t].active ? n.push(t) : !s[t] && lssm.Module[t].active && e.push(t);
                return n.length > 0 ? "Reload" : e
            },
            createDropDown: function() {
                var e = $(' <li class="dropdown" id="' + lssm.config.prefix + '_dropdown"><a href="#" id="' + lssm.config.prefix + '_menu_switch" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="label label-success">' + I18n.t("lssm.lssm") + '</span> <b class="caret"></b></a><ul id="' + lssm.config.prefix + '_menu"class="dropdown-menu" role="menu" aria-labelledby="' + lssm.config.prefix + '_menu_switch"> </ul></li>');
                $("#navbar-main-collapse > ul").append(e)
            }
        }, lssm.settings = {
            set: function(e, n) {
                "use strict";
                "object" == typeof n ? localStorage.setItem(lssm.config.prefix + "_" + e, JSON.stringify(n)) : localStorage.setItem(lssm.config.prefix + "_" + e, n)
            },
            get: function(e, n) {
                "use strict";
                let s;
                void 0 === n && (n = null);
                try {
                    s = JSON.parse(localStorage.getItem(lssm.config.prefix + "_" + e)) || n
                } catch (t) {
                    s = localStorage.getItem(lssm.config.prefix + "_" + e) || n
                }
                return s
            },
            remove: function(e) {
                "use strict";
                localStorage.removeItem(e)
            }
        }, lssm.managedSettings = {
            registeredModules: {},
            register: function(e) {
                "use strict";
                if (!e.cols) {
                    let n, s = e.id;
                    if (lssm.settings.get(s)) {
                        let t = lssm.settings.get(s);
                        for (n in e.settings) null != t[n] ? e.settings[n].value = t[n] : e.settings[n].value = e.settings[n].default
                    } else
                        for (n in e.settings) e.settings[n].value = e.settings[n].default;
                    lssm.managedSettings.registeredModules[s] = e
                } else {
                    let s = e.id;
                    for (let i = 0; i < e.cols.length; i++) {
                        let n;
                        let col = e.cols[i];
                        if (lssm.settings.get(s + "_" + col.id)) {
                            let t = lssm.settings.get(s + "_" + col.id);
                            for (n in col.settings) null != t[n] ? col.settings[n].value = t[n] : col.settings[n].value = col.settings[n].default;
                        } else {
                            for (n in col.settings) col.settings[n].value = col.settings[n].default;
                        }
                        e.cols[i].settings = col.settings;
                    }
                    lssm.managedSettings.registeredModules[s] = e
                }
            },
            reset: function(e, t="") {
                if (t === "") {
                    lssm.settings.get(e) && lssm.managedSettings.registeredModules[e] && (lssm.settings.remove(lssm.config.prefix + "_" + e), lssm.managedSettings.register(lssm.managedSettings.registeredModules[e]));
                } else {
                    lssm.settings.get(e) && lssm.managedSettings.registeredModules[e] && (lssm.settings.remove(lssm.config.prefix + "_" + e + "_" + t), lssm.managedSettings.register(lssm.managedSettings.registeredModules[e]));
                }
            },
            getSetting: function(e, n, t="") {
                let s = this.getSettings(e, t);
                return s && void 0 !== s[n] ? s[n].value : null
            },
            getSettings: function(e, t="") {
                if (t === "") {
                    return lssm.managedSettings.registeredModules[e] ? lssm.managedSettings.registeredModules[e].settings : null;
                } else {
                    if (!lssm.managedSettings.registeredModules[e]) {
                        return null;
                    }
                    let settings = null;
                    $.each(lssm.managedSettings.registeredModules[e].cols, function() {
                        if (this.id === t) {
                            settings = this.settings;
                            console.log(this, settings);
                        }
                    });
                    return settings;
                }
            },
            update: function(e) {
                "use strict";
                if (e.cols) {
                    let moduleId = e.id;
                    lssm.managedSettings.registeredModules[moduleId] = e, $.each(e.cols, function() {
                        let t = this.id;
                        let i = {};
                        for (let s in this.settings) i[s] = this.settings[s].value;
                        lssm.settings.set(moduleId + "_" + t, i)
                    })
                } else {
                    let n = e.id;
                    lssm.managedSettings.registeredModules[n] = e;
                    let s, t = {};
                    for (s in e.settings) t[s] = e.settings[s].value;
                    lssm.settings.set(n, t)
                }
            }
        }, lssm.modules = {
            saveall: function() {
                "use strict";
                var e = {};
                for (var n in lssm.Module) e[n] = lssm.Module[n].active;
                lssm.settings.set("Modules", e)
            },
            addLocales: function(e) {
                var n = e.toString();
                if (n in lssm.Module) {
                    var s = ["name", "description"];
                    for (var t in s)
                        if ((t = s[t]) in lssm.Module[n])
                            for (var i in lssm.Module[n][t]) i = i.toString(), n in I18n.translations[i].lssm.apps || (I18n.translations[i].lssm.apps[n] = {}), I18n.translations[i].lssm.apps[n][t] = lssm.Module[n][t][i]
                }
            },
            loadall: function() {
                "use strict";
                try {
                    for (var e in lssm.Module) this.load(e)
                } catch (e) {
                    console.log("LOADALL: " + e.message)
                }
            },
            load: function(e) {
                try {
                    var n = window.location.pathname.length,
                        s = "";
                    "undefined" != typeof user_id && (s = window.location.hostname.toLowerCase().replace("www.", "").split(".")[0]), "?uid=" + s + user_id, this.addLocales(e), lssm.Module[e].active && "develop" !== lssm.Module.status && lssm.appstore.canActivate(lssm.Module[e]) && (n <= 2 || "inframe" in lssm.Module[e] && !0 === lssm.Module[e].inframe) && lssm.Module[e].source && $.getScript(lssm.getlink(lssm.Module[e].source))
                } catch (e) {
                    console.log("On lssm_module load: " + e.message)
                }
            },
            isActive: function(e) {
                return lssm.Module[e].active;
            }
        }, lssm.hook = {
            orgfunctions: {},
            prename: function(e) {
                "use strict";
                var n = this;
                return this.orgfunctions.hasOwnProperty(e) || (this.orgfunctions[e] = window[e], window[e] = function() {
                    $(document).trigger("lssm_" + e + "_before", arguments), n.orgfunctions[e].apply(window, arguments), $(document).trigger("lssm_" + e + "_after", arguments)
                }), "lssm_" + e + "_before"
            },
            postname: function(e) {
                "use strict";
                var n = this;
                return this.orgfunctions.hasOwnProperty(e) || (this.orgfunctions[e] = window[e], window[e] = function() {
                    $(document).trigger("lssm_" + e + "_before", arguments), n.orgfunctions[e].apply(window, arguments), $(document).trigger("lssm_" + e + "_after", arguments)
                }), "lssm_" + e + "_after"
            }
        }, lssm.modal = {
            show: function(e, n) {
                "use strict";
                var s = parseInt($("#lightbox_background").css("width")),
                    t = parseInt($("#lightbox_background").css("height")),
                    i = t - 100;
                592 > i && (i = t - 30);
                var a = s - 70;
                862 > a && (a = s - 0);
                var o = a - 2,
                    l = i - 34,
                    r = (s - a) / 2;
                return $("#lightbox_box").css("width", a + "px").css("height", i + "px").show(), $("#lightbox_box").append('<div class="lightbox_iframe" style="width:' + o + "px;height:" + l + 'px" id="lightbox_iframe_' + iframe_lightbox_number + '"><div id="iframe-inside-container">' + e + "</div></div>"), $("#lightbox_background").show(), $("#lightbox_box").css("left", r + "px"), $("#lightbox_box").css("top", (t - i) / 2 + "px"), $("#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container").css("height", l).css("width", o), void 0 !== n && $(document).bind(lssm.hook.prename("lightboxClose"), n), setTimeout(function() {
                    $("#lightbox_iframe_" + iframe_lightbox_number).show().focus()
                }, 100), "#lightbox_iframe_" + iframe_lightbox_number + " #iframe-inside-container"
            }
        },
        function(e, n) {
            n("head").prepend('<link href="' + lssm.getlink("/lss-manager-v3/css/main.css") + '" rel="stylesheet" type="text/css">'), lssm.appstore.createDropDown(), n("#" + lssm.config.prefix + "_menu").prepend('<li class="menu-center"><a href="' + lssm.config.github + '" target="_blank">' + ((e.t("lssm.version") != "") ? (e.t("lssm.version") + ": ") : '') + lssm.config.version + '</a></li><li class="divider"></li>'), "undefined" == typeof user_id ? n("#" + lssm.config.prefix + "_menu").append('<li class="menu-center">' + e.t("lssm.login") + "</li>") : n.getScript(lssm.getlink("/lss-manager-v3/helperfunctions.js")).fail(function() {
                n("#map_outer").before('<div class="alert alert-danger alert-dismissable" style="text-align:center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + e.t("lssm.cantload") + "</div>")
            }).done(function() {
                ! function() {
                    n("head").append('<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"><\/script>').append('<script src="' + lssm.getlink("/lss-manager-v3/js/highcharts.min.js") + '" type="text/javascript"><\/script>').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">');
                    var e = lssm.settings.get("Modules") || {};
                    for (var s in e) {
                        var t = s.toString();
                        t in lssm.Module != 0 ? !1 === lssm.Module[s].active && (lssm.Module[s].active = e[s]) : console.log(t + " is not a valid app. Skipping.")
                    }
                    lssm.modules.loadall(), lssm.appstore.appendAppstore()
                }()
            })
        }(I18n, jQuery);
} else {
    alert("Du nutzt derzeit KBOE2's Entwicklungs-Version vom LSS-Manager. Da du nicht als Tester von KBOE2 zugelassen wurdest, kannst du diese Version nicht nutzen.\nUser, die gerne Tester sein möchten (oder diese Entwicklungs-Version bisher schon nutzten), melden sich bitte mit ihrer User-ID bei KBOE2!");
}
