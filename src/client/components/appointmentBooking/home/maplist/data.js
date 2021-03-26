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
        image: SHADY_GROVE,
        timings1:"Mon to Fri: 9am - 5pm",
        timings2:"Sat: 9am - 12pm",
        contactNumber:"(301) 217-0979",
        //animation: "DROP"
    },
    {
        id:2,
        name: "Farragut Medical and Travel Care",
        address: "815 Connecticut Ave NW, Washington, DC 20006",
        lat: 38.901257,
        lng: -77.037917,
        bookingLink: "https://www.farragutmedical.com/",
        image: FARRAGUT_MEDICAL,
        timings1:"Mon to Fri: 10Am - 5pm",
        contactNumber:"(202) 775-8500",
        //animation: "DROP"
    },
    {
        id:3,
        name: "Fast Track Urgent Care - Kensington",
        address: "10540 Connecticut Ave, Kensington, MD 20895",
        lat: 39.02830783589008,
        lng: -77.07682728924972,
        bookingLink: " https://fastrackmd.com/covid-19-response/",
        image: FAST_TRACK_URGENT_CARE,
        timings1:"Mon to Fri: 9am - 8:30pm",
        timings2: "Sat: 10:30am - 5pm",
        contactNumber:"(844) 202-1532",
        //animation: "DROP"
    },
    {
        id:4,
        name: "Fast Track Urgent Care - Silver Spring",
        address: "13428 New Hampshire Ave, Colesville, MD 20904",
        lat: 39.076977557310016,
        lng: -77.00246890274003,
        bookingLink: "https://fastrackmd.com/covid-19-response/",
        image: FAST_TRACK_URGENT_CARE,
        timings1:"Mon to Fri: 9am - 9pm",
        timings2: "Sat: 9:30pm - 5:30pm",
        contactNumber:"(844) 202-1532",
        //animation: "DROP"
    },
    {
        id:5,
        name: "Grubbs Pharmacy",
        address: "326 E Capitol St NE, Washington, DC 20003-3809",
        lat: 38.89024144964276,
        lng: -77.00078413158236,
        bookingLink: " http://www.grubbspharmacy.com/",
        image: GRUBB_PHARMACY,
        timings1:"Mon to Fri: 8:30am - 6pm",
        timings2: "Sat: 9am - 3pm",
        contactNumber:"(202) 543-4400",
        //animation: "DROP"
    },
    
];