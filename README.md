# Template project
본 프로젝트는 Javascript 기반의 라이브러리 및 애플리케이션 개발을 위한 기본 구성을 가지고 있다. 따라서 본 프로젝트를 활용하여 개발에 필요한 프로젝트 구성을 할 수 있다.

## Features
* Webpack 4
* ES6 문법 사용 가능
* [UMD](https://github.com/umdjs/umd) 형식으로 라이브러리 배포 가능
* [Mocha](http://mochajs.org/)와 [Chai](http://chaijs.com/)를 사용한 테스트 지원
* [ESLint](http://eslint.org/)를 사용하여 기본적인 code convention 검사

## 디렉토리 구조 및 설정 파일
### 디렉토리 구조
* src: source 코드를 포함하는 디렉토리
* test: test 코드를 포함하는 디렉토리
* lib: 산출물인 라이브러리 파일을 포함하는 디렉토리
* node_modules: 개발에 필요한 외부 라이브러리들이 설치되는 디렉토리

### 설정 파일
* `package.json`: 프로젝트 description 등의 프로젝트 정보와 개발에 필요한 라이브러리들을 포함한다.
* `webpack.config.js`: webpack 설정 파일
* `.babelrc`: ES6 지원을 위한 설정 파일
* `.eslintrc`: ESLint 설정 파일
* `.gitignore`: SCM 대상 제외 파일을 포함한다.

## 개발하기
### 프로젝트 세팅
1. 본 프로젝트를 복사하여 로컬에 저장한다.
2. `webpack.config.js` 파일의 열어 `libraryName`을 개발하려는 라이브러리 이름으로 변경한다.
3. `package.json` 파일을 열고, `main`의 속성값을 개발하려는 라이브러리에 맞게 변경한다.
4. `package.json`의 `dependencies` 혹은 `devDependencies`에 개발에 필요한 외부 라이브러리를 추가한다.
    * `dependencies`에는 개발 라이브러리에서 필요로 하는 외부 라이브러리를 추가한다.
    * `devDependencies`에는 프로젝트 관리 및 테스트, Linting, ES6 trans-compile 등등에 필요한 외부 라이브러리를 추가한다. 개발 라이브러리를 빌드하여 배포할때 추가할 필요가 없는 라이브러리들을 추가한다.

### 빌드 하기
#### 사전 준비
1. `npm`이 설치되어 있지 않다면, [`node`](https://nodejs.org/ko/download/)을 설치한다. `node`를 설치하면 `npm`은 자동으로 설치된다.
2. `yarn`이 설치되어 있지 않다면, [`yarn`](https://yarnpkg.com/lang/en/docs/install/#mac-stable)을 설치한다.
3. `yarn install` 혹은 `npm install`을 실행하여 필요한 외부 라이브러리들을 설치한다.

#### 빌드
1. `yarn build` 혹은 `npm run build`를 실행하여 라이브러리를 빌드한다.

#### 테스트
1. `yarn test` 혹은 `npm run test`를 실행하여, 작성된 테스트 코드들을 실행한다.

## 스크립트
`package.json`에 빌드 및 테스트를 실행할 수 있는 스크립트들이 명시되어 있으며, 필요에 따라 해당 내용을 수정하여 사용할 수 있다.

