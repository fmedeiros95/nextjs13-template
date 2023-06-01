interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function Logo({ width = 531, height = 76, ...props }: LogoProps) {
  return (
    <svg {...props} width={width} height={height} viewBox='0 0 531 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_1_5)'>
        <path
          d='M76.25 72C86.0938 72 94.1562 63.9375 94.1562 54.0938V22.7344C94.1562 12.8438 86.0938 4.78125 76.25 4.78125H4.57812V72H76.25ZM76.25 63.0469H13.5312V13.7812H76.25C81.3125 13.7812 85.2031 17.6719 85.2031 22.7344V54.0938C85.2031 59.1094 81.3125 63.0469 76.25 63.0469ZM172.578 72V63.0469H124.25C119.234 63.0469 115.297 59.1094 115.297 54.0938V49.5938H175.766V33.9375C175.766 24.7969 167.234 18.2344 157.766 18.2344H124.391C114.875 18.2344 106.344 24.7969 106.344 33.9375V54.0938C106.344 63.9375 114.406 72 124.25 72H172.578ZM166.812 40.6406H115.297V33.9375C115.297 30.6094 118.859 27.1875 124.391 27.1875H157.766C163.297 27.1875 166.812 30.6094 166.812 33.9375V40.6406ZM263.984 72C273.828 72 281.891 63.9375 281.891 54.0938V51.8438C281.891 45.375 278.375 39.6562 273.172 36.4688C275.797 33.375 277.391 29.3438 277.391 24.9375V22.7344C277.391 12.8438 269.328 4.78125 259.484 4.78125H187.812V72H263.984ZM259.484 33.9375H196.766V13.7812H259.484C264.547 13.7812 268.438 17.6719 268.438 22.7344V24.9375C268.438 30 264.547 33.9375 259.484 33.9375ZM263.984 63.0469H196.766V42.8906H263.984C269 42.8906 272.938 46.8281 272.938 51.8438V54.0938C272.938 59.1094 269 63.0469 263.984 63.0469ZM362.188 72V36.1406C362.188 26.2969 354.125 18.2344 344.281 18.2344H295.016V27.1875H344.281C349.344 27.1875 353.234 31.125 353.234 36.1406V40.6406H306.219C297.594 40.6406 290.516 47.7188 290.516 56.2969C290.516 64.9219 297.594 72 306.219 72H362.188ZM353.234 63.0469H306.219C302.375 63.0469 299.469 60.1406 299.469 56.2969C299.469 52.5 302.375 49.5938 306.219 49.5938H353.234V63.0469ZM445.25 72V36.1406C445.25 26.2969 437.188 18.2344 427.344 18.2344H393.734C390.5 18.2344 387.453 19.125 384.781 21.9375V18.2344H375.828V72H384.781V36.1406C384.828 31.125 388.719 27.1875 393.734 27.1875H427.344C432.406 27.1875 436.297 31.125 436.297 36.1406V72H445.25ZM526.297 72L499.391 45.1406L526.297 18.2344H513.594L491.188 40.6406H468.031V4.78125H459.078V72H468.031V49.5938H491.188L513.594 72H526.297Z'
          fill='#4D4E4E'
        />
        <path
          d='M4.57812 4.78125V3.78125H3.57812V4.78125H4.57812ZM4.57812 72H3.57812V73H4.57812V72ZM13.5312 63.0469H12.5312V64.0469H13.5312V63.0469ZM13.5312 13.7812V12.7812H12.5312V13.7812H13.5312ZM76.25 73C86.646 73 95.1562 64.4898 95.1562 54.0938H93.1562C93.1562 63.3852 85.5415 71 76.25 71V73ZM95.1562 54.0938V22.7344H93.1562V54.0938H95.1562ZM95.1562 22.7344C95.1562 12.2932 86.6477 3.78125 76.25 3.78125V5.78125C85.5398 5.78125 93.1562 13.3943 93.1562 22.7344H95.1562ZM76.25 3.78125H4.57812V5.78125H76.25V3.78125ZM3.57812 4.78125V72H5.57812V4.78125H3.57812ZM4.57812 73H76.25V71H4.57812V73ZM76.25 62.0469H13.5312V64.0469H76.25V62.0469ZM14.5312 63.0469V13.7812H12.5312V63.0469H14.5312ZM13.5312 14.7812H76.25V12.7812H13.5312V14.7812ZM76.25 14.7812C80.7602 14.7812 84.2031 18.2242 84.2031 22.7344H86.2031C86.2031 17.1196 81.8648 12.7812 76.25 12.7812V14.7812ZM84.2031 22.7344V54.0938H86.2031V22.7344H84.2031ZM84.2031 54.0938C84.2031 58.5605 80.7568 62.0469 76.25 62.0469V64.0469C81.8682 64.0469 86.2031 59.6582 86.2031 54.0938H84.2031ZM172.578 72V73H173.578V72H172.578ZM172.578 63.0469H173.578V62.0469H172.578V63.0469ZM115.297 49.5938V48.5938H114.297V49.5938H115.297ZM175.766 49.5938V50.5938H176.766V49.5938H175.766ZM166.812 40.6406V41.6406H167.812V40.6406H166.812ZM115.297 40.6406H114.297V41.6406H115.297V40.6406ZM173.578 72V63.0469H171.578V72H173.578ZM172.578 62.0469H124.25V64.0469H172.578V62.0469ZM124.25 62.0469C119.787 62.0469 116.297 58.5571 116.297 54.0938H114.297C114.297 59.6617 118.682 64.0469 124.25 64.0469V62.0469ZM116.297 54.0938V49.5938H114.297V54.0938H116.297ZM115.297 50.5938H175.766V48.5938H115.297V50.5938ZM176.766 49.5938V33.9375H174.766V49.5938H176.766ZM176.766 33.9375C176.766 24.0875 167.615 17.2344 157.766 17.2344V19.2344C166.853 19.2344 174.766 25.5062 174.766 33.9375H176.766ZM157.766 17.2344H124.391V19.2344H157.766V17.2344ZM124.391 17.2344C114.496 17.2344 105.344 24.0861 105.344 33.9375H107.344C107.344 25.5077 115.254 19.2344 124.391 19.2344V17.2344ZM105.344 33.9375V54.0938H107.344V33.9375H105.344ZM105.344 54.0938C105.344 64.4898 113.854 73 124.25 73V71C114.959 71 107.344 63.3852 107.344 54.0938H105.344ZM124.25 73H172.578V71H124.25V73ZM166.812 39.6406H115.297V41.6406H166.812V39.6406ZM116.297 40.6406V33.9375H114.297V40.6406H116.297ZM116.297 33.9375C116.297 31.3546 119.197 28.1875 124.391 28.1875V26.1875C118.522 26.1875 114.297 29.8642 114.297 33.9375H116.297ZM124.391 28.1875H157.766V26.1875H124.391V28.1875ZM157.766 28.1875C162.952 28.1875 165.812 31.3485 165.812 33.9375H167.812C167.812 29.8702 163.642 26.1875 157.766 26.1875V28.1875ZM165.812 33.9375V40.6406H167.812V33.9375H165.812ZM273.172 36.4688L272.409 35.8218L271.654 36.7118L272.649 37.3215L273.172 36.4688ZM187.812 4.78125V3.78125H186.812V4.78125H187.812ZM187.812 72H186.812V73H187.812V72ZM196.766 33.9375H195.766V34.9375H196.766V33.9375ZM196.766 13.7812V12.7812H195.766V13.7812H196.766ZM196.766 63.0469H195.766V64.0469H196.766V63.0469ZM196.766 42.8906V41.8906H195.766V42.8906H196.766ZM263.984 73C274.38 73 282.891 64.4898 282.891 54.0938H280.891C280.891 63.3852 273.276 71 263.984 71V73ZM282.891 54.0938V51.8438H280.891V54.0938H282.891ZM282.891 51.8438C282.891 45.0044 279.174 38.9732 273.694 35.616L272.649 37.3215C277.576 40.3393 280.891 45.7456 280.891 51.8438H282.891ZM273.934 37.1157C276.707 33.8474 278.391 29.5887 278.391 24.9375H276.391C276.391 29.0988 274.886 32.9026 272.409 35.8218L273.934 37.1157ZM278.391 24.9375V22.7344H276.391V24.9375H278.391ZM278.391 22.7344C278.391 12.2932 269.882 3.78125 259.484 3.78125V5.78125C268.774 5.78125 276.391 13.3943 276.391 22.7344H278.391ZM259.484 3.78125H187.812V5.78125H259.484V3.78125ZM186.812 4.78125V72H188.812V4.78125H186.812ZM187.812 73H263.984V71H187.812V73ZM259.484 32.9375H196.766V34.9375H259.484V32.9375ZM197.766 33.9375V13.7812H195.766V33.9375H197.766ZM196.766 14.7812H259.484V12.7812H196.766V14.7812ZM259.484 14.7812C263.995 14.7812 267.438 18.2242 267.438 22.7344H269.438C269.438 17.1196 265.099 12.7812 259.484 12.7812V14.7812ZM267.438 22.7344V24.9375H269.438V22.7344H267.438ZM267.438 24.9375C267.438 29.4546 263.988 32.9375 259.484 32.9375V34.9375C265.106 34.9375 269.438 30.5454 269.438 24.9375H267.438ZM263.984 62.0469H196.766V64.0469H263.984V62.0469ZM197.766 63.0469V42.8906H195.766V63.0469H197.766ZM196.766 43.8906H263.984V41.8906H196.766V43.8906ZM263.984 43.8906C268.448 43.8906 271.938 47.3804 271.938 51.8438H273.938C273.938 46.2758 269.552 41.8906 263.984 41.8906V43.8906ZM271.938 51.8438V54.0938H273.938V51.8438H271.938ZM271.938 54.0938C271.938 58.5571 268.448 62.0469 263.984 62.0469V64.0469C269.552 64.0469 273.938 59.6617 273.938 54.0938H271.938ZM362.188 72V73H363.188V72H362.188ZM295.016 18.2344V17.2344H294.016V18.2344H295.016ZM295.016 27.1875H294.016V28.1875H295.016V27.1875ZM353.234 40.6406V41.6406H354.234V40.6406H353.234ZM353.234 63.0469V64.0469H354.234V63.0469H353.234ZM353.234 49.5938H354.234V48.5938H353.234V49.5938ZM363.188 72V36.1406H361.188V72H363.188ZM363.188 36.1406C363.188 25.7446 354.677 17.2344 344.281 17.2344V19.2344C353.573 19.2344 361.188 26.8492 361.188 36.1406H363.188ZM344.281 17.2344H295.016V19.2344H344.281V17.2344ZM294.016 18.2344V27.1875H296.016V18.2344H294.016ZM295.016 28.1875H344.281V26.1875H295.016V28.1875ZM344.281 28.1875C348.788 28.1875 352.234 31.6738 352.234 36.1406H354.234C354.234 30.5762 349.899 26.1875 344.281 26.1875V28.1875ZM352.234 36.1406V40.6406H354.234V36.1406H352.234ZM353.234 39.6406H306.219V41.6406H353.234V39.6406ZM306.219 39.6406C297.043 39.6406 289.516 47.1645 289.516 56.2969H291.516C291.516 48.273 298.144 41.6406 306.219 41.6406V39.6406ZM289.516 56.2969C289.516 65.4742 297.041 73 306.219 73V71C298.146 71 291.516 64.3696 291.516 56.2969H289.516ZM306.219 73H362.188V71H306.219V73ZM353.234 62.0469H306.219V64.0469H353.234V62.0469ZM306.219 62.0469C302.927 62.0469 300.469 59.5883 300.469 56.2969H298.469C298.469 60.6929 301.823 64.0469 306.219 64.0469V62.0469ZM300.469 56.2969C300.469 53.0569 302.923 50.5938 306.219 50.5938V48.5938C301.827 48.5938 298.469 51.9431 298.469 56.2969H300.469ZM306.219 50.5938H353.234V48.5938H306.219V50.5938ZM352.234 49.5938V63.0469H354.234V49.5938H352.234ZM445.25 72V73H446.25V72H445.25ZM384.781 21.9375H383.781V24.442L385.506 22.6262L384.781 21.9375ZM384.781 18.2344H385.781V17.2344H384.781V18.2344ZM375.828 18.2344V17.2344H374.828V18.2344H375.828ZM375.828 72H374.828V73H375.828V72ZM384.781 72V73H385.781V72H384.781ZM384.781 36.1406L383.781 36.1313V36.1406H384.781ZM436.297 72H435.297V73H436.297V72ZM446.25 72V36.1406H444.25V72H446.25ZM446.25 36.1406C446.25 25.7446 437.74 17.2344 427.344 17.2344V19.2344C436.635 19.2344 444.25 26.8492 444.25 36.1406H446.25ZM427.344 17.2344H393.734V19.2344H427.344V17.2344ZM393.734 17.2344C390.286 17.2344 386.955 18.1975 384.056 21.2488L385.506 22.6262C387.951 20.0525 390.714 19.2344 393.734 19.2344V17.2344ZM385.781 21.9375V18.2344H383.781V21.9375H385.781ZM384.781 17.2344H375.828V19.2344H384.781V17.2344ZM374.828 18.2344V72H376.828V18.2344H374.828ZM375.828 73H384.781V71H375.828V73ZM385.781 72V36.1406H383.781V72H385.781ZM385.781 36.15C385.823 31.6707 389.28 28.1875 393.734 28.1875V26.1875C388.158 26.1875 383.833 30.5793 383.781 36.1313L385.781 36.15ZM393.734 28.1875H427.344V26.1875H393.734V28.1875ZM427.344 28.1875C431.851 28.1875 435.297 31.6738 435.297 36.1406H437.297C437.297 30.5762 432.962 26.1875 427.344 26.1875V28.1875ZM435.297 36.1406V72H437.297V36.1406H435.297ZM436.297 73H445.25V71H436.297V73ZM526.297 72V73H528.714L527.003 71.2923L526.297 72ZM499.391 45.1406L498.684 44.4335L497.976 45.1412L498.684 45.8483L499.391 45.1406ZM526.297 18.2344L527.004 18.9415L528.711 17.2344H526.297V18.2344ZM513.594 18.2344V17.2344H513.18L512.887 17.5273L513.594 18.2344ZM491.188 40.6406V41.6406H491.602L491.895 41.3477L491.188 40.6406ZM468.031 40.6406H467.031V41.6406H468.031V40.6406ZM468.031 4.78125H469.031V3.78125H468.031V4.78125ZM459.078 4.78125V3.78125H458.078V4.78125H459.078ZM459.078 72H458.078V73H459.078V72ZM468.031 72V73H469.031V72H468.031ZM468.031 49.5938V48.5938H467.031V49.5938H468.031ZM491.188 49.5938L491.895 48.8866L491.602 48.5938H491.188V49.5938ZM513.594 72L512.887 72.7071L513.18 73H513.594V72ZM527.003 71.2923L500.097 44.4329L498.684 45.8483L525.59 72.7077L527.003 71.2923ZM500.098 45.8477L527.004 18.9415L525.59 17.5273L498.684 44.4335L500.098 45.8477ZM526.297 17.2344H513.594V19.2344H526.297V17.2344ZM512.887 17.5273L490.48 39.9335L491.895 41.3477L514.301 18.9415L512.887 17.5273ZM491.188 39.6406H468.031V41.6406H491.188V39.6406ZM469.031 40.6406V4.78125H467.031V40.6406H469.031ZM468.031 3.78125H459.078V5.78125H468.031V3.78125ZM458.078 4.78125V72H460.078V4.78125H458.078ZM459.078 73H468.031V71H459.078V73ZM469.031 72V49.5938H467.031V72H469.031ZM468.031 50.5938H491.188V48.5938H468.031V50.5938ZM490.48 50.3009L512.887 72.7071L514.301 71.2929L491.895 48.8866L490.48 50.3009ZM513.594 73H526.297V71H513.594V73Z'
          fill='#161616'
          opacity={0.15}
        />
      </g>
      <defs>
        <filter id='filter0_d_1_5' x='0.578125' y='0.78125' width='529.719' height='75.2188' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_5' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_5' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}
