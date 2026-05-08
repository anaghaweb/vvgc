declare module 'nodemailer';
<<<<<<< HEAD
declare module '*.css';
=======
declare module "*.css";
>>>>>>> 1321ab85ed840c6caa24711f7e5cc0b89c5a2692

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
