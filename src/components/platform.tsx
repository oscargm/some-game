import * as React from "react";
import "./platform.css";
interface PlatformProps {
  speed: number;
}
export const Platform = (props: PlatformProps) => {
  const [position, setPosition] = React.useState({
    x: 50,
    y: 50
  });
  const { speed } = props;
  const actions = {
    ArrowUp: () => {
      console.log("position before", position);
      setPosition({ ...position, y: ++position.y });
      console.log("position after", position);
    },
    ArrowDown: () => {
      console.log("position before", position);
      setPosition({ ...position, y: --position.y });
      console.log("position after", position);
    },
    ArrowLeft: () => {
      setPosition({ ...position, x: --position.x });
    },
    ArrowRight: () => {
      setPosition({ ...position, x: ++position.x });
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", e => {
      console.log("key", e.key);
      actions[e.key] && actions[e.key]();
    });
    console.log("buu");
  }, []);

  React.useEffect(() => {
    console.log(position, speed);
  }, [position]);

  return (
    <div
      className="platform"
      style={{
        bottom: position.y,
        left: position.x
      }}
    ></div>
  );
};
