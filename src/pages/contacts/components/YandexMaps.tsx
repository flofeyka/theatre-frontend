import { YMapLocationRequest } from "@yandex/ymaps3-types";
import { reactify, YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } from "../../../lib/ymaps";

const LOCATION: YMapLocationRequest = {
    center: [40.395981, 56.125601],
    zoom: 17
};


export default function YandexMaps() {
    return <div style={{ width: '100%', height: '700px' }} className="border-r-2 border-black border-solid">
        <YMap location={reactify.useDefault(LOCATION)}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
        </YMap>
    </div>
}