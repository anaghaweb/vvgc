declare module 'nodemailer';

declare type MediaProps = {    
    title: string;
    url: string;
    id: number;
    userid?: string;
    password?: string;
    icon: JSX.Element;     
};

declare type SlokaSequenceLinks = {
    title: string;
    slokasLinks: {
        lang: string;
        url: string;
    }[];
}[]
