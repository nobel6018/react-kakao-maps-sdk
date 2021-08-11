"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[570],{46:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return k}});var n=a(7462),l=a(3366),r=a(7294),o=a(3905),i=a(8086),p=a(3772),s=[{title:"\uce74\uce74\uc624",latlng:{lat:33.450705,lng:126.570677}},{title:"\uc0dd\ud0dc\uc5f0\ubabb",latlng:{lat:33.450936,lng:126.569477}},{title:"\ud143\ubc2d",latlng:{lat:33.450879,lng:126.56994}},{title:"\uadfc\ub9b0\uacf5\uc6d0",latlng:{lat:33.451393,lng:126.570738}}],m=function(){return r.createElement(p.Map,{center:{lat:33.450701,lng:126.570667},style:{width:"100%",height:"450px"},level:3},s.map((function(e,t){return r.createElement(p.MapMarker,{key:e.title+"-"+e.latlng,position:e.latlng,image:{src:"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",size:[24,35]},title:e.title})})))},c=["components"],u={title:"\uc5ec\ub7ec\uac1c \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",sidebar_position:9},d=void 0,g={unversionedId:"sample/overlay/multipleMarkerImage",id:"sample/overlay/multipleMarkerImage",isDocsHomePage:!1,title:"\uc5ec\ub7ec\uac1c \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",description:"\uc9c0\ub3c4 \uc704\uc5d0 \ub9c8\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\uac1c\uc758 \ub9c8\ucee4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4",source:"@site/docs/sample/overlay/multipleMarkerImage.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/multipleMarkerImage",permalink:"/docs/sample/overlay/multipleMarkerImage",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/multipleMarkerImage.mdx",version:"current",sidebarPosition:9,frontMatter:{title:"\uc5ec\ub7ec\uac1c \ub9c8\ucee4 \ud45c\uc2dc\ud558\uae30",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"draggable \ub9c8\ucee4 \uc774\ubca4\ud2b8 \uc801\uc6a9\ud558\uae30",permalink:"/docs/sample/overlay/addDraggableMarkerDragEvent"},next:{title:"\uc5ec\ub7ec\uac1c \ub9c8\ucee4 \uc81c\uc5b4\ud558\uae30",permalink:"/docs/sample/overlay/multipleMarkerControl"}},k=[{value:"Source Code",id:"source-code",children:[]}],M={toc:k};function v(e){var t=e.components,a=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},M,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc9c0\ub3c4 \uc704\uc5d0 \ub9c8\ucee4 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec\uac1c\uc758 \ub9c8\ucee4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4"),(0,o.kt)(m,{mdxType:"SampleCreateMap"}),(0,o.kt)("h3",{id:"source-code"},"Source Code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"original docs : ",(0,o.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/multipleMarkerImage/"},"https://apis.map.kakao.com/web/sample/multipleMarkerImage/"))),(0,o.kt)(i.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { Map, MapMarker } from "react-kakao-maps-sdk";\n\nconst positions = [\n  {\n    title: "\uce74\uce74\uc624",\n    latlng: { lat: 33.450705, lng: 126.570677 },\n  },\n  {\n    title: "\uc0dd\ud0dc\uc5f0\ubabb",\n    latlng: { lat: 33.450936, lng: 126.569477 },\n  },\n  {\n    title: "\ud143\ubc2d",\n    latlng: { lat: 33.450879, lng: 126.56994 },\n  },\n  {\n    title: "\uadfc\ub9b0\uacf5\uc6d0",\n    latlng: { lat: 33.451393, lng: 126.570738 },\n  },\n];\n\nconst SampleCreateMap = () => {\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    >\n      {positions.map((position, index) => (\n        <MapMarker\n          key={`${position.title}-${position.latlng}`}\n          position={position.latlng} // \ub9c8\ucee4\ub97c \ud45c\uc2dc\ud560 \uc704\uce58\n          image={{\n            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // \ub9c8\ucee4\uc774\ubbf8\uc9c0\uc758 \uc8fc\uc18c\uc785\ub2c8\ub2e4\n            size: [24, 35], // \ub9c8\ucee4\uc774\ubbf8\uc9c0\uc758 \ud06c\uae30\uc785\ub2c8\ub2e4\n          }}\n          title={position.title} // \ub9c8\ucee4\uc758 \ud0c0\uc774\ud2c0, \ub9c8\ucee4\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \ud0c0\uc774\ud2c0\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4\n        />\n      ))}\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}v.isMDXComponent=!0}}]);