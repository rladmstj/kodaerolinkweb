import React from "react";
import "./App.css"; // 스타일이 필요하면 여기서 작성

function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <header>
        <h1>고대로 앱 다운로드</h1>
        <p>
          <b>고대로</b>는 고려대학교 소프트웨어 개발학회 DevKor의 8명의 학회원이
          함께 만든
          <br /> <b>고려대학교 실내외 통합 지도 애플리케이션</b>입니다.
        </p>
      </header>

      <main>
        <section style={{ margin: "40px 0" }}>
          {/* <h2>앱 소개</h2> */}
          <p>아래 링크를 통해 고대로 앱을 다운받으세요.</p>
        </section>

        <section style={{ margin: "40px 0" }}>
          <a
            href="https://m.onestore.co.kr/ko-kr/apps/appsDetail.omp?prodId=0000780409"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            원스토어에서 다운로드(안드로이드폰)
          </a>
          <a
            href="https://apps.apple.com/kr/app/%EA%B3%A0%EB%8C%80%EB%A1%9C/id6740149875"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            앱스토어에서 다운로드(iOS)
          </a>
          <p style={{ marginTop: "20px" }}>
            ※ 안드로이드 폰에서 원스토어가 설치되어 있지 않을 경우, 아래 버튼을
            통해 원스토어를 먼저 설치해주세요.
          </p>
          <a
            href=" https://m.onestore.co.kr/mobilepoc/etc/marketDownloadGuide.omp"
            // https://www.instagram.com/kodaero_ku?igsh=bXJzM2F2dnY4N3M4&utm_source=qr
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            원스토어 설치
          </a>
          <p>
            문의:{" "}
            <a
              href="https://www.instagram.com/kodaero_ku?igsh=bXJzM2F2dnY4N3M4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              고대로 인스타그램
            </a>
          </p>

          {/* 필요 시 플레이스토어 링크도 추가 */}
        </section>
      </main>
    </div>
  );
}

// const linkStyle = {

//   display: "inline-block",
//   margin: "10px",
//   padding: "12px 18px",
//   textDecoration: "none",
//   color: "#fff",
//   backgroundColor: "pink",
//   borderRadius: "5px",
//   fontSize: "1rem",

//   // transition: "background 0.3s",
// };
const linkStyle = {
  display: "inline-block",

  /* 버튼 크기 고정 (예: 200px 폭, 60px 높이) */
  width: "300px",
  height: "50px",

  /* 중앙 정렬 위해 lineHeight = height 와 동일 설정 */
  lineHeight: "50px",

  /* 여백 및 기타 스타일 */
  margin: "7px",
  textDecoration: "none",
  color: "black",
  backgroundColor: "pink",
  borderRadius: "5px",

  /* 글씨 크게 (예: 1.2rem ~ 2rem 등 원하는 대로) */
  fontSize: "1rem",
  fontWeight: "bold",

  /* 가로 정렬(가운데 정렬)이 필요하다면 textAlign */
  textAlign: "center",

  // transition: "background 0.3s",
};

export default App;
