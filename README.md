# Biomarker Frontend

- 본 프로젝트는 Yarn 최신 버전 및 `nodeLinker: node-modules` 옵션으로 실행할 것을 가정하고 제작하였으나, npm 및 pnpm에서도 이용은 가능합니다. 단, 정상 동작 여부는 테스트하지 않았습니다.
- CloudFlare Pages를 통해 서비스됩니다.

# 필요한 `.env` 값

- DATA_GO_KR_API_KEY : 공공데이터포털에서 식품정보DB 공개 API를 신청한 후 Encoding된 API 값을 기록해주세요.
- BACKEND_ADDRESS : 백엔드 서버 주소입니다.