import themeColors from '../../tailwind/colors'

const MimiLogoFile = process.env.PUBLIC_URL + '/MIMLogo.png'

type LogoColorProps = {
  colors?: {
    bg?: string;
    primary: string;
  }
}

export const USDCIcon = ({ colors }: LogoColorProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" data-name="86977684-12db-4850-8f30-233a7c267d11" viewBox="0 0 2000 2000">
    <path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"
      fill={ colors && colors.bg ? colors.bg : "#7065F4" }/>
    <path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"
      fill={ colors ? colors.primary : "#fff" }/>
    <path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"
      fill={ colors ? colors.primary : "#fff" }/>
  </svg>
)

export const FRAXIcon = ({ colors }: LogoColorProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg8" x="0px" y="0px" viewBox="0 0 570.4 570.4">
    <g id="layer1" transform="translate(295.65791,-75.71863)" >
      <circle id="path854" fill={colors && colors.bg ? colors.bg : themeColors['baby-blue'].dark} cx="-10.5" cy="360.9" r="284.6"/>
      <path id="path862" fill={colors && colors.primary ? colors.primary : 'white'}
        d="
        M-167.5,202.6c-12,12.6-21.9,23.2-22,23.4c-0.1,0.3,10.7,10.9,24,23.5
        c13.3,12.7,24.9,23.8,25.7,24.5l1.5,1.4l-2.7,4.5c-23.7,39.2-28.6,86.4-13.7,129.8c2.8,8.2,7.6,18.7,11.7,25.6c2,3.4,2.9,5.6,2.7,6  
        c-0.2,0.4-12.3,13.2-26.9,28.5c-14.6,15.2-26.5,27.9-26.7,28.1c-0.1,0.3,40.8,39.8,44.7,43l1.5,1.3l23.1-24.1 
        c12.7-13.3,24.6-25.8,26.4-27.7l3.4-3.4l3.2,2c16.3,10.4,35.4,17.6,56.5,21.4c10.6,1.9,30.8,2.4,42.1,1
        c21.8-2.5,43.4-9.8,61.1-20.5l4.6-2.8l4.9,4.8c10.7,10.4,50.7,48.4,51.1,48.6c0.4,0.2,44.3-45.7,44.2-46.3
        c-0.1-0.3-30.2-29.2-48.6-46.5l-6.1-5.8l2.8-4.6c23.5-39.1,28.4-86.5,13.2-130.2c-2.2-6.4-8.9-20.8-12.8-27.4l-1.9-3.3l25.7-26.9
        c14.1-14.7,25.6-27,25.5-27.3c-0.4-1-45.4-43.5-46-43.5c-0.4,0-11.7,11.5-25.2,25.7c-13.5,14.1-24.7,25.7-25,25.8
        c-0.2,0.1-1.5-0.5-2.7-1.4c-3.4-2.3-12-7-16.8-9.2c-14.6-6.7-28.2-10.8-44-13.1c-8.2-1.2-32.8-1.4-40.4-0.3
        c-18.2,2.6-33.1,7.1-48.3,14.7c-4.4,2.1-9.5,4.9-11.5,6.1l-3.6,2.2l-4.1-4c-2.2-2.2-12.2-11.6-22.1-21.1c-9.9-9.4-20-19-22.4-21.4
        l-4.4-4.3L-167.5,202.6z M0.4,267.8c15.9,1.9,30.1,7.3,43.2,16.5c6.7,4.7,16.7,14.7,21.4,21.4c26.7,37.8,21.6,89.2-12,120.7
        c-28.7,26.8-70.2,32.8-105.1,15c-25.2-12.9-43-36.5-48.7-64.8c-1.8-9-1.8-25.8,0-34.7c1.7-8.8,4-15.1,8.3-23.9
        C-75.3,283.4-38,263.2,0.4,267.8L0.4,267.8z"
        />
    </g>
  </svg>
)


