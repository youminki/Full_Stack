# CRUD와 웹 흐름 개념 정리

## 1. CRUD 기본 개념

### 1.1 CRUD란 무엇인가  
- CRUD는 **Create, Read, Update, Delete**의 약자로, 데이터 지속성 계층(persistent storage)에서 기본적으로 수행되는 네 가지 조작을 뜻한다. :contentReference[oaicite:0]{index=0}  
- 이러한 연산은 관계형 DB뿐 아니라 문서형 DB, 객체 저장소, 파일 시스템 등 다양한 저장소에 적용된다. :contentReference[oaicite:1]{index=1}  
- CRUD의 각 조작은 종종 SQL 구문이나 HTTP 메서드와 연결되어 사용된다. :contentReference[oaicite:2]{index=2}  

| CRUD | SQL 연산 | HTTP 메서드 (RESTful 맥락) |
|------|-----------|----------------------------|
| Create | INSERT | POST (또는 PUT) :contentReference[oaicite:3]{index=3} |
| Read | SELECT | GET :contentReference[oaicite:4]{index=4} |
| Update | UPDATE | PUT / PATCH :contentReference[oaicite:5]{index=5} |
| Delete | DELETE | DELETE :contentReference[oaicite:6]{index=6} |

> *참고:* PUT은 리소스를 **전체 교체**할 때 쓰이고, PATCH는 리소스의 일부만 수정할 때 사용된다. :contentReference[oaicite:7]{index=7}

### 1.2 CRUD의 의미와 역할  
- 애플리케이션 내에서 데이터를 생성하고, 조회하고, 갱신하고, 삭제하는 기본 흐름을 구조화할 수 있게 한다. :contentReference[oaicite:8]{index=8}  
- UI/UX 설계 시에도 CRUD 패턴은 중요한 기준이 된다. 예를 들어, “데이터를 어떻게 보여줄 것인가, 수정이나 삭제 버튼은 어디 배치할 것인가” 등이 CRUD 흐름에 따라 설계된다. :contentReference[oaicite:9]{index=9}  
- REST 아키텍처에서는 CRUD 연산이 자원(Resource) 중심 설계와 자연스럽게 매핑된다. 즉, 클라이언트가 자원에 대해 CRUD 요청을 보내는 구조가 된다. :contentReference[oaicite:10]{index=10}  

---

## 2. 웹 요청 흐름 개념

웹 애플리케이션이 동작하는 과정을 크게 나누어 보면 다음 흐름이 있다:

> 클라이언트 → 요청 → 서버 → 처리 → 응답 → 클라이언트

아래는 일반적인 흐름과 내부 구성 요소를 중심으로 본 정리다.

### 2.1 정적/동적 리소스 구분

- **정적 리소스**: 이미지, CSS, HTML 파일 등 미리 준비된 파일을 그대로 반환  
- **동적 리소스**: 요청 시 서버 로직이 개입하여 데이터를 읽고 처리하여 응답 (예: 사용자 정보 조회, 계산 결과 등)  
- 전통적 웹 서버(Web Server)가 정적 리소스를 제공하고, 애플리케이션 서버(WAS)가 동적 처리를 담당하는 구조로 발전했다. :contentReference[oaicite:11]{index=11}  
- 현대에는 웹 서버와 애플리케이션 서버가 같은 구조 내에 통합되거나 프레임워크 내에서 역할을 수행하는 경우가 많다. :contentReference[oaicite:12]{index=12}  

### 2.2 요청 처리 단계 (예: Spring MVC 기준)

1. **클라이언트 요청**  
   - 브라우저 혹은 클라이언트 앱이 URL + HTTP 메서드 + 요청 본문 등을 포함한 HTTP 요청을 보낸다.

2. **Dispatcher / 프론트 컨트롤러**  
   - 모든 요청을 받아올 중앙 매핑 지점  
   - 요청 URL과 HTTP 메서드, 라우팅 규칙을 바탕으로 어느 컨트롤러가 처리할지 결정 :contentReference[oaicite:13]{index=13}  

3. **핸들러 매핑 / 컨트롤러 호출**  
   - 적절한 컨트롤러(핸들러)에 요청을 전달  
   - 컨트롤러는 요청을 파라미터로 받고, 서비스 계층을 호출  

4. **비즈니스 로직 수행 (Service 계층 등)**  
   - 요청에 따른 유효성 검사  
   - CRUD 연산을 위해 Repository/DAO 계층 호출  
   - 트랜잭션 관리, 예외 처리 등 포함  

5. **영속 계층 접근 (DB 등)**  
   - Repository/DAO가 데이터베이스에 직접 접근해 CRUD 연산 실행  
   - INSERT, SELECT, UPDATE, DELETE 등을 수행  

