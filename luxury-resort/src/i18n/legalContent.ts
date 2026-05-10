import type { Locale } from './strings'

export type LegalSection = {
  title: string
  paragraphs: string[]
}

export type LegalDocument = {
  pageTitle: string
  intro: string
  sections: LegalSection[]
}

export const privacyPolicy: Record<Locale, LegalDocument> = {
  en: {
    pageTitle: 'Privacy Policy',
    intro:
      'Samar Riyadh Al Ammariyah Rest (“we”, “our”, “the property”) respects your privacy. This policy explains how we handle information when you visit our website, make an inquiry, or coordinate a private stay or event with us. It reflects practices common across private resorts and luxury hospitality while addressing how this site and our concierge channels operate.',
    sections: [
      {
        title: 'Who this applies to',
        paragraphs: [
          'This policy applies to visitors of our public website, prospective guests, and event hosts who contact us or interact with our digital touchpoints. If you engage a third party (planner, agency) on your behalf, we may receive information they share with us in connection with your booking.',
        ],
      },
      {
        title: 'Information we may collect',
        paragraphs: [
          'Contact and booking details you choose to provide, such as name, phone number, email (if supplied), event date, estimated guest count, and notes about your occasion — typically when you message us via WhatsApp, call, email, or other channels we publish.',
          'Limited technical data from your browser when you load our site (for example IP address, device type, browser version, and pages viewed), which hosting and analytics services may process automatically.',
          'We do not use this website as a payment vault: payment details, if ever required, are coordinated directly with our team per invoice and secure instructions, not through anonymous web forms.',
        ],
      },
      {
        title: 'How we use your information',
        paragraphs: [
          'To respond to inquiries, prepare proposals, confirm availability, and deliver hospitality services you request.',
          'To operate and secure our website, improve performance, and understand aggregate interest in our offerings.',
          'To comply with applicable law, safety obligations, and reasonable record-keeping for resort operations.',
          'We do not sell your personal information. We do not use your contact details for unrelated marketing unless you have clearly agreed or applicable law permits.',
        ],
      },
      {
        title: 'Cookies and similar technologies',
        paragraphs: [
          'Our site may use cookies or local storage for essential operation, language preference, or aggregated analytics in line with common resort-website practice. You can control cookies through your browser settings; disabling some cookies may affect site behavior.',
        ],
      },
      {
        title: 'Third-party services',
        paragraphs: [
          'Messaging (e.g. WhatsApp), maps or directions (e.g. Google Maps), and infrastructure or analytics providers may process data under their own terms and privacy policies when you use links or embedded tools from our site.',
          'We encourage reviewing those policies when you leave our domain or open a third-party app from our links.',
        ],
      },
      {
        title: 'Retention and security',
        paragraphs: [
          'We retain booking and inquiry records only as long as needed for hospitality delivery, legitimate business purposes, or legal requirements. We apply reasonable administrative and technical safeguards appropriate to the sensitivity of resort guest communications.',
        ],
      },
      {
        title: 'Your choices and rights',
        paragraphs: [
          'Depending on applicable law — including the personal data protection framework in the Kingdom of Saudi Arabia — you may have rights to access, correct, or request deletion of certain personal data, or to object to particular processing. Contact us using the details on this site and we will respond within reasonable timelines required by law.',
        ],
      },
      {
        title: 'Children',
        paragraphs: [
          'Our services are directed to adults planning events or stays. We do not knowingly collect personal data from children without appropriate parental involvement.',
        ],
      },
      {
        title: 'Updates',
        paragraphs: [
          'We may revise this policy to reflect operational, legal, or industry changes. The “last updated” date will change accordingly; continued use of our channels after updates constitutes acceptance where permitted by law.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'For privacy questions, contact us through the concierge details listed in the site footer or your booking correspondence.',
        ],
      },
    ],
  },
  ar: {
    pageTitle: 'سياسة الخصوصية',
    intro:
      'تحترم استراحة سمار الرياض العمارية («نحن»، «المنشأة») خصوصيتكم. توضح هذه السياسة كيفية تعاملنا مع المعلومات عند زيارة موقعنا الإلكتروني، أو إجراء استفسار، أو تنسيق إقامة أو مناسبة خاصة معنا. وتستند إلى ممارسات شائعة في الضيافة والمنتجعات الخاصة مع مراعاة طبيعة هذا الموقع وقنوات خدمة النزلاء لدينا.',
    sections: [
      {
        title: 'من تسري عليهم السياسة',
        paragraphs: [
          'تنطبق هذه السياسة على زوار موقعنا العام، والضيوف المحتملين، ومنسقي المناسبات الذين يتواصلون معنا أو يتفاعلون مع لمساتنا الرقمية. إن فوّضتم جهة خارجية (منسّق، وكالة) فقد نتلقى بيانات يزودوننا بها بخصوص حجزكم.',
        ],
      },
      {
        title: 'البيانات التي قد نجمعها',
        paragraphs: [
          'تفاصيل الاتصال والحجز التي تزودوننا بها طواعية، مثل الاسم، رقم الجوال، البريد عند التوفر، تاريخ المناسبة، عدد الضيوف المتوقع، وملاحظات — غالبًا عبر واتساب أو الاتصال أو البريد أو القنوات الأخرى المعروضة على الموقع.',
          'بيانات تقنية محدودة من المتصفح عند تحميل الصفحات (مثل عنوان IP ونوع الجهاز وإصداره والصفحات المعروضة)، وقد تُعالَج تلقائيًا من خدمات الاستضافة أو التحليلات.',
          'لا نستخدم هذا الموقع كخزنة للدفع: أية بيانات دفع، إن لزم تنسيقها، تتم مباشرة مع فريقنا وفق الفاتورة وتعليمات آمنة، لا عبر نماذج مجهولة على الويب.',
        ],
      },
      {
        title: 'كيف نستخدم المعلومات',
        paragraphs: [
          'للرد على الاستفسارات، وإعداد العروض، وتأكيد التوفر، وتقديم خدمات الضيافة التي طلبتمها.',
          'لتشغيل الموقع وحمايته، وتحسين الأداء، وفهم الاهتمام الإجمالي بعروضنا.',
          'الامتثال للأنظمة المعمول بها، والتزامات السلامة، واحتفاظ المعقول بالسجلات التشغيلية للمنتجع.',
          'لا نبيع بياناتكم الشخصية. لا نستخدم بيانات التواصل لأغراض تسويقية غير ذات صلة ما لم توافقوا صراحة أو يسمح النظام بذلك.',
        ],
      },
      {
        title: 'ملفات تعريف الارتباط والتقنيات المشابهة',
        paragraphs: [
          'قد يستخدم الموقع ملفات تعريف الارتباط أو التخزين المحلي للتشغيل الأساسي، أو حفظ تفضيل اللغة، أو تحليلات مجمّعة بما يتوافق مع ممارسات مواقع المنتجعات. يمكنكم ضبط ذلك من إعدادات المتصفح؛ وتعطيل بعض الملفات قد يؤثر على سلوك الموقع.',
        ],
      },
      {
        title: 'خدمات الطرف الثالث',
        paragraphs: [
          'خدمات المراسلة (مثل واتساب)، والخرائط أو الاتجاهات (مثل خرائط جوجل)، ومزودي البنية أو التحليلات قد يعالجون بيانات بموجب شروط وسياسات خصوصية خاصة بهم عند استخدامكم روابط أو أدوات مدمجة من موقعنا.',
          'ننصح بمراجعة سياساتهم عند مغادرة نطاقنا أو فتح تطبيق طرف ثالث من روابطنا.',
        ],
      },
      {
        title: 'الاحتفاظ والأمان',
        paragraphs: [
          'نحتفظ بسجلات الاستفسار والحجز فقط للمدة اللازمة لتقديم الضيافة، أو للأغراض التجارية المشروعة، أو الالتزامات النظامية. نطبّق إجراءات إدارية وتقنية معقولة ملائمة لحساسية مراسلات ضيوف المنتجع.',
        ],
      },
      {
        title: 'خياراتكم وحقوقكم',
        paragraphs: [
          'بحسب النظام المعمول به — بما في ذلك إطار حماية البيانات الشخصية في المملكة العربية السعودية — قد يحق لكم الاطلاع أو التصحيح أو طلب حذف بعض البيانات، أو الاعتراض على معالجة معيّنة. تواصلوا معنا عبر بيانات الاتصال في تذييل الموقع وسنرد ضمن المدد المعقولة نظامًا.',
        ],
      },
      {
        title: 'الأطفال',
        paragraphs: [
          'خدماتنا موجهة للبالغين الذين ينسّقون الإقامات أو المناسبات. لا نجمع عن قصد بيانات أطفال دون مشاركة ولي مناسبة.',
        ],
      },
      {
        title: 'التحديثات',
        paragraphs: [
          'قد نحدّث هذه السياسة لمواءاة التغييرات التشغيلية أو النظامية أو الممارسات القطاعية. يتغيّر تاريخ «آخر تحديث» وفقًا لذلك؛ واستمرار استخدام قنواتنا بعد التحديث يُعد قبولًا حيث يسمح النظام بذلك.',
        ],
      },
      {
        title: 'للتواصل',
        paragraphs: [
          'لأسئلة الخصوصية، راسلوا فريق الكونسييرج عبر بيانات التواصل في تذييل الموقع أو مراسلات الحجز لديكم.',
        ],
      },
    ],
  },
}

