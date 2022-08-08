import Footer from "@components/Footer";
import PrivacyPolicyLayout from "@components/PrivacyPolicyLayout";
import { privacyTableOfContents } from "@config/constants";
import React from "react";

const Privacy = () => {
  return (
    <>
      <PrivacyPolicyLayout
        title="Datenschutzerklärung"
        tableOfContents={privacyTableOfContents}
      >
        <div className="info-content">
          <div className="info-content__title" id="info-block-1">
            Einleitung und allgemeine Angaben
          </div>
          <div className="info-content__text">
            <p>
              Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer
              personenbezogenen Daten ist uns ein sehr wichtiges Anliegen. Im
              Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die
              durch Ihre Nutzung unserer Website erfasst werden. Die
              Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen
              Regelungen zum Datenschutz.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-2">
            Verantwortliche Stelle im Sinne des Datenschutzrechts
          </div>
          <div className="info-content__text">
            <p style={{ marginBottom: "0px" }}>YEOGA GmbH </p>
            <p style={{ marginBottom: "0px" }}> Neckarstraße 44</p>
            <p style={{ marginBottom: "1rem" }}> 65462 Ginsheim-Gustavsburg </p>
            <p />
            <div> Geschäftsführer </div>
            <div className="bold"> Jan Kratochvil </div>
            <p />
            <p />
            <div> Handelsregister/ </div>
            <div className="bold"> Nr.: HRB 100633 </div>
            <p />
            <p />
            <div> Registergericht </div>
            <div className="bold"> Amtsgericht Darmstadt </div>
            <p />
            <p style={{ marginBottom: "0px" }} />
            <p>
              <a href="mailto:info@yeoga.de">info@yeoga.de</a>{" "}
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-3">
            Begriffsbestimmungen
          </div>
          <div className="info-content__text">
            <p>
              Unsere Datenschutzerklärung soll für jedermann einfach und
              verständlich sein. In dieser Datenschutzerklärung werden in der
              Regel die offiziellen Begriffe der Datenschutzgrundverordnung
              (DSGVO) verwendet. Die offiziellen Begriffsbestimmungen werden in
              Art. 4 DSGVO erläutert.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-4">
            Datenverarbeitung durch den Besuch unserer Website
          </div>
          <div className="info-content__text">
            <p>
              Wenn Sie unsere Webseiten aufrufen, ist es technisch notwendig,
              dass über Ihren Internetbrowser Daten an unseren Webserver
              übermittelt werden. Folgende Daten werden während einer laufenden
              Verbindung zur Kommunikation zwischen Ihrem Internetbrowser und
              unserem Webserver aufgezeichnet:
            </p>
            <ul>
              <li>Datum und Uhrzeit der Anforderung </li>
              <li> Name der angeforderten Datei </li>
              <li> Seite, von der aus die Datei angefordert wurde </li>
              <li> Zugriffsstatus </li>
              <li> Verwendeter Webbrowser und verwendetes Betriebssystem </li>
              <li> (Vollständige) IP-Adresse des anfordernden Rechners </li>
              <li> Übertragene Datenmenge</li>
            </ul>
            <p />
            <p>
              {" "}
              Die aufgelisteten Daten erheben wir, um einen reibungslosen
              Verbindungsaufbau der Website zu gewährleisten und eine
              komfortable Nutzung unserer Website durch die Nutzer zu
              ermöglichen. Zudem dient die Logdatei der Auswertung der
              Systemsicherheit und -stabilität sowie administrativen Zwecken.
              Rechtsgrundlage für die vorübergehende Speicherung der Daten bzw.
              der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              {" "}
              Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr
              von Angriffsversuchen auf unseren Webserver, werden diese Daten
              von uns kurzzeitig gespeichert. Anhand dieser Daten ist uns ein
              Rückschluss auf einzelne Personen nicht möglich. Nach spätestens
              30 Tagen werden die Daten durch Verkürzung der IP-Adresse auf
              Domainebene anonymisiert, sodass es nicht mehr möglich ist, einen
              Bezug zum einzelnen Nutzer herzustellen.
            </p>
            <p>
              {" "}
              In anonymisierter Form werden die Daten daneben ggf. zu
              statistischen Zwecken verarbeitet. Eine Speicherung dieser Daten
              zusammen mit anderen personenbezogenen Daten des Nutzers, ein
              Abgleich mit anderen Datenbeständen oder eine Weitergabe an Dritte
              findet zu keinem Zeitpunkt statt.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-5">
            Google Analytics
          </div>
          <div className="info-content__text">
            <p>
              Unsere Website benutzt Google Analytics, einen Webanalysedienst
              der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Ireland. („Google“). Google Analytics verwendet sogenannte
              Cookies. Das sind Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglichen. Die durch das Cookie erzeugten Informationen über
              Ihre Benutzung dieser Website werden in der Regel an einen Server
              von Google in den USA übertragen und dort gespeichert. Wir setzen
              Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das
              bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von
              Mitgliedstaaten der Europäischen Union oder in anderen
              Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum gekürzt, wodurch eine Personenbeziehbarkeit
              ausgeschlossen werden kann. Google Inc. mit Sitz in den USA ist
              für das US-europäische Datenschutzübereinkommen „Privacy Shield“
              zertifiziert, welches die Einhaltung des in der EU geltenden
              Datenschutzniveaus gewährleistet.
            </p>
            <p>
              {" "}
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO bzw. §
              15 Abs. 3 TMG auf Grundlage unseres berechtigten Interesses an der
              statistischen Analyse des Nutzerverhaltens zu Optimierungs- und
              Marketingzwecken.
            </p>
            <p>
              {" "}
              Im Auftrag des Betreibers dieser Website wird Google diese
              Informationen benutzen, um Ihre Nutzung der Website auszuwerten,
              um Reports über die Websiteaktivitäten zusammenzustellen und um
              weitere mit der Websitenutzung und der Internetnutzung verbundene
              Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die
              im Rahmen von Google Analytics von Ihrem Browser übermittelte
              IP-Adresse wird nicht mit anderen Daten von Google
              zusammengeführt. Die Nutzungsbedingungen von Google Analytics und
              Informationen zum Datenschutz können über die folgenden Links
              abgerufen werden:{" "}
              <a
                href="http://www.google.com/analytics/terms/de.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.google.com/analytics/terms/de.html
              </a>{" "}
              sowie unter{" "}
              <a
                href="https://www.google.de/intl/de/policies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.de/intl/de/policies/
              </a>
              . Sie können die Speicherung der Cookies durch eine entsprechende
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich nutzen können.
              Sie können darüber hinaus die Erfassung der durch das Cookie
              erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
              Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
              durch Google verhindern, indem Sie das unter der URL{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>{" "}
              verfügbare Browser-Plug-in herunterladen und installieren. Ein
              Klick auf folgenden Link verhindert die Erfassung durch Google
              Analytics, indem ein sogenanntes Opt-out-Cookie gesetzt wird:
            </p>
            <p> Deaktivierung von Google Analytics</p>
            <p>
              {" "}
              Informationen zum Umgang mit Nutzerdaten bei Google Analytics
              finden Sie in der Datenschutzerklärung von Google:
            </p>
            <p>
              {" "}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-6">
            Einsatz von Matomo
          </div>
          <div className="info-content__text">
            <p>
              Auf dieser Website werden unter Einsatz der
              Webanalysedienst-Software Matomo (
              <a
                href="http://www.matomo.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.matomo.org
              </a>
              ), einem Dienst des Anbieters InnoCraft Ltd., 150 Willis St, 6011
              Wellington, Neuseeland, („Matomo“) auf Basis Ihrer erteilten
              Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO zum Zweck der
              Webseitenanalyse automatisch Daten erhoben.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-7">
            Google Maps
          </div>
          <div className="info-content__text">
            <p>
              Unsere Homepage nutzt über eine Schnittstelle den
              Online-Kartendienstanbieter Google Maps. Anbieter des
              Kartendienstes ist Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland. Zur Nutzung der Funktionalitäten von
              Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese
              Informationen werden an einen Server von Google in den USA
              übertragen und dort gespeichert. Der Anbieter dieser Seite hat
              keinen Einfluss auf diese Datenübertragung. Die Nutzung des
              Kartendienstes Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unseres Online-Angebots und an der
              einfacheren Auffindbarkeit der von uns auf der Website angeführten
              Adressen. Dies stellt ein berechtigtes Interesse im Sinne von Art.
              6 Abs. 1 lit. f DSGVO dar. Weitere Informationen zum Umgang mit
              Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://www.google.de/intl/de/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.de/intl/de/policies/privacy/
              </a>{" "}
            </p>
            <p>
              {" "}
              Opt-out:{" "}
              <a
                href="https://www.google.com/settings/ads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/settings/ads/
              </a>
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-8">
            Cookies
          </div>
          <div className="info-content__text">
            <p>
              Unsere Website, sowie Drittanbieter setzen Cookies ein, die vom
              Browser auf Ihrem Gerät gespeichert werden und die bestimmten
              Einstellungen zur Nutzung der Website enthalten (z. B. zur
              laufende Sitzung). Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
              sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und
              die Ihr Browser speichert. Die meisten der von uns verwendeten
              Cookies sind so genannte Session-Cookies, welche nach dem
              Schließen des Browsers automatisch gelöscht werden. Andere Cookies
              bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen oder
              die Speicherdauer abläuft. Diese Cookies ermöglichen es uns, Ihren
              Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p>
              {" "}
              Teilweise dienen die Cookies dazu, durch Speicherung von
              Einstellungen Websiteprozesse zu vereinfachen (z. B. das Vorhalten
              bereits ausgewählter Optionen). Sofern durch einzelne von uns
              implementierte Cookies auch personenbezogene Daten verarbeitet
              werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO
              entweder zur Durchführung des Vertrages oder gemäß Art. 6 Abs. 1
              lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der
              bestmöglichen Funktionalität der Website sowie einer
              kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Die Cookie Einstellungen
              können unter den folgenden Links für die jeweiligen Browser
              verwaltet werden.
            </p>
            <ul>
              <li>
                Firefox:
                <a href=" https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen">
                  {" "}
                  https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
                </a>
              </li>
              <li>
                Internet Explorer:
                <a href=" http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies">
                  {" "}
                  http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies
                </a>
              </li>
              <li>
                Chrome:
                <a href=" http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647">
                  {" "}
                  http://support.google.com/chrome/bin/answer.py?hl=de&amp;hlrm=en&amp;answer=95647
                </a>
              </li>
              <li>
                Safari:
                <a href=" https://support.apple.com/kb/ph21411?locale=de_DE">
                  {" "}
                  https://support.apple.com/kb/ph21411?locale=de_DE
                </a>
              </li>
              <li>
                Opera:
                <a href=" https://help.opera.com/en/latest/web-preferences/#cookies">
                  {" "}
                  https://help.opera.com/en/latest/web-preferences/#cookies
                </a>
              </li>
            </ul>
            <p />
            <p>
              Sie können auch die Cookies vieler Unternehmen und Funktionen
              einzeln verwalten, die für Werbung eingesetzt werden. Verwenden
              Sie dazu die entsprechenden Nutzertools, abrufbar unter{" "}
              <a href="https://www.aboutads.info/choices" target="_blank">
                https://www.aboutads.info/choices/
              </a>{" "}
              oder{" "}
              <a
                href="http://www.youronlinechoices.com/uk/your-ad-choices"
                target="_blank"
              >
                http://www.youronlinechoices.com/uk/your-ad-choices
              </a>{" "}
              Die meisten Browser bieten zudem eine sog. „Do-Not-Track-Funktion“
              an, mit der Sie angeben können, dass Sie nicht von Websites
              „verfolgt“ werden möchten. Wenn diese Funktion aktiviert ist,
              teilt der jeweilige Browser Werbenetzwerken, Websites und
              Anwendungen mit, dass Sie nicht zwecks verhaltensbasierter Werbung
              und Ähnlichem verfolgt werden möchten. Informationen und
              Anleitungen, wie Sie diese Funktion bearbeiten können, erhalten
              Sie je nach Anbieter Ihres Browsers, unter den nachfolgenden
              Links:
            </p>
            <ul>
              <li>
                Google Chrome:
                <a href=" https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&hl=de">
                  {" "}
                  https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&amp;hl=de
                </a>
              </li>
              <li>
                Mozilla Firefox:
                <a href=" https://www.mozilla.org/de/firefox/dnt/">
                  {" "}
                  https://www.mozilla.org/de/firefox/dnt/
                </a>
              </li>
              <li>
                Internet Explorer:
                <a href=" https://support.microsoft.com/de-de/help/17288/windows-internet-explorer-11-use-do-not-track">
                  {" "}
                  https://support.microsoft.com/de-de/help/17288/windows-internet-explorer-11-use-do-not-track
                </a>
              </li>
              <li>
                Opera:
                <a href=" http://help.opera.com/Windows/12.10/de/notrack.html">
                  {" "}
                  http://help.opera.com/Windows/12.10/de/notrack.html
                </a>
              </li>
              <li>
                Safari:
                <a href=" https://support.apple.com/kb/PH21416?locale=de_DE">
                  {" "}
                  https://support.apple.com/kb/PH21416?locale=de_DE
                </a>
              </li>
            </ul>
            <p />
            <p>
              Zusätzlich können Sie standardmäßig das Laden sog. Scripts
              verhindern. NoScript erlaubt das Ausführen von JavaScripts, Java
              und anderen Plug-ins nur bei vertrauenswürdigen Domains Ihrer
              Wahl. Informationen und Anleitungen, wie Sie diese Funktion
              bearbeiten können, erhalten Sie über den Anbieter Ihres Browsers
              (z. B. für Mozilla Firefox unter:{" "}
              <a
                href="https://addons.mozilla.org/de/firefox/addon/noscript/"
                target="_blank"
              >
                https://addons.mozilla.org/de/firefox/addon/noscript/
              </a>
              ). Bitte beachten Sie, dass bei der Deaktivierung von Cookies die
              Funktionalität dieser Website eingeschränkt sein kann.
            </p>
            <p> Es werden folgende Cookie-Arten unterschieden:</p>
            <ul>
              <li>
                Notwendige, essentielle Cookies: Essentielle Cookies sind
                Cookies, die zum Betrieb der Webseite unbedingt erforderlich
                sind, um bestimmte Funktionen der Webseite wie Logins, Warenkorb
                oder Nutzereingaben z.B. bzgl. Sprache der Webseite zu
                speichern.
              </li>
              <li>
                Session-Cookies: Session-Cookies werden zum Wiedererkennen
                mehrfacher Nutzung eines Angebots durch denselben Nutzer (z.B.
                wenn Sie sich eingeloggt haben zur Feststellung Ihres
                Login-Status) benötigt. Wenn Sie unsere Seite erneut aufrufen,
                geben diese Cookies Informationen ab, um Sie automatisch
                wiederzuerkennen. Die so erlangten Informationen dienen dazu,
                unsere Angebote zu optimieren und Ihnen einen leichteren Zugang
                auf unsere Seite zu ermöglichen. Wenn Sie den Browser schließen
                oder Sie sich ausloggen, werden die Session-Cookies gelöscht.
              </li>
              <li>
                Persistente Cookies: Diese Cookies bleiben auch nach dem
                Schließen des Browsers gespeichert. Sie dienen zur Speicherung
                des Logins, der Reichweitenmessung und zu Marketingzwecken.
                Diese werden automatisiert nach einer vorgegebenen Dauer
                gelöscht, die sich je nach Cookie unterscheiden kann. In den
                Sicherheitseinstellungen Ihres Browsers können Sie die Cookies
                jederzeit löschen.
              </li>
              <li>
                Cookies von Drittanbietern (Third-Party-Cookies insb. von
                Werbetreibenden): Entsprechend Ihren Wünschen können Sie können
                Ihre Browser-Einstellung konfigurieren und z. B. Die Annahme von
                Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie
                jedoch an dieser Stelle darauf hin, dass Sie dann eventuell
                nicht alle Funktionen dieser Website nutzen können. Lesen Sie
                Näheres zu diesen Cookies bei den jeweiligen
                Datenschutzerklärungen zu den Drittanbietern.
              </li>
            </ul>
            <p />
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9">
            Marketing/ Werbenetzwerke/ Affiliate- Marketing
          </div>
          <div className="info-content__text">
            <p>
              Wir, die YEOGA GmbH weisen darauf hin, dass wir als Publisher mit
              dem nachfolgend aufgeführten Affiliate Netzwerk zusammenarbeiten
              bzw. Affiliate-Tracking nutzen.
            </p>
            <p>
              {" "}
              Affiliate-Marketing ist eine Internetgestützte Vertriebsform, die
              es kommerziellen Betreibern von Internetseiten, den sogenannten
              Merchants oder Advertisern, ermöglicht, Werbung, die meist über
              Klick- oder Sale-Provisionen vergütet wird, auf Internetseiten
              Dritter, also bei Vertriebspartnern, die auch Affiliates oder
              Publisher genannt werden, einzublenden. Der Merchant stellt über
              das Affiliate-Netzwerk ein Werbemittel, also einen Werbebanner
              oder andere geeignete Mittel der Internetwerbung, zur Verfügung,
              welche in der Folge von einem Affiliate auf eigenen Internetseiten
              eingebunden oder über sonstige Kanäle, wie etwa das
              Keyword-Advertising oder E-Mail-Marketing, beworben werden.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9-0">
            AWIN
          </div>
          <div className="info-content__text">
            <p>AWIN AG, Stralauer Allee 2, 10245 Berlin</p>
            <p>
              {" "}
              Die geltenden Datenschutzbestimmungen von AWIN können unter{" "}
              <a
                href="https://www.awin.com/de/rechtliches/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.awin.com/de/rechtliches/privacy-policy
              </a>{" "}
              abgerufen werden.
            </p>
            <p>
              {" "}
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von Awin integriert. Awin ist ein
              deutsches Affiliate-Netzwerk, welches Affiliate-Marketing
              anbietet. Affiliate-Marketing ist eine Internetgestützte
              Vertriebsform, die es kommerziellen Betreibern von Internetseiten,
              den sogenannten Merchants oder Advertisern, ermöglicht, Werbung,
              die meist über Klick- oder Sale-Provisionen vergütet wird, auf
              Internetseiten Dritter, also bei Vertriebspartnern, die auch
              Affiliates oder Publisher genannt werden, einzublenden. Der
              Merchant stellt über das Affiliate-Netzwerk ein Werbemittel, also
              einen Werbebanner oder andere geeignete Mittel der Internetwerbung
              zur Verfügung, welche in der Folge von einem Affiliate auf eigenen
              Internetseiten eingebunden oder über sonstige Kanäle, wie etwa das
              Keyword-Advertising oder E-Mail-Marketing, beworben werden.
            </p>
            <p>
              {" "}
              Awin setzt ein Cookie auf dem informationstechnologischen System
              der betroffenen Person. Was Cookies sind, wurde oben bereits
              erläutert. Der Tracking-Cookie von Awin speichert keinerlei
              personenbezogene Daten. Gespeichert werden lediglich die
              Identifikationsnummer des Affiliate, also des den potentiellen
              Kunden vermittelnden Partners, sowie die Ordnungsnummer des
              Besuchers einer Internetseite und des angeklickten Werbemittels.
              Zweck der Speicherung dieser Daten ist die Abwicklung von
              Provisionszahlungen zwischen einem Merchant und dem Affiliate,
              welche über das Affiliate-Netzwerk, also Awin, abgewickelt werden.
            </p>
            <p>
              {" "}
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Awin ein Cookie auf
              dem informationstechnologischen System der betroffenen Person
              setzt. Zudem können von Awin bereits gesetzte Cookies jederzeit
              über einen Internetbrowser oder andere Softwareprogramme gelöscht
              werden.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9-1">
            Adcell
          </div>
          <div className="info-content__text">
            <p>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von Adcell integriert. Adcell ist ein
              deutsches Affiliate-Netzwerk, welches Affiliate-Marketing
              anbietet. Affiliate-Marketing ist eine Internetgestützte
              Vertriebsform, die es kommerziellen Betreibern von Internetseiten,
              den sogenannten Merchants oder Advertisern, ermöglicht, Werbung,
              die meist über Klick- oder Sale-Provisionen vergütet wird, auf
              Internetseiten Dritter, also bei Vertriebspartnern, die auch
              Affiliates oder Publisher genannt werden, einzublenden. Der
              Merchant stellt über das Affiliate-Netzwerk ein Werbemittel, also
              einen Werbebanner oder andere geeignete Mittel der
              Internetwerbung, zur Verfügung, welche in der Folge von einem
              Affiliate auf eigenen Internetseiten eingebunden oder über
              sonstige Kanäle, wie etwa das Keyword-Advertising oder
              E-Mail-Marketing, beworben werden.
            </p>
            <p>
              {" "}
              Betreibergesellschaft von Adcell ist die Firstlead GmbH,
              Rosenfelder St. 15-16, 10315 Berlin, Germany.
            </p>
            <p>
              {" "}
              Adcell setzt ein Cookie auf dem informationstechnologischen System
              der betroffenen Person. Was Cookies sind, wurde oben bereits
              erläutert. Der Tracking-Cookie von Adcell speichert keinerlei
              personenbezogene Daten. Gespeichert werden lediglich die
              Identifikationsnummer des Affiliate, also des den potentiellen
              Kunden vermittelnden Partners, sowie die Ordnungsnummer des
              Besuchers einer Internetseite und des angeklickten Werbemittels.
              Zweck der Speicherung dieser Daten ist die Abwicklung von
              Provisionszahlungen zwischen einem Merchant und dem Affiliate,
              welche über das Affiliate-Netzwerk, also Adcell, abgewickelt
              werden.
            </p>
            <p>
              {" "}
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Adcell ein Cookie auf
              dem informationstechnologischen System der betroffenen Person
              setzt. Zudem können von Adcell bereits gesetzte Cookies jederzeit
              über einen Internetbrowser oder andere Softwareprogramme gelöscht
              werden.
            </p>
            <p>
              {" "}
              Die geltenden Datenschutzbestimmungen von Adcell können unter{" "}
              <a
                href="https://www.adcell.de/agb"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.adcell.de/agb
              </a>{" "}
              abgerufen werden.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9-2">
            Belboon
          </div>
          <div className="info-content__text">
            <p>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von Belboon integriert. Belboon ist ein
              deutsches Affiliate-Netzwerk, welches Affiliate-Marketing
              anbietet. Affiliate-Marketing ist eine Internetgestützte
              Vertriebsform, die es kommerziellen Betreibern von Internetseiten,
              den sogenannten Merchants oder Advertisern, ermöglicht, Werbung,
              die meist über Klick- oder Sale-Provisionen vergütet wird, auf
              Internetseiten Dritter, also bei Vertriebspartnern, die auch
              Affiliates oder Publisher genannt werden, einzublenden. Der
              Merchant stellt über das Affiliate-Netzwerk ein Werbemittel, also
              einen Werbebanner oder andere geeignete Mittel der Internetwerbung
              zur Verfügung, welche in der Folge von einem Affiliate auf eigenen
              Internetseiten eingebunden oder über sonstige Kanäle, wie etwa das
              Keyword-Advertising oder E-Mail-Marketing, beworben werden.
            </p>
            <p>
              {" "}
              Betreibergesellschaft von Belboon ist die belboon GmbH,
              Weinmeisterstr. 12-14, 10178 Berlin, Germany.
            </p>
            <p>
              {" "}
              Belboon setzt ein Cookie auf dem informationstechnologischen
              System der betroffenen Person. Was Cookies sind, wurde oben
              bereits erläutert. Der Tracking-Cookie von Belboon speichert
              keinerlei personenbezogene Daten. Gespeichert werden lediglich die
              Identifikationsnummer des Affiliate, also des den potentiellen
              Kunden vermittelnden Partners, sowie die Ordnungsnummer des
              Besuchers einer Internetseite und des angeklickten Werbemittels.
              Zweck der Speicherung dieser Daten ist die Abwicklung von
              Provisionszahlungen zwischen einem Merchant und dem Affiliate,
              welche über das Affiliate-Netzwerk, also Belboon, abgewickelt
              werden.
            </p>
            <p>
              {" "}
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Belboon ein Cookie
              auf dem informationstechnologischen System der betroffenen Person
              setzt. Zudem können von Belboon bereits gesetzte Cookies jederzeit
              über einen Internetbrowser oder andere Softwareprogramme gelöscht
              werden.
            </p>
            <p>
              {" "}
              Die geltenden Datenschutzbestimmungen von Belboon können unter{" "}
              <a
                href="https://www.belboon.com/de/ueber-uns/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.belboon.com/de/ueber-uns/datenschutz/
              </a>{" "}
              abgerufen werden.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9-3">
            TradeTracker
          </div>
          <div className="info-content__text">
            <p>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von TradeTracker integriert.
              TradeTracker ist ein Affiliate-Netzwerk, welches
              Affiliate-Marketing anbietet. Affiliate-Marketing ist eine
              Internetgestützte Vertriebsform, die es kommerziellen Betreibern
              von Internetseiten, den sogenannten. Merchants oder Advertisern,
              ermöglicht, Werbung, die meist über Klick- oder Sale-Provisionen
              vergütet wird, auf Internetseiten Dritter, also bei
              Vertriebspartnern, die auch Affiliates oder Publisher genannt
              werden, einzublenden. Der Merchant stellt über das
              Affiliate-Netzwerk ein Werbemittel, also einen Werbebanner oder
              andere geeignete Mittel der Internetwerbung, zur Verfügung, welche
              in der Folge von einem Affiliate auf eigenen Internetseiten
              eingebunden oder über sonstige Kanäle, wie etwa das
              Keyword-Advertising oder E-Mail-Marketing, beworben werden.
            </p>
            <p>
              {" "}
              Betreibergesellschaft von TradeTracker ist die TradeTracker
              Deutschland GmbH, Eiffestraße 426, 20537 Hamburg, Germany.
            </p>
            <p>
              {" "}
              TradeTracker setzt ein Cookie auf dem informationstechnologischen
              System der betroffenen Person. Was Cookies sind, wurde oben
              bereits erläutert. Der Tracking-Cookie von TradeTracker speichert
              keinerlei personenbezogene Daten. Gespeichert werden lediglich die
              Identifikationsnummer des Affiliate, also des den potentiellen
              Kunden vermittelnden Partners, sowie die Ordnungsnummer des
              Besuchers einer Internetseite und des angeklickten Werbemittels.
              Zweck der Speicherung dieser Daten ist die Abwicklung von
              Provisionszahlungen zwischen einem Merchant und dem Affiliate,
              welche über das Affiliate-Netzwerk, also TradeTracker, abgewickelt
              werden.
            </p>
            <p>
              {" "}
              Die betroffene Person kann die Setzung von Cookies durch unsere
              Internetseite, wie oben bereits dargestellt, jederzeit mittels
              einer entsprechenden Einstellung des genutzten Internetbrowsers
              verhindern und damit der Setzung von Cookies dauerhaft
              widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass TradeTracker ein
              Cookie auf dem informationstechnologischen System der betroffenen
              Person setzt. Zudem können von TradeTracker bereits gesetzte
              Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </p>
            <p>
              {" "}
              Die geltenden Datenschutzbestimmungen von TradeTracker können
              unter{" "}
              <a
                href="https://tradetracker.com/de/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tradetracker.com/de/privacy-policy/
              </a>{" "}
              abgerufen werden.
            </p>
            <p>
              {" "}
              Zum Zweck der Abrechnung und Erfolgsmessung der zustande
              gekommenen Buchungen beziehungsweise Käufe, werden auf der Seite
              www.askudo.de sogenannte Cookies der jeweiligen Affiliate-Partner
              eingesetzt. Die Cookies der entsprechenden Affiliate-Partner
              speichern lediglich die ID des Affiliates. Personenbezogene Daten
              werden nicht gespeichert.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-10">
            Datenweitergabe und Empfänger
          </div>
          <div className="info-content__text">
            <p>
              Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet
              nicht statt, außer
            </p>
            <ul>
              <li>
                wenn wir in der Beschreibung der jeweiligen Datenverarbeitung
                explizit darauf hingewiesen haben.
              </li>
              <li>
                wenn Sie ausdrückliche Einwilligung nach Art. 6 Abs. 1 S. 1 lit.
                a DSGVO dazu erteilt haben,
              </li>
              <li>
                die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                erforderlich ist und kein Grund zur Annahme besteht, dass Sie
                ein überwiegendes schutzwürdiges Interesse an der
                Nichtweitergabe Ihrer Daten haben,
              </li>
              <li>
                im Falle, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
                DSGVO eine gesetzliche Verpflichtung besteht und
              </li>
              <li>
                soweit dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die
                Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.
              </li>
            </ul>
            <p />
            <p>
              Wir nutzen darüber hinaus für die Abwicklung unserer Services
              externe Dienstleister, die wir sorgfältig ausgewählt und
              schriftlich beauftragt haben. Sie sind an unsere Weisungen
              gebunden und werden von uns regelmäßig kontrolliert. Mit welchen
              wir erforderlichenfalls Auftragsverarbeitungsverträge gem. Art. 28
              DSGVO geschlossen haben. Diese sind Dienstleister für das
              Webhosting, den Versand von E-Mails sowie Wartung und Pflege
              unserer IT-Systemen usw. Die Dienstleister werden diese Daten
              nicht an Dritte weitergeben.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-11">
            Dauer der Speicherung personenbezogener Daten
          </div>
          <div className="info-content__text">
            <p>
              Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
              an den einschlägigen gesetzlichen Aufbewahrungsfristen (z. B. aus
              dem Handelsrecht und dem Steuerrecht). Nach Ablauf der jeweiligen
              Frist werden die entsprechenden Daten routinemäßig gelöscht.
              Sofern Daten zur Vertragserfüllung oder Vertragsanbahnung
              erforderlich sind oder unsererseits ein berechtigtes Interesse an
              der Weiterspeicherung besteht, werden die Daten gelöscht, wenn Sie
              zu diesen Zwecken nicht mehr erforderlich sind oder Sie von Ihrem
              Widerrufs- oder Widerspruchsrecht Gebrauch gemacht machen.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-12">
            Ihre Rechte
          </div>
          <div className="info-content__text">
            <p>
              Im Folgenden finden Sie Informationen dazu, welche
              Betroffenenrechte das geltende Datenschutzrecht Ihnen gegenüber
              dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer
              personenbezogenen Daten gewährt:
            </p>
            <p>
              {" "}
              Das Recht, gemäß Art. 15 DSGVO Auskunft über Ihre von uns
              verarbeiteten personenbezogenen Daten zu verlangen.
            </p>
            <p>
              {" "}
              Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die
              Kategorie der personenbezogenen Daten, die Kategorien von
              Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder
              werden, die geplante Speicherdauer, das Bestehen eines Rechts auf
              Berichtigung, Löschung, Einschränkung der Verarbeitung oder
              Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft
              ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über
              das Bestehen einer automatisierten Entscheidungsfindung
              einschließlich Profiling und ggf. aussagekräftigen Informationen
              zu deren Einzelheiten verlangen.
            </p>
            <p>
              {" "}
              Das Recht, gemäß Art. 16 DSGVO unverzüglich die Berichtigung
              unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
              personenbezogenen Daten zu verlangen.
            </p>
            <p>
              {" "}
              Das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer bei uns
              gespeicherten personenbezogenen Daten zu verlangen, soweit nicht
              die Verarbeitung zur Ausübung des Rechts auf freie
              Meinungsäußerung und Information, zur Erfüllung einer rechtlichen
              Verpflichtung, aus Gründen des öffentlichen Interesses oder zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              erforderlich ist.
            </p>
            <p>
              {" "}
              Das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit
              der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig
              ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
              benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
              DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
            </p>
            <p>
              {" "}
              Das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die
              Sie uns bereitgestellt haben, in einem strukturierten, gängigen
              und maschinenlesebaren Format zu erhalten oder die Übermittlung an
              einen anderen Verantwortlichen zu verlangen.
            </p>
            <p>
              {" "}
              Das Recht, sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu
              beschweren. In der Regel können Sie sich hierfür an die
              Aufsichtsbehörde des Bundeslandes unseres oben angegebenen Sitzes
              oder ggf. die Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes
              wenden.
            </p>
            <p>
              {" "}
              Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3
              DSGVO: Sie haben das Recht, eine einmal erteilte Einwilligung in
              die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft
              zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen
              Daten unverzüglich löschen, sofern eine weitere Verarbeitung nicht
              auf eine Rechtsgrundlage zur einwilligungslosen Verarbeitung
              gestützt werden kann. Durch den Widerruf der Einwilligung wird die
              Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
              erfolgten Verarbeitung nicht berührt.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-13">
            Widerspruchsrecht
          </div>
          <div className="info-content__text">
            <p>
              Sofern Ihre personenbezogenen Daten von uns auf Grundlage von
              berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO
              verarbeitet werden, haben Sie gemäß Art. 21 DSGVO das Recht,
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
              einzulegen, soweit dies aus Gründe erfolgt, die sich aus Ihrer
              besonderen Situation ergeben. Soweit sich der Widerspruch gegen
              die Verarbeitung personenbezogener Daten zum Zwecke von
              Direktwerbung richtet, haben Sie ein generelles Widerspruchsrecht
              ohne das Erfordernis der Angabe einer besonderen Situation.
              Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
              machen, genügt eine E-Mail{" "}
              <a
                href="mailto:info@yeoga.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@yeoga.de
              </a>
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-14">
            Externe Verlinkungen
          </div>
          <div className="info-content__text">
            <p>
              Soziale Netzwerke (Facebook/ WhatsApp, Telegram, Instagram etc.)
              sind auf unserer Webseite lediglich als Link zu den entsprechenden
              Diensten eingebunden. Nach dem Anklicken des eingebundenen
              Text-/Bild-Links werden Sie auf die Seite des jeweiligen Anbieters
              weitergeleitet. Erst nach der Weiterleitung werden
              Nutzerinformationen an den jeweiligen Anbieter übertragen.
              Informationen zum Umgang mit Ihren personenbezogenen Daten bei
              Nutzung dieser Webseiten entnehmen Sie bitte den jeweiligen
              Datenschutzbestimmungen der von Ihnen genutzten Anbieter.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-15">
            Änderungsvorbehalt
          </div>
          <div className="info-content__text">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung
              erforderlichenfalls unter Beachtung der geltenden
              Datenschutzvorschriften anzupassen bzw. zu aktualisieren. Auf
              diese Weise können wir sie den aktuellen rechtlichen Anforderungen
              anpassen und Änderungen unserer Leistungen berücksichtigen, z. B.
              bei der Einführung neuer Services. Für Ihren Besuch gilt die
              jeweils aktuellste Fassung.
            </p>
            <p>
              {" "}
              Diese Datenschutzerklärung wurde erstellt durch{" "}
              <a
                href="http://www.datenschutzexperte.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.datenschutzexperte.de
              </a>{" "}
            </p>
            <p>
              {" "}
              Ergänzung der Cookie-Arten erstellt mit/durch{" "}
              <a
                href="http://www.juraforum.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.juraforum.de
              </a>{" "}
            </p>
            <p>
              {" "}
              Erweitert um den Punkt Marketing/ Werbenetzwerke/
              Affiliate-Marketing durch die YEOGA GmbH.
            </p>
            <p> Stand dieser Datenschutzerklärung: 30.05.2021</p>
          </div>
        </div>
      </PrivacyPolicyLayout>
      <Footer />
    </>
  );
};

export default Privacy;
