"use strict";
var FindListViewModel = (function () {
    function FindListViewModel(passinList, keyword) {
        if (passinList) {
            this._list = passinList;
        }
        if (keyword) {
            this._keyword = keyword;
        }
    }
    FindListViewModel.prototype.findByKeyword = function (keyWord) {
        var myKeyWord;
        if (keyWord) {
            myKeyWord = keyWord;
        }
        else {
            myKeyWord = this._keyword;
        }
        var listItem = {
            address: "12 The Octagon Dunedin 9016",
            category: "Gastro Pubs",
            picURL: "http://s3-media4.fl.yelpcdn.com/bphoto/TB3tqX9-k2EejwYM4PQayw/o.jpg",
            title: "Mac’s Brewbar",
            url: "http://m.yelp.com/biz/macs-brewbar-dunedin"
        };
        var list;
        list.push(listItem);
        list.push(listItem);
        this._list = list;
        return list;
    };
    return FindListViewModel;
}());
exports.FindListViewModel = FindListViewModel;
