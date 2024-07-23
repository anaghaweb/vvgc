export type NavbarNavigation = ({
    title: string;
    url: string;
    id: number;
    child?: undefined;
} | {
    title: string;
    id: number;
    child: ({
        title: string;
        url: string;
        id: number;
        child?: undefined;
    } | {
        title: string;
        id: number;
        child: {
            title: string;
            url: string;
            id: number;
        }[];
        url?: undefined;
    })[];
    url?: undefined;
})[]

export type Campaign = {
    id: string;
    start?: string;
    end?: string;
    duration: string;
    title: string;
    subtitle?: string;
    description: string;
    paragraphs: string[];
    imageUrl: string;
    sponsor_link: string;
    register_link?: string;
  };

  export type SpecialEvent = {
    id:string,
    date:Date,
    title:string,
    subtitle?:string,
    description?:string,
    name?:string,
    startTime?:string,
    endTime?:string,
    event?:{
        name:string,
        startTime?:Date,
        endTime?:Date,
    }[],
    imageUrl?:string,
    sponsorLink?:string,
    registerLink?:string,
    display?:string,
    type?:string,
    location?:string,
  }