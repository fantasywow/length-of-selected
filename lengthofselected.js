// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 



function genericOnClick(info, tab) {
  var number = info.selectionText.length;
  alert("Length of Selected: "+number);
}


var contexts = ["selection"];
var title = "Length of Selected";

var id = chrome.contextMenus.create({"title":title, "contexts":contexts,
									"onclick":genericOnClick});


