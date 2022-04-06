import React from "react";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/300/300";
const img3 = "https://picsum.photos/400/300";
const img4 = "https://picsum.photos/500/300";
const img5 = "https://picsum.photos/400/300";
const link =
  "https://www.google.com/search?q=flipkart&rlz=1C1CHBD_enIN944IN944&oq=&aqs=chrome.3.35i39i362l8.412667j0j7&sourceid=chrome&ie=UTF-8";

function Images() {
  return (
    <div>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <a href={link}>
        <img src={img4} />
      </a>
      <img src={img5} />
    </div>
  );
}

export default Images;