<template>
  <div
    class="__page-music-player h-screen w-screen bg-white flex justify-center items-center"
  >
    <div
      class="box relative p-8 border shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
    >
      <div class="absolute left-4 top-4">
        <button class="relative group">
          <div
            class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200"
          >
            <div
              class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180"
            >
              <div
                class="bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"
              ></div>
              <div
                class="bg-gray-800 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"
              ></div>
              <div
                class="bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"
              ></div>
            </div>
          </div>
        </button>
      </div>
      <div class="flex">
        <div class="flex-1">
          <div class="p-8">
            <div
              class="w-72 h-72 p-5 bg-gray-400 rounded-full flex justify-center items-center"
            >
              <div
                class="p-3 bg-slate-900 h-full w-full rounded-full flex justify-center items-center"
              >
                <div
                  class="p-3 bg-gray-800 h-full w-full rounded-full flex justify-center items-center"
                >
                  <div
                    class="p-3 bg-zinc-800 h-full w-full rounded-full flex justify-center items-center"
                  >
                    <div
                      ref="elDish"
                      class="p-3 bg-zinc-700 h-full w-full relative overflow-hidden rounded-full flex justify-center items-center"
                    >
                      <img
                        src="https://picsum.photos/200/300"
                        alt="dish"
                        class="absolute w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="w-full flex justify-between">
              <div>{{ formatTimer(currentTime) }}</div>
              <div>{{ formatTimer(timeLength) }}</div>
            </div>
            <div class="timeline w-full mt-2">
              <div class="w-full h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex-1 px-8">
          <div class="h-full w-72 flex flex-col justify-between">
            <div>
              <div class="text-xl font-bold">Song name</div>
              <div class="text-md italic text-gray-500">Singer name</div>
            </div>
            <div class="lyric flex-1"></div>
            <div class="control-field flex">
              <button class="btn-pre active:scale-95 cursor-pointer mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  stroke="#374151"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-skip-back"
                >
                  <polygon points="19 20 9 12 19 4 19 20"></polygon>
                  <line x1="5" y1="19" x2="5" y2="5"></line>
                </svg>
              </button>
              <button
                @click="changePlayStatus"
                class="btn-play active:scale-95 cursor-pointer mr-2"
              >
                <svg
                  v-if="isPlay === constPlayStatus.play"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  stroke="#374151"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-pause"
                >
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  stroke="#374151"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-play"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <button class="btn-next active:scale-95 cursor-pointer mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  stroke="#374151"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-skip-forward"
                >
                  <polygon points="5 4 15 12 5 20 5 4"></polygon>
                  <line x1="19" y1="5" x2="19" y2="19"></line>
                </svg>
              </button>

              <button
                @click="changePlayMode"
                class="btn-loop active:scale-95 cursor-pointer mr-2"
              >
                <svg
                  v-if="playMode === constPlayMode.normal"
                  class="ov-icon icon"
                  aria-hidden="true"
                  width="23.04"
                  height="23.04"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  data-v-52452700=""
                  style="font-size: 1.44em"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M17 4V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H2V4h15zM2 18h20v2H2v-2zm0-7h20v2H2v-2z"
                  ></path>
                </svg>
                <svg
                  v-else-if="playMode === constPlayMode.shuffle"
                  class="ov-icon icon"
                  aria-hidden="true"
                  width="23.04"
                  height="23.04"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  data-v-52452700=""
                  style="font-size: 1.44em"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M18 17.883V16l5 3-5 3v-2.09a9 9 0 01-6.997-5.365L11 14.54l-.003.006A9 9 0 012.725 20H2v-2h.725a7 7 0 006.434-4.243L9.912 12l-.753-1.757A7 7 0 002.725 6H2V4h.725a9 9 0 018.272 5.455L11 9.46l.003-.006A9 9 0 0118 4.09V2l5 3-5 3V6.117a7 7 0 00-5.159 4.126L12.088 12l.753 1.757A7 7 0 0018 17.883z"
                  ></path>
                </svg>
                <svg
                  v-else-if="playMode === constPlayMode.repeat"
                  class="ov-icon icon"
                  aria-hidden="true"
                  width="23.04"
                  height="23.04"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  data-v-52452700=""
                  style="font-size: 1.44em"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M8 20v1.932a.5.5 0 01-.82.385l-4.12-3.433A.5.5 0 013.382 18H18a2 2 0 002-2V8h2v8a4 4 0 01-4 4H8zm8-16V2.068a.5.5 0 01.82-.385l4.12 3.433a.5.5 0 01-.321.884H6a2 2 0 00-2 2v8H2V8a4 4 0 014-4h10zm-5 4h2v8h-2v-6H9V9l2-1z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// IMPORT
import song1 from "public/musics/Love08-Duongg-7078875.mp3";
import { PLAY_MODE, PLAY_STATUS, LIST_SONGS } from "@/utils/constants";
// VARIABLES
const constPlayMode = PLAY_MODE;
const constPlayStatus = PLAY_STATUS;
// STATES
const playMode = ref<number>(PLAY_MODE.normal);
const isPlay = ref<number>(PLAY_STATUS.stop);
const elDish = ref(null);
const audio = ref(null);
const currentTime = ref<number>(0);
const timeLength = ref<number>(0);
// METHODS

const changePlayMode = () => {
  switch (playMode.value) {
    case PLAY_MODE.normal: {
      playMode.value = PLAY_MODE.repeat;
      break;
    }
    case PLAY_MODE.repeat: {
      playMode.value = PLAY_MODE.shuffle;
      break;
    }
    case PLAY_MODE.shuffle: {
      playMode.value = PLAY_MODE.normal;
      break;
    }
    default:
      break;
  }
};

const formatTimer = (sec) => {
  sec = Number(sec);
  var h = Math.floor(sec / 3600);
  var m = Math.floor((sec % 3600) / 60);
  var s = Math.floor((sec % 3600) % 60);

  var hDisplay = h > 0 ? h + ":" : "";
  var mDisplay = m > 0 ? m + ":" : "00:";
  var sDisplay = s > 10 ? s : "0" + s;
  return hDisplay + mDisplay + sDisplay;
};

const changePlayStatus = () => {
  const boolStatus = isPlay.value !== PLAY_STATUS.play;
  isPlay.value = boolStatus ? PLAY_STATUS.play : PLAY_STATUS.pause;
  const currentClass = elDish.value.className;
  if (isPlay.value === PLAY_STATUS.play) {
    audio.value.play();
    elDish.value.className =
      currentClass.replace("pause", "") +
      (currentClass.includes("animate-rounding") ? "" : " animate-rounding");
  }
  if (isPlay.value === PLAY_STATUS.pause) {
    audio.value.pause();
    elDish.value.className = currentClass + " pause";
  }
};

const runTimming = () => {
  currentTime.value = audio.value.currentTime;
  console.log("inter");
};

onMounted(() => {
  audio.value = new Audio(song1);
  audio.value.addEventListener("loadeddata", function () {
    timeLength.value = Math.round(this.duration);
  });
  watch(isPlay, (current, prev) => {
    if (current === PLAY_STATUS.play) {
      console.log("play");
    } else {
      console.log("pause");
      clearInterval(intervalTimer);
    }
  });
});
</script>

<style scoped>
.pause {
  animation-play-state: paused !important;
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.animate-rounding {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>
