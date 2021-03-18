// Marker needs lat and lang values so for the given address below are lat and lang.
import {FARRAGUT_MEDICAL, FAST_TRACK_URGENT_CARE, GRUBB_PHARMACY, SHADY_GROVE} from './img';

export const locations = [
    {
        id:1,
        name: "Shady Grove Medical",
        address: "15005 Shady Grove Rd #240, Rockville, MD 20850",
        lat: 39.102698,
        lng: -77.190221,
        bookingLink: "https://shadygrovemedicine.com/covid-19-testing-facility/",
        image: SHADY_GROVE
    },
    {
        id:2,
        name: "Farragut Medical and Travel Care",
        address: "815 Connecticut Ave NW, Washington, DC 20006",
        lat: 38.901257,
        lng: -77.037917,
        bookingLink: "https://www.farragutmedical.com/",
        image: FARRAGUT_MEDICAL
    },
    {
        id:3,
        name: "Fast Track Urgent Care - Kensington",
        address: "10540 Connecticut Ave, Kensington, MD 20895",
        lat: 39.02830783589008,
        lng: -77.07682728924972,
        bookingLink: " https://fastrackmd.com/covid-19-response/",
        image: FAST_TRACK_URGENT_CARE
    },
    {
        id:4,
        name: "Fast Track Urgent Care - Silver Spring",
        address: "13428 New Hampshire Ave, Colesville, MD 20904",
        lat: 39.076977557310016,
        lng: -77.00246890274003,
        bookingLink: "https://fastrackmd.com/covid-19-response/",
        image: FAST_TRACK_URGENT_CARE
    },
    {
        id:5,
        name: "Grubbs Pharmacy",
        address: "326 E Capitol St NE, Washington, DC 20003-3809",
        lat: 38.89024144964276,
        lng: -77.00078413158236,
        bookingLink: " http://www.grubbspharmacy.com/",
        image: GRUBB_PHARMACY
    },
    
];