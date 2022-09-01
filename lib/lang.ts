import { WorkHistoryType } from "../components/workHistory/type";
interface String404 {
  title: string;
  siteTitle: string;
  subTitle: string;
  buttonText: string;
}

interface TitleSubtitle {
  title: string;
  subTitle: string;
}

/**
 * testimonial Interface
 */
interface Testimonials {
  name: string;
  title: string;
  image: string;
  location: string;
  testimonial: string;
}

interface Link {
  text: string;
  href: string;
  target?: string;
}

interface HeroTitle {
  intro: string;
  name: string;
  secondIntro: string;
  title1: string;
  thirdIntro: string;
  title2: string;
}

interface SocialMedia {
  twitter: string;
  github: string;
  instagram: string;
  linkedIn: string;
}

interface GetConnected {
  title: string;
  subtitle: string;
  link: Link;
}

interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  work: string;
  middleContent: string;
  blog: string;
  emailMe: string;
}

interface Footer {
  title: string;
}

/**
 * work history type
 */

type WorkHistory = {
  workHistories: WorkHistoryType[];
  title: string;
};

interface LangType {
  languages: TitleSubtitle;
  general: SiteSettings;
  workHistories: WorkHistory;
  hero: {
    title: HeroTitle;
    subTitle: string;
    secondRowTitle: string;
    moreText: string[];
  };
  socialMedia: SocialMedia;
  portfolio: {
    title: string;
    description: string;
    more: string;
  };
  testimonials: {
    testimonials: Testimonials[];
  } & TitleSubtitle;
  blog: {
    title: string;
    description: string;
  };
  middleContent: {
    title: string;
    description: string[];
    link: Link;
  };
  getConnected: GetConnected;
  footer: Footer;
  string404: String404;
}

