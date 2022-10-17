<script setup lang="ts" >

import {onMounted,onUnmounted, Ref, ref} from 'vue'
import "video.js/dist/video-js.css"
import videojs from 'video.js';
const myvideo=ref(null);
const videoPlayer=ref(null);
onMounted(() => {
  myvideo.value = videojs(videoPlayer.value, {
    poster: "//vjs.zencdn.net/v/oceans.png",
    controls: true,
    sources: [
      {
        src: "//192.168.139.129:8080/com.test.first/sendvideo",
        type: 'video/mp4',
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }, () => {
    myvideo.value.log("play.....")
  })
})

onUnmounted(() => {
  if (myvideo.value) {
    myvideo.value.dispose()
  }
})

</script>
<template>
     <div>
    <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
    <h1>asv</h1>
  </div>
    </template>
