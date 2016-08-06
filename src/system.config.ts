
const ngVer: string = '@2.0.0-rc.4';
const routerVer: string = '@3.0.0-beta.2';
const formsVer: string = '@0.2.0';

const map: any = {
  'app': 'app',
  '@angular': 'https://npmcdn.com/@angular',
  '@angular/router': `https://npmcdn.com/@angular/router${routerVer}`,
  '@angular/forms': `https://npmcdn.com/@angular/forms${formsVer}`,
  'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
  'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
  'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
  'typescript': 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js'
};

const packages: any = {
  'app': { main: 'main.ts', defaultExtension: 'ts' },
  'rxjs': { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
};

const ngPackageNames: string[] = [
  'common',
  'compiler',
  'core',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'upgrade'
];

ngPackageNames.forEach((pkgName: any) => {
  map[`@angular/${pkgName}`] = `https://npmcdn.com/@angular/${pkgName}${ngVer}`;
});

ngPackageNames.forEach((pkgName: any) => {
  packages[`@angular/${pkgName}`] = { main: `/bundles/${pkgName}.umd.js`, defaultExtension: 'js' };
});

packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

const config: any = {
  transpiler: 'ts',
  typescriptOptions: { tsconfig: false },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  map: map,
  packages: packages
};
