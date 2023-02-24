import React from "react";
import {ReleaseListItem} from "@/components/ReleaseListItem/ReleaseListItem";

export const ReleaseList = (): JSX.Element => {
    return (
        <div>
            <ReleaseListItem />
            <ReleaseListItem />
            <ReleaseListItem />
            <ReleaseListItem />
            <ReleaseListItem />
        </div>
    );
};
