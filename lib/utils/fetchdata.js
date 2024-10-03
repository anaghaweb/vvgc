export async function FetchData() {
    const url = process.env.G_DEPLOYMENT_URL;
    const res = await fetch(url,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const data = await res.json();
    return data;
}
