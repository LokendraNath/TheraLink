import Navbar from "@/components/Navbar";
import FeatureSection from "@/components/voice/FeatureSection";
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import VapiWidget from "@/components/voice/VapiWidget";
import WelcomeSection from "@/components/voice/WelcomeSection";
import { auth } from "@clerk/nextjs/server";

const VoicePage = async () => {
  const { has } = await auth();
  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });

  if (!hasProPlan) return <ProPlanRequired />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <FeatureSection />
      </div>

      <VapiWidget />
    </div>
  );
};
export default VoicePage;
