Exercises
=========

All our components are pretty big right now.
It is as if the HTML has been copied from
the legacy application!

Make sure to create more fine tuned components
as you implement these UserStories!



Templates -- Pipes
------------------

Sock prices should be displayed as "€15.00".

This is cool for our American friends but we
want this configured globally so that it always
displays prices like "€ 15,00".


Templates -- Pipes
------------------

Display the date of a sock review as "time ago".
Ex: "A few minutes ago", "2 hours ago", ...

Bonus:  
Have the text update automatically as time passes.



Templates -- NgFor
------------------

`latest-socks.component.ts` uses NgFor, which needs
to be imported explicitly.  
Let's use the new `@for` syntax instead to get rid
of this dependency!


Templates -- Socks Shop
-----------------------

We're displaying thousands of socks
directly on our shop page! How can
our users ever find the socks that
match their needs!?

Implement:
- Pagination
- Frontend filtering (name, color)
- Frontend sorting (name, price)


Templates -- No image
---------------------

One of our socks has no image!
Display a placeholder when the
image is a 404.



Templates -- DEV vs PRD
-----------------------

One of our analysts has accidently done some tests
on the production environment of Toe-tally Amazing!

Add a visual indicator when opening the app in
a non-production environment to avoid this in the
future.

```sh
# `environment.ts` is gone!?
ng generate environments
```


Templates -- Slideshow
----------------------

We're using Owl Carousel, this was done by one of our
junior developers and... He imported jQuery 😱

Get rid of this dependency by replacing the slideshow(s)
with something a little more Angular-y!



Templates - SockCard
--------------------

The junior developer responsible for adding the "Latest Socks"
has blatantly copied the code from `shop.component.html`.

Remove this duplication by turning it into a reusable `SockCardComponent`!


Templates -- Buying Socks
-------------------------

When the inventory is empty, display a badge "SOLD OUT".
Also hide the "Buy Now" button!

After pressing the "Buy Now" button, display a
success/failure alert for 3 seconds.

Bonus:  
Before actually buying the socks, open a modal
where the user can enter his bank details, we
can re-iterate our free shipping and return
policy.

You probably want to create a generic ModalComponent
with `<ng-content>` to avoid all the Html overhead
for each modal!



Templates -- Sock Reviews
-------------------------

We already have the `sock-reviews.component.ts`
which displays the latest sock reviews.

We now want to display the reviews for the
selected sock on the details page.

Show a "Be the first to review these fantastic socks!"
message if there are no reviews yet.

Bonus:  
Hide the review form until the user clicks on
"Review These Socks". Focus the review textarea
using `ElementRef` when the form is opened.


Templates -- Add Review
-----------------------

While the form for adding a new socks review is pretty
much completed, the implementation is less so.  
Bind the form to what is being sent to the backend!

Display the success/failure alert after a review has
been submitted.

For newly added reviews, the email is not set!
Using `<ng-container>` (or `@if`!), make sure there is no
empty "By " text displayed.

Make the review text mandatory. Stop a form submit
and display an error message when there is no text.

Bonus:  
Show these messages in a Toastr instead!


Routing -- SockId
-----------------

On the sock details page, the "SockId" is determined using
`window.location.pathname`. Turn this into something more
Angular-y.

Implement a "Next Sock" button that navigates to SockId++.


Routing -- 404
--------------

Create a fancy 404 page to show our users when
they entered an unexisting url.


Routing -- ActiveLink
---------------------

When on the pages "Why Us" or "Shop",
add the `active` class to indicate where
the user currently is.


Internationalization
====================

We've already configured our application for `nl-BE`.
Now we want to offer our magnificent socks store in
both English and Dutch.

[i18n docs](https://angular.dev/guide/i18n)


```sh
ng add @angular/localize --use-at-runtime
ng serve --open
```

Since we don't really want to translate the entire app today,
focus on adding the [`i18n` attributes](https://angular.dev/guide/i18n/prepare)
for example only in the `footer.component.html`.

```html
<h6 i18n="meaning|description@@customId">Some text</h6>

<!-- Inside a component ts file -->
toTranslate = $localize`Localized string!`;
```

```sh
ng extract-i18n --output-path src/locale --format=json
# Remove the --format=json if you want to see the i18n metadata
```

Duplicate the "messages.json" as "messages.nl.json".  
Adjust `angular.json`.

```sh
ng serve --configuration=nl
```


Bonus:  
The earlier created "TimeAgoPipe", this should also be
translated!

```html
<span i18n>{minutes, plural, =0 {just now} =1 {one minute ago} other {{{ minutes }} minutes ago}}</span>
```

3rd Party Tooling:  
- [martinroob/ngx-i18nsupport](https://github.com/martinroob/ngx-i18nsupport)
- [i18next](https://github.com/i18next/i18next)


Reactive Extensions JS
======================

See `/RXJS/README.md` for pure RXJS exercises
and/or Angular RXJS exercises.


RXJS -- Review SocksId
----------------------

The reviews on the main page display the `socksId`.
It's probably better to display the sock name there
instead!
