// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The possible log levels.
var logLevels = {
    "none": 0,
    "error": 1,
    "info": 2
};

// Defines the current log level. Values other than "none" are for debugging
// only and should at no point be checked in.
var currentLogLevel = logLevels.info;

var canonical = $('head link[rel=canonical]').attr('href');
console.log('canonical link, if any: ', canonical);
if(canonical) {
  chrome.extension.sendRequest(
    {
      msg: "canonicalExists",
      href: location.href,
      canonical: canonical
    }
  );
}
