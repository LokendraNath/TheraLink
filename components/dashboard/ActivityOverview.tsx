import MentalHealthOverview from "./MentalHealthOverview";
import NextAppointment from "./NextAppointment";

const ActivityOverview = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <MentalHealthOverview />
      <NextAppointment />
    </div>
  );
};
export default ActivityOverview;
