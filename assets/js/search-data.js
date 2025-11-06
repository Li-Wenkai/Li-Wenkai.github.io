// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "projects-ansky-the-most-extreme-qpe-as-a-tde",
          title: 'Ansky (the most extreme QPE) as a TDE',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ansky_as_a_TDE/";
            },},{id: "projects-five-stage-model-for-imbh-tde-ep240222a",
          title: 'Five-Stage Model for IMBH-TDE EP240222a',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ep240222a_model/";
            },},{id: "projects-applications-of-the-mcmc-method-in-spectral-fitting-of-active-galactic-nuclei-and-cosmology",
          title: 'Applications of the MCMC method in spectral fitting of active galactic nuclei and...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/review_agn_mcmc/";
            },},{id: "projects-ustc-astrxiv-蜗壳天文科研周报",
          title: 'USTC-AstrXiv (蜗壳天文科研周报)',
          description: "USTC-AstrXiv (nicknamed &quot;WoKe Astro Weekly&quot;) is an automated email newsletter that identifies, formats, and distributes new astronomy-related papers from the University of Science and Technology of China (USTC) on arXiv. The system runs autonomously on a server and delivers a neatly formatted HTML email to subscribers every Monday morning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ustc-astrxiv/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%77%65%6E%6B%61%69@%6D%61%69%6C.%75%73%74%63.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Li-Wenkai", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-3464-417X", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@Wenkai_Li", "_blank");
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
