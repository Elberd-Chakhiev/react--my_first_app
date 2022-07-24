import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block" 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  > 
    <circle cx="135" cy="125" r="125" /> 
    <rect x="0" y="288" rx="15" ry="15" width="272" height="28" /> 
    <rect x="45" y="370" rx="0" ry="0" width="21" height="0" /> 
    <rect x="0" y="331" rx="15" ry="15" width="272" height="88" /> 
    <rect x="4" y="431" rx="15" ry="15" width="91" height="27" /> 
    <rect x="160" y="426" rx="15" ry="15" width="108" height="32" />
  </ContentLoader>
)

export default Skeleton