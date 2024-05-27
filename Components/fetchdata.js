export async function FetchData() {

    const url = "https://script.google.com/macros/s/AKfycbz_4zkG5RI3dIS8xgZkxVB75MeSejFlfvyKr4MeAq0N259cyp4GLRcrGfA7aQVODdc7Ag/exec";


    const res = await fetch(
        url,

        {
            next: {
                revalidate: 60,                
            },
            
        }
    );

    const data = await res.json();
    return data;
}
