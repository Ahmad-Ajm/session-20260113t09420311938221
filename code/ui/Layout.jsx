import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default function Layout() {
  return (
    <div className="app-container" dir="rtl">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
