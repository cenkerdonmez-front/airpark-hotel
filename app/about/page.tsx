import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-white/80 font-bold tracking-wider uppercase text-sm md:text-base mb-3 block">
            {t('subtitle')}
          </span>
          <h1 className="text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 !bg-brand-beige/30">
        <div className="max-w-4xl mx-auto space-y-6 text-brand-primary/90 leading-relaxed">
          {locale === 'tr' ? (
            <>
              <p>
                AirParkHotel, Eskişehir Sivrihisar yakınında, özel bir havaalanı kompleksinin içinde
                konumlanmış, havacılık ruhu ile tasarlanmış benzersiz bir butik oteldir. Gökyüzüne komşu
                bu ayrıcalıklı tesis, sivil ve profesyonel havacılık faaliyetlerine hizmet vermek amacıyla
                kurulmuş olup, aynı zamanda doğa ile iç içe, üst düzey konfor sunan özel bir yaşam alanıdır.
              </p>
              <p>
                Toplam 40 odası bulunan AirParkHotel’de; king ve queen size yataklı, gölet ve apron
                manzaralı modern odaların yanı sıra, geniş yaşam alanına sahip lüks suit odalar yer
                almaktadır. Her detay, misafirlerimizin konforu, huzuru ve verimli bir konaklama
                deneyimi yaşaması için özenle tasarlanmıştır.
              </p>
              <p>
                Tesisimiz, yalnızca konaklama değil; aynı zamanda kurumsal eğitimler, seminerler, strateji
                toplantıları ve toplam kalite yönetimi çalışmaları için ideal bir ortam sunmaktadır. Şehrin
                gürültüsünden uzak, sessiz ve ilham verici atmosferi, odaklanmayı ve üretkenliği doğal
                olarak artırır.
              </p>
              <p>
                AirParkHotel’in merkezinde yer alan özel gölet, optimist ve radyo kontrollü tekneler için
                uygun yapısıyla hem görsel bir zarafet hem de huzur veren bir deneyim sunar. Bu benzersiz
                ortam, misafirlerimize doğa ile bütünleşmiş, sakin ve seçkin bir konaklama imkânı sağlar.
              </p>
              <p>
                AirParkHotel, havacılığın dinamizmi ile doğanın huzurunu bir araya getiren, Türkiye’de
                benzeri olmayan özel bir konaklama deneyimi sunmaktadır.
              </p>
              <p>
                <strong>Havacılar İçin Tasarlanmış Bir Otel</strong>
                <br />
                AirParkHotel, sivil ve profesyonel havacılar için özel olarak tasarlanmış nadir
                tesislerden biridir. Pist ve apronun hemen yanında konumlanan otelimiz, pilotlar, uçuş
                ekipleri, havacılık eğitmenleri ve havacılık profesyonelleri için maksimum konfor ve
                erişim kolaylığı sağlar.
              </p>
              <p>
                Uçuş öncesi dinlenmek, uçuş sonrası yenilenmek veya eğitim süreçlerinde konforlu bir
                konaklama deneyimi yaşamak isteyen havacılar için AirParkHotel ideal bir seçimdir.
              </p>
            </>
          ) : (
            <>
              <p>
                AirParkHotel is a unique boutique hotel designed with the spirit of aviation, located within
                a private airfield complex near Eskişehir Sivrihisar. This privileged destination, set right
                beside the sky, was established to serve civil and professional aviation activities while also
                offering a refined living space in close harmony with nature and with a high level of comfort.
              </p>
              <p>
                AirParkHotel has a total of 40 rooms, including modern rooms with king and queen size beds,
                lake and apron views, as well as spacious luxury suites with generous living areas. Every detail
                is carefully considered to provide our guests with comfort, peace and a productive stay.
              </p>
              <p>
                Our property is not only a place to stay; it is also an ideal setting for corporate trainings,
                seminars, strategy meetings and total quality management programmes. Its quiet, inspiring
                atmosphere away from the noise of the city naturally enhances focus and productivity.
              </p>
              <p>
                At the heart of AirParkHotel lies a private lake, suitable for optimist and radio‑controlled boats,
                offering both visual elegance and a calming experience. This distinctive environment gives our
                guests a tranquil and refined stay that is deeply connected with nature.
              </p>
              <p>
                Bringing together the dynamism of aviation with the serenity of nature, AirParkHotel offers a
                one‑of‑a‑kind accommodation experience in Türkiye.
              </p>
              <p>
                <strong>A Hotel Designed for Aviators</strong>
                <br />
                AirParkHotel is one of the rare properties specially designed for civil and professional aviators.
                Located right next to the runway and apron, it provides maximum comfort and ease of access for
                pilots, flight crews, aviation instructors and aviation professionals.
              </p>
              <p>
                Whether you wish to rest before a flight, unwind after landing or enjoy a comfortable stay during
                training programmes, AirParkHotel is an ideal choice for those in aviation.
              </p>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

