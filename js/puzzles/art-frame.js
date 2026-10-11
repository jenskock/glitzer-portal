export function bindArtRatio(frame, img) {
  const apply = () => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    frame.style.setProperty('--art-ratio', String(img.naturalWidth / img.naturalHeight));
  };

  if (img.complete) apply();
  img.addEventListener('load', apply);
}
