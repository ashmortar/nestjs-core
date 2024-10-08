// import {
//   defineConfig,
//   presetIcons,
//   presetTypography,
//   presetUno,
//   presetWebFonts,
// } from 'unocss';
// import { presetFlowbite } from '@julr/unocss-preset-flowbite';

// export default defineConfig({
//   theme: {
//     colors: {
//       primary: '#3b82f6',
//       secondary: '#6b7280',
//       success: '#10b981',
//       danger: '#ef4444',
//       warning: '#f59e0b',
//       info: '#3b82f6',
//       light: '#f3f4f6',
//       dark: '#1f2937',
//     },
//   },
//   shortcuts: {
//     html: 'h-full bg-light text-dark font-work-sans m-0 p-0',
//     body: 'w-full h-full flex flex-col min-w-full m-0 p-0 bg-light text-dark font-work-sans md:font-size-lg lg:font-size-xl xl:font-size-2xl',
//     main: 'flex-1 h-full ml-8 mr-8 flex flex-col flex-items-center flex-justify-start md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 xl:ml-64 xl:mr-64',
//     link: 'text-primary hover:underline cursor-pointer font-montserrat',
//     'white-link': 'text-light hover:underline cursor-pointer font-montserrat',
//     'footer-link-list': 'flex flex-row list-none m-0 p-0 mt-2 mb-2',
//     'flex-row-center': 'flex flex-row flex-items-center',
//     'flex-row-between': 'flex flex-row flex-justify-between',
//     'header-footer': 'flex-row-between bg-dark text-light w-full',
//     card: 'bg-white text-dark p-4 m-4 rounded-lg shadow-lg w-full',
//     'field-error-container': 'm-0 p-0',
//     'field-error': 'text-danger text-xs',
//     'input-container': 'flex flex-col m-0 p-0 pb-2',
//     label: 'm-0 p-0 text-dark uppercase text-xs font-montserrat',
//     input: 'm-0 px-3 h-10 border border-secondary rounded-lg',
//     'btn-primary':
//       'bg-primary text-light p-2 rounded-lg mb-2 w-full uppercase font-montserrat',
//     'form-container': 'flex flex-col m-0 p-0',
//   },
//   cli: {
//     entry: {
//       patterns: ['src/**/*.tsx'],
//       outFile: 'public/unocss.css',
//     },
//   },
//   presets: [
//     presetUno(),
//     presetIcons(),
//     presetTypography(),
//     presetWebFonts({
//       provider: 'google',
//       fonts: {
//         // @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
//         montserrat: {
//           name: 'Montserrat',
//           weights: ['100..900'],
//           italic: true,
//         },
//         'work-sans': {
//           name: 'Work Sans',
//           weights: ['100..900'],
//           italic: true,
//         },
//       },
//     }),
//     presetFlowbite(),
//   ],
//   content: ['./node_modules/flowbite/**/*.js'],
// });
