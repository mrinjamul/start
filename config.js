// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Injamul",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "16970d96340183a57168d2024aa34679", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  weatherRefresh: "15", // in Minutes
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "24.029893",
  defaultLongitude: "88.321410",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: "17:00",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/",
    },
    {
      id: "3",
      name: "Search Engine",
      icon: "search",
      link: "https://www.google.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "GitLab",
      icon: "gitlab",
      link: "https://gitlab.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/",
    },
    {
      id: "3",
      name: "Search Engine",
      icon: "search",
      link: "https://www.google.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "GitLab",
      icon: "gitlab",
      link: "https://gitlab.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Lo-Fi Beats to Study",
          link: "https://youtu.be/5qap5aO4i9A",
        },
        {
          name: "Lo-Fi Beats to Chill",
          link: "https://youtu.be/DWcJFNfaw9c",
        },
        {
          name: "1 AM Study Session",
          link: "https://youtu.be/lTRiuFIWV54",
        },
        {
          name: "2 A.M Study Session",
          link: "https://youtu.be/wAPCSnAhhC8",
        },
        {
          name: "Lazy Sunday",
          link: "https://youtu.be/zFhfksjf_mY",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://linkedin.com/",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/",
        },
        {
          name: "Drive",
          link: "https://drive.google.com/",
        },
        {
          name: "WhatsApp",
          link: "https://web.whatsapp.com/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Lo-Fi Beats to Study",
          link: "https://youtu.be/5qap5aO4i9A",
        },
        {
          name: "Lo-Fi Beats to Chill",
          link: "https://youtu.be/DWcJFNfaw9c",
        },
        {
          name: "1 AM Study Session",
          link: "https://youtu.be/lTRiuFIWV54",
        },
        {
          name: "2 A.M Study Session",
          link: "https://youtu.be/wAPCSnAhhC8",
        },
        {
          name: "Lazy Sunday",
          link: "https://youtu.be/zFhfksjf_mY",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://linkedin.com/",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/",
        },
        {
          name: "Drive",
          link: "https://drive.google.com/",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com/",
        },
        {
          name: "WhatsApp",
          link: "https://web.whatsapp.com/",
        },
      ],
    },
  ],
};
