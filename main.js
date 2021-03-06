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

document
  .querySelector('[data-view=details]')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'back-btn') {
      app.view = 'catalog'
      renderApp(app)
    }
  })

document
  .querySelector('[data-view=details]')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'cart-count') {
      app.view = 'cart'
      renderApp(app)
    }
  })

document
  .querySelector('[data-view=cart]')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'shop-btn') {
      app.view = 'catalog'
      renderApp(app)
    }
  })

document
  .querySelector('[data-view=cart]')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'check-out') {
      app.view = 'checkout'
      renderApp(app)
    }
  })

document
  .querySelector('[data-view=checkout]')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'checkout-btn') {
      app.view = 'confirmation'
      renderApp(app)
    }
  })

document
  .querySelector('[data-view=confirmation')
  .addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'close-btn') {
      app.view = 'catalog'
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
    $view.appendChild(renderCartCount(state.cart))
    $view.appendChild(allCatalogItems(state.catalog.items))
  }
  if (state.view === 'details') {
    $view.innerHTML = ''
    $view.appendChild(renderCartCount(state.cart))
    $view.appendChild(renderDetails(state.details.item))
  }
  if (state.view === 'cart') {
    $view.innerHTML = ''
    $view.appendChild(renderCartCount(state.cart))
    $view.appendChild(renderCartSummary(state.cart))
  }
  if (state.view === 'checkout') {
    $view.innerHTML = ''
    $view.appendChild(renderCheckout(state.cart))
  }
  if (state.view === 'confirmation') {
    $view.innerHTML = ''
    $view.appendChild(renderConfirmation())
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
  var $backButton = document.createElement('button')
  $backButton.setAttribute('class', 'btn btn-secondary float-right mt-2 mr-2')
  $backButton.setAttribute('id', 'back-btn')
  $backButton.textContent = 'Back'
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
  $cardBody.appendChild($backButton)
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

function renderCartCount(cart) {
  var $cart = document.createElement('a')
  $cart.setAttribute('class', 'float-right mr-5 btn')
  $cart.setAttribute('id', 'cart-count')
  $cart.textContent = 'Cart' + '(' + cart.length + ')'
  return $cart
}

function renderCartItem(cart) {
  var $card = document.createElement('div')
  $card.setAttribute('class', 'card shadow-m w-50 mx-auto')
  var $row = document.createElement('div')
  $row.setAttribute('class', 'row no-gutters')
  var $imgDiv = document.createElement('div')
  $imgDiv.setAttribute('class', 'col-lg-4 align-self-center')
  var $img = document.createElement('img')
  $img.setAttribute('src', cart.imageUrl)
  $img.setAttribute('class', 'img-responsive w-75')
  var $col = document.createElement('div')
  $col.setAttribute('class', 'col')
  var $cardBody = document.createElement('div')
  $cardBody.setAttribute('class', 'card-body')
  var $name = document.createElement('h4')
  $name.setAttribute('class', 'h4')
  $name.textContent = cart.name
  var $brand = document.createElement('p')
  $brand.setAttribute('class', 'card-text font-italic mt-3 mr-3')
  $brand.textContent = 'By ' + cart.brand
  var $price = document.createElement('p')
  $price.setAttribute('class', 'card-text mt-5 mr-4')
  $price.textContent = '$' + cart.price
  $card.appendChild($row)
  $row.appendChild($imgDiv)
  $imgDiv.appendChild($img)
  $row.appendChild($col)
  $col.appendChild($cardBody)
  $cardBody.appendChild($name)
  $cardBody.appendChild($brand)
  $cardBody.appendChild($price)
  return $card
}

function renderCartSummary(cart) {
  var $container = document.createElement('div')
  $container.setAttribute('class', 'container text-center')
  var $heading = document.createElement('h2')
  $heading.setAttribute('class', 'cart-header mt-2')
  $heading.textContent = '🛍️ Cart'
  var $count = document.createElement('div')
  $count.setAttribute('class', 'text-right mr-5')
  var $total = document.createElement('div')
  $total.setAttribute('class', 'text-right mr-5')
  $total.setAttribute('id', 'cart-total')
  var total = 0
  $container.appendChild($heading)
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price
    $total.textContent = 'Total: $' + total
    $count.textContent = cart.length + ' Item(s)'
    var $cartItem = renderCartItem(cart[i])
    $container.appendChild($cartItem)
    $container.appendChild($count)
    $container.appendChild($total)
  }
  var $button = document.createElement('button')
  $button.setAttribute('class', 'btn btn-primary')
  $button.setAttribute('id', 'shop-btn')
  $button.textContent = 'Continue Shopping'
  $container.appendChild($button)
  var $checkout = document.createElement('button')
  $checkout.setAttribute('class', 'btn btn-success ml-5')
  $checkout.setAttribute('id', 'check-out')
  $checkout.textContent = 'Check Out'
  $container.appendChild($checkout)
  return $container
}