6. **응답 생성 / 뷰 렌더링**  
   - API 응답일 경우 JSON, XML 등으로 직렬화  
   - 서버 렌더링 웹 앱일 경우 HTML을 템플릿 엔진으로 생성  
   - 컨트롤러가 응답 결과(데이터 혹은 뷰)를 클라이언트에 반환  

7. **클라이언트 리액션**  
   - 클라이언트는 응답을 받아서 화면 갱신, 오류 처리 등을 한다  

이 전체 흐름이 CRUD 요청 하나당 반복되며, 여러 요청이 동시에 처리되는 구조다.

### 2.3 CRUD 요청 흐름 예시 (게시판 리소스 기준)

예를 들어 `게시글(Post)` 리소스를 다루는 CRUD 요청 흐름을 간략히 나타내면 다음과 같다.

| 작업 | HTTP 요청 | 서버 흐름 요약 |
|------|------------|----------------|
| 글 목록 보기 | `GET /posts` | Dispatcher → PostController.list() → PostService → PostRepository → DB 조회 → 응답 JSON 또는 뷰 |
| 글 상세 보기 | `GET /posts/{id}` | Path 변수 추출 → 서비스 호출 → DB 조회 → 응답 |
| 글 작성 | `POST /posts` | 요청 본문(JSON) 파싱 → 유효성 검사 → 서비스에서 삽입 로직 → DB INSERT → 응답 (201 Created 등) |
| 글 수정 | `PUT /posts/{id}` 또는 `PATCH /posts/{id}` | 변경 요청 파라미터 받기 → 서비스 수정 로직 → DB UPDATE → 응답 |
| 글 삭제 | `DELETE /posts/{id}` | 삭제 요청 → 서비스 삭제 호출 → DB DELETE → 응답 (204 No Content 등) |

이 흐름은 많은 예제 튜토리얼에서도 동일한 구조로 다뤄진다. :contentReference[oaicite:14]{index=14}  

### 2.4 HTTP 메서드와 CRUD의 대응 및 특성

- `GET`  
  - 데이터 조회(Read)  
  - 멱등성(Idempotency) 특성을 갖는다 — 여러 번 요청해도 결과가 같다 (부작용 없음) :contentReference[oaicite:15]{index=15}  
- `POST`  
  - 새 자원 생성(Create)  
  - 비멱등적(Non-idempotent) — 같은 요청을 여러 번 보내면 여러 개 생성될 수 있다 :contentReference[oaicite:16]{index=16}  
- `PUT`  
  - 리소스를 **전체 대체** 또는 생성(Create/Update)  
  - 멱등성을 가지는 경우가 이상적 :contentReference[oaicite:17]{index=17}  
- `PATCH`  
  - 리소스의 일부만 수정(Update)  
  - 전체를 덮어쓰는 PUT보다 유연한 업데이트를 가능하게 한다 :contentReference[oaicite:18]{index=18}  
- `DELETE`  
  - 리소스 삭제(Delete)  
  - 멱등성이 일반적으로 유지됨 (이미 삭제된 리소스에 대해 여러 번 요청해도 결과는 동일) :contentReference[oaicite:19]{index=19}  

또한, `OPTIONS`, `HEAD` 같은 보조 메서드도 요청 흐름에서 사용될 수 있다 (예: CORS 처리 등). :contentReference[oaicite:20]{index=20}  

---

## 3. CRUD vs REST 관계 및 한계

- CRUD는 데이터 조작의 기본 연산이고, REST는 웹 아키텍처 스타일이다. REST에서는 CRUD 연산을 HTTP 메서드와 리소스 설계에 매핑한다. :contentReference[oaicite:21]{index=21}  
- 하지만 REST가 단순히 CRUD 매핑만을 의미하는 것은 아니다. REST에는 무상태성(statelessness), 리소스 표현(delegate), URI 설계, 상태 전이 등이 포함된다. :contentReference[oaicite:22]{index=22}  
- CRUD 관점만으로는 복잡한 비즈니스 로직, 트랜잭션 관리, 권한 검사, 데이터 유효성 검증 등을 온전히 다루기 어렵다. 따라서 서비스 계층, 도메인 계층 등의 설계가 필요하다.

---

## 4. 요약 및 참고된 한계와 유의점

- CRUD는 데이터 저장소 관점의 기본 연산 모델  
- 웹 요청 흐름은 클라이언트 ↔ 서버 간의 요청부터 응답까지의 절차를 포함  
- CRUD 연산은 HTTP 메서드(GET, POST, PUT, PATCH, DELETE)와 자연스럽게 대응  
- REST 아키텍처를 도입하면서 CRUD 중심 설계가 리소스 중심 설계로 확장됨  
- 실무에서는 CRUD만으로는 부족하고, 예외 처리, 인증/인가, 트랜잭션, 유효성 검사 등을 함께 고려해야 함  

