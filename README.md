# Boule d'Or — 로또 포털 (Phase 0 뼈대)

프랑스 복권 정보 포털의 최초 뼈대입니다. 5개 탭(복권정보 / 복권분석 / 추천번호 / 블로그·기사 / 설정) 구조가 잡혀 있고, 프랑스 5대 복권(EuroMillions, Loto, EuroDreams, Keno, Amigo)의 기본 정보와 10점 평가 예시 데이터가 채워져 있습니다.

## 지금 상태 (무엇이 되고, 무엇이 아직인지)

- ✅ 5개 탭 UI 전부 동작
- ✅ 복권정보 탭: 프랑스 5개 복권 카드 (수동 데이터, `data/lotteries-fr.json`)
- ✅ 복권분석 탭: 10점 평가 시스템 예시 (아직 임시 점수 — 실제 조사로 교체 필요)
- ✅ 추천번호 탭: 재미용 랜덤 생성기 (미출현 번호 기반 로직은 Phase 1 이후)
- ✅ 블로그 탭: 빈 상태만 (자동 크롤링 파이프라인은 Phase 1)
- ✅ 설정 탭: 언어 전환(FR/EN/KO) 동작, UI 고정 텍스트는 `locales/*.json`
- ⬜ PWA 아이콘 실제 이미지 (지금은 manifest만 있고 아이콘 파일 없음 — `public/icon-192.png`, `public/icon-512.png` 추가 필요)
- ⬜ 뉴스/당첨번호 자동 크롤링 (`.github/workflows/daily-crawl.yml.stub` 참고 — Phase 1에서 실제 스크립트와 함께 활성화)
- ⬜ 국가 확장 (지금은 프랑스만)

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## GitHub + 배포 (Cloudflare Pages 또는 Vercel)

1. GitHub에 새 저장소 생성 후 이 폴더를 push
   ```bash
   git init
   git add .
   git commit -m "chore: Phase 0 scaffold"
   git branch -M main
   git remote add origin <저장소 URL>
   git push -u origin main
   ```
2. **Cloudflare Pages**: 대시보드 → Workers & Pages → Create → Pages → Connect to GitHub → 이 저장소 선택
   - Build command: `npm run build`
   - Output directory: `.next` (Cloudflare의 Next.js 프리셋 사용 권장)
   - **또는 Vercel**: vercel.com → New Project → 저장소 import (Next.js 자동 감지, 설정 거의 불필요)
3. 배포 완료 후 커스텀 도메인 연결

## 데이터 수정하기 (비개발자용 가이드)

- 복권 정보/점수를 바꾸고 싶으면 → `data/lotteries-fr.json`만 수정하면 됩니다 (코드 건드릴 필요 없음)
- 화면에 보이는 고정 문구(메뉴, 버튼 등)를 바꾸려면 → `locales/fr.json`, `locales/en.json`, `locales/ko.json`
- 위 두 가지는 JSON 파일이라 AI 도구(예: Claude)에게 "이 JSON에 이런 내용 추가해줘"라고 시키면 쉽게 수정 가능합니다

## 다음 단계 (사업계획서 Phase 1)

1. PWA 아이콘 이미지 추가
2. 당첨번호 + 뉴스 크롤러 스크립트 작성 → `.github/workflows/daily-crawl.yml.stub`을 `.yml`로 바꿔 활성화
3. 뉴스 재가공(AI) → 블로그 탭에 실제 글 연결
4. 복권분석 탭의 임시 점수를 실제 조사 데이터로 교체
