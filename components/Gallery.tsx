"use client";
import { useEffect, useRef, useState } from "react";
const photos = [
  { src: "/assets/trucks.webp", caption: "Our dedicated fleet" },
  {
    src: "/assets/team-fleet.webp",
    caption: "The people behind every delivery",
  },
  { src: "/assets/team.webp", caption: "Working together" },
  { src: "/assets/transport.webp", caption: "On the move" },
];
export default function Gallery() {
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selected && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <>
      <div className="gallery">
        {photos.map((photo) => (
          <button
            key={photo.src}
            className="gallery-item"
            aria-label={"Enlarge photo: " + photo.caption}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setSelected(photo);
            }}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <span>{photo.caption} ↗</span>
          </button>
        ))}
      </div>
      <dialog
        id="gallery-dialog"
        ref={dialog}
        aria-label={selected?.caption || "Operations gallery"}
        onClose={() => {
          setSelected(null);
          trigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close enlarged photo"
          onClick={close}
        >
          ×
        </button>
        {selected && (
          <>
            <img src={selected.src} alt={selected.caption} />
            <p>{selected.caption}</p>
          </>
        )}
      </dialog>
    </>
  );
}
