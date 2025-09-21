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
  },{id: "nav-team",
          title: "team",
          description: "lab members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-join",
          title: "join",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-ignacio-has-been-awarded-the-aacr-scholar-in-training-award-to-attend-the-2022-aacr-annual-meeting-in-new-orleans",
          title: 'Ignacio has been awarded the AACR Scholar-in-Training Award to attend the 2022 AACR...',
          description: "",
          section: "News",},{id: "news-work-by-david-hoyos-ben-greenbaum-marta-luksza-and-colleagues-on-immune-oncogenicity-fitness-trade-offs-of-tp53-driver-mutations-has-been-accepted-for-publication-in-nature",
          title: 'Work by David Hoyos, Ben Greenbaum, Marta Luksza and colleagues on immune–oncogenicity fitness...',
          description: "",
          section: "News",},{id: "news-check-out-the-piece-on-our-work-on-3d-tumor-mapping-published-in-the-cancer-grand-challenges-discover-magazine",
          title: 'Check out the piece on our work on 3D tumor mapping published in...',
          description: "",
          section: "News",},{id: "news-ignacio-is-attending-the-2022-cancer-grand-challenges-future-leaders-conference-in-barcelona",
          title: 'Ignacio is attending the 2022 Cancer Grand Challenges Future Leaders Conference in Barcelona....',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-impact-of-mutational-processes-on-immune-evasion-is-out-in-nature-check-out-this-news-amp-amp-views-piece-by-denarda-dangaj-laniti-and-george-coukos",
          title: 'Our paper on the impact of mutational processes on immune evasion is out...',
          description: "",
          section: "News",},{id: "news-ignacio-has-been-awarded-the-aacr-scholar-in-training-award-to-attend-the-2023-aacr-annual-meeting-in-orlando",
          title: 'Ignacio has been awarded the AACR Scholar-in-Training Award to attend the 2023 AACR...',
          description: "",
          section: "News",},{id: "news-ignacio-will-be-giving-a-talk-at-the-2023-aacr-conference-translating-cancer-evolution-and-data-science-the-next-frontier-in-boston-on-december-3-6-2023",
          title: 'Ignacio will be giving a talk at the 2023 AACR Conference: Translating Cancer...',
          description: "",
          section: "News",},{id: "news-next-summer-ignacio-will-be-chairing-the-2024-grs-single-cell-cancer-biology-meeting-together-with-maren-pein-uc-irvine-it-will-precede-the-2024-grc-single-cell-cancer-biology-meeting-chaired-by-mario-suvà-mgh-and-sohrab-shah-mskcc-applications-are-now-open",
          title: 'Next summer Ignacio will be chairing the 2024 GRS Single-Cell Cancer Biology meeting...',
          description: "",
          section: "News",},{id: "news-ignacio-has-been-selected-for-the-aacr-nextgen-stars-program-as-part-of-this-he-will-be-giving-a-talk-at-the-aacr-annual-meeting-in-san-diego-on-april-5-10-2024",
          title: 'Ignacio has been selected for the AACR NextGen Stars program. As part of...',
          description: "",
          section: "News",},{id: "news-ignacio-has-been-selected-to-attend-the-irving-cancer-immunology-symposium-in-boston-on-june-24-27-2024",
          title: 'Ignacio has been selected to attend the Irving Cancer Immunology Symposium in Boston...',
          description: "",
          section: "News",},{id: "news-our-lab-is-now-open",
          title: 'Our lab is now open! 🎉',
          description: "",
          section: "News",},{id: "news-ignacio-will-be-attending-the-2025-cancer-grand-challenges-summit-in-boston",
          title: 'Ignacio will be attending the 2025 Cancer Grand Challenges Summit in Boston.',
          description: "",
          section: "News",},{id: "news-ignacio-is-featured-in-the-2025-cancer-grand-challenges-discover-magazine",
          title: 'Ignacio is featured in the 2025 Cancer Grand Challenges Discover Magazine!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-adam-weiner",
          title: 'Adam Weiner',
          description: "PhD Student - Tri-I PhD Program Computational Biology and Medicine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adam_weiner/";
            },},{id: "projects-druv-patel",
          title: 'Druv Patel',
          description: "2019 MSK Computational Biology Summer Program; Data Engineer, MSK-MIND",
          section: "Projects",handler: () => {
              window.location.href = "/projects/druv_patel/";
            },},{id: "projects-ignacio-vazquez-garcia",
          title: 'Ignacio Vazquez-Garcia',
          description: "Principal Investigator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ignacio_vazquez-garcia/";
            },},{id: "projects-jeffrey-wang",
          title: 'Jeffrey Wang',
          description: "Undergraduate Intern",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jeffrey_wang/";
            },},{id: "projects-julie-tran",
          title: 'Julie Tran',
          description: "2023 MSK Computational Biology Summer Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/julie_tran/";
            },},{id: "projects-kit-gallagher",
          title: 'Kit Gallagher',
          description: "Incoming Research Fellow",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kit_gallagher/";
            },},{id: "projects-megan-tandar",
          title: 'Megan Tandar',
          description: "Broad Summer Research Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/megan_tandar/";
            },},{id: "projects-núria-gendrau-sanclemente",
          title: 'Núria Gendrau-Sanclemente',
          description: "2024 Fulbright Scholar, Memorial Sloan Kettering Cancer Center",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nuria_gendrau-sanclemente/";
            },},{id: "projects-oprah-nkera",
          title: 'Oprah Nkera',
          description: "DF/HCC YES for CURE Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/oprah_nkera/";
            },},{id: "projects-rhea-malhotra",
          title: 'Rhea Malhotra',
          description: "2022 MSK Computational Biology Summer Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rhea_malhotra/";
            },},{id: "projects-susan-smith",
          title: 'Susan Smith',
          description: "Administrative Director",
          section: "Projects",handler: () => {
              window.location.href = "/projects/susan_smith/";
            },},{id: "projects-xiwen-zhang",
          title: 'Xiwen Zhang',
          description: "Undergraduate Intern",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xiwen_zhang/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%76%61%7A%71%75%65%7A-%67%61%72%63%69%61@%6D%67%68.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ivazquez", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gXZbQ3cAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
