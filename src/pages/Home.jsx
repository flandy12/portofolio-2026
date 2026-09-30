import { useState } from "react";
import LayoutsPage from "./Layouts/LayoutsPage";

const skills = [
  "Laravel",
  "PHP",
  "React JS",
  "JavaScript",
  "Tailwind CSS",
  "MySQL",
  "REST API",
  "Git",
  "Figma",
  "IT Support",
];
const projects = [
  {
    number: "01",
    title: "Inventory Management",
    type: "Web Application · 2025",
    description:
      "Sistem inventori terpusat untuk mengelola stok, transaksi barang, supplier, dan laporan secara real-time.",
    tags: ["Laravel", "MySQL", "REST API"],
    variant: "inventory",
  },
  {
    number: "02",
    title: "Company Profile",
    type: "Corporate Website · 2025",
    description:
      "Website profil perusahaan yang menyampaikan identitas, layanan, pencapaian, dan informasi bisnis secara profesional.",
    tags: ["React JS", "Tailwind", "Responsive"],
    variant: "company",
  },
  {
    number: "03",
    title: "Management Candidate Recruitment Platform",
    type: "Recruitment Platform · 2025",
    description:
      "Platform terpusat untuk mengelola lowongan, data kandidat, tahapan seleksi, jadwal interview, dan laporan rekrutmen.",
    tags: ["Laravel", "React JS", "MySQL"],
    variant: "recruitment",
  },
  {
    number: "04",
    title: "Wedding Website",
    type: "Digital Invitation · 2025",
    description:
      "Undangan pernikahan digital dengan cerita pasangan, detail acara, galeri, lokasi, hitung mundur, dan konfirmasi kehadiran.",
    tags: ["React JS", "Tailwind", "RSVP"],
    variant: "wedding",
  },
  {
    number: "05",
    title: "Travel, Booking & Event",
    type: "Booking Platform · 2025",
    description:
      "Platform pencarian destinasi, akomodasi, pengalaman, dan event dengan alur pemesanan yang praktis.",
    tags: ["Laravel", "React JS", "Payment API"],
    variant: "travel",
  },
  {
    number: "06",
    title: "News Portal",
    type: "Media Platform · 2025",
    description:
      "Portal berita responsif dengan kategori, breaking news, artikel unggulan, pencarian, dan pembaruan informasi terkini.",
    tags: ["Laravel", "MySQL", "REST API"],
    variant: "news",
  },
  {
    number: "07",
    title: "AI Website & App",
    type: "AI Application · 2026",
    description:
      "Aplikasi AI terpadu untuk percakapan, pembuatan konten, analisis dokumen, rangkuman, dan text-to-speech.",
    tags: ["React JS", "AI API", "Text to Speech"],
    variant: "ai-app",
  },
  {
    number: "08",
    title: "Custom Website",
    type: "Bespoke Development · 2026",
    description:
      "Website khusus yang dirancang dari kebutuhan bisnis, identitas visual, fitur, hingga integrasi sistem yang dibutuhkan.",
    tags: ["Laravel", "React JS", "Custom API"],
    variant: "custom",
  },
];

