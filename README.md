# Nav-Cart-Counter

This module displays the number of items in a users cart and displays a notification when an item has been added to cart. In order for the cart notification to work properly, the <a href="https://github.com/AirshipCMS/Add-to-Cart">Add to Cart Button</a> needs to be set up.

## Usage

1. In your airship project, add `airship-nav-cart-counter.min.js` to `compartments/assets/scripts/`. Add `airship-nav-cart-counter.min.css` to `compartments/assets/styles/`

```
<head>
	<link rel="stylesheet" type="text/css" href="/assets/styles/nav-cart-counter.css">
</head>
<body>
	<script src="/assets/scripts/nav-cart-counter.min.js"></script>
</body>
```

2. add the element container. This is done by adding the `class` `airship-nav-cart-counter` to the desired element.

```
<div class="airship-nav-cart-counter"></div>
```

## Development

### Installation

```
yarn install
```

### How to Run
```
yarn start
```

this serves `src/` on `localhost:9000`

### Building

```
yarn build
```

this will build/minify all files in `src/` to `dist/`