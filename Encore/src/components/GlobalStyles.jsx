const GlobalStyles = () => (
  <style>{`
    body {
      background-color: #121212;
      color: #F5F5F5;
      font-family: 'Inter', sans-serif;
    }
    .cta-button {
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    .event-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .event-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 25px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1E1E1E;
    }
    ::-webkit-scrollbar-thumb {
      background: #4F46E5;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #8A2BE2;
    }
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

export default GlobalStyles;