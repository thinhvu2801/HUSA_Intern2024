import classNames from "classnames";
import React from "react";

type TChipProps = {
  hierarchy?: "primary" | "secondary" | "tertiary";
  color?: "brand";
  state?: "default";
};

export const Chip: React.FC<TChipProps> = ({
    hierarchy = "primary",
    color = "default",
    state = "default",
}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(true);

    return (
        <div className={classNames("chip", hierarchy, color, state)}>
            {isVisible && <span>Chip Component</span>}
        </div>
    );
}