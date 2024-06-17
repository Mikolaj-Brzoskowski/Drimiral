import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import {WebView} from 'react-native-webview'
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Music() {

  const [netStatus, setNetStatus] = useState()
  const navigation = useNavigation()
  const isFirstRender = useRef(true);

  const getConnectionStatus = () => {
    NetInfo.fetch().then(state => {
        setNetStatus(state.isInternetReachable);
    });
  }

  const createConnectionAlert = () =>
  Alert.alert('No Network Connection!', 'Please connect to the Internet before entering.', [
    {
      text: 'Ok',
      style: 'cancel',
    }
  ]);
  
  useEffect(() => {
    getConnectionStatus()
  },[])

  useEffect(() => {
    if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
    }
    else {
      if (!netStatus){
        createConnectionAlert()
        setNetStatus()
        navigation.navigate('Drimiral')
      }
    }
},[netStatus])


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
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIcA5FXgsbctr?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7FaW2WBTOWUIB5SpUQCPZF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </body>` }}
  />
  )
}

