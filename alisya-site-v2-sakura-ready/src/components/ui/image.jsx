import React from 'react'
export function Image({src,alt='',fittingType='fill',className='',...props}){const objectFit=fittingType==='contain'?'contain':'cover';return <img src={src} alt={alt} className={className} style={{objectFit,width:'100%',height:'100%'}} {...props}/>}
