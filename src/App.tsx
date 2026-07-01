import { useEffect, useRef, useState } from 'react'
import './index.css'

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <div className="logo-icon">🚗</div>
            <span className="logo-text">اتو<span>سرویس</span></span>
          </a>

          <ul className="nav-links">
            <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>خدمات</a></li>
            <li><a href="#how" onClick={e => { e.preventDefault(); scrollTo('how') }}>نحوه کار</a></li>
            <li><a href="#installment" onClick={e => { e.preventDefault(); scrollTo('installment') }}>اقساط</a></li>
            <li><a href="#why" onClick={e => { e.preventDefault(); scrollTo('why') }}>مزایا</a></li>
            <li><a href="#faq" onClick={e => { e.preventDefault(); scrollTo('faq') }}>سوالات</a></li>
            <li><a href="#contact" className="nav-cta" onClick={e => { e.preventDefault(); scrollTo('contact') }}>رزرو نوبت</a></li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="منو"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <a onClick={() => scrollTo('services')}>خدمات</a>
        <a onClick={() => scrollTo('how')}>نحوه کار</a>
        <a onClick={() => scrollTo('installment')}>اقساط</a>
        <a onClick={() => scrollTo('why')}>مزایا</a>
        <a onClick={() => scrollTo('faq')}>سوالات متداول</a>
        <a onClick={() => scrollTo('contact')}>رزرو نوبت</a>
      </div>
    </>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => bgRef.current?.classList.add('loaded'), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-badge">🛡️ خدمات معتمد و تضمین‌شده</div>

        <h1 className="hero-title">
          خدمات خودرویی<br />
          <span className="highlight">در درِ خانه شما</span>
        </h1>

        <p className="hero-subtitle">
          تعویض روغن، کارواش سیار، تعویض شمع، باتری و بیمه خودرو — بدون نیاز به مراجعه حضوری.
          کارشناسان ما در کمترین زمان به محل شما می‌آیند.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            📅 رزرو نوبت رایگان
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('services')}>
            مشاهده خدمات ↓
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-number">+۵۰۰۰</span>
            <span className="hero-stat-label">مشتری راضی</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">۲۴/۷</span>
            <span className="hero-stat-label">پشتیبانی آنلاین</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">۶ خدمت</span>
            <span className="hero-stat-label">تخصصی</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-number">۳ ساعته</span>
            <span className="hero-stat-label">تحویل سریع</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features Strip ────────────────────────────────────────────────────────────
function FeaturesStrip() {
  return (
    <div className="features-strip">
      <div className="features-strip-inner">
        <div className="strip-item">
          <div className="strip-icon">⚡</div>
          <span>سرویس سریع و در محل</span>
        </div>
        <div className="strip-item">
          <div className="strip-icon">🔒</div>
          <span>ضمانت کیفیت قطعات</span>
        </div>
        <div className="strip-item">
          <div className="strip-icon">💳</div>
          <span>امکان پرداخت اقساطی</span>
        </div>
        <div className="strip-item">
          <div className="strip-icon">📞</div>
          <span>مشاوره رایگان</span>
        </div>
        <div className="strip-item">
          <div className="strip-icon">🏅</div>
          <span>کارشناسان مجرب و مجاز</span>
        </div>
      </div>
    </div>
  )
}

