import React from "react";
import "./App.css"; // 스타일이 필요하면 여기서 작성

function App() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <header>
        <h1>고대로 앱 다운로드</h1>
        <p>
          <b>고대로</b>는 고려대학교 소프트웨어 개발학회 DevKor의 8명의 학회원이
          함께 만든 <b>고려대학교 실내외 통합 지도 애플리케이션</b>입니다.
        </p>
      </header>

      <main>
        <section style={{ margin: "40px 0" }}>
          <h2>앱 소개</h2>
          <p>
            고대로 앱은 편리한 기능과 멋진 UI를 제공하는 서비스입니다.
            <br />
            아래 링크를 통해 원하는 스토어에서 다운받으세요.
          </p>
        </section>

        <section style={{ margin: "40px 0" }}>
          <a
            href="https://onestore.co.kr/userpoc/secure/installGuide.omp?pid=예시"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            원스토어에서 다운로드
          </a>
          <a
            href="https://apps.apple.com/kr/app/예시"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            앱스토어에서 다운로드
          </a>
          {/* 필요 시 플레이스토어 링크도 추가 */}
        </section>
      </main>
    </div>
  );
}

const linkStyle = {
  display: "inline-block",
  margin: "10px",
  padding: "12px 18px",
  textDecoration: "none",
  color: "#fff",
  backgroundColor: "#0070f3",
  borderRadius: "5px",
  fontSize: "1rem",
  transition: "background 0.3s",
};

export default App;
