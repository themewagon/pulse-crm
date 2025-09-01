import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Calendar = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex-1 flex flex-col h-[calc(100vh-184px)]">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Calendar</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, eos? Praesentium iusto unde consequuntur dolor
            aliquid!
          </p>
        </div>
        <footer className="my-3 pt-2 px-1">
          <div className="custom-container">
            <span className="me-1">Theme distributed by - </span>
            <a
              className="text-blue-500 hover:underline"
              href="https://www.themewagon.com/"
              target="_blank"
              rel="noopener "
            >
              ThemeWagon
            </a>
          </div>
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
