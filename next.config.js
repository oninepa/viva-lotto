/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 이 줄을 추가합니다.
  images: {
    unoptimized: true, // 이미지 최적화 에러 방지용
  },
};
module.exports = nextConfig;
