import "../styles/globals.css";
import { MobileSearchhInputBottomSheet } from "@views/Home/components/MobileView/components/MobileSearchInput";
import MobileFilter from "@components/MobileFilter";
import MobileBottomSheet from "@components/MobileBottomSheet";
import CalendarComponent from "@components/SearchWidget/components/CalendarComponent";
import { useOpenDate, useSearchInput, useSelectDate } from "@state";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const [, setSearchValue] = useSearchInput();
  const [open, setOpen] = useOpenDate();
  const [selectedDate, setSelectedDate] = useSelectDate();

  useEffect(() => {
    setSearchValue((router as any).query?.city || "");
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        <div className="md:hidden">
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
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

// Stuttgart
// Frankfurt am Main
