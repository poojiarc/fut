import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import engineeringTeam from "@/assets/engineering-team.jpg";
import servicePlantEngineering from "@/assets/service-plant-engineering.jpg";
import service3dModelling from "@/assets/service-3d-modelling.jpg";
import servicePiping from "@/assets/service-piping.jpg";
import serviceBim from "@/assets/service-bim.jpg";
import serviceAsbuilt from "@/assets/service-asbuilt.jpg";
import serviceQaqc from "@/assets/service-qaqc.jpg";
import industryOilgas from "@/assets/industry-oilgas.jpg";
import industryPharma from "@/assets/industry-pharma.jpg";
import industrySemiconductor from "@/assets/industry-semiconductor.jpg";
import industryBuildings from "@/assets/industry-buildings.jpg";
import remoteDelivery from "@/assets/remote-delivery.jpg";

export const heroImages = [hero1, hero2, hero3];
export { engineeringTeam, remoteDelivery };

export const serviceImages: Record<string, string> = {
  "service-plant-engineering": servicePlantEngineering,
  "service-3d-modelling": service3dModelling,
  "service-piping": servicePiping,
  "service-bim": serviceBim,
  "service-asbuilt": serviceAsbuilt,
  "service-qaqc": serviceQaqc,
};

export const industryImages: Record<string, string> = {
  "oil-gas": industryOilgas,
  pharma: industryPharma,
  semiconductor: industrySemiconductor,
  buildings: industryBuildings,
};
