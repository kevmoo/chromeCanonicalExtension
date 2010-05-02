Brought to your by your friends at [Pixel Lab](http://thinkpixellab.com).

## The problem ##

The story: you want to share a url with a friend in email, or post it on twitter or something. Often times pages have extra stuff in the URL that has nothing to do with the content you want to share. Click tracking garbage and the like. YouTube, the New York Times, and Cnet are great examples.

Search engines also hate this stuff, because it means there could be dozens...hundreds of different urls that all point to the same, simple source.

## The solution ##

Create a way for a page to advertise a single, simple **canonical** url. This can be used by search engines as a SPOT (single point of truth).

## Canonical Url ##
Google proposed a simple `<link>` tag be added to web pages with `rel='canonical'`. For a background on the canonical url model, check out [Google's write-up](http://googlewebmastercentral.blogspot.com/2009/02/specify-your-canonical.html).

This extension leverages that tag, when it exists.

# Examples #

http://www.youtube.com/watch?v=8xfeTQIOHGw&feature=player_embedded#!  
becomes  
http://www.youtube.com/watch?v=8xfeTQIOHGw

http://www.nytimes.com/2010/04/28/sports/global/28climber.html?src=twt&twt=nytimes  
becomes  
http://www.nytimes.com/2010/04/28/sports/global/28climber.html

# Inspiration #

Based heavily off the [Chrome Subscribe Extension sample](http://src.chromium.org/viewvc/chrome/trunk/src/chrome/test/data/extensions/subscribe_page_action/).

# License #

Copyright (c) 2010 Pixel Lab, http://thinkpixellab.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
