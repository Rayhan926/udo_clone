import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const ReportModal = ({ onClose, open }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    const modal_overlay = document.querySelector("#modal_overlay");

    const shouldClose = (e: any) => {
      if (e.target.id === "modal_overlay") {
        onClose();
      }
    };

    modal_overlay?.addEventListener("click", shouldClose);
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="modal_overlay"
      className={
        "fixed top-0 left-0 w-full h-screen bg-black/50 z-[999999] flex justify-center items-center"
      }
    >
      <div className="animate_slidein max-w-[95vw]">
        <div className="bg-white space-y-6 max-w-[500px] rounded-2xl p-5">
          <h3 className="text-center font-bold text-dark text-[22px] leading-[25px]">
            Anzeige melden
          </h3>
          <p className="text-[18px] leading-[23px] text-gray font-medium">
            Sind Sie sich sicher, das Sie diese Anzeige melden wollen? Unser
            Moderator wird sich umgehen um Ihre Meldung kümmern.
          </p>

          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="text-[18px] leading-[27px] font-semibold px-5 py-3 outline-none rounded-2xl bg-white text-dark border border-soft-gray hover:bg-soft-gray/50 duration-150"
            >
              Abschicken
            </button>
            <button className="text-[18px] leading-[27px] font-semibold px-5 py-3 outline-none rounded-2xl bg-primary text-white border border-primary hover:bg-primary-dark duration-150">
              Abschicken
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
