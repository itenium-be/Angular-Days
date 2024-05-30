Admin Exercises
===============

Routing -- Login
----------------

If no token has been set in the `AuthService`, automatically
reroute the user to the login page.

After logging in, instead of redirecting to `/admin`,
redirect to the original url of the user.

Remain logged in:  
Add a checkbox to remain logged in. Save the token in
for example `localStorage` and restore at program
startup.


Auth -- Permissions
-------------------

Right now the logged in user is `admin`. Login with
password 'secret2' to login as `super-admin`.

If you are not a `super-admin`:
- Not allowed to delete a sock
- Block `/admin/socks/new`


Auth -- Refresh Token
---------------------

Reduce the expiration of the token in the backend to a few minutes.
Add a new `/refresh` endpoint in the backend.

Setup an RXJS pipeline to automatically refresh the token in the
`AuthService`.



HttpClient -- Interceptors
--------------------------

Create an interceptor to automatically set the `Authorization`
header in the `SocksAdminService` so we don't have to do this
manually for each request.

Use the new `withInterceptors`!


HttpClient -- Interceptors
--------------------------

Create an interceptor that logs the timing of each request to
the console. Display this as a warning when the time > 100m
and as an error when the time > 300ms.

There is a sleep function in `controllers/socks/getSocks.ts`.


HttpClient -- Interceptors
--------------------------

All our backend urls start with `http://localhost:3000`.
This is not very maintainable. Configure this in
`environment.ts` so that it can be overwritten for prod.
And set the "base url" in an interceptor.



Reactive Forms
==============

See `/reactive-forms/README.md` for ReactiveForms exercises
or dive right into these:


Update a Sock
-------------

Add an extra icon to edit a sock inline in the table.


Delete a Sock
-------------

Instead of hard deleting a sock, do a soft delete.
Change the row color of a deleted sock.


Sock Updates
------------

After adding, deleting or updating a sock, show a Toastr
message of success/failure.


Sock Images
-----------

The sock images are now stored on the frontend 😰

If we're going to add new socks, the user needs to
be able to upload them!

What do we need:
- Backend
  - Move the images to the backend 😀
  - Static file serving (`express.static(path.join(__dirname, 'public'))`)
  - Get them files from `req.files` (there is a package for that: express-fileupload, multer, ...)
- Frontend
  - Adjust the image URLs!
  - Upload form with `multipart/form-data` (yes, there is a package for that 😎
