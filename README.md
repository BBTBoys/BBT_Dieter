BBT_Dieter
==========
12/08


- 최소 기능 정의
  - 회원가입
    - 이메일, 비번
  - 로그인
    - 이메일, 비번
    - 로그인되면 리다이렉트
    - 없으면 false
  - 체중입력
    - 아이디(이메일)
    - 날짜
    - 체중
  - 리스트 뷰
    - 날짜별 체중

- DB 변경 (PostgreSQL로 이전)
  - User
    - key : uniq key
    - 이메일
    - 비번
  - Weight
    - key : uniq key
    - 날짜
    - 체중

- 작업 히스토리
  - postgre sql 설치 완료
  - 테이블 작성 완료
  - postgre - node-pg 설치 완료
  - dao 작성 완료
  - 템플릿 엔진 ejs로 수정
  - 로그인 페이지, 회원가입페이지, 리스트 뷰 (+ 체중입력 뷰) 만들기 완료

- TODO
  - 커넥션 관리 및 풀링
  - 로그인 인증
  - config 파일 정리
