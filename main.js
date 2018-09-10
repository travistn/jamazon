var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://media.mydukkan.com/image/33096/thmb_900x900_Vatan.Vatan21433096.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: []
}

document
  .querySelector('[data-view=catalog]')
  .addEventListener('click', function (event) {
    var $thumbnail = event.target.closest('[data-item-id]')
    if (!$thumbnail) return
    var number = ($thumbnail.getAttribute('data-item-id'))
    number = parseInt(number)
    var item = findItem(app.catalog.items, number)
    app.view = 'details'
    app.details.item = item
    renderApp(app)
  })

document
  .querySelector('[data-view=details]')
  .addEventListener('click', function (event) {
    var item = app.details.item
    if (event.target.getAttribute('id') === 'add-btn') {
      app.cart.push(item)
      renderApp(app)
    }
  })

function catalogItem(item) {
  var $items = document.createElement('div')
  $items.setAttribute('data-item-id', item.itemId)
  $items.setAttribute('class', 'items-div d-flex flex-wrap mt-5 p-2 pr-3 pl-3 border')
  var $name = document.createElement('h4')
  $name.setAttribute('class', 'item-card-header card-header align-self-start')
  $name.textContent = item.name
  var $brand = document.createElement('span')
  $brand.setAttribute('class', 'item-card-subtitle card-subtitle align-self-end')
  $brand.textContent = item.brand
  var $price = document.createElement('span')
  $price.setAttribute('class', 'item-card-price align-self-end ml-auto')
  $price.textContent = '$' + item.price
  var $img = document.createElement('img')
  $img.setAttribute('class', 'item-card-img card-img align-self-center')
  $img.setAttribute('src', item.imageUrl)
  $items.appendChild($name)
  $items.appendChild($img)
  $items.appendChild($brand)
  $items.appendChild($price)
  return $items
}

function allCatalogItems(items) {
  var $container = document.createElement('div')
  $container.classList.add('container')
  var $row = document.createElement('div')
  $row.classList.add('row')
  var $heading = document.createElement('h3')
  $heading.setAttribute('class', 'heading text-center mt-5 p-3')
  $heading.textContent = 'Jamazon'
  $container.appendChild($heading)
  $container.appendChild($row)
  for (var i = 0; i < items.length; i++) {
    var $col = document.createElement('div')
    $col.classList.add('col-md-4')
    var $cards = catalogItem(items[i])
    $col.appendChild($cards)
    $row.appendChild($col)
  }
  return $container
}

function renderApp(state) {
  var $view = document.querySelector('[data-view="' + state.view + '"]')
  if (state.view === 'catalog') {
    $view.innerHTML = ''
    $view.appendChild(allCatalogItems(state.catalog.items))
  }
  if (state.view === 'details') {
    $view.innerHTML = ''
    $view.appendChild(addToCart(state.cart))
    $view.appendChild(renderDetails(state.details.item))

  }
  showView(state.view)
}

renderApp(app)

function renderDetails(item) {
  var $container = document.createElement('div')
  $container.setAttribute('class', 'container my-4')
  var $row = document.createElement('div')
  $row.setAttribute('class', 'row')
  var $card = document.createElement('div')
  $card.setAttribute('class', 'card shadow-sm')
  var $row2 = document.createElement('div')
  $row2.setAttribute('class', 'row no-gutters')
  var $imgDiv = document.createElement('div')
  $imgDiv.setAttribute('class', 'col-lg-4')
  var $img = document.createElement('img')
  $img.setAttribute('src', item.imageUrl)
  $img.setAttribute('class', 'img-responsive w-100')
  var $detailsCon = document.createElement('div')
  $detailsCon.setAttribute('class', 'col')
  var $cardBody = document.createElement('div')
  $cardBody.setAttribute('class', 'card-body')
  var $name = document.createElement('h4')
  $name.setAttribute('class', 'h4')
  $name.textContent = item.name
  var $brand = document.createElement('span')
  $brand.setAttribute('class', 'card-text ml-3 font-italic')
  $brand.textContent = 'by ' + item.brand
  var $origin = document.createElement('p')
  $origin.setAttribute('class', 'card-text')
  $origin.textContent = 'Origin: ' + item.origin
  var $description = document.createElement('p')
  $description.setAttribute('class', 'card-text mt-3 font-weight-bold')
  $description.textContent = item.description
  var $details = document.createElement('p')
  $details.setAttribute('class', 'card-text font-italic small')
  $details.textContent = item.details
  var $price = document.createElement('p')
  $price.setAttribute('class', 'card-subtitle text-primary font-weight-bold')
  $price.textContent = '$' + item.price
  var $button = document.createElement('button')
  $button.setAttribute('class', 'btn mt-2 btn-success')
  $button.setAttribute('id', 'add-btn')
  $button.textContent = 'Add to cart'
  $container.appendChild($row)
  $row.appendChild($card)
  $card.appendChild($row2)
  $row2.appendChild($imgDiv)
  $imgDiv.appendChild($img)
  $row2.appendChild($detailsCon)
  $detailsCon.appendChild($cardBody)
  $cardBody.appendChild($name)
  $cardBody.appendChild($brand)
  $cardBody.appendChild($description)
  $cardBody.appendChild($details)
  $cardBody.appendChild($origin)
  $cardBody.appendChild($price)
  $cardBody.appendChild($button)
  return $container
}

function findItem(items, id) {
  for (var i = 0; i < items.length; i++) {
    var itemId = items[i].itemId
    if (itemId === id) {
      return items[i]
    }
  }
}

function showView(view) {
  var $views = document.querySelectorAll('[data-view]')
  for (var i = 0; i < $views.length; i++) {
    var $view = $views[i]
    if ($view.getAttribute('data-view') === view) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

function addToCart(cart) {
  var $cart = document.createElement('div')
  $cart.setAttribute('class', 'float-right mr-5')
  $cart.textContent = 'Cart' + '(' + cart.length + ')'
  return $cart
}