const projectImages = {
  inventory: [
    "inventory-management-dashboard.png",
    "Dashboard Inventory Management dengan ringkasan stok, grafik transaksi, kategori barang, dan status supplier",
  ],
  dashboard: [
    "business-dashboard.png",
    "Business Dashboard dengan metrik performa, tren pendapatan, aktivitas pelanggan, dan transaksi terbaru",
  ],
  service: [
    "service-desk-system.png",
    "Service Desk System dengan antrean tiket, status prioritas, pemantauan SLA, dan analitik layanan IT",
  ],
  company: [
    "company-profile-website.png",
    "Website Company Profile dengan layanan, statistik perusahaan, profil singkat, dan tombol kontak",
  ],
  recruitment: [
    "candidate-recruitment-platform.png",
    "Dashboard rekrutmen dengan statistik kandidat, pipeline seleksi, analitik, dan jadwal interview",
  ],
  wedding: [
    "wedding-website.png",
    "Website pernikahan dengan informasi pasangan, jadwal acara, lokasi, galeri, dan RSVP",
  ],
  travel: [
    "travel-booking-event-platform.png",
    "Platform travel, booking, dan event dengan pencarian destinasi, harga, rating, serta ringkasan pemesanan",
  ],
  news: [
    "news-portal.png",
    "Portal berita dengan breaking news, artikel utama, berita terbaru, topik, dan konten populer",
  ],
  "ai-app": [
    "ai-website-app.png",
    "Aplikasi AI dengan chatbot, analisis dokumen, pembuat konten, dan text-to-speech",
  ],
  "ai-integration": [
    "ai-integration-platform.png",
    "Dashboard integrasi AI dengan workflow, provider model, keamanan API, penggunaan, biaya, dan latensi",
  ],
  "three-d": [
    "3d-website.png",
    "Website 3D interaktif dengan visualisasi dan konfigurator produk sepeda motor listrik",
  ],
  custom: [
    "custom-website.png",
    "Custom website dengan desain modular, layanan, proyek unggulan, statistik, proses, dan ajakan kerja sama",
  ],
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ variant }) {
  const image = projectImages[variant];
  if (image)
    return (
      <img
        className="project-image"
        src={`/assets/images/${image[0]}`}
        alt={image[1]}
        width="1536"
        height="1024"
        loading="lazy"
      />
    );
  if (variant === "dashboard")
    return (
      <div className="project-mockup dashboard-ui" aria-hidden="true">
        <div className="dash-heading">
          <span>Analytics</span>
          <i />
        </div>
        <div className="dash-grid">
          <div className="donut" />
          <div className="bars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="metric">
            <b>84%</b>
            <span>Growth</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="project-mockup service-ui" aria-hidden="true">
      <div className="ticket-head">
        <b>Helpdesk</b>
        <span>+ New ticket</span>
      </div>
      {["Network issue", "Account access", "Device request"].map(
        (item, index) => (
          <div className="ticket" key={item}>
            <i>{index + 1}</i>
            <span>{item}</span>
            <em>{index === 1 ? "Pending" : "Open"}</em>
          </div>
        ),
      )}
    </div>
  );
}