const LanguageStrings: {
  am: LangType;
  en: LangType;
} = {
  am: {
    languages: {
      title: "የመጠቀማቸው የማዘዣ ቋንቋዎች",
      subTitle: "",
    },
    general: {
      siteTitle: "ሔኖክ ፀጋዬ",
      siteDescription: "ቴክኖሎጅስት ፣ ሶፍትዌር አበልጻጊ",
      work: "ስራዎች",
      middleContent: "እንዴት ተጀመረ",
      blog: "ጦማር",
      emailMe: "ኢሜል ላክ",
    },
    workHistories: {
      title: "የስራ ታሪክ",
      workHistories: [
        {
          role: "ዌብ አበልጻጊ",
          responsibilities: [""],
          company: {
            name: "ካፕታሪዮ",
            website: "https://captario.com",
          },
          startDate: "2022-01-04",
          currentlyWorkingHere: true,
          address: {
            country: "ስዊድን",
            city: "ጎተንበርግ",
          },
        },
        {
          role: "ሞባይል ትግበራ አበልጻጊ",
          responsibilities: [
            "የመተግበሪያው ላይ የነበሩ ችግሮችን መፍታት",
            "አንዳንድ ወሳኝ የትግበራ ክፍሎችን መተግበር",
            "የተግበራውን በስርአት ማዋቀር",
          ],
          company: {
            name: "ሲንሲር",
            website: "https://sincere.com",
          },
          startDate: "2021-10-04",
          endDate: "2020-01-01",
          address: {
            country: "አሜሪካ",
            city: "ሳንፍራንሲስኮ",
          },
        },
      ],
    },
    testimonials: {
      title: "ምስክርነት",
      subTitle:
        "የሚከተሉት ሰዎች ከኔ ጋር የሰሩ ሲሆን በነበርንም ሰራ የሚከተለዉን ሀሳብ ሊያጋሩ ፈቃደኛ ሆነዋል።",
      testimonials: [
        {
          name: "ሮበርት ያው",
          title: "CTO at Sincere",
          image: "/assets/henok-face.jpg",
          location: "ካሊፎርኒያ ፣ አሜሪካ",
          testimonial:
            " እንደ አሜሪካ የሚከተሉት ሰዎች ከኔ ጋር የሰሩ ሲሆን በነበርንም ሰራ የሚከተለዉን ሀሳብ ሊያራሩ ፈቃደኛ ሆነዋል።",
        },
      ],
    },
    hero: {
      title: {
        intro: "ሰላም",
        name: "ሔኖክ ፀጋዬ",
        secondIntro: "እባላለሁ። ታዲያ",
        title1: "ቴክኖሎጅስት",
        thirdIntro: "ስሆን በዋነኝነት ደግሞ ",
        title2: "ሶፍትዌር አበልጻጊ ነኝ።",
      },
      subTitle: "ራስህን/ሽን ለማስተዎወቅ ታች ላይ ኢሜይል ልትልክ/ኪ ትችላላችሁ ።",
      secondRowTitle: "ቴክኖሎጅስት።",
      moreText: [
        " በአዲስ-አበባ ዩንቨርስቲ በ ኮምፒውተር ሳይንስ ትምህርቴን የተከታተልኩ ሲሆን በዋነኝነት ከዌብ እንዲሁም ከ ተንቀሳቃሽ ስልኮች ጋር የተገናኙ ሶፍትዌሮችን እሰራለሁ። በዚህም ምክኒያት JAVASCRIPT የተሰኘውን ማዘዣ እወደዋለሁ። የአሰራሬ መመሪያ ንፁ እና ሰርዐት ያለው ስራ ነው።",
      ],
    },
    portfolio: {
      title: "ከአሁን በፊት የተሰሩ ስራዎች",
      more: "ተጨማሪ ይመልከቱ",
      description: "ከአሁን በፊት በተሻለ መንገድ የሰራሆቸው ስራዎች እንደሚከተለው ዘርዝሪያለሁ ።",
    },
    blog: {
      title: "ከሀሳቦቸ መካከል",
      description: "አንዳንድ ሃሳቦችን ከብዙ በትንሹ እንዲህ አቅርቢያለሁ።",
    },
    socialMedia: {
      twitter: "https://twitter.com/henokcode",
      github: "https://github.com/henoktsegaye",
      instagram: "https://instagram.com/henokcode",
      linkedIn: "https://www.linkedin.com/in/henok-tsegaye-yeshanew",
    },
    getConnected: {
      title: "ሀሳብዎን ይግለጡ ።",
      subtitle: "መልዕክት ሊልኩልኝ ካሰኝዎት ታች ላይ ያለዉን ሊንክ ይጫኑ",
      link: {
        href: "mailto:maxhenock@gmail.com",
        target: "_blank",
        text: "መልዕክት ላክ",
      },
    },
    middleContent: {
      title: "እንዴት ተጀመረ ?",
      description: [
        "ከመጀመሪያ ሰለቴክኖሎጂ ያን ያክል መረጃ ባይኖረኝም፣ እንደማንኛውም ታዳጊ ስሰማ ፣ በፊልምም ስመለከት ደስ ይለኝ ነበር፣ ይገርመኝም ነበር። ያዉ ከዛ ባለፈ የመጀመሪያ የኮምፒውተር ክፍል ስገባ እጅግ ጎጉቸ ነበር ፣ ከዛም አልፎ በማስታወሻየ ከትቢያት ነበር ያችን ቀን ። ሆኖም ግን ዋናው መሰረት የዩንቨርስቲ ትምህርቴን በምከታተልበት ወቅት ነበር። አንዳንዴ ሰው መዋያውን አያውቅም ይባላል ለኔ እርግጥ ሆኖ አግቼዋለሁ ፣ ወደ ይንቨርስቲ ስቀላቀል ፍጽም ባልጠበቅኩት የትምህርት ክፍል ተመደብኩ Computational science ",
        "ታሪኩ ከመሰጠህ /ሽ ብዙ ተጨማሪ ማንበብ ይቻላል ፣ ይበረታታልም ።",
      ],
      link: {
        text: "ይቆየን",
        href: "#!",
      },
    },
    footer: {
      title: "በ ❤️  የታነፀ ።",
    },
    string404: {
      title: "ይህ ገጽ አልተገኘም ።",
      siteTitle: "ይህ ገጽ አልተገኘም",
      subTitle: "ወደ ዋናዉ ማውጫ በመሄድ ማየት ይችላሉ ።",
      buttonText: "ወደ ማውጫው ተመለስ",
    },
  },
  en: {
    languages: {
      title: "programming languages i use",
      subTitle: "",
    },
    general: {
      siteTitle: "Henok Tsegaye",
      siteDescription: "Technologiest and Software developer",
      work: "Works",
      middleContent: "How it Started",
      blog: "Blog",
      emailMe: "Email Me",
    },
    workHistories: {
      title: "Work History",
      workHistories: [
        {
          role: "Frontend Developer",
          responsibilities: ["Developed some features there"],
          company: {
            name: "Captario",
            website: "https://captario.com",
          },
          startDate: "2022-01-04",
          currentlyWorkingHere: true,
          address: {
            country: "Sweden",
            city: "Gotheberg",
          },
        },
        {
          role: "Mobile Developer",
          responsibilities: [
            "Organized the codebase for better manageability and maintainability.",
            "Tracked and fixed bugs on the previous version of the application.",
            "Implemented some key features of the application communicating with the back end.",
          ],
          company: {
            name: "Sincere",
            website: "https://sincere.com",
          },
          startDate: "2021-10-04",
          endDate: "2022-01-01",
          address: {
            country: "America",
            city: "San Francisco",
          },
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subTitle: "What people say about me",
      testimonials: [
        {
          name: "Robert Yau",
          title: "CTO at Sincere ",
          image: "/assets/henok-face.jpg",
          location: "San Francisco, CA, USA",
          testimonial: "Being nice working with Henok",
        },
      ],
    },
    hero: {
      title: {
        intro: "HI, I am ,",
        name: "Henok Tsegaye.",
        secondIntro: "I am a",
        title1: "Technologiest.",
        thirdIntro: "And mainly a",
        title2: "Software Developer.",
      },
      subTitle: "Send me an email to introduce yourself.",
      secondRowTitle: "Technologiest By Interest.",
      moreText: [
        "Graduated from Addis Ababa University, I usaully work in web and mobile application development , for that reason I like using JAVASCRIPT. My work philosphy is Clean code and structure.",
      ],
    },
    socialMedia: {
      twitter: "https://twitter.com/henokcode",
      github: "https://github.com/henoktsegaye",
      instagram: "https://instagram.com/henokcode",
      linkedIn: "https://www.linkedin.com/in/henok-tsegaye-yeshanew",
    },
    portfolio: {
      title: "Previous Works",
      more: "View More",
      description:
        "Here I Listed some of the works i have done so far, that might be intersting.",
    },
    blog: {
      title: "Some Thoughts i have.",
      description:
        "I usually think about stuff just like anyone, here are some of them that might interest you.",
    },
    getConnected: {
      title: "Send Me a Message!",
      subtitle:
        "I like hearing from people, even to say. seriously i like hearing from people.",
      link: {
        href: "mailto:maxhenock@gmail.com",
        target: "_blank",
        text: "Send an Email",
      },
    },
    middleContent: {
      title: "How I got started!",
      description: [
        "It's definetly a long story but i will keep it simple me and technology were not that close in the begning. But still I remember how excited I was when I first walked in to the ICT class in highschool, I even wrote what i was going to do in my journal. But still didn't know much about it til i took my first course in stastics.that was the moment",
        "If you are still intereseted you might want to know more about it.",
      ],
      link: {
        text: "More Coming Soon",
        href: "#!",
      },
    },
    footer: {
      title: "Designed By ME with ❤️",
    },
    string404: {
      siteTitle: "Page not found",
      title: "didn't found this page",
      subTitle: "you can go home and look around",
      buttonText: "Go Home",
    },
  },
};

export default LanguageStrings;
export type {
  LangType as langType,
  Link as link,
  SocialMedia as socialMedia,
  HeroTitle as heroTitle,
  GetConnected as getConnected,
  Footer as footer,
  SiteSettings as siteStrings,
  String404 as string404,
};
