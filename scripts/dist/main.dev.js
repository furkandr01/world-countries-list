"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CardListDOM = document.querySelector(".cards-list");
var searchInputDOM = document.querySelector("#search-input");
var startBtnDOM = document.querySelector(".start-button");
var searchBtnDOM = document.querySelector(".search-button");
var alfBtnDOM = document.querySelector(".az-button");
var sortAZ = document.querySelector(".bi-sort-alpha-down-alt");
var sortZA = document.querySelector(".bi-sort-alpha-down");
var infoStart = document.querySelector(".info-start-letter");
var infoContain = document.querySelector(".info-contain-letter");
var infoWrapper = document.querySelector(".info-wrapper");
searchBtnDOM.addEventListener("click", function () {
  searchInputDOM.addEventListener("input", function (e) {
    var value = e.target.value.toLowerCase();
    var filtered = countries.filter(function (country) {
      return country.toLowerCase().includes(value);
    });
    searchUI(filtered);
    infoUI2(value);
  });
});
startBtnDOM.addEventListener("click", function () {
  searchInputDOM.addEventListener("input", function (e) {
    var value = e.target.value.toLowerCase();
    var filtered = countries.filter(function (country) {
      return country.toLowerCase().startsWith(value);
    });
    searchUI(filtered);
    infoUI(value);
  });
});
var alfClickCount = 0;
alfBtnDOM.addEventListener("click", function () {
  alfClickCount++;

  if (alfClickCount % 2 === 1) {
    var sortedCountries = _toConsumableArray(countries).sort(function (a, b) {
      return a.localeCompare(b);
    });

    searchUI(sortedCountries);
    sortAZ.style.display = "none";
    sortZA.style.display = "block";
  } else if (alfClickCount % 2 === 0) {
    var _sortedCountries = _toConsumableArray(countries).sort(function (a, b) {
      return b.localeCompare(a);
    });

    searchUI(_sortedCountries);
    sortAZ.style.display = "block";
    sortZA.style.display = "none";
  }
});

var searchUI = function searchUI(searches) {
  var result = "";
  searches.forEach(function (search) {
    result += "\n            <li class=\"card\">".concat(search, "</li>\n        ");
    CardListDOM.innerHTML = result;
  });
};

var infoUI = function infoUI(info) {
  infoWrapper.innerHTML = "\n        <h4 class=\"info-start-letter\">Countries start with <span style=\"color: red; text-transform: uppercase\">".concat(info, "</span> : <span id=\"info-start-letter\">").concat(countries.filter(function (country) {
    return country.toLowerCase().startsWith(info.toLowerCase());
  }).length, "</span></h4>\n        ");
};

var infoUI2 = function infoUI2(info) {
  infoWrapper.innerHTML = "\n        <h4 class=\"info-contain-letter\">Countries containing <span style=\"color:purple; text-transform: uppercase\">".concat(info, "</span> are <span id=\"info-contain-letter\">").concat(countries.filter(function (country) {
    return country.toLowerCase().includes(info.toLowerCase());
  }).length, "</span></h4>\n        ");
};

searchUI(countries);