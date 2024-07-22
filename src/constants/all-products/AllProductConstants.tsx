import { HouseholdCarouselData } from "../household/HouseholdCarouselConstants";
import { LaptopCarouselData } from "../laptop/LaptopCarouselConstants";
import { PhoneCarouselData } from "../phone/PhoneCarouselConstants";
import { ScreenCarouselData } from "../screen/ScreenCarouselConstants";
import { SoundCarouselData } from "../sound/SoundCarouselConstants";
import { TabletCarouselData } from "../tablet/TabletCarouselConstants";
import { TVCarouselData } from "../tv/TVCarouselConstants";
import { WatchCarouselData } from "../watch/WatchCarouselConstants";
import { HotSaleSliderData } from "../HotSaleSliderConstants";



export const allProductData = [
    ...HouseholdCarouselData,
    ...ScreenCarouselData,
    ...SoundCarouselData,
    ...TVCarouselData,
    ...WatchCarouselData,
    ...LaptopCarouselData,
    ...TabletCarouselData,
    ...PhoneCarouselData,
    ...HotSaleSliderData,
  ];