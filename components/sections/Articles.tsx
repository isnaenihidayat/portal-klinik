import { SectionHead, Carousel } from "@/components/ui";
import type { SiteContent } from "@/lib/content";

interface ArticlesProps {
  t: SiteContent;
}

/** Map urutan index artikel ke file gambar di /public/images/ */
const ARTICLE_IMAGES = [
  "/images/article-01-trimester.jpg",
  "/images/article-02-imunisasi.jpg",
  "/images/article-03-persalinan.jpg",
];

export function Articles({ t }: ArticlesProps) {
  const a = t.articles;

  return (
    <section className="section articles" id="artikel">
      <div className="container">
        <SectionHead eyebrow={a.eyebrow} title={a.title} desc={a.desc} center />
        <Carousel prevLabel="Artikel sebelumnya" nextLabel="Artikel berikutnya">
          {a.items.map((art, i) => (
            <article key={i} className="article-card">
              <div className="article-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ARTICLE_IMAGES[i] ?? ARTICLE_IMAGES[0]}
                  alt={art.title}
                  className="article-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="article-body">
                <span className="article-tag">{art.tag}</span>
                <h3 className="article-title">{art.title}</h3>
                <span className="article-date">{art.date}</span>
                <a
                  className="article-link"
                  href="#artikel"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`${a.readMore}: ${art.title}`}
                >
                  {a.readMore}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
