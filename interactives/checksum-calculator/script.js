/**
 * Checksum number calculator
 * For use in CS Field Guide
 * Created by Hayley van Waas, University of Canterbury
 */


//generates boxes for user to enter digits and multipliers
$(function() {
    $("input#create-boxes, a, button")
      .button()
      .click(function(event) {
        event.preventDefault();

        var number_of_digits = $("input").val();

        var target_div = $("#digit-boxes");
        target_div.html("");
        for (var i = 0; i < number_of_digits; i++) {
            target_div.append($("<input />"));
        }
        var target_div = $("#multipliers");
        target_div.html("");
        for (var i = 0; i < number_of_digits; i++) {
            target_div.append($("<input />"))
        }
    });
});


//responds to "Mulitply" button click
$(function() {
    $("input#sum-digits, a, button")
      .button()
      .click(function(event) {
          event.preventDefault();
          sumDigits();
      });
});


//sums digits with multipliers
function sumDigits() {
    var digits = [];
    var multipliers = [];
    var digit_inputs = document.getElementById('digit-boxes').getElementsByTagName('input');
    for (var i = 0; i < digit_inputs.length; i++) {
        digits.push(digit_inputs[i].value);
    }
    var multiplier_inputs = document.getElementById('multipliers').getElementsByTagName('input');
    for (var i = 0; i < multiplier_inputs.length; i++) {
        multipliers.push(multiplier_inputs[i].value);
    }
    var sums = [];
    for (var i = 0; i < digits.length; i++){
        sums.push(digits[i] * multipliers[i]);
    }
    var target_div = $("#sums");
    target_div.html("");
    for (var i = 0; i < sums.length; i++){
        console.log(i);
        target_div.append($("<input value=" + sums[i] + " />"));
    }
}

//responds to "Calculate" button click
$(function() {
    $("input#calculate, a, button")
        .button()
        .click(function(event) {
            event.preventDefault();
            getRemainder();
        });
});


//calculates the remainder given the total and divisor
function getRemainder() {
    var total = $("#total").val();
    var mod = $("#mod").val();
    var remainder = total%mod;
    console.log(remainder);
    $("#remainder").val(remainder);
}

