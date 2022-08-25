export const PLAY_MODE = {
  normal: 1,
  repeat: 2,
  shuffle: 3,
};

export const PLAY_STATUS = {
  play: 1,
  pause: 2,
  stop: 0,
};

interface ISong {
  url: string;
  name: string;
  singer: string;
}
export const LIST_SONGS: Array<ISong> = [
  {
    url: '"public/musics/Love08-Duongg-7078875.mp3",',
    name: "Love 08",
    singer: "Duong",
  },
];