export const DAIIcon = ({ colors }: LogoColorProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 444.44 444.44">
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path fill={colors ? colors.primary : themeColors['baby-blue'].dark} fillRule="nonzero" d="M222.22 0c122.74,0 222.22,99.5 222.22,222.22 0,122.74 -99.48,222.22 -222.22,222.22 -122.72,0 -222.22,-99.49 -222.22,-222.22 0,-122.72 99.5,-222.22 222.22,-222.22z"/>
      <path fill={colors ? colors.bg : 'white'} fillRule="nonzero" d="M230.41 237.91l84.44 0c1.8,0 2.65,0 2.78,-2.36 0.69,-8.59 0.69,-17.23 0,-25.83 0,-1.67 -0.83,-2.36 -2.64,-2.36l-168.05 0c-2.08,0 -2.64,0.69 -2.64,2.64l0 24.72c0,3.19 0,3.19 3.33,3.19l82.78 0zm77.79 -59.44c0.24,-0.63 0.24,-1.32 0,-1.94 -1.41,-3.07 -3.08,-6 -5.02,-8.75 -2.92,-4.7 -6.36,-9.03 -10.28,-12.92 -1.85,-2.35 -3.99,-4.46 -6.39,-6.25 -12.02,-10.23 -26.31,-17.47 -41.67,-21.11 -7.75,-1.74 -15.67,-2.57 -23.61,-2.5l-74.58 0c-2.08,0 -2.36,0.83 -2.36,2.64l0 49.3c0,2.08 0,2.64 2.64,2.64l160.27 0c0,0 1.39,-0.28 1.67,-1.11l-0.68 0zm0 88.33c-2.36,-0.26 -4.74,-0.26 -7.1,0l-154.02 0c-2.08,0 -2.78,0 -2.78,2.78l0 48.2c0,2.22 0,2.78 2.78,2.78l71.11 0c3.4,0.26 6.8,0.02 10.13,-0.69 10.32,-0.74 20.47,-2.98 30.15,-6.67 3.52,-1.22 6.92,-2.81 10.13,-4.72l0.97 0c16.67,-8.67 30.21,-22.29 38.75,-39.01 0,0 0.97,-2.1 -0.12,-2.65zm-191.81 78.75l0 -0.83 0 -32.36 0 -10.97 0 -32.64c0,-1.81 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -26.39 32.22 0c1.8,0 2.5,0 2.5,-2.36l0 -26.11c0,-1.67 0,-2.08 -2.22,-2.08l-30.14 0c-1.67,0 -2.36,0 -2.36,-2.22l0 -24.44c0,-1.53 0,-1.94 2.22,-1.94l29.86 0c2.08,0 2.64,0 2.64,-2.64l0 -74.86c0,-2.22 0,-2.78 2.78,-2.78l104.16 0c7.56,0.3 15.07,1.13 22.5,2.5 15.31,2.83 30.02,8.3 43.47,16.11 8.92,5.25 17.13,11.59 24.44,18.89 5.5,5.71 10.46,11.89 14.86,18.47 4.37,6.67 8,13.8 10.85,21.25 0.35,1.94 2.21,3.25 4.15,2.92l24.86 0c3.19,0 3.19,0 3.33,3.06l0 22.78c0,2.22 -0.83,2.78 -3.06,2.78l-19.17 0c-1.94,0 -2.5,0 -2.36,2.5 0.76,8.46 0.76,16.95 0,25.41 0,2.36 0,2.64 2.65,2.64l21.93 0c0.97,1.25 0,2.5 0,3.76 0.14,1.61 0.14,3.24 0,4.85l0 16.81c0,2.36 -0.69,3.06 -2.78,3.06l-26.25 0c-1.83,-0.35 -3.61,0.82 -4.03,2.64 -6.25,16.25 -16.25,30.82 -29.17,42.5 -4.72,4.25 -9.68,8.25 -14.86,11.94 -5.56,3.2 -10.97,6.53 -16.67,9.17 -10.49,4.72 -21.49,8.2 -32.78,10.41 -10.72,1.92 -21.59,2.79 -32.5,2.64l-96.39 0 0 -0.14z"/>
    </g>
  </svg>
)

export const FTMLogo = ({ colors, height }: LogoColorProps & { height?: number }) => {
  const proportions = `h-${height} w-${height}`
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={proportions}>
    <circle fill={colors ? colors.bg : themeColors['baby-blue'].dark} xmlns="http://www.w3.org/2000/svg" className="cls-2" cx="16" cy="16" r="16"/>
    <path fill={ colors ? colors.primary : "white" } className="cls-1" d="M17.2,12.9l3.6-2.1V15Zm3.6,9L16,24.7l-4.8-2.8V17L16,19.8,20.8,17ZM11.2,10.8l3.6,2.1L11.2,15Zm5.4,3.1L20.2,16l-3.6,2.1Zm-1.2,4.2L11.8,16l3.6-2.1Zm4.8-8.3L16,12.2,11.8,9.8,16,7.3ZM10,9.4V22.5l6,3.4,6-3.4V9.4L16,6Z"/>
  </svg>
  )
}

export const MIMLogo = () => {
  return (
    <img src={MimiLogoFile} alt="MIM Logo" />
  )
}