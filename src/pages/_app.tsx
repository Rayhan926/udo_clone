import "../styles/globals.css";
import { MobileSearchhInputBottomSheet } from "@views/Home/components/MobileView/components/MobileSearchInput";
import MobileFilter from "@components/MobileFilter";
import MobileBottomSheet from "@components/MobileBottomSheet";
import CalendarComponent from "@components/SearchWidget/components/CalendarComponent";
import { useOpenDate, useSelectDate } from "@state";

function MyApp({ Component, pageProps }: any) {
  const [open, setOpen] = useOpenDate();
  const [selectedDate, setSelectedDate] = useSelectDate();
  return (
    <>
      <Component {...pageProps} />

      <MobileFilter />
      <MobileSearchhInputBottomSheet />

      <MobileBottomSheet open={open} onClose={() => setOpen(false)}>
        <CalendarComponent
          onSelect={(date) => {
            setSelectedDate(date);
            setOpen(false);
          }}
          value={selectedDate}
        />
      </MobileBottomSheet>
    </>
  );
}

export default MyApp;
