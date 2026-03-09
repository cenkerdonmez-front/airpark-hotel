import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const locale = useLocale();

  const isTr = locale === 'tr';

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

      <section className="bg-brand-beige/30 border-y border-brand-primary/10 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Block 1 – image left, text right */}
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-brand-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/about/1.jpg"
                alt={isTr ? 'AirParkHotel\'in Hikayesi' : 'The Story of AirParkHotel'}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
                {isTr ? 'AirParkHotel\'in Hikayesi' : 'The Story of AirParkHotel'}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
                {isTr ? 'Gökyüzüne Komşu Bir Rüya' : 'A Dream Next to the Sky'}
              </p>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
                {isTr ? (
                  <>
                    <p>Her havaalanı bir hikaye anlatır.</p>
                    <p>Kalkışa hazırlanan uçakların sesi, kuleyle yapılan konuşmalar, pist ışıkları ve her bir uçuşun heyecanı.</p>
                    <p>Ve bir efsane adamın hayalleri… Atasının yolunda ülkesine ve milletine karşı hissettiği görev bilinci…</p>
                    <p>AirParkHotel işte bu hikayenin tam içinde doğdu.</p>
                    <p>
                      Havacılık dünyasının dinamizmini ve gökyüzünün özgürlüğünü yakından hissedebileceğiniz bir yerde,
                      misafirlerimize sıradan bir konaklamadan çok daha fazlasını sunmak amacıyla kuruldu.
                    </p>
                    <p>
                      Burada sabahlar farklı başlar. Kahvenizi içerken apronda hazırlanan uçakları izleyebilirsiniz.
                      Gün batımında hangarların ve aprondaki uçakların siluetleri gökyüzüyle birleşir.
                      Gece ise pist ışıkları ve yıldızlar eşsiz bir atmosfer oluşturur.
                    </p>
                    <p>
                      AirParkHotel; pilotlar, havacılık meraklıları, iş seyahatindeki misafirler ve sakin bir ortam arayan
                      gezginler için gökyüzüne komşu bir konaklama deneyimi sunar.
                    </p>
                    <p className="font-semibold">Burada gökyüzü sadece yukarıda değildir. Tam yanınızdadır.</p>
                  </>
                ) : (
                  <>
                    <p>Every airport tells a story.</p>
                    <p>The sound of aircraft preparing for take-off, radio calls with the tower, runway lights and the excitement of every flight.</p>
                    <p>And the dreams of a legendary man… A sense of duty towards his country and his people, following in the footsteps of his ancestor…</p>
                    <p>AirParkHotel was born right at the heart of this story.</p>
                    <p>
                      It was founded in a place where you can feel the dynamism of the aviation world and the freedom
                      of the sky up close — with the aim of offering our guests far more than an ordinary stay.
                    </p>
                    <p>
                      Mornings begin differently here. You can watch aircraft being prepared on the apron while enjoying
                      your coffee. At sunset, the silhouettes of hangars and aircraft on the apron merge with the sky.
                      At night, runway lights and stars create an unparalleled atmosphere.
                    </p>
                    <p className="font-semibold">Here, the sky is not just above you. It is right beside you.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Block 2 – text left, image right */}
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
                {isTr ? 'AirParkHotel Tanıtımı' : 'About AirParkHotel'}
              </h2>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
                {isTr ? 'Gökyüzüne Yakın, Konfora Yakın' : 'Close to the Sky, Close to Comfort'}
              </p>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
                {isTr ? (
                  <>
                    <p>
                      Havacılığın kalbinde yer alan ve misafirlerine gökyüzüne yakın bir konaklama deneyimi sunmayı
                      amaçlayan AirParkHotel, Eskişehir, Sivrihisar yakınında, özel bir havaalanı kompleksinin içinde,
                      pist ve hangarların hemen yanında konumlanmış ve havacılık ruhu ile tasarlanmış benzersiz bir oteldir.
                    </p>
                    <p>
                      AirParkHotel&apos;de; 38 adet king size yataklı, apron ve gölet manzaralı, modern, lüks odaların
                      yanı sıra, 2 adet de geniş yaşam alanına sahip lüks suit odalar yer almaktadır.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Samimi ve kaliteli hizmet sunmak,</li>
                      <li>Misafirlerimize huzurlu ve konforlu bir ortam sağlamak,</li>
                      <li>Havacılık kültürünü yaşatan özgün bir atmosfer oluşturmak,</li>
                    </ul>
                    <p className="font-semibold">Burada konaklamak, gökyüzüne biraz daha yakın olmaktır.</p>
                  </>
                ) : (
                  <>
                    <p>
                      AirParkHotel is a unique hotel at the heart of aviation, designed with the spirit of flight and
                      dedicated to offering guests an accommodation experience close to the sky. Located near Eskişehir,
                      Sivrihisar, within a private airfield complex, right beside the runway and hangars.
                    </p>
                    <p>
                      AirParkHotel features 38 modern luxury rooms with king-size beds and apron and lake views, as well
                      as 2 spacious luxury suites. Every detail has been thoughtfully designed to ensure our guests enjoy
                      comfort, peace and a productive stay.
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Deliver sincere and high-quality service,</li>
                      <li>Provide our guests with a peaceful and comfortable environment,</li>
                      <li>Create an authentic atmosphere that keeps aviation culture alive.</li>
                    </ul>
                    <p className="font-semibold">To stay here is to be a little closer to the sky.</p>
                  </>
                )}
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden bg-brand-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)] order-1 md:order-2">
              <Image
                src="/about/2.jpg"
                alt={isTr ? 'AirParkHotel Tanıtımı' : 'About AirParkHotel'}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
