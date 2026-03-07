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
        <div className="max-w-4xl mx-auto text-brand-primary/90 leading-relaxed">
          {locale === 'tr' ? (
            <>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">AirParkHotel&apos;in Hikâyesi</h2>
              <div className="space-y-4 mb-12">
                <p>Her havaalanı bir hikâye anlatır.</p>
                <p>
                  Kalkışa hazırlanan uçakların sesi, kuleyle yapılan konuşmalar, pist ışıkları ve her bir uçuşun heyecanı.
                  Ve bir efsane adamın hayalleri… Atasının yolunda ülkesine ve milletine karşı hissettiği görev bilinci…
                </p>
                <p>AirParkHotel işte bu hikâyenin tam içinde doğdu.</p>
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
              </div>

              <h2 className="text-2xl font-bold text-brand-primary mb-6">AirParkHotel Tanıtımı</h2>
              <div className="space-y-4 mb-12">
                <p>
                  Havacılığın kalbinde yer alan ve misafirlerine gökyüzüne yakın bir konaklama deneyimi sunmayı
                  amaçlayan AirParkHotel, Eskişehir, Sivrihisar yakınında, özel bir havaalanı kompleksinin içinde,
                  pist ve hangarların hemen yanında konumlanmış ve havacılık ruhu ile tasarlanmış benzersiz bir oteldir.
                </p>
                <p>
                  Gökyüzüne komşu bu ayrıcalıklı tesis, sivil ve profesyonel havacılık faaliyetlerine hizmet vermek
                  amacıyla kurulmuş olup, aynı zamanda gökyüzünün dinamizmini, uçuşların heyecanını ve doğanın
                  sakinliğini aynı anda yaşayabileceğiniz üst düzey konfor sunan özel bir yaşam alanıdır.
                </p>
                <p>
                  AirParkHotel&apos;de; 38 adet king size yataklı, apron ve gölet manzaralı, modern, lüks odaların
                  yanı sıra, 2 adet de geniş yaşam alanına sahip lüks suit odalar yer almaktadır. Her detay,
                  misafirlerimizin konforu, huzuru ve verimli bir konaklama deneyimi yaşaması için özenle tasarlanmıştır.
                </p>
                <p>Temel yaklaşımı;</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Samimi ve kaliteli hizmet sunmak,</li>
                  <li>Misafirlerimize huzurlu ve konforlu bir ortam sağlamak,</li>
                  <li>Havacılık kültürünü yaşatan özgün bir atmosfer oluşturmak,</li>
                </ul>
                <p>
                  olan tesisimiz, pilotlardan havacılık meraklılarına, iş seyahatindeki misafirlerden doğayla iç içe
                  bir mola arayan gezginlere kadar herkes için gökyüzüne yakın, çok özel bir duraktır. Yalnızca
                  konaklama değil; aynı zamanda kurumsal eğitimler, seminerler, strateji toplantıları ve toplam
                  kalite yönetimi çalışmaları için ideal bir ortam sunmaktadır. Şehrin gürültüsünden uzak, sessiz
                  ve ilham verici atmosferi, odaklanmayı ve üretkenliği doğal olarak artırır.
                </p>
                <p>
                  Uçuş öncesi dinlenmek, uçuş sonrası yenilenmek veya eğitim süreçlerinde konforlu bir konaklama
                  deneyimi yaşamak isteyen havacılar için AirParkHotel ideal bir seçimdir.
                </p>
                <p>
                  AirParkHotel&apos;in merkezinde yer alan özel gölet, optimist ve radyo kontrollü tekneler için
                  uygun yapısıyla hem görsel bir zarafet, hem de huzur veren bir deneyim sunar. Bu benzersiz ortam,
                  misafirlerimize doğa ile bütünleşmiş, sakin ve seçkin bir konaklama imkânı sağlar.
                </p>
                <p className="font-semibold">Burada konaklamak, gökyüzüne biraz daha yakın olmaktır.</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">The Story of AirParkHotel</h2>
              <div className="space-y-4 mb-12">
                <p>Every airport tells a story.</p>
                <p>
                  The sound of aircraft preparing for take-off, radio calls with the tower, runway lights and the
                  excitement of every flight. And the dreams of a legendary man… A sense of duty towards his country
                  and his people, following in the footsteps of his ancestor…
                </p>
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
                <p>
                  AirParkHotel offers an accommodation experience close to the sky — for pilots, aviation enthusiasts,
                  business travellers and those seeking a peaceful retreat.
                </p>
                <p className="font-semibold">Here, the sky is not just above you. It is right beside you.</p>
              </div>

              <h2 className="text-2xl font-bold text-brand-primary mb-6">About AirParkHotel</h2>
              <div className="space-y-4 mb-12">
                <p>
                  AirParkHotel is a unique hotel at the heart of aviation, designed with the spirit of flight and
                  dedicated to offering guests an accommodation experience close to the sky. Located near Eskişehir,
                  Sivrihisar, within a private airfield complex, right beside the runway and hangars, it is a truly
                  one-of-a-kind property.
                </p>
                <p>
                  This privileged destination, set right beside the sky, was established to serve civil and
                  professional aviation activities while also offering a refined private living space where you can
                  simultaneously experience the dynamism of the sky, the thrill of flight and the tranquillity of nature.
                </p>
                <p>
                  AirParkHotel features 38 modern luxury rooms with king-size beds and apron and lake views, as well
                  as 2 spacious luxury suites. Every detail has been thoughtfully designed to ensure our guests enjoy
                  comfort, peace and a productive stay.
                </p>
                <p>Our core approach is to:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Deliver sincere and high-quality service,</li>
                  <li>Provide our guests with a peaceful and comfortable environment,</li>
                  <li>Create an authentic atmosphere that keeps aviation culture alive.</li>
                </ul>
                <p>
                  Our property is a very special destination close to the sky — for everyone from pilots and aviation
                  enthusiasts to business travellers and those seeking a nature-immersed break. It is not only a place
                  to stay; it is also an ideal setting for corporate trainings, seminars, strategy meetings and total
                  quality management programmes. Its quiet, inspiring atmosphere away from the noise of the city
                  naturally enhances focus and productivity.
                </p>
                <p>
                  AirParkHotel is an ideal choice for aviators who wish to rest before a flight, unwind after landing
                  or enjoy a comfortable stay during training programmes.
                </p>
                <p>
                  At the heart of AirParkHotel lies a private lake, suitable for optimist and radio-controlled boats,
                  offering both visual elegance and a calming experience. This distinctive environment gives our guests
                  a tranquil and refined stay that is deeply connected with nature.
                </p>
                <p className="font-semibold">To stay here is to be a little closer to the sky.</p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
