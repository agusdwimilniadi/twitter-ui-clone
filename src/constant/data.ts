export interface IWhoToFollow {
  id: number;
  image: string;
  name: string;
  username: string;
  isVerified?: boolean;
}
export const WHO_TO_FOLLOW: IWhoToFollow[] = [
  {
    id: 1,
    image:
      'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4ad7519a76d605fe3e842ea91b6eb8b4~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705586400&x-signature=omQuMBdWPr60LIb2nHDeM9Z5F4U%3D',
    name: 'Sang Pengejar S.Kom',
    username: '@pengejar_s.kom',
    isVerified: true,
  },
  {
    id: 2,
    image:
      'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0483fdbabebbddc27f84e2b3a305bbff~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705417200&x-signature=wvTXaFIuEn6%2FzXn5rZqHv9O5%2BW8%3D',
    name: '_luumiinouus',
    username: '@_luumiinouus',
    isVerified: true,
  },
  {
    id: 3,
    image:
      'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a74178a8320ac5890d913906990d94c9~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705417200&x-signature=o6lMMYFhnEyS62S6tJLEsAMEeu8%3D',
    name: 'zikriakmal',
    username: '@zikriakmal',
    isVerified: true,
  },
  {
    id: 4,
    image:
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/835a759b713215e0b83c7e655047ba2d.jpeg?lk3s=a5d48078&x-expires=1705417200&x-signature=%2BVi2D6FrnuzaKZlQcuoXFF3WfOs%3D',
    name: 'bagas_w',
    username: '@bagas',
    isVerified: true,
  },
];
