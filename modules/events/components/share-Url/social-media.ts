function IsMobile() {
  const result = /Mobi|Android|iphone/i.test(navigator.userAgent);
  return result;
}

export const ShareOnFacebook = ({ urlToShare }: { urlToShare: string }) => {
  if (IsMobile()) {
    window.location.href = `fb://facewebmodal/f?href=${urlToShare}`;
    setTimeout(() => {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          urlToShare
        )}`,
        "_blank"
      );
    }, 500);
  } else {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        urlToShare
      )}`,
      "_blank"
    );
  }
};

export const shareOnTwitter = ({ urlToShare }: { urlToShare: string }) => {
  //const text = "Check this out!";

  if (IsMobile()) {
    window.location.href = `twitter://post?message=${encodeURIComponent(
      urlToShare
    )}`;
    setTimeout(() => {
      // window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(urlToShare)}`, '_blank');
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          urlToShare
        )}`,
        "_blank"
      );
    }, 500);
  } else {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`,
      "_blank"
    );
  }
};

export function ShareOnWhatsApp({ urlToShare }: { urlToShare: string }) {
  if (IsMobile()) {
    // For mobile, try to open the WhatsApp app
    window.location.href = `whatsapp://send?${encodeURIComponent(urlToShare)}`;
  } else {
    // For desktop, open the WhatsApp Web share
    window.open(
      `https://web.whatsapp.com/send?${encodeURIComponent(urlToShare)}`,
      "_blank"
    );
  }
}

export const ShareOnInstagram = ({ urlToShare }: { urlToShare: string }) => {
  const encodedURL = encodeURIComponent(urlToShare);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // For mobile devices, try to open Instagram app
    setTimeout(() => {
      window.open(`https://www.instagram.com/?url=${encodedURL}`, '_blank');
    }, 1500);
    window.location.href = `instagram://app`;
  } else {
    // For desktop, open Instagram website
    window.open(`https://www.instagram.com/?url=${encodedURL}`, '_blank');
  }
}

