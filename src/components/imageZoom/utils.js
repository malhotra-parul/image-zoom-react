export const getCursorPos = (e, normalImageRef) => {
  let a,
    x = 0,
    y = 0;
  e = e || window.event;

  a = normalImageRef.current.getBoundingClientRect();
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;

  return { x: x, y: y };
};

export const moveLens = (e, zoomedImageRef, lensRef, normalImageRef) => {
  e.preventDefault();

  const viewArea = zoomedImageRef.current;
  const lens = lensRef.current;
  const image = normalImageRef.current;
  const ratio = {
    cx: viewArea.offsetWidth / lens.offsetWidth,
    cy: viewArea.offsetHeight / lens.offsetHeight
  };

  viewArea.style.backgroundSize = `${image.clientWidth * ratio.cx}px ${
    image.clientHeight * ratio.cy
  }px`;
  const { x, y } = getCursorPos(e, normalImageRef);

  let a = x - lens.offsetWidth / 2;
  let b = y - lens.offsetHeight / 2;
  if (a > image.clientWidth - lens.offsetWidth) {
    a = image.clientWidth - lens.offsetWidth;
  }
  if (a < 0) a = 0;

  if (b > image.clientHeight - lens.offsetHeight) {
    b = image.clientHeight - lens.offsetHeight;
  }
  if (b < 0) b = 0;

  lens.style.left = a + "px";
  lens.style.top = b + "px";

  viewArea.style.backgroundPosition = `-${a * ratio.cx}px -${b * ratio.cy}px`;
};
