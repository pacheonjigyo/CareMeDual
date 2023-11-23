import * as React from "react";

export function Knob(props: any): JSX.Element {
  const fullAngle = props.degrees;
  const startAngle = (360 - props.degrees) / 2;
  const endAngle = startAngle + props.degrees;
  const margin = props.size * 0.15;

  const startDrag = (e) => {
    e.preventDefault();
    const knob = e.target.getBoundingClientRect();

    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e) => {
      currentDeg = getDeg(e.clientX, e.clientY, pts);

      if (currentDeg === startAngle) currentDeg--;

      const newValue = Math.floor(
        convertRange(startAngle, endAngle, props.min, props.max, currentDeg),
      );

      const matched = renderTicks()
        .sort((a, b) => b.deg - a.deg)
        .find((v) => v.deg <= currentDeg);

      if (!matched) {
        return;
      }

      setDeg(matched.deg);

      props.onChange(newValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  const getDeg = (cX, cY, pts) => {
    const x = cX - pts.x;
    const y = cY - pts.y;

    let deg = (Math.atan(y / x) * 180) / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }

    const finalDeg = Math.min(Math.max(startAngle, deg), endAngle);
    return finalDeg;
  };

  const convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
    return (
      ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
    );
  };

  const renderTicks = () => {
    const ticks: any = [];

    const incr = fullAngle / props.numTicks;
    const size = margin + props.size / 2;
    for (let deg = startAngle; deg <= endAngle; deg += incr) {
      const tick = {
        deg: deg,
        tickStyle: {
          display: "flex",
          alignItems: "end",

          height: size + 40,
          left: size - 1,
          top: size + 2,
          transform: "rotate(" + deg + "deg)",
          transformOrigin: "top",
        },
      };
      ticks.push(tick);
    }
    return ticks;
  };

  const dcpy = (o) => {
    return JSON.parse(JSON.stringify(o));
  };

  const kStyle = {
    width: props.size,
    height: props.size,
  };

  let currentDeg = Math.floor(
    convertRange(props.min, props.max, startAngle, endAngle, props.value),
  );

  console.log(currentDeg);

  const [deg, setDeg] = React.useState<number>(0);

  const iStyle = dcpy(kStyle);
  const oStyle = dcpy(kStyle);

  oStyle.margin = margin;

  if (props.color) {
    oStyle.background = "#E5D4CC";
  }
  iStyle.transform = "rotate(" + deg + "deg)";

  return (
    <div className="knob" style={kStyle}>
      <div className="ticks">
        {props.numTicks
          ? renderTicks().map((tick: any, i) => {
              return (
                <>
                  {i === 0 ? (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: -35,
                      }}
                    >
                      OFF
                    </div>
                  ) : (
                    <>
                      <div key={i} className={"tick"} style={tick.tickStyle}>
                        <div
                          className={
                            "tick" + (tick.deg <= currentDeg ? " active" : "")
                          }
                          style={{
                            width: 7,
                            height: 7,

                            background: "gray",
                            // boxShadow: "0 0 3px 1px black",

                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </>
                  )}
                </>
              );
            })
          : null}
      </div>
      <div
        className="knob outer"
        style={oStyle}
        onMouseDown={startDrag}
        onClick={props.onClick}
      >
        <div className="knob inner" style={iStyle}>
          <div className="grip" />
        </div>
      </div>
    </div>
  );
}
