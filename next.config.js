/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// 로컬 개발(next dev) 시 Cloudflare 바인딩을 미리보기 위한 설정.
// 배포 자체와는 무관하며, npm run dev를 쓸 때만 관여합니다.
if (process.env.NODE_ENV === "development") {
  try {
    const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
    initOpenNextCloudflareForDev();
  } catch {
    // @opennextjs/cloudflare가 아직 설치되지 않은 초기 상태에서도 dev 서버가 죽지 않도록 무시
  }
}

module.exports = nextConfig;
