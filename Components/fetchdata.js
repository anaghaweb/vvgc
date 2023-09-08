export default async function FetchData({ url }) {


    const res = await fetch(
        url,

        {
            next: {
                revalidate: 60
            }
        }
    );

    const data = await res.json();
    return data;
}