import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={240}
            height={500}
            viewBox="0 0 240 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="106" cy="95" r="94" />
            <rect x="6" y="199" rx="10" ry="10" width="202" height="24" />
            <rect x="6" y="233" rx="0" ry="0" width="201" height="64" />
            <rect x="4" y="307" rx="10" ry="10" width="83" height="31" />
            <rect x="124" y="307" rx="10" ry="10" width="83" height="31" />
        </ContentLoader>
    )
}

export default PizzaSkeleton