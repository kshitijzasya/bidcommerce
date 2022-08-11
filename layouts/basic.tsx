import type { NextPage } from "next";
import React from "react";

const Basic = (ChildComponent: React.ComponentType<any | string>) => {
    return class Component extends React.Component<any, any> {
        render() {
            return (
                <>
                <ChildComponent />
                </>
            )
        }
    }
}

export default Basic;