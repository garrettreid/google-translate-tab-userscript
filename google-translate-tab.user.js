// ==UserScript==
// @name         Tab in Google Translate
// @namespace    https://garrettreid.com
// @version      1.0
// @description  Swap languages with Tab. Especially useful in Safari.
// @author       Garrett Reid
// @license      MIT; https://opensource.org/licenses/MIT
// @copyright    2023, Garrett Reid (https://garrettreid.com)
// @homepageURL  https://github.com/garrettreid/google-translate-tab-userscript
// @supportURL   https://github.com/garrettreid/google-translate-tab-userscript/issues
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @run-at       document-end
// @include      http://translate.google.tld/*
// @include      https://translate.google.tld/*
// ==/UserScript==

(function() {
    'use strict';

    var domain_to_prompt = {
        "translate.google.ac": "Swap languages (Cmd+Shift+S)",
        "translate.google.ad": "Intercanvia els idiomes (Cmd+Maj+S)",
        "translate.google.ae": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.al": "Swap languages (Cmd+Shift+S)",
        "translate.google.am": "Լեզուները տեղերով փոխել (Cmd+Shift+S)",
        "translate.google.as": "Swap languages (Cmd+Shift+S)",
        "translate.google.at": "Sprachen tauschen (Befehlstaste + Umschalt + S)",
        "translate.google.az": "Dilləri dəyişin (Cmd+Shift+S)",
        "translate.google.ba": "Zamijeni jezike (Cmd+Shift+S)",
        "translate.google.be": "Talen omwisselen (Cmd+Shift+S)",
        "translate.google.bf": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.bg": "Размяна на езиците (Cmd+Shift+S)",
        "translate.google.bi": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.bj": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.bs": "Swap languages (Cmd+Shift+S)",
        "translate.google.bt": "Swap languages (Cmd+Shift+S)",
        "translate.google.by": "Памяняць мовы (Cmd+Shift+S)",
        "translate.google.ca": "Swap languages (Cmd+Shift+S)",
        "translate.google.cat": "Intercanvia els idiomes (Cmd+Maj+S)",
        "translate.google.cc": "Swap languages (Cmd+Shift+S)",
        "translate.google.cd": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.cf": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.cg": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.ch": "Sprachen tauschen (Befehlstaste + Umschalt + S)",
        "translate.google.ci": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.cl": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.cm": "Intervertir les langues (Cmd+Maj+S)",
        //    "translate.google.cn": "", redirects to .com.hk
        "translate.google.co.ao": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.co.bw": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.ck": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.cr": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.co.id": "Tukar bahasa (Cmd+Shift+S)",
        "translate.google.co.il": "החלפת שפות (Cmd+Shift+S)",
        "translate.google.co.in": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.jp": "言語を入れ替え（Cmd+Shift+S）",
        "translate.google.co.ke": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.kr": "언어 전환(Cmd+Shift+S)",
        "translate.google.co.ls": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.ma": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.co.mz": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.co.nz": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.th": "สลับภาษา (Cmd+Shift+S)",
        "translate.google.co.tz": "Badilisha lugha (Cmd+Shift+S)",
        "translate.google.co.ug": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.uk": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.uz": "Tillarni almashtirish (Cmd+Shift+S)",
        "translate.google.co.ve": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.co.vi": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.za": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.zm": "Swap languages (Cmd+Shift+S)",
        "translate.google.co.zw": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.af": "تعویض زبان‌ها (Cmd+Shift+S)",
        "translate.google.com.ag": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.ai": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.ar": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.au": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.bd": "ভাষা পরিবর্তন করুন (Cmd+Shift+S)",
        "translate.google.com.bh": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.bn": "Tukar bahasa (Cmd+Shift+S)",
        "translate.google.com.bo": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.br": "Alternar idiomas (Cmd+Shift+S)",
        "translate.google.com.bz": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.co": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.cu": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.cy": "Εναλλαγή γλωσσών (Cmd+Shift+S)",
        "translate.google.com.do": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.ec": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.eg": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.et": "ቋንቋዎች ቀያይር (Cmd+Shift+S)",
        "translate.google.com.fj": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.gh": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.gi": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.gt": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.hk": "語言對調 (Cmd + Shift + S 鍵)",
        "translate.google.com.jm": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.kh": "ប្តូរ​ភាសា (Cmd+Shift+S)",
        "translate.google.com.kw": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.lb": "تبديل اللغات (Cmd+Shift+S)",
        //    "translate.google.com.lc": "",  does not resolve
        "translate.google.com.ly": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.mm": "ဘာသာစကား ဖလှယ်ရန် (Cmd+Shift+S)",
        "translate.google.com.mt": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.mx": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.my": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.na": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.nf": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.ng": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.ni": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.np": "भाषाहरू बदल्नहोस् (Cmd+Shift+S)",
        "translate.google.com.om": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.pa": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.pe": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.pg": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.ph": "Maglipat ng mga wika (Cmd+Shift+S)",
        "translate.google.com.pk": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.pr": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.py": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.qa": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.sa": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.com.sb": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.sg": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.sl": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.sv": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.tj": "Иваз кардани забонҳо (Cmd+Shift+S)",
        "translate.google.com.tr": "Dil değiştir (Cmd+Üst Karakter+S)",
        "translate.google.com.tw": "語言對調 (Cmd + Shift + S 鍵)",
        "translate.google.com.ua": "Поміняти мови місцями (Cmd+Shift+S)",
        "translate.google.com.uy": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.com.vc": "Swap languages (Cmd+Shift+S)",
        "translate.google.com.vn": "Hoán đổi ngôn ngữ (Cmd+Shift+S)",
        "translate.google.com": "Swap languages (Cmd+Shift+S)",
        "translate.google.cv": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.cz": "Zaměnit jazyky (Cmd+Shift+S)",
        "translate.google.de": "Sprachen tauschen (Befehlstaste + Umschalt + S)",
        "translate.google.dj": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.dk": "Skrift sprog (Cmd+Shift+S)",
        "translate.google.dm": "Swap languages (Cmd+Shift+S)",
        "translate.google.dz": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.ee": "Keelte vahetamine (Cmd+Shift+S)",
        "translate.google.es": "Intercambiar idiomas (⌘ + Mayús + S)",
        "translate.google.fi": "Vaihda kieliä (Cmd+vaihto+S)",
        "translate.google.fm": "Swap languages (Cmd+Shift+S)",
        "translate.google.fr": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.ga": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.ge": "ენების გაცვლა (Cmd+Shift+S)",
        //    "translate.google.gf": "",    404 not found
        "translate.google.gg": "Swap languages (Cmd+Shift+S)",
        "translate.google.gl": "Skrift sprog (Cmd+Shift+S)",
        "translate.google.gm": "Swap languages (Cmd+Shift+S)",
        "translate.google.gp": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.gr": "Εναλλαγή γλωσσών (Cmd+Shift+S)",
        "translate.google.gy": "Swap languages (Cmd+Shift+S)",
        "translate.google.hn": "Intercambiar idiomas (Cmd + mayúscula + S)",
        "translate.google.hr": "Zamjena jezika (Cmd + Shift + S)",
        "translate.google.ht": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.hu": "Nyelvek felcserélése (Cmd+Shift+S)",
        "translate.google.ie": "Swap languages (Cmd+Shift+S)",
        "translate.google.im": "Swap languages (Cmd+Shift+S)",
        //    "translate.google.io": "",    404 not found
        "translate.google.iq": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.is": "Víxla tungumálum (Cmd+Shift+S)",
        "translate.google.it": "Cambia lingue (COMANDO + MAIUSC + S)",
        "translate.google.je": "Swap languages (Cmd+Shift+S)",
        "translate.google.jo": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.kg": "Тилдерди алмаштыруу (Cmd+Shift+S)",
        "translate.google.ki": "Swap languages (Cmd+Shift+S)",
        "translate.google.kz": "Обратный перевод (Cmd + Shift + S)",
        "translate.google.la": "ສັບປ່ຽນພາສາ (Cmd+Shift+S)",
        "translate.google.li": "Sprachen tauschen (Befehlstaste + Umschalt + S)",
        "translate.google.lk": "භාෂා මාරු කරන්න (Cmd+Shift+S)",
        "translate.google.lt": "Sukeisti kalbas („Cmd+Shift+S“)",
        "translate.google.lu": "Sprachen tauschen (Befehlstaste + Umschalt + S)",
        "translate.google.lv": "Apmainīt valodas (Cmd+Shift+S)",
        "translate.google.md": "Comutați între limbi (Cmd+Shift+S)",
        "translate.google.me": "Замените језике (Cmd+Shift+S)",
        "translate.google.mg": "Soloina ny fiteny (Cmd + Maj + S)",
        "translate.google.mk": "Замени ги јазиците (Cmd+Shift+S)",
        "translate.google.ml": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.mn": "Хэл солих (Cmd+Shift+S)",
        "translate.google.ms": "Swap languages (Cmd+Shift+S)",
        "translate.google.mu": "Swap languages (Cmd+Shift+S)",
        "translate.google.mv": "Swap languages (Cmd+Shift+S)",
        "translate.google.mw": "Swap languages (Cmd+Shift+S)",
        "translate.google.ne": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.nl": "Talen omwisselen (Cmd+Shift+S)",
        "translate.google.no": "Bytt språk (Cmd+Shift+S)",
        "translate.google.nr": "Swap languages (Cmd+Shift+S)",
        "translate.google.nu": "Swap languages (Cmd+Shift+S)",
        "translate.google.pl": "Zamiana języków (Cmd + Shift + S)",
        "translate.google.pn": "Swap languages (Cmd+Shift+S)",
        "translate.google.ps": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.pt": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.ro": "Comutați între limbi (Cmd+Shift+S)",
        "translate.google.rs": "Замените језике (Cmd+Shift+S)",
        "translate.google.ru": "Обратный перевод (Cmd + Shift + S)",
        "translate.google.rw": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.sc": "Swap languages (Cmd+Shift+S)",
        "translate.google.se": "Byt språk (Cmd + Skift + S)",
        "translate.google.sh": "Swap languages (Cmd+Shift+S)",
        "translate.google.si": "Zamenjaj jezika (Cmd + Shift + S)",
        "translate.google.sk": "Vymeniť jazyky (Cmd+Shift+S)",
        "translate.google.sm": "Cambia lingue (COMANDO + MAIUSC + S)",
        "translate.google.sn": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.so": "Kala beddel luqaadaha (Cmd+Shift+S)",
        "translate.google.sr": "Talen omwisselen (Cmd+Shift+S)",
        "translate.google.st": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.td": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.tg": "Intervertir les langues (Cmd+Maj+S)",
        "translate.google.tk": "Swap languages (Cmd+Shift+S)",
        "translate.google.tl": "Trocar idiomas (Cmd+Shift+S)",
        "translate.google.tm": "Обратный перевод (Cmd + Shift + S)",
        "translate.google.tn": "تبديل اللغات (Cmd+Shift+S)",
        "translate.google.to": "Swap languages (Cmd+Shift+S)",
        "translate.google.tt": "Swap languages (Cmd+Shift+S)",
        "translate.google.vg": "Swap languages (Cmd+Shift+S)",
        "translate.google.vu": "Swap languages (Cmd+Shift+S)",
        "translate.google.ws": "Swap languages (Cmd+Shift+S)"
    };

    // Your code here...

    function log(str){
        //var prefix = browser.runtime.getManifest().name;
        var prefix="Tab in Google Translate";
        console.log(prefix + ": " + str);
    }

    function find_hook_string() {
        var testkeys = ["Cmd+Shift+S", "Cmd+Maj+S", "Befehlstaste + Umschalt + S", "Cmd + mayúscula + S", "Cmd + Shift + S", "Cmd+Üst Karakter+S", "⌘ + Mayús + S", "Cmd+vaihto+S", "COMANDO + MAIUSC + S", "Cmd + Shift + S" /* with 2x NBSP */, "Cmd + Shift + S" /* with 4x NBSP */, "Cmd + Maj + S", "Cmd + Skift + S"];

        for (var node in document.querySelectorAll("button[aria-label]")) {
            var str = node.getAttribute("aria-label");
            for(var i = 0; i < testkeys.length; i++) {
                if (str.includes(testkeys[i])) {
                    return(str);
                }
            }
        }
    }

    log("Started loading");

    var swaptext;
    var swapLanguagesButton;
    var did_search = false;

    if(!(location.hostname in domain_to_prompt)) {
        swaptext = find_hook_string();
        log("No known text for new domain " + location.hostname + ", found hook point '" + swaptext + "'");
        did_search = true;
    } else if (domain_to_prompt[location.hostname] === "") {
        swaptext = find_hook_string();
        log("No defined text for domain " + location.hostname + ", found hook point '" + swaptext + "'");
        did_search = true;
    }
    try {
        var sourceTextArea = document.querySelector('[spellcheck="false"]');

        if(!did_search) {
            swaptext = domain_to_prompt[location.hostname];
        }
        swapLanguagesButton = document.querySelector('[aria-label="' + swaptext + '"]');

        if(swapLanguagesButton == null) {
            log("Unable to find hook '" + swaptext + "'");

            if(!did_search) {
                swaptext = find_hook_string();
                swapLanguagesButton = document.querySelector('[aria-label="' + swaptext + '"]');
                if(swapLanguagesButton == null) {
                    log("Found new hook string '" + swaptext + "', but no matches to hook.");
                } else {
                    log("Found new hook string '" + swaptext + "' and hooked button of type " + typeof(swapLanguagesButton));
                    sourceTextArea.addEventListener('keydown', onKeyDown, { capture: true });
                }
            } else {
                log("No matches to hook.");
            }
        } else {
            log("Hooked button of type " + typeof(swapLanguagesButton) + " using hook point '" + swaptext + "'");
            sourceTextArea.addEventListener('keydown', onKeyDown, { capture: true });
        }
    } catch(err) {
        log("Failed to initialize due to: " + err + ". Looking for swap text '" + swaptext + "'");
    }

    function onKeyDown(event) {
        var tabKeyCode = 'Tab';

        if (event.code === tabKeyCode) {
            swapLanguages();
            event.preventDefault(); // prevents tabbing to new element
        }
    }

    function swapLanguages() {
        try {
            swapLanguagesButton.click();
            log("Simulated click on swap language button.");
        } catch (err) {
            log("Failed to click swap languages due to: " + err);
        }
    }

})();
