import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './styles.css';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}