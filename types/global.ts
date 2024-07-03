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