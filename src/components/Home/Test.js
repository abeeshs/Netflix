import React from "react";

function Test() {
   return (
      <div>
         <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/otNh9bTjXWg?si=DmtXFZeVUpYqAA3u"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         ></iframe>
      </div>
   );
}

export default Test;
