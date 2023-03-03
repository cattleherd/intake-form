import "../styles/tailwind.css";
import "../styles/burger.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white-300 h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
