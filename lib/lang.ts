interface link {
  text: string;
  href: string;
  target?: string;
}

interface heroTitle {
  intro: string;
  name: string;
  secondIntro: string;
  title1: string;
  thirdIntro: string;
  title2: string;
}

interface socialMedia {
  twitter: string;
  github: string;
  instagram: string;
  linkedIn: string;
}

interface getConnected {
  title: string;
  subtitle: string;
  link: link;
}

interface siteStrings {
  siteTitle: string;
  siteDescription: string;
  work: string;
  middleContent: string;
  blog: string;
  emailMe: string;
}

interface footer {
  title: string;
}

interface langType {
  general: siteStrings;
  hero: {
    title: heroTitle;
    subTitle: string;
    secondRowTitle: string;
    moreText: string;
  };
  socialMedia: socialMedia;
  portfolio: {
    title: string;
    description: string;
  };
  blog: {
    title: string;
    description: string;
  };
  middleContent: {
    title: string;
    description: string[];
    link: link;
  };
  getConnected: getConnected;
  footer: footer;
}

const langString: {
  am: langType;
  en: langType;
} = {
  am: {
    general: {
      siteTitle: "ሔኖክ ፀጋዬ",
      siteDescription: "ቴክኖሎጅስት ፣ ሶፍትዌር አበልጻጊ",
      work: "ስራዎች",
      middleContent: "እንዴት ተጀመረ",
      blog: "ጦማር",
      emailMe: "ኢሜል ላክ",
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
      secondRowTitle: "ያሳስበኛል ።",
      moreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    portfolio: {
      title: "ከአሁን በፊት የተሰሩ ስራዎች",
      description: "ከአሁን በፊት በተሻለ መንገድ የሰራሆቸው ስራዎች እንደሚከተለው ዘርዝሪያለሁ ።",
    },
    blog: {
      title: "ከአሁን በፊት የተሰሩ ስራዎች",
      description: "ከአሁን በፊት በተሻለ መንገድ የሰራሆቸው ስራዎች እንደሚከተለው ዘርዝሪያለሁ ።",
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
        href: "",
        target: "_blank",
        text: "መልዕክት ላክ",
      },
    },
    middleContent: {
      title: "እንዴት ተጀመረ ?",
      description: [
        "ከመጀመሪያ ሰለቴክኖሎጂ ያን ያክል መረጃ ባይኖራኝም፣ እንደማንኛውም ታዳግ ደስ ይለኝ ነበር፣ ይገርመኝም ነበር። ያዉ ከዛ ባለፈ የመጀመሪያ የኮምፒውተር ክፍል ስገባ እጅግ ጎጉቸ ነበር ፣ ከዛም አልፎ በማስታወሻየ ከትቢያት ነበር ያችን ቀን ። ሆኖም ግን ዋናው መሰራት የዩንቨርስቲ ትምህርቴን በምከታተልበት ወቅት ነበር ።",
        "ታሪኩ ከመሰጠህ /ሽ ብዙ ተጨማሪ ማንበብ ይቻላል ፣ ይበረታታልም ።",
      ],
      link: {
        text: "ተመልክት",
        href: "/start",
      },
    },
    footer: {
      title: "በ ❤️  የታነፀ ።",
    },
  },
  en: {
    general: {
      siteTitle: "Henok Tsegaye",
      siteDescription: "Technologiest and Software developer",
      work: "Works",
      middleContent: "How it Started",
      blog: "Blog",
      emailMe: "Email Me",
    },
    hero: {
      title: {
        intro: "HI, I am",
        name: "Henok Tsegaye",
        secondIntro: "I am a",
        title1: "Technologiest",
        thirdIntro: "and mainly a",
        title2: "Software Developer.",
      },
      subTitle: "Send me an email to introduce yourself.",
      secondRowTitle: "I care",
      moreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    socialMedia: {
      twitter: "https://twitter.com/henokcode",
      github: "https://github.com/henoktsegaye",
      instagram: "https://instagram.com/henokcode",
      linkedIn: "https://www.linkedin.com/in/henok-tsegaye-yeshanew",
    },
    portfolio: {
      title: "Previous Works",
      description:
        "Here i Listed some of the works i have done so far, that might interest you.",
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
        href: "",
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
        text: "ተመልክት",
        href: "/start",
      },
    },
    footer: {
      title: "Designed By ME with ❤️",
    },
  },
};

export default langString;
export type {
  langType,
  link,
  socialMedia,
  heroTitle,
  getConnected,
  footer,
  siteStrings,
};
