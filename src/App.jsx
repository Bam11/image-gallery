import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import { slides } from "./lib/data";
import "yet-another-react-lightbox/styles.css"
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./component/images";

function App() {
  // const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1> Image Gallery </h1>
      {/* <button
        type="button"
        onClick={() => setOpen(true)}
        className=""
      > 
        Open Lightbox
      </button>  */}

      <Images
        data={slides} 
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox 
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        // open={open}
        // close={() => setOpen(false)}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  )
}

export default App
