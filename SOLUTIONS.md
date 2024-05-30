Solutions
=========

Currency
--------

```
{{ sock.price | currency:'EUR':'symbol':'4.2-2' }}

app.config.ts:
import localeNlBe from '@angular/common/locales/nl-BE';
registerLocaleData(localeNlBe);

{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
{ provide: LOCALE_ID, useValue: 'nl-BE' },
```

404
---

```ts
{
  path: '**',
  redirectTo: 'NotFoundComponent',
},
```

Templates -- NgFor
------------------

[Official docs](https://angular.dev/guide/templates/control-flow)

```
@for (item of []; track item.title) { }
```


ActiveLink
----------

Use `routerLinkActive` attribute.
(and also import!)


Add Review
----------

```html
<form #reviewForm="ngForm" (ngSubmit)="onSubmit(reviewForm)">
  <label for="name">Name</label>
  <input type="text" id="name" class="form-control" name="name" ngModel required />
  <button type="submit">Submit</button>
</form>
<div [hidden]="!reviewForm.form.valid">
  <p>{{ submitMessage }}</p>
</div>
```



Routing -- SockId
-----------------

Routing socks/1:
https://angular.dev/guide/routing/common-router-tasks


```ts
// routes:
bootstrapApplication(
  AppComponent,
  providers: [provideRouter(appRoutes, withComponentInputBinding())]
)

// RoutedComponent:
@Input()
set id(sockId: number) {
  this.sock$ = this.socksService.getById(sockId);
}

// or:
@RouterInput() sockId!: number;
```

Or subscribe to `ActivatedRoute`.

```ts
this.activatedRoute.params.pipe(map(p => p['sockId']));
```



Admin Solutions
===============

CanActivate
-----------

Use `RedirectCommand`?


Interceptors
------------

```ts
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  console.time(req.url);
  return next(req).pipe(tap(() => console.timeEnd(req.url)));
}

const reqWithHeader = req.clone({
  headers: req.headers.set('X-New-Header', 'new header value'),
});
```


```ts
bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(
    withInterceptors([loggingInterceptor, cachingInterceptor]),
  )
]});
```
