import { useEffect, useState } from "react";
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
  {
    number: "09",
    title: "AI Photobooth",
    type: "AI Creative Platform Â· 2026",
    description:
      "Photobooth berbasis AI untuk mengambil foto, memilih gaya visual dan latar, menghasilkan variasi potret, serta mengunduh hasil secara instan.",
    tags: ["React JS", "AI API", "Computer Vision"],
    variant: "ai-photobooth",
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
  "ai-photobooth": [
    "ai-photobooth.png",
    "AI Photobooth dengan pratinjau kamera, pilihan gaya visual dan backdrop, countdown, serta strip hasil foto",
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

const caseStudyDetails = {
  inventory: {
    challenge: "Data stok dan transaksi tersebar sehingga pengecekan ketersediaan barang serta penyusunan laporan memerlukan waktu lama.",
    solution: "Membangun sistem inventori terpusat dengan pencatatan transaksi, pengelolaan supplier, kontrol stok, dan laporan yang saling terhubung.",
    features: ["Dashboard stok real-time", "Riwayat barang masuk dan keluar", "Manajemen supplier", "Laporan dan filter periode"],
    outcome: "Proses pencatatan lebih konsisten, pencarian data lebih cepat, dan risiko selisih stok dapat dikurangi.",
  },
  company: {
    challenge: "Informasi perusahaan belum tersusun dalam kanal digital yang profesional, mudah dipahami, dan nyaman diakses dari berbagai perangkat.",
    solution: "Merancang company profile responsif dengan hierarki konten yang jelas, identitas visual konsisten, dan alur menuju kontak yang ringkas.",
    features: ["Profil dan layanan perusahaan", "Pencapaian dan statistik", "Tampilan responsif", "Integrasi formulir kontak"],
    outcome: "Perusahaan memiliki presentasi digital yang lebih kredibel dan calon pelanggan lebih mudah menemukan informasi penting.",
  },
  recruitment: {
    challenge: "Data kandidat, tahapan seleksi, dan jadwal interview dikelola terpisah sehingga progres rekrutmen sulit dipantau.",
    solution: "Menyatukan seluruh proses rekrutmen dalam dashboard berbasis peran dengan pipeline kandidat dan status yang terukur.",
    features: ["Manajemen lowongan", "Pipeline kandidat", "Jadwal interview", "Analitik rekrutmen"],
    outcome: "Tim HR dapat memantau kandidat dari satu tempat dan mempercepat koordinasi pada setiap tahap seleksi.",
  },
  wedding: {
    challenge: "Pasangan membutuhkan undangan yang personal sekaligus praktis untuk membagikan informasi acara dan menerima konfirmasi tamu.",
    solution: "Membuat undangan digital mobile-first dengan cerita pasangan, detail acara, lokasi, galeri, dan RSVP dalam satu pengalaman.",
    features: ["Hitung mundur acara", "Galeri pasangan", "Peta lokasi", "Formulir RSVP"],
    outcome: "Informasi acara lebih mudah dibagikan dan data kehadiran tamu dapat dikumpulkan secara lebih rapi.",
  },
  travel: {
    challenge: "Pengguna membutuhkan cara cepat untuk menemukan destinasi, membandingkan pilihan, dan menyelesaikan pemesanan.",
    solution: "Merancang alur pencarian dan booking terpadu dengan filter, detail produk, ringkasan pesanan, dan integrasi pembayaran.",
    features: ["Pencarian dan filter", "Detail destinasi dan event", "Ringkasan pemesanan", "Integrasi pembayaran"],
    outcome: "Alur pemesanan menjadi lebih singkat dan informasi yang dibutuhkan pengguna tersedia pada setiap tahap keputusan.",
  },
  news: {
    challenge: "Konten berita perlu disajikan dengan cepat tanpa kehilangan kemudahan navigasi pada banyak kategori dan artikel.",
    solution: "Membangun portal berita responsif dengan struktur kategori, pencarian, konten unggulan, dan sistem pengelolaan artikel.",
    features: ["Breaking news", "Kategori dan pencarian", "Artikel unggulan", "Panel manajemen konten"],
    outcome: "Editor dapat memperbarui informasi secara efisien dan pembaca lebih mudah menemukan berita yang relevan.",
  },
  "ai-app": {
    challenge: "Berbagai kebutuhan AI biasanya tersebar di beberapa layanan dengan alur dan pengalaman yang berbeda.",
    solution: "Menggabungkan percakapan AI, pembuatan konten, analisis dokumen, rangkuman, dan suara dalam satu aplikasi.",
    features: ["AI chat", "Analisis dokumen", "Content generator", "Text-to-speech"],
    outcome: "Pengguna dapat menyelesaikan beberapa jenis pekerjaan berbasis AI tanpa berpindah platform.",
  },
  custom: {
    challenge: "Kebutuhan bisnis yang spesifik tidak selalu dapat dipenuhi secara optimal oleh template atau produk siap pakai.",
    solution: "Menerjemahkan kebutuhan menjadi arsitektur, antarmuka, fitur, dan integrasi khusus yang dapat dikembangkan bertahap.",
    features: ["Analisis kebutuhan", "Desain modular", "Custom API", "Integrasi sistem"],
    outcome: "Produk digital lebih selaras dengan proses bisnis dan tetap fleksibel untuk pengembangan berikutnya.",
  },
  "ai-photobooth": {
    challenge: "Photobooth konvensional menawarkan variasi visual terbatas dan proses pengambilan hingga penyimpanan foto yang kurang personal.",
    solution: "Membangun pengalaman photobooth berbasis AI yang menggabungkan kamera, pemilihan gaya, transformasi latar, dan hasil foto instan.",
    features: ["Live camera preview", "AI style transformation", "Pilihan backdrop", "Countdown dan auto capture", "Photo strip dan download"],
    outcome: "Pengguna dapat membuat hasil foto yang unik dalam alur singkat, intuitif, dan siap dibagikan.",
  },
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

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const detail = caseStudyDetails[project.variant];

  return (
    <div className="case-study-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
        <button className="case-study-close" type="button" onClick={onClose} aria-label="Tutup studi kasus" autoFocus>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className={`case-study-hero ${project.variant}`}>
          <ProjectVisual variant={project.variant} />
        </div>
        <div className="case-study-content">
          <p className="case-study-label">Studi Kasus / {project.number}</p>
          <h2 id="case-study-title">{project.title}</h2>
          <p className="case-study-lead">{project.description}</p>
          <div className="case-study-grid">
            <section>
              <span>01 / Tantangan</span>
              <p>{detail.challenge}</p>
            </section>
            <section>
              <span>02 / Solusi</span>
              <p>{detail.solution}</p>
            </section>
            <section>
              <span>03 / Fitur utama</span>
              <ul>
                {detail.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>
            <section>
              <span>04 / Hasil</span>
              <p>{detail.outcome}</p>
            </section>
          </div>
          <div className="case-study-footer">
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href="#kontak" onClick={onClose}>Diskusikan proyek serupa <ArrowIcon /></a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Home() {
  const [messageSent, setMessageSent] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.classList.add("case-study-is-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("case-study-is-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
                <button type="button" onClick={() => setSelectedProject(project)}>
                  Lihat studi kasus <ArrowIcon />
                </button>
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
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </LayoutsPage>
  );
}
