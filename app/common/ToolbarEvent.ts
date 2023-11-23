export const initToolbarEvent = (always, elRef) => {
  const entrance = always
    ? "entrance 0.5s ease 0s 1 normal forwards"
    : "entrance-large 1s ease 0s 1 normal forwards";

  const exit = always
    ? "exit 0.5s ease 0s 1 normal forwards"
    : "exit-large 1s ease 0s 1 normal forwards";

  let xDown = null;
  let yDown = null;

  function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!elRef.current) {
      return;
    }

    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) <= Math.abs(yDiff)) {
      if (yDiff > 0) {
        elRef.current.style.animation = exit;

        // commonStore.setHeaderExpose(true);
      } else {
        elRef.current.style.animation = entrance;

        // commonStore.setHeaderExpose(false);
      }
    }

    xDown = null;
    yDown = null;
  }

  const onWheel = async (e: WheelEvent) => {
    const offsetY = document.documentElement.scrollTop;

    if (!elRef.current) {
      return;
    }

    if (e.deltaY > 0) {
      elRef.current.style.animation = exit;

      // commonStore.setHeaderExpose(true);
    } else {
      if (!always && offsetY > 0) {
        return;
      }

      elRef.current.style.animation = entrance;

      // commonStore.setHeaderExpose(false);
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!elRef.current) {
      return;
    }

    switch (e.key) {
      case "ArrowUp": {
        elRef.current.style.animation = entrance;

        // commonStore.setHeaderExpose(false);

        break;
      }

      case "ArrowDown": {
        elRef.current.style.animation = exit;

        // commonStore.setHeaderExpose(true);

        break;
      }
    }
  };

  window.addEventListener("wheel", onWheel);
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("touchstart", handleTouchStart, false);
  window.addEventListener("touchmove", handleTouchMove, false);
};
