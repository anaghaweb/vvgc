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