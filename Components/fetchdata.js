export default async function FetchData() {

    const url = "https://script.google.com/macros/s/AKfycbwi1DRMxZlv8XkSIm0K_8nKMPukufofUvxF-wXYmiB9_E5uMhTF8-CyBNnzEFSoDHNy2g/exec";

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