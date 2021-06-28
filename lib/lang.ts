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

interface langType {
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
  middleContent: {
    title: string;
    description: string;
    link: link;
  };
  getConnected: {
    title: string;
    subtitle: string;
    link: link;
  };
}

const langString: {
  am: langType;
  en: langType;
} = {
  am: {
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    socialMedia: {
      twitter: "https://twitter.com/henok-code",
      github: "https://github.com/henokcode",
      instagram: "https://instagram.com/henokcode",
      linkedIn: "https://linkedin.com/in/henok-tsegaye",
    },
    getConnected: {
      title: "መልዕክት ይላኩ",
      subtitle: "መልዕክት ሊልኩልኝ ካሰኝዎት ታች ላይ ያለዉን ሊንክ ይጫኑ",
      link: {
        href: "",
        target: "_blank",
        text: "መልዕክት ላክ",
      },
    },
    middleContent: {
      title: "እንዸት ተጀመረ",
      description: "how it goes tarted",
      link: {
        text: "ተመልክት",
        href: "/start",
      },
    },
  },
  en: {
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
      twitter: "https://twitter.com/henok-code",
      github: "https://github.com/henokcode",
      instagram: "https://instagram.com/henokcode",
      linkedIn: "https://linkedin.com/in/henok-tsegaye",
    },
    portfolio: {
      title: "Some Works",
      description: "",
    },
    getConnected: {
      title: "መልዕክት ይላኩ",
      subtitle: "መልዕክት ሊልኩልኝ ካሰኝዎት ታች ላይ ያለዉን ሊንክ ይጫኑ",
      link: {
        href: "",
        target: "_blank",
        text: "መልዕክት ላክ",
      },
    },
    middleContent: {
      title: "እንዸት ተጀመረ",
      description: "how it goes tarted",
      link: {
        text: "ተመልክት",
        href: "/start",
      },
    },
  },
};

export default langString;
export type { langType, link, socialMedia, heroTitle };
