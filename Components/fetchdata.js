export default async function FetchData() {

    const url = "https://script.google.com/macros/s/AKfycbwG1RNL5ZSUlo3RZGuFj0P-LtKw1AJppzTjwwUE5MtxQvAtBT7pS3aMeRpzyKVr2Z6d_w/exec";

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