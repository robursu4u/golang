import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Only declaring Nav Module
//No need to import other modules since Nav Module holds other components
import { NavigationModule } from './app.module';



platformBrowserDynamic().bootstrapModule(NavigationModule);
