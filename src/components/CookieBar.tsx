import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import ReactGA from "react-ga4";

export default function Cookie() {
  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,
      autoClearCookies: true,
      cookie: {
        name: "amate_web",
        domain: "amate.sk",
      },
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "middle center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      onFirstConsent: ({ cookie }) => {
        console.log("onFirstConsent fired", cookie);
      },
      onConsent: ({ cookie }) => {
        console.log("onConsent fired!", cookie);
      },
      onChange: ({ changedCategories, changedServices }) => {
        console.log("onChange fired!", changedCategories, changedServices);
      },
      onModalReady: ({ modalName }) => {
        console.log("ready:", modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log("visible:", modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log("hidden:", modalName);
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
            ],
            reloadPage: true,
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {
                ReactGA.initialize("G-XTWHCGRSLR");
              },
              onReject: () => {
                ReactGA.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
              },
            },
          },
        },
      },
      language: {
        default: "sk",
        translations: {
          sk: {
            consentModal: {
              title: "Preferencie ochrany osobných údajov",
              description: `
              Predtým, než budete môcť pokračovať na našu webovú stránku, potrebujeme váš súhlas.<br/>
              Ak máte menej ako 16 rokov a chcete poskytnúť súhlas s nepovinnými službami, musíte požiadať svojich zákonných zástupcov o povolenie.<br/>
              Na našej webovej stránke používame súbory cookies a iné technológie. Niektoré z nich sú nevyhnutné, zatiaľ čo iné nám pomáhajú zlepšovať túto webovú stránku a vaše používateľské skúsenosti. Osobné údaje môžu byť spracované (napríklad IP adresy) na účely personalizovaných reklám a obsahu alebo merania reklám a obsahu. Ďalšie informácie o používaní vašich údajov nájdete v našej <a href="/data-privacy" target="_blank">zásadách ochrany osobných údajov</a>. Nie je povinné súhlasiť so spracovaním vašich údajov na použitie tohto ponúkaného produktu. Vašu voľbu môžete kedykoľvek zmeniť alebo upraviť v nastaveniach. Je však možné, že kvôli individuálnym nastaveniam nie sú k dispozícii všetky funkcie webovej stránky.<br/>
              <hr style="border-top: 1px solid #ccc; margin: 10px 0;"/>
              <span style="font-size: 0.9em;">
                Niektoré služby spracúvajú osobné údaje v USA. S vašim súhlasom s používaním týchto služieb súhlasíte aj so spracovaním vašich údajov v USA podľa čl. 49 (1) písm. a GDPR. Súdny dvor EÚ považuje USA za krajinu s nedostatočnou úrovňou ochrany osobných údajov podľa štandardov EÚ. Existuje napríklad riziko, že americké úrady spracujú osobné údaje v rámci dohľadových programov bez možnosti sťažovania sa pre občanov EÚ.<br/>
              </span>
              `,
              acceptAllBtn: "Súhlasím so všetkými cookies",
              acceptNecessaryBtn: "Prijať len nevyhnutné cookies",
              showPreferencesBtn:
                "Individuálne nastavenia ochrany osobných údajov",
              closeIconLabel: "Zavrieť a odmietnuť všetko",
              footer: `
                      <a href="/impresum" target="_blank">Impresum</a>
                      <a href="/data-privacy" target="_blank">Zásady ochrany osobných údajov</a>
                  `,
            },
            preferencesModal: {
              title: "Preferencie ochrany osobných údajov",
              acceptAllBtn: "Súhlasím so všetkými cookies",
              acceptNecessaryBtn: "Prijať len nevyhnutné cookies",
              savePreferencesBtn: "Uložiť aktuálne nastavenia",
              closeIconLabel: "Zavrieť modálne okno",
              serviceCounterLabel: "Služba|Služby",
              sections: [
                {
                  title: "Vaše preferencie ochrany osobných údajov",
                  description: `Tu nájdete prehľad všetkých používaných cookies. Môžete udeliť súhlas alebo zobraziť ďalšie informácie a vybrať konkrétne cookies.`,
                },
                {
                  title: "Neoddeliteľné",
                  description:
                    "Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky a nemôžu byť deaktivované.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: "Tabuľka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: "Amate_web",
                        domain: location.hostname,
                        desc: "Tento cookie uchováva preferencie súhlasu používateľa s cookies na tejto webovej stránke. Ukladá si, či používateľ prijal alebo odmietol určité kategórie cookies.",
                      },
                    ],
                  },
                },
                {
                  title: "Funkčné",
                  description:
                    "Tieto cookies zbierajú informácie o tom, ako používate našu webovú stránku. Všetky údaje sú anonymizované a nemožno ich použiť na identifikáciu vás.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "Tabuľka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        desc: "Tento cookie používa Google Analytics na rozlišovanie používateľov a obmedzenie počtu požiadaviek. Pomáha sledovať používanie webovej stránky a výkonnostné metriky.",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        desc: "Tento cookie používa Google Analytics na rozlišovanie používateľov. Ukladá a aktualizuje jedinečnú hodnotu pre každú navštívenú stránku.",
                      },
                    ],
                  },
                },
                {
                  title: "Ďalšie informácie",
                  description:
                    'Ak máte otázky týkajúce sa našej politiky cookies a vašich možností, kontaktujte nás prosím na adrese <a href="mailto:info@3-logy.com">info@3-logy.com</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
