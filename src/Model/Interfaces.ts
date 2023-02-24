import React from "react";

export interface ButtonEvent {
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}