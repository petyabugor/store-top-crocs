import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={438}
    viewBox="0 0 280 438"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="15" rx="8" ry="8" width="260" height="240" /> 
    <rect x="10" y="273" rx="13" ry="13" width="260" height="30" /> 
    <rect x="-1" y="316" rx="14" ry="14" width="280" height="45" /> 
    <rect x="2" y="390" rx="6" ry="6" width="55" height="35" /> 
    <rect x="125" y="381" rx="20" ry="20" width="155" height="45" />
  </ContentLoader>
)

export default Skeleton