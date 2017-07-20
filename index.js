function getFizzBuzz(num) {
  let result = [];
  for (var i=1; i<=num; i++) {
    if (i%15===0) {
      result.push('fizzbuzz');
    }
    else if (i%5===0) {
      result.push('buzz');
    }
    else if (i%3===0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

function renderFizzBuzz(array) {
  var result = '';
  var template;
  for (var x=0; x<array.length; x++) {
    var uniqueClass = '';
    if (array[x] === 'fizzbuzz') {
      uniqueClass = 'fizzbuzz';
    }
    if (array[x] === 'buzz') {
      uniqueClass = 'buzz';
    }
    if (array[x] === 'fizz') {
      uniqueClass = 'fizz';
    }
    template = (
      `<div class="fizz-buzz-item ${uniqueClass}">
        <span>${array[x]}</span>
      </div>`
    );
    result += template;
  }
  $('.js-results').append(result);
}

$('input[type=submit]').click(function (event) {
  event.preventDefault();
  let number = $('#number-choice').val();
  let fizzBuzzArray = getFizzBuzz(number);
  renderFizzBuzz(fizzBuzzArray);
});