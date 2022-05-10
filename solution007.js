//How to convert a non-negative number to a reversed array of digits?

function digitize(n) {
    return Array.from(String(n),Number).reverse()
  }