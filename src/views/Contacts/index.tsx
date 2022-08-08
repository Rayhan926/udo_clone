import Footer from "@components/Footer";
import PrivacyPolicyLayout from "@components/PrivacyPolicyLayout";
import React from "react";

const Contacts = () => {
  return (
    <>
      <PrivacyPolicyLayout title="Kontakt">
        <div
          style={{ boxShadow: "0 1px 8px rgb(0 0 0 / 10%)" }}
          className="px-10 py-6 rounded-[16px] bg-white mt-10"
        >
          <div>
            <h3 className="info-content__title">Adresse</h3>

            <div className="info-content__text [&>p]:!mb-0">
              <p>YEOGA GmbH</p>
              <p>Neckarstraße 44</p>
              <p>65462 Ginsheim- Gustavsburg</p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="info-content__title">Email</h3>

            <div className="info-content__text">
              <a href="mailto:info@askudo.de">info@askudo.de</a>
            </div>
          </div>
        </div>
      </PrivacyPolicyLayout>
      <Footer />
    </>
  );
};

export default Contacts;
