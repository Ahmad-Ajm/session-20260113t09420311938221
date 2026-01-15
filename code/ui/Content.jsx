import './styles.css';

export default function Content() {
  return (
    <main className="app-content">
      <div className="container">
        {/* Hero Section */}
        <section className="placeholder hero-section">
          <h2>مرحباً بك في منصة السير الذاتية</h2>
          <p>
            هذه هي الواجهة الأساسية الثابتة للمنصة. تم تصميمها لتكون أساساً 
            لميزات مستقبلية مع دعم كامل للغة العربية والتصميم المتجاوب.
          </p>
        </section>

        {/* CV Preview Section */}
        <section className="placeholder">
          <h2>عرض السيرة الذاتية (نموذج)</h2>
          <p>
            هذا القسم سيحتوي على عرض تفصيلي للسيرة الذاتية. سيتم إضافة 
            المزيد من التفاصيل والمكونات في الميزات القادمة.
          </p>
          <div className="placeholder-content">
            <div className="placeholder-card">
              <h3>المعلومات الشخصية</h3>
              <p>الاسم، العنوان، البريد الإلكتروني</p>
            </div>
            <div className="placeholder-card">
              <h3>الخبرات العملية</h3>
              <p>الوظائف السابقة والمهارات</p>
            </div>
            <div className="placeholder-card">
              <h3>المؤهلات التعليمية</h3>
              <p>الشهادات والدورات التدريبية</p>
            </div>
          </div>
        </section>

        {/* CV List Section */}
        <section className="placeholder">
          <h2>قائمة السير الذاتية</h2>
          <p>
            هذا القسم سيحتوي على قائمة بالسير الذاتية المخزنة. سيتم 
            إضافة إمكانيات البحث والتصفية في الميزات القادمة.
          </p>
          <div className="placeholder-content">
            <div className="placeholder-card">
              <h3>السيرة الذاتية ١</h3>
              <p>مطور ويب - ٣ سنوات خبرة</p>
            </div>
            <div className="placeholder-card">
              <h3>السيرة الذاتية ٢</h3>
              <p>مصمم جرافيك - ٥ سنوات خبرة</p>
            </div>
            <div className="placeholder-card">
              <h3>السيرة الذاتية ٣</h3>
              <p>مدير مشاريع - ٨ سنوات خبرة</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}