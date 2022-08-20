import React from "react";

const NoResultFound = () => {
  return (
    <div className="flex flex-col py-10 text-gray container items-center">
      <img
        src="/images/empty_result.svg"
        alt="empty_result"
        className="max-w-[200px]"
      />
      <h4 className="text-[22px] font-normal mt-4">Keine Angebote gefunden</h4>
      <p>Bitte ändern Sie die Sucheinstellungen</p>
    </div>
  );
};

export default NoResultFound;