function renderCheckout(cart) {
  var $container = document.createElement('div')
  $container.setAttribute('class', 'container')
  var $heading = document.createElement('h1')
  $heading.setAttribute('class', 'text-center mt-2')
  $heading.textContent = 'Checkout'
  var $form = document.createElement('div')
  $form.setAttribute('class', 'form container shadow-sm w-50 p-5 mt-5 text-center')
  var $form1 = document.createElement('div')
  $form1.setAttribute('class', 'form-group')
  var $name = document.createElement('input')
  $name.setAttribute('class', 'form-control')
  $name.setAttribute('type', 'text')
  $name.setAttribute('placeholder', 'Name')
  var $form2 = document.createElement('div')
  $form2.setAttribute('class', 'form-group')
  var $address = document.createElement('input')
  $address.setAttribute('class', 'form-control')
  $address.setAttribute('type', 'text')
  $address.setAttribute('placeholder', 'Address')
  var $form3 = document.createElement('div')
  $form3.setAttribute('class', 'form-group')
  var $credit = document.createElement('input')
  $credit.setAttribute('class', 'form-control')
  $credit.setAttribute('type', 'text')
  $credit.textContent = 'Credit Card'
  $credit.setAttribute('placeholder', 'Credit Card')
  var $count = document.createElement('div')
  $count.setAttribute('class', 'text-right')
  $count.textContent = cart.length + ' Item(s)'
  var $total = document.createElement('div')
  $total.setAttribute('class', 'text-right')
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price
    $total.textContent = 'Total: $' + total
  }
  var $button = document.createElement('button')
  $button.setAttribute('class', 'btn btn-primary')
  $button.setAttribute('id', 'checkout-btn')
  $button.setAttribute('type', 'button')
  $button.textContent = 'Pay Now'
  $container.appendChild($heading)
  $container.appendChild($form)
  $form.appendChild($form1)
  $form.appendChild($form2)
  $form.appendChild($form3)
  $form1.appendChild($name)
  $form2.appendChild($address)
  $form3.appendChild($credit)
  $form.appendChild($count)
  $form.appendChild($total)
  $form.appendChild($button)
  return $container
}

function renderConfirmation() {
  var $div1 = document.createElement('div')
  $div1.setAttribute('role', 'dialog')
  $div1.setAttribute('class', 'text-center')
  var $div2 = document.createElement('div')
  $div2.setAttribute('class', 'modal-dialog')
  $div2.setAttribute('role', 'document')
  var $div3 = document.createElement('div')
  $div3.setAttribute('class', 'modal-content')
  var $div4 = document.createElement('div')
  $div4.setAttribute('class', 'modal-header')
  var $title = document.createElement('h5')
  $title.setAttribute('class', 'modal-title')
  $title.textContent = 'Order Confirmation'
  var $body = document.createElement('div')
  $body.setAttribute('class', 'modal-body')
  $body.textContent = "Thank you! We'll let you know when your order is on the way!"
  var $footer = document.createElement('div')
  $footer.setAttribute('class', 'modal-footer')
  var $button = document.createElement('button')
  $button.setAttribute('type', 'button')
  $button.setAttribute('class', 'btn btn-primary')
  $button.setAttribute('id', 'close-btn')
  $button.textContent = 'Close'
  $div1.appendChild($div2)
  $div2.appendChild($div3)
  $div3.appendChild($div4)
  $div4.appendChild($title)
  $div3.appendChild($body)
  $div3.appendChild($footer)
  $footer.appendChild($button)
  return $div1
}
