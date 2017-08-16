---
layout: post
title:  "Welcome to Jekyll!"
date:   2016-06-04 13:50:39
categories: jekyll
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

## example content 

<p><small>This demo page has been used from <a href="http://jasonm23.github.io/markdown-css-themes/" target="_blank">http://jasonm23.github.io/markdown-css-themes/</a>.</small></p>

<h1>A First Level Header</h1>

<h2>A Second Level Header</h2>

<h3>A Third Level Header</h3>

<h4>A Fourth Level Header</h4>

<h5>A Fifth Level Header</h5>

<h6>A Sixed Level Header</h6>

<p>Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.</p>

<p>The quick brown fox jumped over the lazy
dog&rsquo;s back.</p>

<hr />

<h3>Header 3</h3>

<blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>

<p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.</p>

<h2>This is an H2 in a blockquote</h2>

<p>This is the first level of quoting.</p>

<blockquote><p>This is nested blockquote.</p></blockquote>

<p>Back to the first level.</p></blockquote>

<p>Some of these words <em>are emphasized</em>.
Some of these words <em>are emphasized also</em>.</p>

<p>Use two asterisks for <strong>strong emphasis</strong>.
Or, if you prefer, <strong>use two underscores instead</strong>.</p>

<ul>
<li>Candy.</li>
<li>Gum.</li>
<li>Booze.</li>
<li>Red</li>
<li>Green</li>
<li><p>Blue</p></li>
<li><p>A list item.</p></li>
</ul>


<p>With multiple paragraphs.</p>

<ul>
<li><p>Another item in the list.</p></li>
<li><p>This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.</p></li>
</ul>


<p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.*   Suspendisse id sem consectetuer libero luctus adipiscing.</p>

<ul>
<li>This is a list item with two paragraphs.</li>
</ul>


<p>This is the second paragraph in the list item. You&rsquo;re
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.</p>

<ul>
<li><p>Another item in the same list.</p></li>
<li><p>A list item with a bit of <code>code</code> inline.</p></li>
<li><p>A list item with a blockquote:</p>

<blockquote><p>This is a blockquote
inside a list item.</p></blockquote></li>
</ul>


<p>Here is an example of a pre code block</p>

<pre><code>tell application "Foo"
    beep
end tell
</code></pre>

<p>This is an <a href="#">example link</a>.</p>

<p>I start my morning with a cup of coffee and
<a href="http://www.nytimes.com/">The New York Times</a>.</p>

### Code snippet

{% highlight python %}
if __name__ =='__main__':
    img_thread = threading.Thread(target=downloadWallpaper)
    img_thread.start()
    st = '\rDownloading Image'
    current = 1
    while img_thread.is_alive():
        sys.stdout.write(st+'.'*((current)%5))
        current=current+1
        time.sleep(0.3)
    img_thread.join()
    print('\nImage of the day downloaded.')
{% endhighlight %}


[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help