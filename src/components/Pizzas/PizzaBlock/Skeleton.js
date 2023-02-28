import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={266}
        height={466}
        viewBox="0 0 266 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#d2d1d1"
        {...props}
    >
        <circle cx="134" cy="131" r="130" />
        <rect x="0" y="285" rx="0" ry="0" width="266" height="0" />
        <rect x="6" y="271" rx="10" ry="10" width="256" height="20" />
        <rect x="8" y="307" rx="17" ry="17" width="256" height="88" />
        <rect x="10" y="410" rx="14" ry="14" width="103" height="41" />
        <rect x="143" y="410" rx="14" ry="14" width="114" height="50" />
    </ContentLoader>
)

export default Skeleton

