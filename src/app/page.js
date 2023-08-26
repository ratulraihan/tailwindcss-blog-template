import BulletinStory from "@/Components/BulletinStory";
import EditorsPick from "@/Components/EditorsPick";
import HeroSection from "@/Components/HeroSection";
import LatestNews from "@/Components/LatestNews";
import MustRead from "@/Components/MustRead";
import SubscribeSection from "@/Components/SubscribeSection";
import TopCreators from "@/Components/TopCreators";
import WelcomeSection from "@/Components/WelcomeSection";

export default function Home() {
  return (
    <div className="md:px-12">
      <WelcomeSection />
      <HeroSection />
      <LatestNews />
      <BulletinStory />
      <MustRead />
      <EditorsPick />
      <TopCreators />
      <SubscribeSection />
    </div>
  );
}
