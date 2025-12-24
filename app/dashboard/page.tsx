import ActivityOverview from "@/components/dashboard/ActivityOverview";
import MainAction from "@/components/dashboard/MainAction";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-7 pt-24">
        <WelcomeSection />
        <MainAction />
        <ActivityOverview />
      </div>
    </>
  );
};
export default DashboardPage;
