import React from 'react'
import {WebView} from 'react-native-webview'

export default function Music() {
  return (
    <WebView
    className='bg-black mt-5'
    source={{ html: `
    <head>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    </head>
    <body>
    <div style="display: flex; flex-direction: column; row-gap: 30px;">
    <iframe style="border-radius:12px;" src="https://open.spotify.com/embed/playlist/5FmmxErJczcrEwIFGIviYo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX60xkhEfNtud?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2lpzqBiDdUIvaWyWFrZPs8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7FaW2WBTOWUIB5SpUQCPZF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </body>` }}
  />
  )
}

