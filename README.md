Angular Days
============

Vrijdag 31/5/2024 om 8u30  
te Van der Valk hotel Brussels Airport  
Culliganlaan 4b, 1831 Diegem


## Setup

Node: 22.1.0

```sh
git clone --recurse-submodules https://github.com/itenium-be/Angular-Days
cd Angular-Days

npm install -g @angular/cli

cd itenium-socks
npm install
ng serve --open
```

- [Chrome: Angular DevTools](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh)
- [VSCode: Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Angular CLI](https://github.com/angular/angular-cli)


### Backend

```sh
cd socks-backend
npm install
npm run dev
```


### Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Testing

```sh
ng test
```


## More Challenges!?

- [tomalaforge/angular-challenges](https://github.com/tomalaforge/angular-challenges)
- [AngularWave/rxjs-challenge](https://github.com/AngularWave/rxjs-challenge)

## Signals

- [Official docs](https://angular.dev/guide/signals)
- [Star Wars Vehicles](https://github.com/DeborahK/Angular-Signals)

### Example

```ts
import { signal, computed } from "@angular/core";

const counter = signal(0);
console.log(counter());
counter.set(1);
counter.update(curValue => curValue + 1);

const derivedCounter = computed(() => {
  return counter() * 10;
})
```

### With Effect

```ts
@Component({})
export class CounterComponent {
  count = signal(0);

  constructor() {
    effect(onCleanup => {
      console.log(`current value: ${this.count()}`);
      onCleanup(() => {
        console.log("Perform cleanup action here");
      });
    });
  }
}
```


## Existing itenium sessions

- [ReactiveForms](https://github.com/itenium-be/angular-reactive-forms)
- [RXJS](https://github.com/itenium-be/RXJS)
- [Redux](https://github.com/itenium-be/Redux)
