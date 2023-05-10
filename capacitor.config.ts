import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.gtapp',
  appName: 'capsveltekit',
  webDir: 'build',
  bundledWebRuntime: false
  server: {
    androidScheme: 'https'
  }
};

export default config;