export const resortPolicies: Record<Locale, LegalDocument> = {
  en: {
    pageTitle: 'Resort Policies & Terms',
    intro:
      'These terms and policies govern your use of our website and the framework for private bookings and events at Samar Riyadh Al Ammariyah Rest. They are informed by common conditions used across boutique resorts and estate venues while tailored to our private-retreat model.',
    sections: [
      {
        title: 'Agreement and eligibility',
        paragraphs: [
          'By using our website or placing a booking inquiry, you agree to these terms. Services are offered to individuals and organizations legally able to contract in the Kingdom of Saudi Arabia or as otherwise confirmed in writing.',
        ],
      },
      {
        title: 'Nature of our services',
        paragraphs: [
          'We operate an exclusive private resort and event grounds in Al Ammariyah, Riyadh. Descriptions, imagery, and layouts on this site illustrate the experience; final layout, staffing, and timing follow your written agreement and on-site coordination.',
        ],
      },
      {
        title: 'Bookings and confirmations',
        paragraphs: [
          'Inquiries made through WhatsApp, phone, or email do not guarantee availability until confirmed by our team. A reservation becomes firm only after agreed dates, scope, and any required deposit or signed terms are settled as we communicate to you.',
          'Guest counts, catering pathways, entertainment, and special installations must be disclosed early so we can approve logistics and safety planning.',
        ],
      },
      {
        title: 'Cancellations, changes, and fees',
        paragraphs: [
          'Cancellation and rescheduling rules depend on seasonality, event scale, and contracts issued for your occasion. Industry-standard sliding scales may apply: closer dates may incur higher fees or forfeiture of deposits. Any non-standard arrangement will be stated clearly in your booking correspondence.',
        ],
      },
      {
        title: 'Conduct on property',
        paragraphs: [
          'Guests and vendors must follow lawful, respectful behavior and directions from resort staff and security. Hazardous materials, unauthorized drones, or activities that endanger people or the estate are prohibited unless pre-approved in writing.',
          'Noise, fireworks, laser effects, or vehicle access may be restricted by local regulations and resort policy; obtain written approval before planning such elements.',
        ],
      },
      {
        title: 'Damage, liability, and insurance',
        paragraphs: [
          'Hosts remain responsible for loss or damage caused by their guests or appointed vendors. To the extent permitted by law, our aggregate liability arising from hospitality services is limited to fees paid for the affected booking, except where liability cannot be limited by law.',
          'For large events, we may request proof of vendor insurance or event coverage; failure to provide reasonable evidence may affect plan approval.',
        ],
      },
      {
        title: 'Photography, recording, and privacy of others',
        paragraphs: [
          'Commercial shoots, live broadcasts, or prominent publication of imagery may require advance notice and coordination so we can protect guest privacy and rights of publicity for other groups on adjacent schedules.',
        ],
      },
      {
        title: 'Force majeure',
        paragraphs: [
          'Neither party is liable for delay or non-performance caused by events beyond reasonable control, including severe weather, government action, power or telecom outages, or other emergencies. We will work in good faith to reschedule where practical.',
        ],
      },
      {
        title: 'Website use',
        paragraphs: [
          'Site content is provided for information. We may update descriptions and visuals. Unlawful scraping, intrusive testing, or attempts to disrupt the site are prohibited.',
        ],
      },
      {
        title: 'Governing framework',
        paragraphs: [
          'These terms are governed by the laws of the Kingdom of Saudi Arabia, without regard to conflict-of-law rules. Competent courts in Saudi Arabia shall have jurisdiction unless a separate written contract specifies otherwise.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'For policy or contractual questions, reach our concierge through the official channels listed on this website.',
        ],
      },
    ],
  },
  ar: {
    pageTitle: 'سياسات المنتجع والشروط',
    intro:
      'تحكم هذه السياسات والشروط استخدامكم لموقعنا الإلكتروني وإطار الحجوزات والمناسبات الخاصة في استراحة سمار الرياض العمارية. وهي مستمدة من ممارسات المنتجعات والاستراحات الخاصة مع مراعاة نموذجنا كوجهة خاصة للضيافة.',
    sections: [
      {
        title: 'الموافقة والأهلية',
        paragraphs: [
          'باستخدامكم للموقع أو تقديم استفسار حجز، فإنكم توافقون على هذه الشروط. تُقدَّم الخدمات للأفراد والجهات التي تستطيع التعاقد نظامًا في المملكة العربية السعودية — أو وفق تأكيد خطي آخر.',
        ],
      },
      {
        title: 'طبيعة خدماتنا',
        paragraphs: [
          'نعمل كمنتجع خاص ومساحات مناسبات في العمارية بالرياض. الأوصاف والصور والمخططات على الموقع توضيحية؛ أما التوزيع النهائي والتشغيل والتوقيت فيتبع اتفاقكم الكتابي والتنسيق في الموقع.',
        ],
      },
      {
        title: 'الحجوزات والتأكيد',
        paragraphs: [
          'لا يكفّ الاستفسار عبر واتساب أو الهاتف أو البريد عن تأكيد التوفر حتى يصدر تأكيد من فريقنا. يثبت الحجز بعد الاتفاق على التواريخ ونطاق الخدمة وأي عربون أو توقيع شروط كما يُبلَّغ لكم كتابيًا.',
          'يجب الإفصاح مبكرًا عن أعداد الضيوف ومسارات التموين والترفيه والتركيبات الخاصة لاعتماد الخدمات اللوجستية ومتطلبات السلامة.',
        ],
      },
      {
        title: 'الإلغاء والتعديل والرسوم',
        paragraphs: [
          'قواعد الإلغاء وإعادة الجدولة تعتمد على الموسمية وحجم المناسبة والعقود الصادرة لكم. قد تُطبَّق شرائح زمنية اعتيادية في القطاع: التواريخ الأقرب قد تترتب عليها رسوم أعلى أو مصادرة عربون. أي ترتيب استثنائي يُذكر صراحة في مراسلات حجزكم.',
        ],
      },
      {
        title: 'السلوك داخل المنشأة',
        paragraphs: [
          'على الضيوف والمورّدين الالتزام بسلوك قانوني ومحترم وتعليمات فريق الاستراحة والأمن. يُمنع إدخال مواد خطرة أو طائرات مسيّرة دون إذن، أو أنشطة تهدد الأشخاص أو الممتلكات ما لم يُوافَق عليها كتابيًا.',
          'قد تُقيَّد الضوضاء أو الألعاب النارية أو التأثيرات الضوئية أو دخول المركبات بموجب الأنظمة المحلية وسياسة المنشأة؛ اطلبوا موافقة خطية قبل التخطيط لها.',
        ],
      },
      {
        title: 'الأضرار والمسؤولية والتأمين',
        paragraphs: [
          'يبقى المضيف مسؤولاً عن الفقد أو الضرر الناجم عن ضيوفه أو مورّديه المعينين. حيث يسمح النظام، تقتصر مسؤوليتنا التعاقدية الناشئة عن خدمات الضيافة على الرسوم المدفوعة للحجز المتأثر، باستثناء ما لا يجوز الحد منه نظامًا.',
          'للمناسبات الكبيرة قد نطلب إثبات تأمين للمورّدين أو للمناسبة؛ وعدم تقديم مستندات معقولة قد يؤثر على اعتماد الخطة.',
        ],
      },
      {
        title: 'التصوير والبث وخصوصية الغير',
        paragraphs: [
          'قد يتطلّب التصوير التجاري أو البث المباشر أو نشر صور بارز إشعارًا مسبقًا وتنسيقًا لحماية خصوصية نزلاء آخرين وجداول مجاورة.',
        ],
      },
      {
        title: 'القوة القاهرة',
        paragraphs: [
          'لا تُحمَّل أي طرف عن تأخير أو عدم تنفيذ بسبب أحداث خارج السيطرة المعقولة، بما في ذلك الطقس الشديد، إجراءات حكومية، انقطاع كهرباء أو اتصالات، أو حالات طوارئ. نسعى بحسن نية لإعادة الجدولة حيث أمكن.',
        ],
      },
      {
        title: 'استخدام الموقع',
        paragraphs: [
          'المحتوى معلوماتي قد نحدّثه. يُمنع الاستخراج الآلي المضاربي أو الاختبارات المخترقة أو تعطيل الموقع.',
        ],
      },
      {
        title: 'الإطار النظامي',
        paragraphs: [
          'تخضع هذه الشروط لأنظمة المملكة العربية السعودية دون إخلال بقواعد تنازع القوانين. تكون المحاكم المختصة في المملكة مرجعية النزاع ما لم ينص عقد منفصل خلاف ذلك.',
        ],
      },
      {
        title: 'للتواصل',
        paragraphs: [
          'لأسئلة السياسات أو العقود، تواصلوا مع الكونسييرج عبر القنوات الرسمية المعروضة على الموقع.',
        ],
      },
    ],
  },
}