export default function Home() {
  const [messageSent, setMessageSent] = useState(false);
  const handleContact = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Kolaborasi Baru — ${name}`);

    const body = encodeURIComponent(`
Halo Flandy,

Saya ${name} ingin menghubungi Anda terkait peluang kolaborasi.

━━━━━━━━━━━━━━━━━━━━
📩 INFORMASI KONTAK
━━━━━━━━━━━━━━━━━━━━

Nama   : ${name}
Email  : ${email}

━━━━━━━━━━━━━━━━━━━━
💬 PESAN
━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━

Saya menunggu respons dari Anda.

Terima kasih,
${name}
  `);

    setMessageSent(true);

    window.location.href = `mailto:flandydev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <LayoutsPage>
      <section
        id="beranda"
        className="hero dark-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,19,17,.48), rgba(17,19,17,.62)), url('/assets/images/bg.jpg')",
        }}
      >
        <div className="hero-glow" />
        <div className="hero-meta">
          <span>PORTFOLIO / 2026</span>
          <span>FULL STACK DEVELOPER</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <i /> Halo, saya Flandy
          </p>
          <h1>
            MEMBANGUN
            <br />
            PENGALAMAN <span>DIGITAL.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Saya mengubah ide menjadi produk digital yang cepat, fungsional,
              dan memiliki dampak nyata.
            </p>
            <a
              className="circle-link"
              href="#proyek"
              aria-label="Lihat proyek pilihan"
            >
              ↓
            </a>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div>
            AVAILABLE FOR WORK <b>✦</b> FULL STACK DEVELOPER <b>✦</b> BASED IN
            INDONESIA <b>✦</b> AVAILABLE FOR WORK <b>✦</b> FULL STACK DEVELOPER{" "}
            <b>✦</b> BASED IN INDONESIA <b>✦</b>
          </div>
        </div>
      </section>

      <section id="tentang" className="about light-section section-pad">
        <div className="section-kicker">01 / Tentang saya</div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <div className="portrait-label">
              Based in
              <br />
              Tangerang, ID
            </div>
            <img
              src="/assets/images/profile-cv.png"
              alt="Flandy Rockyliano Mamun"
            />
            <span className="portrait-mark">FR.</span>
          </div>
          <div className="about-copy">
            <h2>
              SAYA MERANCANG
              <br />
              DAN MEMBANGUN
              <br />
              <span>SOLUSI DIGITAL.</span>
            </h2>
            <p>
              Hai, saya <strong>Flandy Rockyliano Mamun</strong>, seorang Full
              Stack Developer dengan pengalaman 3,5+ tahun dalam pengembangan
              aplikasi web dan IT support.
            </p>
            <p>
              Saya berfokus pada Laravel untuk membangun backend yang
              terstruktur dan scalable, serta React dan Tailwind CSS untuk
              menciptakan antarmuka yang responsif, cepat, dan mudah digunakan.
            </p>
            <div className="about-stats">
              <div>
                <strong>3.5+</strong>
                <span>Tahun pengalaman</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Proyek diselesaikan</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Komitmen berkarya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pengalaman" className="experience dark-section section-pad">
        <div className="section-kicker light">02 / Perjalanan</div>
        <div className="split-heading">
          <h2>
            PENGALAMAN &<br />
            <span>PENDIDIKAN</span>
          </h2>
          <p>
            Perjalanan yang membentuk cara saya berpikir, berkolaborasi, dan
            menyelesaikan masalah.
          </p>
        </div>
        <div className="timeline">
          <article>
            <time>2022 — SEKARANG</time>
            <div>
              <h3>Full Stack Developer</h3>
              <p>PT CKHELMER</p>
            </div>
            <p>
              Mengembangkan dan memelihara aplikasi internal, merancang REST
              API, mengoptimalkan database, serta membantu kebutuhan operasional
              IT.
            </p>
            <span>01</span>
          </article>
          <article>
            <time>2021 — 2026</time>
            <div>
              <h3>S1 Teknik Informatika</h3>
              <p>UNIVERSITAS PAMULANG</p>
            </div>
            <p>
              Memperdalam rekayasa perangkat lunak, basis data, algoritma, dan
              pengembangan sistem informasi.
            </p>
            <span>02</span>
          </article>
          <article>
            <time>LULUS 2021</time>
            <div>
              <h3>Teknik Komputer & Jaringan</h3>
              <p>SMK GRAFIKA LEKTUR</p>
            </div>
            <p>
              Membangun fondasi di bidang jaringan komputer, administrasi
              sistem, dan dukungan perangkat keras.
            </p>
            <span>03</span>
          </article>
        </div>
      </section>

      <section id="proyek" className="projects light-section section-pad">
        <div className="section-kicker">03 / Proyek pilihan</div>
        <div className="split-heading projects-heading">
          <h2>
            SELECTED
            <br />
            <span>WORK.</span>
          </h2>
          <p>
            Beberapa solusi digital yang menggabungkan fungsi, performa, dan
            pengalaman pengguna.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.variant}`}>
                <ProjectVisual variant={project.variant} />
              </div>
              <div className="project-info">
                <div className="project-index">/{project.number}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#kontak">
                  Lihat studi kasus <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills dark-section section-pad">
        <div className="section-kicker light">04 / Keahlian</div>
        <div className="skills-grid">
          <div>
            <h2>
              TOOLS YANG
              <br />
              SAYA <span>GUNAKAN.</span>
            </h2>
            <p>
              Teknologi yang saya gunakan untuk membawa sebuah ide dari konsep
              hingga menjadi produk siap pakai.
            </p>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="contact light-section section-pad">
        <div className="section-kicker">05 / Kontak</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow dark">
              <i /> Punya proyek menarik?
            </p>
            <h2>
              MARI BUAT
              <br />
              SESUATU YANG
              <br />
              <span>BERARTI.</span>
            </h2>
            <p>
              Terbuka untuk kolaborasi, proyek freelance, dan kesempatan kerja.
              Ceritakan ide Anda—saya siap membantu mewujudkannya.
            </p>
            <a href="mailto:flandydev@gmail.com">
              flandydev@gmail.com <ArrowIcon />
            </a>
          </div>
          <form className="contact-form" onSubmit={handleContact}>
            <label>
              Nama
              <input
                name="name"
                type="text"
                placeholder="Nama lengkap Anda"
                minLength="2"
                maxLength="80"
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="nama@email.com"
                maxLength="120"
                required
              />
            </label>
            <label>
              Pesan
              <textarea
                name="message"
                placeholder="Ceritakan tentang proyek Anda..."
                minLength="10"
                maxLength="1500"
                rows="5"
                required
              />
            </label>
            <button type="submit">
              Kirim pesan <ArrowIcon />
            </button>
            {messageSent && (
              <p className="form-note" role="status">
                Aplikasi email Anda sedang dibuka.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <a className="brand" href="#beranda">
          FR<span>.</span>
        </a>
        <p>© 2026 Flandy Rockyliano. Dibuat dengan detail dan dedikasi.</p>
        <a href="#beranda">Kembali ke atas ↑</a>
      </footer>
    </LayoutsPage>
  );
}
