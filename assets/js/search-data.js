// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-from-june-to-august-2024-i-will-be-joining-cryptolab-in-lyon-france-as-a-research-intern",
          title: 'From June to August 2024, I will be joining CryptoLab in Lyon, France...',
          description: "",
          section: "News",},{id: "news-our-paper-efficient-full-domain-functional-bootstrapping-from-recursive-lut-decomposition-was-accepted-to-sac-2025-and-will-be-presented-this-august-in-canada-eprint-slides",
          title: 'Our paper, “Efficient Full Domain Functional Bootstrapping from Recursive LUT Decomposition” was accepted...',
          description: "",
          section: "News",},{id: "news-our-fdfb-paper-recieven-an-honorable-mention-at-the-korea-national-cryptography-contest-2025-with-a-1-500-prize",
          title: 'Our FDFB paper recieven an Honorable Mention at the Korea National Cryptography Contest...',
          description: "",
          section: "News",},];