// ─── Services ──────────────────────────────────────────────────────────────────
const services = [
  {
    icon: '🛢️',
    name: 'تعویض روغن موتور',
    desc: 'تعویض روغن موتور با بهترین برندهای روغن در محل شما. شامل بررسی کامل سطح مایعات و فیلتر.',
    badge: 'پرطرفدار',
    featured: true,
  },
  {
    icon: '🚿',
    name: 'کارواش سیار',
    desc: 'شستشوی کامل داخل و خارج خودرو با تجهیزات پیشرفته در محل پارک شما. بدون نیاز به جابجایی.',
    badge: 'در محل',
    featured: false,
  },
  {
    icon: '🔧',
    name: 'تعویض شمع',
    desc: 'تعویض شمع با قطعات اصل و ضمانت‌دار. افزایش عمر موتور و کاهش مصرف سوخت.',
    badge: 'تضمین‌شده',
    featured: false,
  },
  {
    icon: '🔋',
    name: 'تعویض باتری',
    desc: 'تست و تعویض باتری خودرو با مارک‌های معتبر. تست رایگان باتری فعلی قبل از تعویض.',
    badge: 'تست رایگان',
    featured: false,
  },
  {
    icon: '📋',
    name: 'بیمه خودرو',
    desc: 'مقایسه و خرید آسان بیمه شخص ثالث، بدنه و آتش‌سوزی از بهترین شرکت‌های بیمه.',
    badge: 'بهترین قیمت',
    featured: false,
  },
  {
    icon: '🔍',
    name: 'معاینه فنی',
    desc: 'بررسی جامع وضعیت خودرو و ارائه گزارش کامل از مشکلات احتمالی قبل از بروز خرابی.',
    badge: 'جامع',
    featured: false,
  },
]

function RevealWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">خدمات ما</div>
          <h2 className="section-title">همه چیز برای خودروی شما</h2>
          <p className="section-desc">
            از تعویض روغن تا بیمه — تمام نیازهای خودرویی شما را در یک تماس حل می‌کنیم.
          </p>
        </RevealWrapper>

        <div className="services-grid">
          {services.map((s, i) => (
            <RevealWrapper key={s.name} delay={i * 80}>
              <div className={`service-card${s.featured ? ' featured' : ''}`}>
                <div className="service-icon-wrap">{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-badge">✓ {s.badge}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How it works ──────────────────────────────────────────────────────────────
const steps = [
  { icon: '📱', title: 'رزرو آنلاین', desc: 'از طریق سایت یا تلفن نوبت خود را رزرو کنید.' },
  { icon: '🗓️', title: 'انتخاب زمان', desc: 'زمان و مکان دلخواه خود را مشخص کنید.' },
  { icon: '🚗', title: 'اعزام کارشناس', desc: 'کارشناس مجرب ما به محل شما می‌آید.' },
  { icon: '✅', title: 'تحویل و پرداخت', desc: 'پس از انجام خدمت، پرداخت می‌کنید.' },
]

function HowItWorks() {
  return (
    <section className="section how-section" id="how">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">نحوه کار</div>
          <h2 className="section-title">چهار قدم ساده</h2>
          <p className="section-desc">
            گرفتن خدمات خودرویی هرگز این قدر آسان نبوده. فقط رزرو کنید و منتظر باشید.
          </p>
        </RevealWrapper>

        <div className="how-grid">
          {steps.map((step, i) => (
            <RevealWrapper key={step.title} delay={i * 100}>
              <div className="how-step">
                <div className="step-number">
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Installment ───────────────────────────────────────────────────────────────
function Installment() {
  return (
    <section className="section installment-section" id="installment">
      <div className="container">
        <RevealWrapper>
          <div className="installment-card">
            <div>
              <div className="installment-label">💳 طرح اقساطی ویژه</div>
              <h2 className="installment-title">
                خدمات خودرویی را<br />
                قسطی دریافت کنید
              </h2>
              <p className="installment-desc">
                می‌دانیم که بعضی خدمات هزینه‌بر هستند. به همین دلیل برخی از خدمات ما
                با شرایط اقساطی ویژه ارائه می‌شوند — بدون کارمزد اضافی.
              </p>

              <div className="installment-features">
                <div className="install-feat">
                  <div className="install-feat-icon">✓</div>
                  <span>پرداخت تا ۶ ماه بدون بهره</span>
                </div>
                <div className="install-feat">
                  <div className="install-feat-icon">✓</div>
                  <span>نیاز به ضامن یا وثیقه ندارید</span>
                </div>
                <div className="install-feat">
                  <div className="install-feat-icon">✓</div>
                  <span>شامل بیمه، تعویض باتری و بیشتر</span>
                </div>
                <div className="install-feat">
                  <div className="install-feat-icon">✓</div>
                  <span>تأیید سریع در همان روز</span>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💳 درخواست اقساط
              </button>
            </div>

            <div className="installment-visual">
              <div className="install-plan-card">
                <div className="plan-name">بیمه خودرو</div>
                <div className="plan-detail">پرداخت در <strong>۳ قسط مساوی</strong> — بدون سود</div>
              </div>

              <div className="install-plan-card best">
                <div className="plan-best-label">پرطرفدار ⭐</div>
                <div className="plan-name">تعویض باتری + شمع</div>
                <div className="plan-detail">پرداخت در <strong>۲ قسط ماهانه</strong> — بدون کارمزد</div>
              </div>

              <div className="install-plan-card">
                <div className="plan-name">پکیج کامل سرویس</div>
                <div className="plan-detail">پرداخت در <strong>۶ قسط</strong> — سبک‌ترین حالت ممکن</div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Why Us ────────────────────────────────────────────────────────────────────
const whyUs = [
  { icon: '🏠', title: 'خدمات در محل', desc: 'نیازی به مراجعه به تعمیرگاه ندارید. ما به درِ خانه یا محل کار شما می‌آییم.' },
  { icon: '⚙️', title: 'قطعات اصل', desc: 'تمام قطعات ما از تأمین‌کنندگان معتبر و با ضمانت اصالت هستند.' },
  { icon: '⏱️', title: 'سرعت بالا', desc: 'در اکثر موارد خدمات در کمتر از ۶۰ دقیقه تکمیل می‌شود.' },
  { icon: '💰', title: 'قیمت منصفانه', desc: 'شفافیت کامل در قیمت‌گذاری. هیچ هزینه پنهانی وجود ندارد.' },
  { icon: '👨‍🔧', title: 'تکنسین‌های مجرب', desc: 'تیم ما از متخصصان آموزش‌دیده و دارای مجوز تشکیل شده است.' },
  { icon: '📞', title: 'پشتیبانی ۲۴ ساعته', desc: 'هر سوالی داشتید، تیم پشتیبانی ما آماده پاسخگویی است.' },
]

function WhyUs() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">چرا ما؟</div>
          <h2 className="section-title">تجربه‌ای متفاوت از سرویس خودرو</h2>
          <p className="section-desc">
            اتوسرویس را برای ارائه خدماتی طراحی کردیم که آرامش خاطر می‌آورد.
          </p>
        </RevealWrapper>

        <div className="why-grid">
          {whyUs.map((item, i) => (
            <RevealWrapper key={item.title} delay={i * 80}>
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    stars: 5,
    text: '"واقعاً حیرت‌زده شدم! تعویض روغن را در پارکینگ محل کارم انجام دادند. سریع، تمیز و حرفه‌ای. دیگه هرگز به تعمیرگاه نمی‌رم."',
    name: 'محمد رضایی',
    tag: 'مشتری دائمی',
    avatar: 'م',
  },
  {
    stars: 5,
    text: '"کارواش سیار را امتحان کردم. ماشینم را آنقدر تمیز تحویل دادند که فکر کردم ماشین جدید خریدم! قیمتش هم کاملاً مناسب بود."',
    name: 'زهرا محمدی',
    tag: 'تهران',
    avatar: 'ز',
  },
  {
    stars: 5,
    text: '"باتری ماشینم وسط بزرگراه خراب شد، زنگ زدم و ظرف ۴۰ دقیقه کارشناس رسید و مشکل حل شد. عالی بود!"',
    name: 'علی کریمی',
    tag: 'مشتری راضی',
    avatar: 'ع',
  },
]

function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">نظرات مشتریان</div>
          <h2 className="section-title">مشتریان ما چه می‌گویند؟</h2>
          <p className="section-desc">
            بیش از ۵۰۰۰ مشتری راضی بهترین دلیل برای انتخاب ماست.
          </p>
        </RevealWrapper>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <RevealWrapper key={t.name} delay={i * 100}>
              <div className="testimonial-card">
                <div className="stars">
                  {'⭐'.repeat(t.stars)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-tag">{t.tag}</div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'آیا واقعاً به محل من می‌آیید؟',
    a: 'بله! کارشناسان ما به آدرسی که مشخص کنید می‌آیند. چه خانه، چه محل کار یا هر جای دیگری که خودروی شما پارک باشد.',
  },
  {
    q: 'چقدر طول می‌کشد تا کارشناس برسد؟',
    a: 'معمولاً کارشناس در کمتر از ۶۰ تا ۹۰ دقیقه به محل شما می‌رسد. زمان دقیق هنگام رزرو به شما اعلام می‌شود.',
  },
  {
    q: 'قطعاتی که استفاده می‌کنید اصل هستند؟',
    a: 'بله، تمام قطعات ما از تأمین‌کنندگان رسمی و معتبر تهیه می‌شوند و دارای ضمانت‌نامه اصالت هستند.',
  },
  {
    q: 'چه خدماتی قسطی هستند؟',
    a: 'بیمه خودرو، تعویض باتری، تعویض شمع و پکیج سرویس کامل امکان پرداخت اقساطی دارند. برای اطلاعات بیشتر با ما تماس بگیرید.',
  },
  {
    q: 'آیا مشاوره رایگان دارید؟',
    a: 'بله! قبل از هر خدمت، کارشناس ما وضعیت خودروی شما را بررسی و مشاوره رایگان ارائه می‌دهد.',
  },
  {
    q: 'چطور نوبت رزرو کنم؟',
    a: 'از طریق فرم همین سایت، تماس تلفنی یا واتساپ می‌توانید به سادگی نوبت رزرو کنید.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">سوالات متداول</div>
          <h2 className="section-title">هر چیزی می‌خواهید بدانید</h2>
          <p className="section-desc">
            سوالات رایج مشتریان ما — اگر پاسخ سوالتان را نیافتید، با ما تماس بگیرید.
          </p>
        </RevealWrapper>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <RevealWrapper key={i} delay={i * 60}>
              <div className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <div className="faq-chevron">▾</div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <RevealWrapper>
          <div className="cta-card">
            <h2 className="cta-title">
              آماده‌اید؟<br />
              اولین قدم را بردارید 🚗
            </h2>
            <p className="cta-desc">
              همین الان رزرو کنید. کارشناس ما در کمترین زمان ممکن به محل شما می‌آید.
            </p>
            <div className="cta-buttons">
              <button
                className="btn-primary"
                style={{ fontSize: '17px', padding: '18px 40px' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📅 رزرو نوبت آنلاین
              </button>
              <a href="tel:+989121234567" className="phone-link">
                📞 ۰۹۱۲-۱۲۳-۴۵۶۷
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

// ─── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <RevealWrapper>
          <div className="section-label">تماس و رزرو</div>
          <h2 className="section-title">نوبت خود را رزرو کنید</h2>
          <p className="section-desc">
            فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم.
          </p>
        </RevealWrapper>

        <div className="contact-grid">
          <RevealWrapper delay={100}>
            <div className="contact-info">
              <h3>در دسترس هستیم</h3>
              <p>
                ۷ روز هفته، ۲۴ ساعته آماده ارائه خدمت به شما هستیم.
                برای رزرو نوبت یا دریافت مشاوره رایگان با ما در تماس باشید.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div>
                    <div className="contact-item-label">تلفن تماس</div>
                    <div className="contact-item-value" style={{ direction: 'ltr', textAlign: 'right' }}>۰۹۱۲-۱۲۳-۴۵۶۷</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">💬</div>
                  <div>
                    <div className="contact-item-label">واتساپ</div>
                    <div className="contact-item-value">پاسخ‌دهی فوری</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div>
                    <div className="contact-item-label">پوشش خدمات</div>
                    <div className="contact-item-value">تمام مناطق تهران</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🕒</div>
                  <div>
                    <div className="contact-item-label">ساعت کاری</div>
                    <div className="contact-item-value">۷ روز هفته — ۸ صبح تا ۱۰ شب</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <div className="contact-form">
              {!submitted ? (
                <>
                  <h3 className="form-title">🗓️ فرم رزرو نوبت</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input className="form-input" type="text" placeholder="مثلاً: علی احمدی" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">شماره موبایل</label>
                        <input className="form-input" type="tel" placeholder="۰۹۱۲..." required dir="ltr" style={{ textAlign: 'right' }} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">نوع خدمت مورد نیاز</label>
                      <select className="form-select" required>
                        <option value="">انتخاب کنید...</option>
                        <option>تعویض روغن موتور</option>
                        <option>کارواش سیار</option>
                        <option>تعویض شمع</option>
                        <option>تعویض باتری</option>
                        <option>بیمه خودرو</option>
                        <option>معاینه فنی</option>
                        <option>مشاوره رایگان</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">نوع خودرو</label>
                        <input className="form-input" type="text" placeholder="مثلاً: پژو ۲۰۶" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">منطقه</label>
                        <input className="form-input" type="text" placeholder="مثلاً: تهران، ونک" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">توضیحات بیشتر (اختیاری)</label>
                      <textarea className="form-textarea" placeholder="هر اطلاعات اضافه‌ای که فکر می‌کنید مفید است..." />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary form-submit"
                      disabled={loading}
                    >
                      {loading ? '⏳ در حال ارسال...' : '✅ ثبت درخواست'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success" style={{ display: 'block' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold-light)' }}>درخواست ثبت شد!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8 }}>
                    با تشکر از شما! کارشناس ما به زودی با شما تماس خواهد گرفت.<br />
                    در صورت نیاز فوری با شماره ۰۹۱۲-۱۲۳-۴۵۶۷ تماس بگیرید.
                  </p>
                </div>
              )}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: 4 }}>
              <div className="logo-icon">🚗</div>
              <span className="logo-text">اتو<span>سرویس</span></span>
            </div>
            <p>
              ارائه‌دهنده خدمات تخصصی خودرو در محل — سریع، مطمئن و با قیمت منصفانه.
              خودروی شما لایق بهترین مراقبت است.
            </p>
            <div className="social-links" style={{ marginTop: 20 }}>
              <a href="#" className="social-link" aria-label="اینستاگرام">📸</a>
              <a href="#" className="social-link" aria-label="تلگرام">✈️</a>
              <a href="#" className="social-link" aria-label="واتساپ">💬</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">خدمات</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }}>تعویض روغن</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }}>کارواش سیار</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }}>تعویض شمع</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }}>تعویض باتری</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('services') }}>بیمه خودرو</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">دسترسی سریع</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('how') }}>نحوه کار</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('installment') }}>طرح اقساطی</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('why') }}>چرا ما؟</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('faq') }}>سوالات متداول</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('contact') }}>رزرو نوبت</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">تماس با ما</h4>
            <ul className="footer-links">
              <li><a href="tel:+989121234567">📞 ۰۹۱۲-۱۲۳-۴۵۶۷</a></li>
              <li><a href="#">💬 واتساپ</a></li>
              <li><a href="#">📍 تمام مناطق تهران</a></li>
              <li><a href="#">🕒 ۸ صبح تا ۱۰ شب</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© ۱۴۰۳ اتوسرویس — تمام حقوق محفوظ است</p>
          <p>ساخته شده با ❤️ برای خودروی شما</p>
        </div>
      </div>
    </footer>
  )
}

// ─── WhatsApp Float ────────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/989121234567"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="واتساپ"
    >
      💬
    </a>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesStrip />
      <Services />
      <HowItWorks />
      <Installment />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
