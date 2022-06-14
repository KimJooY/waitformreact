# WaitForm
- 산한캡스톤디자인 2022.03~ 2022.06
- 맡은 역할 - FrontEnd
- Front-End Repository

# WaitForm
- [Go to Team Repository](https://github.com/ALGO-LEARN/waitForm)

# Team Members
- [김주영](https://github.com/KimJooY/waitformreact) : Front-End 
- [송학현](https://github.com/alanhakhyeonsong/waitForm-Backend) : Back-End 
- [신동원](https://github.com/ponopono0322) : ML
- [유세빈](https://github.com/tpqls0327) : ML


# 플랫폼 서비스 프로세스
![서비스 과정](https://user-images.githubusercontent.com/94374974/173528327-74fc7143-caf0-4c1e-b1a1-953b18a78a96.png)
1. Overview  
만든 플랫폼은 고용주와 크리에이터를 매칭해주는 서비스를 담당합니다.. 고용주는 특정 그림체, 화풍, 스킬 보유자 등을 찾으려는 사람입니다. 이 사람들은 원하는 그림이나 글을 올리게 되면 우리의 머신러닝 모델을 통해 원하는 결과를 얻습니다. 크리에이터는 자신의 포트폴리오를 업로드하여 같은 방식으로 모델을 돌려 어느 성향인지 구별해냅니다. 플랫폼의 역할은 그 둘의 사이를 중개, 중재하는 역할입니다.

# 서비스 내부 과정
![서비스 내부 과정](https://user-images.githubusercontent.com/94374974/173529027-6397b25e-ce2f-4f09-bd26-27eda1217957.png)

## 기술 스택
- JavaScript
- Css
- React.js
- CkEditor
- Axios
- Net
- Reacr-router-dom
- Sockjs-client
- Stompjs
- Github-pages


## 디렉토리 구조
<pre>
Src:.
│  App.js
│  App.test.js
│  index.css
│  index.js
│  reportWebVitals.js
│  result.txt
│  setupTests.js
│  
├─components
│      Board.js
│      Chat.js
│      ChatOneToOne.js
│      Footer.js
│      HomeNav.js
│      LikePerson.js
│      LoginHomeNav.js
│      LoginHomeNavBlack.js
│      MyContractBoard.js
│      MyWritedBoard.js
│      NavBlack.js
│      NotLoginHomeNav.js
│      NotLoginHomeNavBlack.js
│      Recommend.js
│      
├─control // 여러개의 컴포넌트나 화면에 사용되는 함수들
│      AuthRoute.js
│      getAccessToken.js
│      getCkEditorValue.js
│      getRefreshToken.js
│      getTime.js
│      isEmail.js
│      isLogin.js
│      isPassword.js
│      logOut.js
│      passwordValCheck.js
│      
├─css
│      alarmmodal.css
│      chat.css
│      footer.css
│      home.css
│      login.css
│      nav.css
│      nav_background_black.css
│      post.css
│      result.css
│      selectedBoard.css
│      signup.css
│      write.css
│      
└─pages
        AlarmModal.js
        Boards.js // 모든 게시글조회
        Home.js
        LogIn.js
        SelectedBoard.js // 단일 게시글조회
        SignUp.js
        Write.js //글 작성
</pre>

## 작업 순서
1. 그림판, 파워포인트릉 이용하여 홈페이지, 로그인화면, 글작성, 알람모달 레이아웃 설계
2. HTML, CSS 를 이용하여 홈페이지, 로그인화면, 글작성, 알람모달 화면 구현
3. 재사용이 빈번한 컴포넌트를 분리하거나 단위 설계를 위해 컴포넌트를 분리
4. 회원가입 화면 설계 및 HTML,CSS를 이용하여 구현
5. Back-End와 협력하여 JWT를 사용한 인증 구현
6. Back-End와 협력하여 게시글 작성 구현
7. 게시글 조회 화면 설계 및 HTML,CSS를 이용하여 구현
8. Back-End와 협력하여 자신이 작성한 모든 게시글 조회 서비스 구현
9. 단일 게시글 조회 화면을 설계 및 HTML, CSS를 이용하여 구현
10. Back-End와 협력하여 자신이 단일 게시글 조회 서비스 구현
11. Back-End와 협력하여크리에이터가 자신이 받은 제안을 확인하기 위한 알림 서비스 구현 ( 실시간이 아님 )
12. 채팅 레이아웃 설계 및 HTML,CSS를 이용하여 구현
13. Back-End와 협력하여 WebSocket을 이용한 채팅 서비스 구현
14. ML서버와 협력하여 게시글 작성시 클러스터링된 유저 정보 가져오기 구현

#### 설계 시 사용한 몇가지 도안

##### 로그인화면 설계도안
<img src="https://user-images.githubusercontent.com/94374974/173535250-359fc906-2257-4ab0-985b-52de395c0d00.png" width="60%" height="60%">

##### 알림 설계 도안
<img src="https://user-images.githubusercontent.com/94374974/173535131-6af149e2-ea35-40eb-a055-e8a6706e25d5.png" width="60%" height="60%">

##### 양식작성화면 설계 도안
<img src="http://user-images.githubusercontent.com/94374974/173535162-8cbd72ce-154c-4b1f-a475-b4bc5629d654.png" width="60%" height="60%">

##### 채팅 컴포넌트 설계 도안
<img src="https://user-images.githubusercontent.com/94374974/173535172-f1b79748-0f49-418e-98da-7601ab7fb352.png" width="60%" height="60%">

## 결과물

#### 홈페이지
![홈페이지](https://user-images.githubusercontent.com/94374974/173529763-754db002-642f-4ae1-84de-62f197e9fa42.png)
#### 로그인
![로그인](https://user-images.githubusercontent.com/94374974/173530014-892a6339-e923-4b69-85e6-9aabc9c10a84.png)
#### 회원가입
![회원가입](https://user-images.githubusercontent.com/94374974/173530110-0af8e3c9-533e-4b20-8ff3-b8407b09d0e1.png)
#### 글작성
![글작성](https://user-images.githubusercontent.com/94374974/173530153-71e5f245-537f-4c24-a8c5-63c33366ee00.png)
#### 알람
![알람](https://user-images.githubusercontent.com/94374974/173530196-75a10d01-9e34-4369-89e9-e14ffdbd647e.png)
#### 게시글조회
![게시글조회](https://user-images.githubusercontent.com/94374974/173530239-1aac35d0-0f47-44bf-93c4-d0122b3d7d14.png)
#### 매칭후채팅
![매칭후채팅](https://user-images.githubusercontent.com/94374974/173530273-e6ae29e5-625a-4aba-9518-eff3b7b44671.png)


## Acknowledgments

- Goggle Font
- ColorSpace
- Font Awesome
- ColorFly Color Picker
- Pixabay
- Pexels

- 홈페이지 화면 이미지 출처 : https://www.pexels.com/ko-kr/photo/327540/
- 사용한 모든 이미지는 저작권에 구애받지 않은 이미지 입니다.
