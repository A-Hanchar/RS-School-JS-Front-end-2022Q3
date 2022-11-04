export const routes = {
  about: `/pages/about/index.html`,
  donate: `/pages/donate/index.html`,
  none: '#',
  figma: 'https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online',
}

export const pages = [
  {
    path: routes.about,
    linkText: 'About',
    isShowInHeader: true,
    isShowInFooter: true,
  },
  {
    path: routes.none,
    linkText: 'Map',
    isShowInHeader: true,
    isShowInFooter: true
  },
  {
    path: routes.none,
    linkText: 'Zoos',
    isShowInHeader: true,
    isShowInFooter: true
  },
  {
    path: routes.donate,
    linkText: 'Donate',
    isShowInHeader: true,
    isShowInFooter: false
  },
  {
    path: routes.none,
    linkText: 'Contact us',
    isShowInHeader: true,
    isShowInFooter: true
  },
  {
    path: routes.figma,
    linkText: 'Designed by \u00A9',
    target: '_blank',
    isShowInHeader: true,
    isShowInFooter: false
  },
]
