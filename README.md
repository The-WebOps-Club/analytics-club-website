# analytics

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.0.

## Build & development

in `app/scripts/app.js`
set `requiredBase` as `false`

and in `app/index.html`
comment the `<base>` tag under `<head>` tag

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Production

in `app/scripts/app.js`
set `requiredBase` as `true`

and in `app/index.html`
uncomment the `<base>` tag under `<head>` tag