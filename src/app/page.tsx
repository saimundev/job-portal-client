import Banner from "@/components/home/Banner";
import RecentJob from "@/components/home/RecentJob";
import TrustUs from "@/components/home/TrustUs";
import Feature from "@/components/shared/feature";
import AppIcon from "@/components/icon/AppIcon";
import ContentIcon from "@/components/icon/ContentIcon";
import DateIcon from "@/components/icon/DateIcon";
import Education from "@/components/icon/Education";
import Experience from "@/components/icon/Experience";
import GameIcon from "@/components/icon/GameIcon";
import Graphic from "@/components/icon/Graphic";
import LocationIcon from "@/components/icon/LocationIcon";
import UxIcon from "@/components/icon/UxIcon";
import WebIcon from "@/components/icon/WebIcon";
import Category from "@/components/shared/Category";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {


  return (
    <Container>
      <main className=" mt-16">
        {/* banner start here */}
        <Banner />

        {/* category start here */}
        <Category />

        {/* recent job state here */}
        <RecentJob />

        {/* feature state here*/}
        <Feature />

        {/* trust us state here */}
        <TrustUs />
      </main>
    </Container>
  );
}
