import Footer from "@components/Footer";
import PrivacyPolicyLayout from "@components/PrivacyPolicyLayout";
import { impressumTableOfContents } from "@config/constants";
import React from "react";

const Impressum = () => {
  return (
    <>
      <PrivacyPolicyLayout
        title="Impressum"
        tableOfContents={impressumTableOfContents}
      >
        <div className="info-content">
          <div className="info-content__title" id="info-block-1">
            Angaben gemäß § 5 TMG
          </div>
          <div className="info-content__text">
            <p>YEOGA GmbH </p>
            <p> Neckarstraße 44 </p>
            <p> 65462 Ginsheim- Gustavsburg </p>
            <p>
              <div> Handelsregister/ </div>
              <div className="bold"> Nr.: HRB 100633 </div>
            </p>
            <p>
              <div> Registergericht: </div>
              <div className="bold"> Amtsgericht Darmstadt </div>
            </p>
            <p>
              <div> Vertreten durch </div>
              <div className="bold"> Jan Kratochvil - Geschäftsführer </div>
            </p>
          </div>
        </div>

        <div className="info-content">
          <div className="info-content__title" id="info-block-2">
            Kontakt
          </div>
          <div className="info-content__text">
            <p />
            <div>E-Mail</div>
            <a href="mailto:info@yeoga.de">info@yeoga.de</a>
            <p />
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-3">
            Angaben zur Berufshaftpflichtversicherung
          </div>
          <div className="info-content__text">
            <p />
            <div>Name und Sitz des Versicherers </div>
            <div className="bold"> Hiscox Arnulfstraße 31 80636 München </div>
            <p />
            <p />
            <div> Geltungsraum der Versicherung </div>
            <div className="bold"> weltweit</div>
            <p />
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-4">
            EU-Streitschlichtung
          </div>
          <div className="info-content__text">
            <p />
            <div>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
            </div>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank">
              {" "}
              https://ec.europa.eu/consumers/odr
            </a>
            <div style={{ marginTop: "1rem" }}>
              {" "}
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </div>
            <p />
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-5">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </div>
          <div className="info-content__text">
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-6">
            Haftung für Inhalte
          </div>
          <div className="info-content__text">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-7">
            Haftung für Links
          </div>
          <div className="info-content__text">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-8">
            Urheberrecht
          </div>
          <div className="info-content__text">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
            <p> Quelle: eRecht24</p>
            <p>
              {" "}
              Ein Abbildungsverzeichnis der auf www.askudo.de eingesetzten
              Bilder finden Sie <a href="/gallery">hier</a>
            </p>
          </div>
          <div className="info-content">
            <div className="info-content__title" id="info-block-7">
              Haftung für Links
            </div>
            <div className="info-content__text">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
        <div className="info-content">
          <div className="info-content__title" id="info-block-9">
            Nachweise
          </div>
          <div className="info-content__text">
            <p>Daten</p>
            <p>
              dl_de_zero_20 (
              <a
                href="https://www.govdata.de/dl-de/zero-2-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenlizenz Deutschland – Zero – Version 2.0
              </a>
              )
            </p>
            <p>
              cc_by_40_de (
              <a
                href="https://creativecommons.org/licenses/by/4.0/deed.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Namensnennung 4.0 Deutschland
              </a>
              )
            </p>
            <p>
              cc_by_sa_30_de (
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weitergabe unter gleichen Bedingungen 3.0 Deutschland
              </a>
              )
            </p>
            <p>
              cc_zero (
              <a
                href="https://creativecommons.org/publicdomain/zero/1.0/deed.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Zero
              </a>
              )
            </p>
            <p>
              cc_by_30_de (
              <a
                href="https://creativecommons.org/licenses/by/3.0/de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Namensnennung 3.0 Deutschland
              </a>
              )
            </p>
            <p>
              odbl_10 (
              <a
                href="https://opendatacommons.org/licenses/odbl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Database License
              </a>
              )
            </p>
          </div>
        </div>
      </PrivacyPolicyLayout>
      <Footer />
    </>
  );
};

export default Impressum;
